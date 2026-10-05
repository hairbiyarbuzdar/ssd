-- Sky Digital v7 — Align with app (cashbook ↔ accounts / ledger)
-- Run in Supabase SQL Editor if your DB was created from an older supabase-schema.sql
-- that omitted cashbook.account_name (migration-v2 also adds this; safe to re-run).

ALTER TABLE cashbook ADD COLUMN IF NOT EXISTS account_name TEXT DEFAULT '';
