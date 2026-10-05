-- Star Sign Panaflex & 3D Sign v15 — Sub-user role support
-- Adds role / full_name / is_active columns to users and backfills existing admins.

ALTER TABLE users ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'sub_user';
ALTER TABLE users ADD COLUMN IF NOT EXISTS full_name TEXT NOT NULL DEFAULT '';
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- Only two roles are supported: super_admin and sub_user
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'users_role_check'
  ) THEN
    ALTER TABLE users ADD CONSTRAINT users_role_check
      CHECK (role IN ('super_admin', 'sub_user'));
  END IF;
END$$;

-- Promote any pre-existing admin user to super_admin
UPDATE users SET role = 'super_admin' WHERE is_admin = true AND role <> 'super_admin';

-- Seed a readable full_name for rows that still have the default blank
UPDATE users
SET full_name = SPLIT_PART(email, '@', 1)
WHERE full_name = '';
