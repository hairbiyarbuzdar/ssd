-- Migration v20 — rename invoice/quote prefix STR → SSP
--
-- Background:
--   Migration v16 renamed STK → STR. We're now switching to SSP. This
--   updates "STR###" → "SSP###" and "Q-STR###" → "Q-SSP###" so existing
--   records line up with the new scheme.
--
-- Run on the production VPS Postgres after deploying the matching code
-- changes in:
--   app/(dashboard)/accounts/page.tsx
--   app/(dashboard)/quick-invoice/page.tsx
--   app/(dashboard)/quote/page.tsx
--
-- Wrapped in a transaction; the SELECT before COMMIT lets you sanity-check
-- the row counts. Roll back instead of committing if anything looks off.

BEGIN;

UPDATE invoices
   SET invoice_number = 'SSP' || substring(invoice_number FROM 4)
 WHERE invoice_number LIKE 'STR%';

UPDATE quick_invoices
   SET invoice_number = 'SSP' || substring(invoice_number FROM 4)
 WHERE invoice_number LIKE 'STR%';

UPDATE quotations
   SET quote_number = 'Q-SSP' || substring(quote_number FROM 6)
 WHERE quote_number LIKE 'Q-STR%';

-- Sanity check: leftover should be 0 in every row.
SELECT 'invoices'       AS tbl,
       count(*) FILTER (WHERE invoice_number LIKE 'STR%') AS leftover,
       count(*) FILTER (WHERE invoice_number LIKE 'SSP%') AS renamed
  FROM invoices
UNION ALL
SELECT 'quick_invoices',
       count(*) FILTER (WHERE invoice_number LIKE 'STR%'),
       count(*) FILTER (WHERE invoice_number LIKE 'SSP%')
  FROM quick_invoices
UNION ALL
SELECT 'quotations',
       count(*) FILTER (WHERE quote_number   LIKE 'Q-STR%'),
       count(*) FILTER (WHERE quote_number   LIKE 'Q-SSP%')
  FROM quotations;

COMMIT;  -- or ROLLBACK; if any leftover > 0
