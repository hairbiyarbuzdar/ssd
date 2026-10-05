-- Migration v17 — drop the multi-location ("location") column from every business table
--
-- Background:
--   Star Sign Panaflex & 3D Sign is a single-location operation; the multi-branch "location"
--   column on each table was unused and the supporting UI has been removed in
--   the matching code change. This migration drops the now-unused column so
--   the schema matches Prisma. The free-form `invoices.job_location` column
--   (an optional descriptor of the job site) is left intact.
--
-- Run on the production VPS Postgres after deploying the matching code.
-- Wrapped in a transaction; sanity SELECTs print BEFORE the COMMIT so you can
-- verify expected counts and ROLLBACK instead if anything looks off.
--
-- Other column data in each row is unaffected.

BEGIN;

-- 1. Snapshot — count rows that currently carry a non-default location, just so
--    you can confirm what's about to be dropped (numbers go to the SQL log).
SELECT 'before:accounts'        AS scope, COUNT(*) FILTER (WHERE location <> 'quetta') AS non_default FROM accounts
UNION ALL SELECT 'before:cashbook',       COUNT(*) FILTER (WHERE location <> 'quetta') FROM cashbook
UNION ALL SELECT 'before:invoices',       COUNT(*) FILTER (WHERE location <> 'quetta') FROM invoices
UNION ALL SELECT 'before:quick_invoices', COUNT(*) FILTER (WHERE location <> 'quetta') FROM quick_invoices
UNION ALL SELECT 'before:suppliers',      COUNT(*) FILTER (WHERE location <> 'quetta') FROM suppliers
UNION ALL SELECT 'before:purchase_orders',COUNT(*) FILTER (WHERE location <> 'quetta') FROM purchase_orders
UNION ALL SELECT 'before:workers',        COUNT(*) FILTER (WHERE location <> 'quetta') FROM workers
UNION ALL SELECT 'before:laborers',       COUNT(*) FILTER (WHERE location <> 'quetta') FROM laborers
UNION ALL SELECT 'before:products',       COUNT(*) FILTER (WHERE location <> 'quetta') FROM products
UNION ALL SELECT 'before:quotations',     COUNT(*) FILTER (WHERE location <> 'quetta') FROM quotations
UNION ALL SELECT 'before:users',          COUNT(*) FILTER (WHERE location <> 'quetta') FROM users;

-- 2. Drop the column from every table that has it.
ALTER TABLE accounts        DROP COLUMN IF EXISTS location;
ALTER TABLE cashbook        DROP COLUMN IF EXISTS location;
ALTER TABLE invoices        DROP COLUMN IF EXISTS location;
ALTER TABLE quick_invoices  DROP COLUMN IF EXISTS location;
ALTER TABLE suppliers       DROP COLUMN IF EXISTS location;
ALTER TABLE purchase_orders DROP COLUMN IF EXISTS location;
ALTER TABLE workers         DROP COLUMN IF EXISTS location;
ALTER TABLE laborers        DROP COLUMN IF EXISTS location;
ALTER TABLE products        DROP COLUMN IF EXISTS location;
ALTER TABLE quotations      DROP COLUMN IF EXISTS location;
ALTER TABLE users           DROP COLUMN IF EXISTS location;

-- NOTE: invoices.job_location (free-text job site) is intentionally NOT dropped.

-- 3. Sanity check — every table should now report column count without "location".
SELECT table_name, column_name
  FROM information_schema.columns
 WHERE table_schema = 'public'
   AND column_name  = 'location'
 ORDER BY table_name;
-- Expected output: 0 rows. If any table still has `location`, ROLLBACK and investigate.

COMMIT;  -- or ROLLBACK; if the sanity check above returned any rows
