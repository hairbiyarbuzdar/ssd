-- Migration v16 — rename invoice/quote prefix STK → STR
--
-- Background:
--   The codebase generates invoice numbers as "STK###" (party + walk-in)
--   and quote numbers as "Q-STK###". CR-09 in the App Change Request doc
--   updates these to "STR###" and "Q-STR###" so existing records line up
--   with the new scheme.
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
   SET invoice_number = 'STR' || substring(invoice_number FROM 4)
 WHERE invoice_number LIKE 'STK%';

UPDATE quick_invoices
   SET invoice_number = 'STR' || substring(invoice_number FROM 4)
 WHERE invoice_number LIKE 'STK%';

UPDATE quotations
   SET quote_number = 'Q-STR' || substring(quote_number FROM 6)
 WHERE quote_number LIKE 'Q-STK%';

-- Sanity check: leftover should be 0 in every row.
SELECT 'invoices'       AS tbl,
       count(*) FILTER (WHERE invoice_number LIKE 'STK%') AS leftover,
       count(*) FILTER (WHERE invoice_number LIKE 'STR%') AS renamed
  FROM invoices
UNION ALL
SELECT 'quick_invoices',
       count(*) FILTER (WHERE invoice_number LIKE 'STK%'),
       count(*) FILTER (WHERE invoice_number LIKE 'STR%')
  FROM quick_invoices
UNION ALL
SELECT 'quotations',
       count(*) FILTER (WHERE quote_number   LIKE 'Q-STK%'),
       count(*) FILTER (WHERE quote_number   LIKE 'Q-STR%')
  FROM quotations;

COMMIT;  -- or ROLLBACK; if any leftover > 0
