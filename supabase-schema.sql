-- Sky Digital Database Schema
-- Run this in Supabase SQL Editor.
-- All tables in one file (includes workers / labor): scripts/migration-complete.sql

-- Head Accounts (parent ledger categories)
CREATE TABLE IF NOT EXISTS head_accounts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Asset', 'Liability', 'Revenue', 'Expense')),
  bal TEXT NOT NULL CHECK (bal IN ('debit', 'credit')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Accounts (clients & suppliers)
CREATE TABLE IF NOT EXISTS accounts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  head_id UUID REFERENCES head_accounts(id),
  type TEXT NOT NULL CHECK (type IN ('Client', 'Supplier')),
  phone TEXT DEFAULT '',
  whatsapp TEXT DEFAULT '',
  address TEXT DEFAULT '',
  balance NUMERIC(12,2) DEFAULT 0,
  bal_type TEXT DEFAULT 'debit' CHECK (bal_type IN ('debit', 'credit')),
  ntn TEXT DEFAULT '',
  status TEXT DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Products (catalog — per-sqft pricing for invoice / quote lines)
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  cost_price NUMERIC(12,2) DEFAULT 0,
  sale_price NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Quotation Products (separate catalog used only in quotations)
CREATE TABLE IF NOT EXISTS quotation_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  sale_price NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Invoices
-- App usage: amount_received / balance_due / payment_status (unpaid|partial|paid) for pay-at-issue;
-- payment_method (Cash, EasyPaisa, Bank); job_notes for invoice description / notes.
CREATE TABLE IF NOT EXISTS invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_number TEXT NOT NULL UNIQUE,
  client_name TEXT NOT NULL,
  client_phone TEXT DEFAULT '',
  client_address TEXT DEFAULT '',
  client_ntn TEXT DEFAULT '',
  client_email TEXT DEFAULT '',
  invoice_date DATE NOT NULL DEFAULT CURRENT_DATE,
  due_date DATE,
  payment_terms TEXT DEFAULT 'Net 15 Days',
  reference TEXT DEFAULT '',
  subtotal NUMERIC(12,2) DEFAULT 0,
  discount_type TEXT DEFAULT 'pct' CHECK (discount_type IN ('pct', 'flat')),
  discount_value NUMERIC(12,2) DEFAULT 0,
  discount_amount NUMERIC(12,2) DEFAULT 0,
  gst_pct NUMERIC(5,2) DEFAULT 0,
  gst_amount NUMERIC(12,2) DEFAULT 0,
  stax_pct NUMERIC(5,2) DEFAULT 0,
  stax_amount NUMERIC(12,2) DEFAULT 0,
  previous_balance NUMERIC(12,2) DEFAULT 0,
  grand_total NUMERIC(12,2) DEFAULT 0,
  amount_received NUMERIC(12,2) DEFAULT 0,
  balance_due NUMERIC(12,2) DEFAULT 0,
  payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'partial', 'paid')),
  payment_method TEXT DEFAULT 'Cash',
  job_name TEXT DEFAULT '',
  job_location TEXT DEFAULT '',
  job_start DATE,
  job_end DATE,
  job_notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Invoice Items (line items)
CREATE TABLE IF NOT EXISTS invoice_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,
  category TEXT DEFAULT 'Billboard',
  description TEXT DEFAULT '',
  width NUMERIC(8,2) DEFAULT 0,
  height NUMERIC(8,2) DEFAULT 0,
  sqft NUMERIC(10,2) DEFAULT 0,
  rate NUMERIC(10,2) DEFAULT 0,
  qty INTEGER DEFAULT 1,
  amount NUMERIC(12,2) DEFAULT 0
);

-- Quick Invoices
CREATE TABLE IF NOT EXISTS quick_invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_number TEXT NOT NULL,
  client_name TEXT NOT NULL,
  grand_total NUMERIC(12,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Quick Invoice Items
CREATE TABLE IF NOT EXISTS quick_invoice_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  quick_invoice_id UUID REFERENCES quick_invoices(id) ON DELETE CASCADE,
  product TEXT DEFAULT '',
  width NUMERIC(8,2) DEFAULT 0,
  height NUMERIC(8,2) DEFAULT 0,
  total_size NUMERIC(10,2) DEFAULT 0,
  rate_per_sqft NUMERIC(10,2) DEFAULT 0,
  total NUMERIC(12,2) DEFAULT 0,
  qty INTEGER DEFAULT 1,
  grand_total NUMERIC(12,2) DEFAULT 0
);

