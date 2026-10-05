-- Migration v21 — add per-line description to quick_invoice_items
--
-- The walk-in invoice form now lets the user type a free-text description
-- against each product line (the parent invoice_items table already has
-- this column from migration-complete.sql; quick_invoice_items did not).
--
-- Run on the production VPS Postgres after deploying the matching code
-- changes in app/(dashboard)/quick-invoice/page.tsx.

BEGIN;

ALTER TABLE quick_invoice_items
  ADD COLUMN IF NOT EXISTS description TEXT NOT NULL DEFAULT '';

COMMIT;
