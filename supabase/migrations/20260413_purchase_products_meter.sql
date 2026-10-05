-- Add optional meter field to purchase_products for roll/sheet variants.
-- Run in Supabase SQL Editor.

ALTER TABLE purchase_products
  ADD COLUMN IF NOT EXISTS meter NUMERIC(10,2);