-- Quotations (no cashbook / ledger impact)
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

-- Suppliers (material vendors — separate from party/client accounts)
CREATE TABLE IF NOT EXISTS suppliers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT DEFAULT '',
  address TEXT DEFAULT '',
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Cashbook
-- account_name: party / account this entry relates to (ledger, receive payment, manual entries).
CREATE TABLE IF NOT EXISTS cashbook (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('in', 'out')),
  description TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  method TEXT DEFAULT 'Cash',
  reference TEXT DEFAULT '',
  account_name TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Purchase orders (material purchases; cash deducted for amount paid at save time)
CREATE TABLE IF NOT EXISTS purchase_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  po_number TEXT NOT NULL UNIQUE,
  supplier_id UUID REFERENCES suppliers(id) ON DELETE SET NULL,
  supplier_name TEXT NOT NULL,
  supplier_phone TEXT DEFAULT '',
  order_date DATE NOT NULL DEFAULT CURRENT_DATE,
  notes TEXT DEFAULT '',
  subtotal NUMERIC(12,2) DEFAULT 0,
  grand_total NUMERIC(12,2) DEFAULT 0,
  amount_paid NUMERIC(12,2) DEFAULT 0,
  balance_due NUMERIC(12,2) DEFAULT 0,
  payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'partial', 'paid')),
  payment_method TEXT DEFAULT 'Cash',
  cashbook_entry_id UUID REFERENCES cashbook(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS purchase_order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  purchase_order_id UUID NOT NULL REFERENCES purchase_orders(id) ON DELETE CASCADE,
  description TEXT DEFAULT '',
  unit TEXT DEFAULT 'pcs',
  qty NUMERIC(12,2) DEFAULT 1,
  rate NUMERIC(12,2) DEFAULT 0,
  amount NUMERIC(12,2) DEFAULT 0
);

-- Enable RLS
ALTER TABLE head_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE quick_invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE quick_invoice_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE cashbook ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_order_items ENABLE ROW LEVEL SECURITY;

-- Allow all operations for authenticated users (drop first so re-running this file is safe)
DROP POLICY IF EXISTS "Allow all for authenticated" ON head_accounts;
CREATE POLICY "Allow all for authenticated" ON head_accounts FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON accounts;
CREATE POLICY "Allow all for authenticated" ON accounts FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON products;
CREATE POLICY "Allow all for authenticated" ON products FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON invoices;
CREATE POLICY "Allow all for authenticated" ON invoices FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON invoice_items;
CREATE POLICY "Allow all for authenticated" ON invoice_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON quick_invoices;
CREATE POLICY "Allow all for authenticated" ON quick_invoices FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON quick_invoice_items;
CREATE POLICY "Allow all for authenticated" ON quick_invoice_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON quotations;
CREATE POLICY "Allow all for authenticated" ON quotations FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON quotation_items;
CREATE POLICY "Allow all for authenticated" ON quotation_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON cashbook;
CREATE POLICY "Allow all for authenticated" ON cashbook FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON suppliers;
CREATE POLICY "Allow all for authenticated" ON suppliers FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON purchase_orders;
CREATE POLICY "Allow all for authenticated" ON purchase_orders FOR ALL TO authenticated USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "Allow all for authenticated" ON purchase_order_items;
CREATE POLICY "Allow all for authenticated" ON purchase_order_items FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Seed head accounts
INSERT INTO head_accounts (code, name, type, bal) VALUES
  ('1001', 'Assets', 'Asset', 'debit'),
  ('2001', 'Liabilities', 'Liability', 'credit'),
  ('3001', 'Revenue / Income', 'Revenue', 'credit'),
  ('4001', 'Expenses', 'Expense', 'debit')
ON CONFLICT (code) DO NOTHING;
