import test from "node:test";
import assert from "node:assert/strict";
import { harness } from "./helpers/inventory-harness.mjs";

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
