-- Add optional width/height/sqft dimensions to labor tasks.
-- Price stays custom (amount field), dimensions are informational only.
-- Run in Supabase SQL Editor.

ALTER TABLE labor_tasks
  ADD COLUMN IF NOT EXISTS width  NUMERIC(10,2),
  ADD COLUMN IF NOT EXISTS height NUMERIC(10,2),
  ADD COLUMN IF NOT EXISTS sqft   NUMERIC(10,2);
