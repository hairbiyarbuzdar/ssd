-- =============================================================================
-- Sky Digital — Multi-Location Migration (v11)
-- Run once in Supabase → SQL Editor.
-- Adds Quetta/Karachi isolation via user_profiles table + RLS.
-- =============================================================================

-- ── 1. user_profiles ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_profiles (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  location   TEXT NOT NULL CHECK (location IN ('quetta', 'karachi')),
  is_admin   BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "user_profiles_own_select" ON user_profiles;
CREATE POLICY "user_profiles_own_select" ON user_profiles FOR SELECT
  USING (user_id = auth.uid());

-- ── 2. Helper functions (SECURITY DEFINER so they can read user_profiles) ────
CREATE OR REPLACE FUNCTION get_my_location() RETURNS TEXT
  LANGUAGE SQL SECURITY DEFINER STABLE AS
  $$ SELECT location FROM user_profiles WHERE user_id = auth.uid() $$;

CREATE OR REPLACE FUNCTION is_admin() RETURNS BOOLEAN
  LANGUAGE SQL SECURITY DEFINER STABLE AS
  $$ SELECT COALESCE(is_admin, false) FROM user_profiles WHERE user_id = auth.uid() $$;

-- ── 3. Add location column to all parent business tables ─────────────────────
ALTER TABLE accounts        ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE cashbook        ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE invoices        ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE quick_invoices  ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE quotations      ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE suppliers       ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE purchase_orders ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE workers         ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE laborers        ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
ALTER TABLE products        ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta' CHECK (location IN ('quetta','karachi'));
-- head_accounts intentionally excluded — shared chart-of-accounts categories

-- ── 4. Replace permissive policies on parent tables with location-scoped ones ─

-- accounts
DROP POLICY IF EXISTS "Allow all for authenticated" ON accounts;
DROP POLICY IF EXISTS "accounts_select" ON accounts;
DROP POLICY IF EXISTS "accounts_insert" ON accounts;
DROP POLICY IF EXISTS "accounts_update" ON accounts;
DROP POLICY IF EXISTS "accounts_delete" ON accounts;
CREATE POLICY "accounts_select" ON accounts FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "accounts_insert" ON accounts FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "accounts_update" ON accounts FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "accounts_delete" ON accounts FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- cashbook
DROP POLICY IF EXISTS "Allow all for authenticated" ON cashbook;
DROP POLICY IF EXISTS "cashbook_select" ON cashbook;
DROP POLICY IF EXISTS "cashbook_insert" ON cashbook;
DROP POLICY IF EXISTS "cashbook_update" ON cashbook;
DROP POLICY IF EXISTS "cashbook_delete" ON cashbook;
CREATE POLICY "cashbook_select" ON cashbook FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "cashbook_insert" ON cashbook FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "cashbook_update" ON cashbook FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "cashbook_delete" ON cashbook FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- invoices
DROP POLICY IF EXISTS "Allow all for authenticated" ON invoices;
DROP POLICY IF EXISTS "invoices_select" ON invoices;
DROP POLICY IF EXISTS "invoices_insert" ON invoices;
DROP POLICY IF EXISTS "invoices_update" ON invoices;
DROP POLICY IF EXISTS "invoices_delete" ON invoices;
CREATE POLICY "invoices_select" ON invoices FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "invoices_insert" ON invoices FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "invoices_update" ON invoices FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "invoices_delete" ON invoices FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- quick_invoices
DROP POLICY IF EXISTS "Allow all for authenticated" ON quick_invoices;
DROP POLICY IF EXISTS "quick_invoices_select" ON quick_invoices;
DROP POLICY IF EXISTS "quick_invoices_insert" ON quick_invoices;
DROP POLICY IF EXISTS "quick_invoices_update" ON quick_invoices;
DROP POLICY IF EXISTS "quick_invoices_delete" ON quick_invoices;
CREATE POLICY "quick_invoices_select" ON quick_invoices FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "quick_invoices_insert" ON quick_invoices FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "quick_invoices_update" ON quick_invoices FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "quick_invoices_delete" ON quick_invoices FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- quotations
DROP POLICY IF EXISTS "Allow all for authenticated" ON quotations;
DROP POLICY IF EXISTS "quotations_select" ON quotations;
DROP POLICY IF EXISTS "quotations_insert" ON quotations;
DROP POLICY IF EXISTS "quotations_update" ON quotations;
DROP POLICY IF EXISTS "quotations_delete" ON quotations;
CREATE POLICY "quotations_select" ON quotations FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "quotations_insert" ON quotations FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "quotations_update" ON quotations FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "quotations_delete" ON quotations FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- suppliers
DROP POLICY IF EXISTS "Allow all for authenticated" ON suppliers;
DROP POLICY IF EXISTS "suppliers_select" ON suppliers;
DROP POLICY IF EXISTS "suppliers_insert" ON suppliers;
DROP POLICY IF EXISTS "suppliers_update" ON suppliers;
DROP POLICY IF EXISTS "suppliers_delete" ON suppliers;
CREATE POLICY "suppliers_select" ON suppliers FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "suppliers_insert" ON suppliers FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "suppliers_update" ON suppliers FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "suppliers_delete" ON suppliers FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- purchase_orders
DROP POLICY IF EXISTS "Allow all for authenticated" ON purchase_orders;
DROP POLICY IF EXISTS "purchase_orders_select" ON purchase_orders;
DROP POLICY IF EXISTS "purchase_orders_insert" ON purchase_orders;
DROP POLICY IF EXISTS "purchase_orders_update" ON purchase_orders;
DROP POLICY IF EXISTS "purchase_orders_delete" ON purchase_orders;
CREATE POLICY "purchase_orders_select" ON purchase_orders FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "purchase_orders_insert" ON purchase_orders FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "purchase_orders_update" ON purchase_orders FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "purchase_orders_delete" ON purchase_orders FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- workers
DROP POLICY IF EXISTS "Allow all for authenticated" ON workers;
DROP POLICY IF EXISTS "workers_select" ON workers;
DROP POLICY IF EXISTS "workers_insert" ON workers;
DROP POLICY IF EXISTS "workers_update" ON workers;
DROP POLICY IF EXISTS "workers_delete" ON workers;
CREATE POLICY "workers_select" ON workers FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "workers_insert" ON workers FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "workers_update" ON workers FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "workers_delete" ON workers FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- laborers
DROP POLICY IF EXISTS "Allow all for authenticated" ON laborers;
DROP POLICY IF EXISTS "laborers_select" ON laborers;
DROP POLICY IF EXISTS "laborers_insert" ON laborers;
DROP POLICY IF EXISTS "laborers_update" ON laborers;
DROP POLICY IF EXISTS "laborers_delete" ON laborers;
CREATE POLICY "laborers_select" ON laborers FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "laborers_insert" ON laborers FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "laborers_update" ON laborers FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "laborers_delete" ON laborers FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- products
DROP POLICY IF EXISTS "Allow all for authenticated" ON products;
DROP POLICY IF EXISTS "products_select" ON products;
DROP POLICY IF EXISTS "products_insert" ON products;
DROP POLICY IF EXISTS "products_update" ON products;
DROP POLICY IF EXISTS "products_delete" ON products;
CREATE POLICY "products_select" ON products FOR SELECT TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "products_insert" ON products FOR INSERT TO authenticated WITH CHECK (is_admin() OR location = get_my_location());
CREATE POLICY "products_update" ON products FOR UPDATE TO authenticated USING (is_admin() OR location = get_my_location());
CREATE POLICY "products_delete" ON products FOR DELETE TO authenticated USING (is_admin() OR location = get_my_location());

-- ── 5. Child table policies: access via parent EXISTS subquery ────────────────

-- invoice_items  (parent: invoices)
DROP POLICY IF EXISTS "Allow all for authenticated" ON invoice_items;
DROP POLICY IF EXISTS "invoice_items_select" ON invoice_items;
DROP POLICY IF EXISTS "invoice_items_insert" ON invoice_items;
DROP POLICY IF EXISTS "invoice_items_update" ON invoice_items;
DROP POLICY IF EXISTS "invoice_items_delete" ON invoice_items;
CREATE POLICY "invoice_items_select" ON invoice_items FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM invoices i WHERE i.id = invoice_id AND i.location = get_my_location()));
CREATE POLICY "invoice_items_insert" ON invoice_items FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM invoices i WHERE i.id = invoice_id AND i.location = get_my_location()));
CREATE POLICY "invoice_items_update" ON invoice_items FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM invoices i WHERE i.id = invoice_id AND i.location = get_my_location()));
CREATE POLICY "invoice_items_delete" ON invoice_items FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM invoices i WHERE i.id = invoice_id AND i.location = get_my_location()));

