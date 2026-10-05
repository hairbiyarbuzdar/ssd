-- Sky Digital v5 Migration — Advance embedded in labor tasks
-- Run this in Supabase SQL Editor

ALTER TABLE labor_tasks
  ADD COLUMN IF NOT EXISTS advance NUMERIC(12,2) NOT NULL DEFAULT 0;
