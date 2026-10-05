-- Add location column to invoices table so multi-branch setups can tag invoices
-- to their originating branch. Mirrors the location column already present on
-- quick_invoices. Defaults to 'quetta' to match existing inserts.

ALTER TABLE invoices
  ADD COLUMN IF NOT EXISTS location TEXT NOT NULL DEFAULT 'quetta';