-- quick_invoice_items  (parent: quick_invoices)
DROP POLICY IF EXISTS "Allow all for authenticated" ON quick_invoice_items;
DROP POLICY IF EXISTS "quick_invoice_items_select" ON quick_invoice_items;
DROP POLICY IF EXISTS "quick_invoice_items_insert" ON quick_invoice_items;
DROP POLICY IF EXISTS "quick_invoice_items_update" ON quick_invoice_items;
DROP POLICY IF EXISTS "quick_invoice_items_delete" ON quick_invoice_items;
CREATE POLICY "quick_invoice_items_select" ON quick_invoice_items FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM quick_invoices qi WHERE qi.id = quick_invoice_id AND qi.location = get_my_location()));
CREATE POLICY "quick_invoice_items_insert" ON quick_invoice_items FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM quick_invoices qi WHERE qi.id = quick_invoice_id AND qi.location = get_my_location()));
CREATE POLICY "quick_invoice_items_update" ON quick_invoice_items FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM quick_invoices qi WHERE qi.id = quick_invoice_id AND qi.location = get_my_location()));
CREATE POLICY "quick_invoice_items_delete" ON quick_invoice_items FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM quick_invoices qi WHERE qi.id = quick_invoice_id AND qi.location = get_my_location()));

-- quotation_items  (parent: quotations)
DROP POLICY IF EXISTS "Allow all for authenticated" ON quotation_items;
DROP POLICY IF EXISTS "quotation_items_select" ON quotation_items;
DROP POLICY IF EXISTS "quotation_items_insert" ON quotation_items;
DROP POLICY IF EXISTS "quotation_items_update" ON quotation_items;
DROP POLICY IF EXISTS "quotation_items_delete" ON quotation_items;
CREATE POLICY "quotation_items_select" ON quotation_items FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM quotations q WHERE q.id = quotation_id AND q.location = get_my_location()));
CREATE POLICY "quotation_items_insert" ON quotation_items FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM quotations q WHERE q.id = quotation_id AND q.location = get_my_location()));
CREATE POLICY "quotation_items_update" ON quotation_items FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM quotations q WHERE q.id = quotation_id AND q.location = get_my_location()));
CREATE POLICY "quotation_items_delete" ON quotation_items FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM quotations q WHERE q.id = quotation_id AND q.location = get_my_location()));

