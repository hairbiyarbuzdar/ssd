-- Supplier Products: products purchased from specific suppliers.
-- These are separate from the main products (sale) catalog.
-- Each supplier can have their own product list used in purchase order line items.

CREATE TABLE IF NOT EXISTS supplier_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  supplier_id UUID NOT NULL REFERENCES suppliers(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  cost_price NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE supplier_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for authenticated supplier_products" ON supplier_products
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
