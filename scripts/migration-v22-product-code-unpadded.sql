-- Migration v22 — strip leading zeros from products.code
--
-- Migration v19 stored numeric product codes as zero-padded strings ("001",
-- "002", …) so they would sort lexicographically. The UI now shows them
-- as "1", "2", … and sorts numerically client-side, so the padding can go.
--
-- Only purely numeric codes are touched. Any non-numeric code (legacy
-- "PNF-001" style) is left alone so manual entries stay intact.
--
-- Run on the production VPS Postgres after deploying the matching code
-- changes in app/(dashboard)/products/page.tsx,
-- app/(dashboard)/quick-invoice/page.tsx, and app/(dashboard)/accounts/page.tsx.

BEGIN;

UPDATE products
   SET code = (code::int)::text
 WHERE code ~ '^0+\d+$';

-- Sanity check: every numeric code should now be unpadded.
SELECT 'products' AS tbl,
       COUNT(*) FILTER (WHERE code ~ '^[1-9][0-9]*$') AS unpadded_numeric,
       COUNT(*) FILTER (WHERE code ~ '^0+\d+$')      AS still_padded
  FROM products;

COMMIT;  -- or ROLLBACK; if still_padded > 0
