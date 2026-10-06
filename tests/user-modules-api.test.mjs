import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";
import * as moduleAccess from "../lib/moduleAccess.ts";

const compiled = ts.transpileModule(readFileSync(new URL("../app/api/users/route.ts", import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function harness(adminRole = "super_admin") {
  const users = [{ id: "admin", role: adminRole, is_active: true },
    { id: "sub", role: "sub_user", email: "staff@example.com", full_name: "Staff", modules: ["accounts"], is_active: true, created_at: new Date() }];
  const writes = [];
  const deps = {
    "next/server": { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200 }) } },
    "bcryptjs": { default: { hash: async () => "hashed-test-password" } },
    "@/lib/auth": { COOKIE_NAME: "auth", verifyToken: async () => ({ sub: "admin", role: "super_admin" }) },
    "@/lib/moduleAccess": moduleAccess,
    "@/lib/prisma": { prisma: { user: {
      findUnique: async ({ where }) => users.find(user => where.id ? user.id === where.id : user.email === where.email),
      findMany: async () => users.filter(user => user.role === "sub_user"),
      count: async () => 1,
      create: async ({ data }) => { writes.push(data); },
      update: async ({ data }) => { writes.push(data); },
    } } },
  };
  const module = { exports: {} };
  new Function("require", "module", "exports", compiled)(name => deps[name], module, module.exports);
  const call = (method, body = {}) => module.exports[method]({ cookies: { get: () => ({ value: "test" }) }, json: async () => body });
  return { call, writes };
}

test("create persists the selected modules", async () => {
  const h = harness();
  assert.equal((await h.call("POST", { email: "new@example.com", fullName: "New", password: "test123", modules: ["products", "supplier"] })).status, 200);
  assert.deepEqual(h.writes[0].modules, ["products", "supplier"]);
});

test("module access can be changed without changing a name or password", async () => {
  const h = harness();
  assert.equal((await h.call("PATCH", { userId: "sub", modules: ["cashbook"] })).status, 200);
  assert.deepEqual(h.writes[0], { modules: ["cashbook"] });
});

test("invalid grants cannot be saved", async () => {
  const h = harness();
  assert.equal((await h.call("PATCH", { userId: "sub", modules: ["users"] })).status, 400);
  assert.equal((await h.call("PATCH", { userId: "sub", modules: [] })).status, 400);
  assert.equal(h.writes.length, 0);
});

test("the current database role protects administration even with an old admin token", async () => {
  const h = harness("sub_user");
  assert.equal((await h.call("PATCH", { userId: "sub", modules: ["cashbook"] })).status, 403);
  assert.equal(h.writes.length, 0);
});

test("listed users include their assigned modules", async () => {
  const h = harness();
  assert.deepEqual((await h.call("GET")).body.users[0].modules, ["accounts"]);
});
