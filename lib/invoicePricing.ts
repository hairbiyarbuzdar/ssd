/** Display historical area-priced lines as per-unit prices without changing totals. */
export function invoiceUnitRate(line: { qty?: unknown; rate?: unknown; amount?: unknown; total?: unknown }): number {
  const qty = Number(line.qty);
  const amount = line.amount ?? line.total;
  if (qty > 0 && amount !== undefined && Number.isFinite(Number(amount))) return Number(amount) / qty;
  return Number(line.rate) || 0;
}

export function invoiceLineTotal(rate: number, qty: number): number {
  return Math.round(Number(rate) * Number(qty) * 100) / 100;
}
