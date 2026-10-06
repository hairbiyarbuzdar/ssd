-- Existing sub-users keep their previous Parties and Walk-in Invoice access.
ALTER TABLE users ADD COLUMN IF NOT EXISTS modules TEXT[] NOT NULL DEFAULT ARRAY['accounts', 'quick-invoice']::TEXT[];
