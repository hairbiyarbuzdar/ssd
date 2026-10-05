-- Add BRA (Balochistan Revenue Authority) tax columns to invoices.
-- gst = GST, stax = Sales Tax, bra = BRA — three separate optional taxes.

ALTER TABLE invoices
  ADD COLUMN IF NOT EXISTS bra_pct  NUMERIC(6,2) NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS bra_amount NUMERIC(12,2) NOT NULL DEFAULT 0;
