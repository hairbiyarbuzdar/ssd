-- Preserve the selected catalogue product and expiry at purchase time.
-- Existing invoice descriptions and amounts are unchanged.
ALTER TABLE purchase_order_items ADD COLUMN IF NOT EXISTS product_id UUID;
ALTER TABLE purchase_order_items ADD COLUMN IF NOT EXISTS expiry_date DATE;
