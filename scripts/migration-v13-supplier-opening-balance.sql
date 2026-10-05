-- Sky Digital v13 — Supplier opening balance (amount you owed the supplier before POs in this app)

ALTER TABLE suppliers ADD COLUMN IF NOT EXISTS opening_balance NUMERIC(12,2) NOT NULL DEFAULT 0;

COMMENT ON COLUMN suppliers.opening_balance IS 'Non-negative: opening accounts payable to this supplier (not posted to cashbook until paid).';
