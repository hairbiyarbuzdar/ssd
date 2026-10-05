-- Sky Digital v12 — Products: dedicated description column (separate from name)

ALTER TABLE products ADD COLUMN IF NOT EXISTS description TEXT NOT NULL DEFAULT '';
