-- Migration v18 — configurable payment methods (CR-14)
--
-- Adds the `payment_methods` table that the new admin Payment Methods page
-- writes to. Every cashbook entry's `method` text column references one of
-- these names; archiving a method hides it from pickers but historical
-- entries keep working since they reference by name.
--
-- Each method has an `opening_balance` — the amount you start with right now
-- (e.g. cash in hand on the day you go live). All cashbook entries against
-- that method adjust the running total from there.
--
-- Run on the production VPS Postgres after deploying the matching code.

BEGIN;

CREATE TABLE IF NOT EXISTS payment_methods (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL UNIQUE,
  opening_balance NUMERIC(12, 2) NOT NULL DEFAULT 0,
  archived        BOOLEAN NOT NULL DEFAULT false,
  sort_order      INTEGER NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed the three methods that previously existed as a hardcoded list so the
-- new dropdowns aren't empty on first deploy and historical cashbook rows
-- (whose `method` already says 'Cash' / 'EasyPaisa' / 'Bank') keep matching.
INSERT INTO payment_methods (id, name, opening_balance, sort_order)
VALUES
  (gen_random_uuid(), 'Cash',      0, 1),
  (gen_random_uuid(), 'EasyPaisa', 0, 2),
  (gen_random_uuid(), 'Bank',      0, 3)
ON CONFLICT (name) DO NOTHING;

-- Sanity check before COMMIT.
SELECT name, opening_balance, archived, sort_order
  FROM payment_methods
 ORDER BY sort_order, name;

COMMIT;  -- or ROLLBACK; if any row looks unexpected
