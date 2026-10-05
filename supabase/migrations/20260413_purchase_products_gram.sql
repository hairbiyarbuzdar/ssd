-- Add optional gram/weight field to purchase_products for variant support.
-- Same product name can appear multiple times with different gram values.
-- Run in Supabase SQL Editor.

ALTER TABLE purchase_products
  ADD COLUMN IF NOT EXISTS gram NUMERIC(10,2);