-- purchase_order_items  (parent: purchase_orders)
DROP POLICY IF EXISTS "Allow all for authenticated" ON purchase_order_items;
DROP POLICY IF EXISTS "purchase_order_items_select" ON purchase_order_items;
DROP POLICY IF EXISTS "purchase_order_items_insert" ON purchase_order_items;
DROP POLICY IF EXISTS "purchase_order_items_update" ON purchase_order_items;
DROP POLICY IF EXISTS "purchase_order_items_delete" ON purchase_order_items;
CREATE POLICY "purchase_order_items_select" ON purchase_order_items FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM purchase_orders po WHERE po.id = purchase_order_id AND po.location = get_my_location()));
CREATE POLICY "purchase_order_items_insert" ON purchase_order_items FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM purchase_orders po WHERE po.id = purchase_order_id AND po.location = get_my_location()));
CREATE POLICY "purchase_order_items_update" ON purchase_order_items FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM purchase_orders po WHERE po.id = purchase_order_id AND po.location = get_my_location()));
CREATE POLICY "purchase_order_items_delete" ON purchase_order_items FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM purchase_orders po WHERE po.id = purchase_order_id AND po.location = get_my_location()));

-- worker_advances  (parent: workers)
DROP POLICY IF EXISTS "Allow all for authenticated" ON worker_advances;
DROP POLICY IF EXISTS "worker_advances_select" ON worker_advances;
DROP POLICY IF EXISTS "worker_advances_insert" ON worker_advances;
DROP POLICY IF EXISTS "worker_advances_update" ON worker_advances;
DROP POLICY IF EXISTS "worker_advances_delete" ON worker_advances;
CREATE POLICY "worker_advances_select" ON worker_advances FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));
CREATE POLICY "worker_advances_insert" ON worker_advances FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));
CREATE POLICY "worker_advances_update" ON worker_advances FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));
CREATE POLICY "worker_advances_delete" ON worker_advances FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));

