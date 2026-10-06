-- Opening stock is entered by the user. Existing sales are not deducted retroactively.
BEGIN;
ALTER TABLE products ADD COLUMN IF NOT EXISTS quantity INTEGER NOT NULL DEFAULT 0;
ALTER TABLE invoice_items ADD COLUMN IF NOT EXISTS product_id UUID;
ALTER TABLE invoice_items ADD COLUMN IF NOT EXISTS stock_deducted_qty INTEGER NOT NULL DEFAULT 0;
CREATE INDEX IF NOT EXISTS invoice_items_product_id_idx ON invoice_items(product_id);
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'products_quantity_nonnegative' AND conrelid = 'products'::regclass) THEN
    ALTER TABLE products ADD CONSTRAINT products_quantity_nonnegative CHECK (quantity >= 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'invoice_items_product_id_fkey' AND conrelid = 'invoice_items'::regclass) THEN
    ALTER TABLE invoice_items ADD CONSTRAINT invoice_items_product_id_fkey
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'invoice_items_stock_deducted_valid' AND conrelid = 'invoice_items'::regclass) THEN
    ALTER TABLE invoice_items ADD CONSTRAINT invoice_items_stock_deducted_valid CHECK (stock_deducted_qty >= 0 AND stock_deducted_qty <= qty);
  END IF;
END $$;
-- Attach unambiguous legacy product lines so editing them doesn't consume opening stock.
UPDATE invoice_items i SET product_id = p.id
FROM products p
WHERE i.product_id IS NULL AND i.category = p.name
  AND (SELECT COUNT(*) FROM products other WHERE other.name = p.name) = 1;
COMMIT;
