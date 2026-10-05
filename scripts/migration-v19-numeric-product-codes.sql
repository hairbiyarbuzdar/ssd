-- Migration v19 — numeric product codes (CR-16)
--
-- Replaces the alphanumeric `products.code` (e.g. "PNF-001", "BNR-002")
-- with sequential numeric codes ("001", "002", ...) so they're easy to
-- type into invoice and PO line pickers. Adds a matching `code` column
-- to `purchase_products` and backfills it the same way.
--
-- Existing data is preserved otherwise; only the `code` column changes.
-- Numbers are assigned in `created_at` order so older products stay first.
--
-- Run on the production VPS Postgres after deploying the matching code.

BEGIN;

-- 1. purchase_products needs the column added (it didn't exist before).
ALTER TABLE purchase_products
  ADD COLUMN IF NOT EXISTS code TEXT;

-- 2. Renumber `products` codes by created_at order. Three-digit padding so
--    they sort lexicographically (matches the products page's `.order("code")`).
WITH ordered AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY created_at, id) AS n
    FROM products
)
UPDATE products p
   SET code = LPAD(o.n::text, 3, '0')
  FROM ordered o
 WHERE p.id = o.id;

-- 3. Same for purchase_products. Sets every row's code from null to "001", "002", …
WITH ordered AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY created_at, id) AS n
    FROM purchase_products
)
UPDATE purchase_products p
   SET code = LPAD(o.n::text, 3, '0')
  FROM ordered o
 WHERE p.id = o.id;

-- 4. Now that purchase_products has codes everywhere, add the unique
--    constraint that Prisma's @unique annotation expects.
ALTER TABLE purchase_products
  ADD CONSTRAINT purchase_products_code_key UNIQUE (code);

-- 5. Sanity check — every row should have a numeric code, no nulls left.
SELECT 'products'           AS tbl,
       COUNT(*) FILTER (WHERE code ~ '^[0-9]+$')   AS numeric_codes,
       COUNT(*) FILTER (WHERE code IS NULL OR NOT (code ~ '^[0-9]+$')) AS not_numeric
  FROM products
UNION ALL
SELECT 'purchase_products',
       COUNT(*) FILTER (WHERE code ~ '^[0-9]+$'),
       COUNT(*) FILTER (WHERE code IS NULL OR NOT (code ~ '^[0-9]+$'))
  FROM purchase_products;
-- Expected: not_numeric = 0 in every row. If anything looks off, ROLLBACK.

COMMIT;  -- or ROLLBACK; if the sanity check shows non-numeric leftovers
