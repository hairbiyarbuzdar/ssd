-- Apply before starting the updated app. Existing invoice amounts are unchanged.
BEGIN;

CREATE TABLE IF NOT EXISTS product_categories (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  name_key TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX IF NOT EXISTS product_categories_name_key_key ON product_categories(name_key);
ALTER TABLE products ADD COLUMN IF NOT EXISTS category_id UUID;
CREATE INDEX IF NOT EXISTS products_category_id_idx ON products(category_id);
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'products_category_id_fkey' AND conrelid = 'products'::regclass) THEN
    ALTER TABLE products ADD CONSTRAINT products_category_id_fkey
      FOREIGN KEY (category_id) REFERENCES product_categories(id) ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;
ALTER TABLE products ALTER COLUMN pricing_type SET DEFAULT 'standalone';
UPDATE products SET pricing_type = 'standalone' WHERE pricing_type IS DISTINCT FROM 'standalone';

COMMIT;