-- worker_payments  (parent: workers)
DROP POLICY IF EXISTS "Allow all for authenticated" ON worker_payments;
DROP POLICY IF EXISTS "worker_payments_select" ON worker_payments;
DROP POLICY IF EXISTS "worker_payments_insert" ON worker_payments;
DROP POLICY IF EXISTS "worker_payments_update" ON worker_payments;
DROP POLICY IF EXISTS "worker_payments_delete" ON worker_payments;
CREATE POLICY "worker_payments_select" ON worker_payments FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));
CREATE POLICY "worker_payments_insert" ON worker_payments FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));
CREATE POLICY "worker_payments_update" ON worker_payments FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));
CREATE POLICY "worker_payments_delete" ON worker_payments FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM workers w WHERE w.id = worker_id AND w.location = get_my_location()));

-- labor_tasks  (parent: laborers)
DROP POLICY IF EXISTS "Allow all for authenticated" ON labor_tasks;
DROP POLICY IF EXISTS "labor_tasks_select" ON labor_tasks;
DROP POLICY IF EXISTS "labor_tasks_insert" ON labor_tasks;
DROP POLICY IF EXISTS "labor_tasks_update" ON labor_tasks;
DROP POLICY IF EXISTS "labor_tasks_delete" ON labor_tasks;
CREATE POLICY "labor_tasks_select" ON labor_tasks FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));
CREATE POLICY "labor_tasks_insert" ON labor_tasks FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));
CREATE POLICY "labor_tasks_update" ON labor_tasks FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));
CREATE POLICY "labor_tasks_delete" ON labor_tasks FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));

-- labor_advances  (parent: laborers)
DROP POLICY IF EXISTS "Allow all for authenticated" ON labor_advances;
DROP POLICY IF EXISTS "labor_advances_select" ON labor_advances;
DROP POLICY IF EXISTS "labor_advances_insert" ON labor_advances;
DROP POLICY IF EXISTS "labor_advances_update" ON labor_advances;
DROP POLICY IF EXISTS "labor_advances_delete" ON labor_advances;
CREATE POLICY "labor_advances_select" ON labor_advances FOR SELECT TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));
CREATE POLICY "labor_advances_insert" ON labor_advances FOR INSERT TO authenticated
  WITH CHECK (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));
CREATE POLICY "labor_advances_update" ON labor_advances FOR UPDATE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));
CREATE POLICY "labor_advances_delete" ON labor_advances FOR DELETE TO authenticated
  USING (is_admin() OR EXISTS (SELECT 1 FROM laborers lb WHERE lb.id = laborer_id AND lb.location = get_my_location()));

-- ── 6. Keep head_accounts fully open (shared taxonomy) ────────────────────────
-- (existing "Allow all for authenticated" policy remains unchanged)

-- =============================================================================
-- SEED: After creating 3 users in Supabase Auth, run this block separately.
-- Replace the placeholder UUIDs with real user IDs from Authentication → Users.
-- =============================================================================
-- INSERT INTO user_profiles (user_id, location, is_admin) VALUES
--   ('<quetta-user-uuid>',  'quetta', false),
--   ('<karachi-user-uuid>', 'karachi', false),
--   ('<admin-user-uuid>',   'quetta', true);   -- location ignored for admin
