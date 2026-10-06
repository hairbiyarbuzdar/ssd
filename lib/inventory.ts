import type { Prisma } from "@prisma/client";

export class InventoryError extends Error {}

export interface StockLine {
  product_id: string | null;
  qty: number;
  stock_deducted_qty: number;
}

/** Legacy lines have zero deducted stock: editing them must not consume stock retroactively. */
export function planStockChange(previous: StockLine[], next: Omit<StockLine, "stock_deducted_qty">[]) {
  const baseline = new Map<string, number>();
  const deducted = new Map<string, number>();
  for (const line of previous) {
    if (!line.product_id) continue;
    baseline.set(line.product_id, (baseline.get(line.product_id) ?? 0) + line.qty - line.stock_deducted_qty);
    deducted.set(line.product_id, (deducted.get(line.product_id) ?? 0) + line.stock_deducted_qty);
  }
  const quantities = new Map<string, number>();
  const lines = next.map(line => {
    if (!Number.isSafeInteger(line.qty) || line.qty < 1 || line.qty > 2147483647) {
      throw new InventoryError("Each invoice item must have a whole quantity of at least 1.");
    }
    if (!line.product_id) return { ...line, stock_deducted_qty: 0 };
    const exempt = Math.min(line.qty, baseline.get(line.product_id) ?? 0);
    baseline.set(line.product_id, (baseline.get(line.product_id) ?? 0) - exempt);
    const amount = line.qty - exempt;
    quantities.set(line.product_id, (quantities.get(line.product_id) ?? 0) + amount);
    return { ...line, stock_deducted_qty: amount };
  });
  const deltas = [...new Set([...deducted.keys(), ...quantities.keys()])].sort().map(product_id => ({
    product_id, consumed: (quantities.get(product_id) ?? 0) - (deducted.get(product_id) ?? 0),
  }));
  return { lines, deltas };
}

export async function applyStockChange(tx: Prisma.TransactionClient, previous: StockLine[], next: Omit<StockLine, "stock_deducted_qty">[]) {
  const plan = planStockChange(previous, next);
  // Stable product ordering reduces deadlocks. The guarded UPDATE is atomic,
  // so two users cannot both sell the same remaining units.
  for (const { product_id, consumed } of plan.deltas) {
    if (consumed === 0) continue;
    const result = await tx.product.updateMany({
      where: { id: product_id, ...(consumed > 0 ? { quantity: { gte: consumed } } : {}) },
      data: { quantity: { decrement: consumed } },
    });
    if (result.count !== 1) {
      const product = await tx.product.findUnique({ where: { id: product_id }, select: { name: true, quantity: true } });
      throw new InventoryError(product
        ? `Insufficient stock for ${product.name}: ${product.quantity} available, ${consumed} additional units needed.`
        : "A selected product no longer exists. Reload the products and try again.");
    }
  }
  return plan.lines;
}

export function invoiceStockLines(items: unknown) {
  if (!Array.isArray(items) || items.length === 0 || items.length > 500) throw new InventoryError("Add between 1 and 500 invoice items.");
  return items.map((item: Record<string, unknown>) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) throw new InventoryError("Invalid invoice item.");
    const product_id = item.product_id == null ? null : String(item.product_id);
    if (product_id && !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(product_id)) throw new InventoryError("Select a valid product.");
    const qty = Number(item.qty);
    if (!Number.isSafeInteger(qty) || qty < 1 || qty > 2147483647) throw new InventoryError("Each invoice item must have a whole quantity of at least 1.");
    const numbers = Object.fromEntries(["width", "height", "sqft", "rate", "amount"].map(key => {
      const value = Number(item[key] ?? 0);
      if (!Number.isFinite(value) || value < 0) throw new InventoryError(`Invalid invoice item ${key}.`);
      return [key, value];
    }));
    return { product_id, qty, category: String(item.category ?? ""), description: String(item.description ?? ""), ...numbers };
  });
}
