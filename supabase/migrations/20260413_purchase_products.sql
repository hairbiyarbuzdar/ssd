-- Universal purchase products catalog for supplier purchase orders.
-- Not tied to any individual supplier — available when creating any PO.
-- Replaces the per-supplier supplier_products approach for new POs.

CREATE TABLE IF NOT EXISTS purchase_products (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  unit        TEXT NOT NULL DEFAULT 'pcs',
  cost_price  NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE purchase_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for authenticated purchase_products" ON purchase_products
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
