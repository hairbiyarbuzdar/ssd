import test from "node:test";
import assert from "node:assert/strict";
import { canAccessPath, canAccessTable, firstAllowedPath, validateModules } from "../lib/moduleAccess.ts";

test("module grants control navigation and initial destination", () => {
  const user = { role: "sub_user", modules: ["supplier", "products"] };
  assert.equal(canAccessPath(user, "/supplier"), true);
  assert.equal(canAccessPath(user, "/products"), true);
  assert.equal(canAccessPath(user, "/accounts"), false);
  assert.equal(canAccessPath(user, "/users"), false);
  assert.equal(firstAllowedPath(user), "/products");
  assert.equal(firstAllowedPath({ role: "sub_user", modules: [] }), "/access-denied");
});

test("administrator access and legacy defaults are retained", () => {
  assert.equal(canAccessPath({ role: "super_admin" }, "/users"), true);
  assert.equal(canAccessPath({ role: "sub_user" }, "/accounts"), true);
  assert.equal(canAccessPath({ role: "sub_user" }, "/cashbook"), false);
});

test("invalid or empty module grants cannot be persisted", () => {
  for (const value of [null, [], "products", ["users"], ["labor"], ["products", 1]]) {
    assert.throws(() => validateModules(value));
  }
  assert.deepEqual(validateModules(["products", "products"]), ["products"]);
});

test("workflow dependencies allow required reads without catalogue writes", () => {
  const invoiceUser = { role: "sub_user", modules: ["quick-invoice"] };
  assert.equal(canAccessTable(invoiceUser, "products", "select"), true);
  assert.equal(canAccessTable(invoiceUser, "products", "insert"), false);
  assert.equal(canAccessTable(invoiceUser, "payment_methods", "select"), true);
  assert.equal(canAccessTable(invoiceUser, "payment_methods", "update"), false);
  assert.equal(canAccessTable(invoiceUser, "purchase_orders", "delete"), false);
  assert.equal(canAccessTable(invoiceUser, "activity_log", "insert"), true);
  assert.equal(canAccessTable(invoiceUser, "activity_log", "select"), false);
});

test("report access allows reads but no financial mutations", () => {
  const reportUser = { role: "sub_user", modules: ["reports"] };
  assert.equal(canAccessTable(reportUser, "invoices", "select"), true);
  assert.equal(canAccessTable(reportUser, "cashbook", "select"), true);
  assert.equal(canAccessTable(reportUser, "cashbook", "delete"), false);
  assert.equal(canAccessTable(reportUser, "invoices", "save_invoice"), false);
  assert.equal(canAccessTable(reportUser, "users", "select"), false);
});
