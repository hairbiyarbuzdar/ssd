-- Distinguish walk-in invoices (created via quick-invoice page)
-- from party invoices (created via accounts → View Invoices).
-- Existing rows default to false (party invoices), which is the safe default
-- since walk-in invoices were also written to quick_invoices table.
-- Run in Supabase SQL Editor.

ALTER TABLE invoices
  ADD COLUMN IF NOT EXISTS is_walk_in BOOLEAN NOT NULL DEFAULT false;
