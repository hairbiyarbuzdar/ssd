-- Quotations: stored separately from invoices; never touch cashbook or account balances.
-- Run in Supabase SQL Editor if migrations folder is not applied automatically.

CREATE TABLE IF NOT EXISTS quotations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_number TEXT NOT NULL UNIQUE,
  party_name TEXT NOT NULL DEFAULT '',
  quote_date DATE NOT NULL DEFAULT CURRENT_DATE,
  quote_time TEXT DEFAULT '',
  cell TEXT DEFAULT '',
  del_no TEXT DEFAULT '',
  terms TEXT DEFAULT '',
  recv_name TEXT DEFAULT '',
  recv_date TEXT DEFAULT '',
  deliver_name TEXT DEFAULT '',
  source_invoice_id UUID REFERENCES invoices(id) ON DELETE SET NULL,
  grand_total NUMERIC(12,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quotation_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  quotation_id UUID NOT NULL REFERENCES quotations(id) ON DELETE CASCADE,
  product TEXT DEFAULT '',
  description TEXT DEFAULT '',
  width NUMERIC(8,2) DEFAULT 0,
  height NUMERIC(8,2) DEFAULT 0,
  sqft NUMERIC(10,2) DEFAULT 0,
  rate NUMERIC(10,2) DEFAULT 0,
  qty INTEGER DEFAULT 1,
  amount NUMERIC(12,2) DEFAULT 0
);

ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotation_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for authenticated quotations" ON quotations
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow all for authenticated quotation_items" ON quotation_items
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
