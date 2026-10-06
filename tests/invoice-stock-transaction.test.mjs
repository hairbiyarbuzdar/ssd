import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { createRequire } from "node:module";
import ts from "typescript";
import * as inventory from "../lib/inventory.ts";
import * as productValidation from "../lib/productValidation.ts";
import * as moduleAccess from "../lib/moduleAccess.ts";

const require = createRequire(import.meta.url);
const compiled = ts.transpileModule(readFileSync(new URL("../app/api/db/route.ts", import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

// Exercise the actual route with a rollback-capable database adapter. This checks
// the transaction boundary; the VPS migration still needs a real PostgreSQL check.
function harness(profile = { role: "super_admin", modules: [], is_active: true }) {
  const productId = randomUUID();
  let state = { products: [{ id: productId, name: "Sign", quantity: 10 }], invoices: [], invoiceItems: [] };
  let transactions = 0;
  function matches(row, where = {}) {
    return Object.entries(where).every(([key, expected]) => {
      if (expected && typeof expected === "object") {
        if (expected.in) return expected.in.includes(row[key]);
        if (expected.gte != null) return row[key] >= expected.gte;
      }
      return row[key] === expected;
    });
  }
  function model(key) {
    return {
      async findMany({ where, select } = {}) {
        return state[key].filter(row => matches(row, where)).map(row => select
          ? Object.fromEntries(Object.keys(select).map(field => [field, row[field]])) : { ...row });
      },
      async findUnique({ where }) { return state[key].find(row => matches(row, where)) ?? null; },
      async create({ data }) { const row = { id: randomUUID(), ...data }; state[key].push(row); return { ...row }; },
      async update({ where, data }) { const row = state[key].find(row => matches(row, where)); Object.assign(row, data); return { ...row }; },
      async updateMany({ where, data }) {
        const rows = state[key].filter(row => matches(row, where));
        for (const row of rows) for (const [field, value] of Object.entries(data)) {
          row[field] = value && typeof value === "object" && "decrement" in value ? row[field] - value.decrement : value;
        }
        return { count: rows.length };
      },
      async createMany({ data }) { for (const row of data) state[key].push({ id: randomUUID(), ...row }); },
      async deleteMany({ where }) {
        const rows = state[key].filter(row => matches(row, where));
        state[key] = state[key].filter(row => !matches(row, where));
        if (key === "invoices") state.invoiceItems = state.invoiceItems.filter(row => !rows.some(invoice => invoice.id === row.invoice_id));
        return { count: rows.length };
      },
    };
  }
  const prisma = { product: model("products"), invoice: model("invoices"), invoiceItem: model("invoiceItems"), quickInvoice: { findMany: async () => [] }, $queryRawUnsafe: async () => [] };
  prisma.user = { findUnique: async () => profile };
  prisma.$transaction = async callback => {
    transactions++;
    const before = structuredClone(state);
    try { return await callback(prisma); } catch (error) { state = before; throw error; }
  };
  const module = { exports: {} };
  const dependencies = {
    "next/server": { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200 }) } },
    "@/lib/prisma": { prisma },
    "@/lib/auth": { COOKIE_NAME: "auth", verifyToken: async () => ({ sub: randomUUID(), email: "test@example.com", full_name: "Test" }) },
    "@/lib/inventory": inventory, "@/lib/productValidation": productValidation,
    "@/lib/moduleAccess": moduleAccess,
  };
  new Function("require", "module", "exports", compiled)(name => dependencies[name] ?? require(name), module, module.exports);
  const call = body => module.exports.POST({ cookies: { get: () => ({ value: "test" }) }, json: async () => body });
  const save = (qty, invoiceId, total = qty * 100) => call({
    table: "invoices", operation: "save_invoice", invoiceId,
    data: { client_name: "Test", invoice_date: "2026-10-06", grand_total: total },
    items: [{ product_id: productId, category: "Sign", qty, rate: 100, amount: total }],
  });
  return { call, save, productId, state: () => state, transactions: () => transactions };
}

test("unassigned modules reject direct API requests before transactions", async () => {
  const h = harness({ role: "sub_user", modules: ["products"], is_active: true });
  assert.equal((await h.save(3)).status, 403);
  assert.equal(h.transactions(), 0);
  assert.equal(h.state().products[0].quantity, 10);
});

test("granted invoice access still performs automatic stock adjustments", async () => {
  const h = harness({ role: "sub_user", modules: ["quick-invoice"], is_active: true });
  assert.equal((await h.save(3)).status, 200);
  assert.equal(h.state().products[0].quantity, 7);
});

test("inactive or deleted users cannot use an existing token", async () => {
  for (const profile of [null, { role: "super_admin", modules: [], is_active: false }]) {
    const h = harness(profile);
    assert.equal((await h.save(3)).status, 401);
    assert.equal(h.transactions(), 0);
  }
});

test("relation reads and nested writes cannot bypass module grants", async () => {
  const h = harness({ role: "sub_user", modules: ["products"], is_active: true });
  assert.equal((await h.call({ table: "products", operation: "select", select: "*,invoices(*)" })).status, 403);
  assert.equal((await h.call({ table: "products", operation: "update", data: { invoice_items: { deleteMany: {} } } })).status, 403);
});

test("invoice creation and stock deduction commit together", async () => {
  const h = harness(); const response = await h.save(3);
  assert.equal(response.status, 200);
  assert.equal(h.transactions(), 1);
  assert.equal(h.state().products[0].quantity, 7);
  assert.equal(h.state().invoiceItems[0].stock_deducted_qty, 3);
  assert.equal(h.state().invoices.length, 1);
});

test("insufficient opening stock rolls back the newly created invoice", async () => {
  const h = harness(); const response = await h.save(11);
  assert.equal(response.status, 400);
  assert.equal(h.state().invoices.length, 0);
  assert.equal(h.state().invoiceItems.length, 0);
  assert.equal(h.state().products[0].quantity, 10);
});

test("a rejected edit preserves the previous invoice, items, and stock", async () => {
  const h = harness(); const created = await h.save(3); const before = structuredClone(h.state());
  const response = await h.save(11, created.body.data.id);
  assert.equal(response.status, 400);
  assert.deepEqual(h.state(), before);
});

test("repeated saves and deletions never double-deduct or double-restore", async () => {
  const h = harness(); const created = await h.save(3); const id = created.body.data.id;
  await h.save(5, id); await h.save(5, id);
  assert.equal(h.state().products[0].quantity, 5);
  const deletion = { table: "invoices", operation: "delete", filters: [{ type: "eq", col: "id", val: id }] };
  await h.call(deletion); await h.call(deletion);
  assert.equal(h.state().products[0].quantity, 10);
  assert.equal(h.state().invoices.length, 0);
});
