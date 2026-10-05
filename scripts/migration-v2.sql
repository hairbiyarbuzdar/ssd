-- Sky Digital v2 Migration
-- Run this in Supabase SQL Editor

-- 1. Delete old seed head accounts
DELETE FROM head_accounts WHERE code IN ('1001', '2001', '3001', '4001');

-- 2. Remove type/bal constraints from head_accounts (make optional with defaults)
ALTER TABLE head_accounts ALTER COLUMN type SET DEFAULT 'General';
ALTER TABLE head_accounts ALTER COLUMN bal SET DEFAULT 'debit';
ALTER TABLE head_accounts DROP CONSTRAINT IF EXISTS head_accounts_type_check;
ALTER TABLE head_accounts DROP CONSTRAINT IF EXISTS head_accounts_bal_check;

-- 3. Remove type constraint from accounts, make it nullable with default
ALTER TABLE accounts ALTER COLUMN type SET DEFAULT 'General';
ALTER TABLE accounts DROP CONSTRAINT IF EXISTS accounts_type_check;

-- 4. Add account_name column to cashbook for linking
ALTER TABLE cashbook ADD COLUMN IF NOT EXISTS account_name TEXT DEFAULT '';

-- 5. Remove method constraint if any (we're removing method from the form)
-- method column stays in DB but won't be used in new form
