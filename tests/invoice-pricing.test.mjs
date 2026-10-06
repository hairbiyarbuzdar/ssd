import test from "node:test";
import assert from "node:assert/strict";
import { invoiceLineTotal, invoiceUnitRate } from "../lib/invoicePricing.ts";

test("new invoice totals use price times quantity", () => {
  assert.equal(invoiceLineTotal(125.5, 4), 502);
  assert.equal(invoiceLineTotal(0, 3), 0);
});

test("historical area-priced invoices retain their amounts as unit-priced lines", () => {
  const oldLine = { rate: 2, qty: 3, amount: 300 };
  assert.equal(invoiceUnitRate(oldLine), 100);
  assert.equal(invoiceLineTotal(invoiceUnitRate(oldLine), oldLine.qty), 300);
  assert.equal(invoiceLineTotal(invoiceUnitRate(oldLine), 4), 400);
});

test("historical fractional totals survive reopening and rounding of saved rates", () => {
  const saved = { rate: 33.33, qty: 3, amount: 100 };
  assert.equal(invoiceLineTotal(invoiceUnitRate(saved), saved.qty), 100);
  assert.equal(invoiceLineTotal(invoiceUnitRate({ ...saved, amount: "100" }), 3), 100);
});

test("recorded zero-value lines stay free and unsaved lines use their entered rate", () => {
  assert.equal(invoiceUnitRate({ rate: 200, qty: 3, amount: 0 }), 0);
  assert.equal(invoiceUnitRate({ rate: 200, qty: 3 }), 200);
  assert.equal(invoiceUnitRate({ rate: 200, qty: 3, total: 600 }), 200);
});
