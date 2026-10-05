-- Sky Digital — reset all business data to zero (fresh start)
--
-- What this does:
--   • Deletes every row in app tables: accounts, invoices, cashbook, workers, labor,
--     suppliers, POs, quotations, quick invoices, head accounts, etc.
--   • Re-inserts the four default head accounts (Assets, Liabilities, Revenue, Expenses)
--     so “Add account” and head-account dropdowns work immediately.
--   • Truncates `products` only if that table exists (optional in some DBs).
--
-- What this does NOT touch:
--   • Supabase Auth (`auth.users`, login accounts)
--   • Storage buckets / files
--   • Table definitions (schema stays as-is)
--
-- Run in: Supabase Dashboard → SQL Editor → paste → Run once.
-- Expect: empty parties, zero cashbook, invoice numbers start fresh on next save.

BEGIN;

TRUNCATE TABLE
  quotation_items,
  quotations,
  invoice_items,
  invoices,
  quick_invoice_items,
  quick_invoices,
  purchase_order_items,
  purchase_orders,
  worker_extra_hours,
  worker_advances,
  worker_payments,
  workers,
  labor_tasks,
  labor_advances,
  laborers,
  cashbook,
  accounts,
  suppliers,
  head_accounts
RESTART IDENTITY CASCADE;

DO $$
BEGIN
  IF to_regclass('public.products') IS NOT NULL THEN
    TRUNCATE TABLE public.products RESTART IDENTITY CASCADE;
  END IF;
END $$;

INSERT INTO head_accounts (code, name, type, bal) VALUES
  ('1001', 'Assets', 'Asset', 'debit'),
  ('2001', 'Liabilities', 'Liability', 'credit'),
  ('3001', 'Revenue / Income', 'Revenue', 'credit'),
  ('4001', 'Expenses', 'Expense', 'debit')
ON CONFLICT (code) DO NOTHING;

COMMIT;
