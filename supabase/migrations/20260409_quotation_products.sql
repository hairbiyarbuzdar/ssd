-- Quotation Products: a separate product catalog used exclusively in quotations.
-- Products here can have different names/pricing from the main products table.
-- Run in Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS quotation_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  sale_price NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE quotation_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for authenticated quotation_products" ON quotation_products
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
