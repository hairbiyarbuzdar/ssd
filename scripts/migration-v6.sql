-- Sky Digital v6 — Standing labor advance (without job) + apply to tasks
-- Run in Supabase SQL Editor

-- Running balance of advances given before a job exists (reduced when applied to tasks)
ALTER TABLE laborers
  ADD COLUMN IF NOT EXISTS advance_balance NUMERIC(12,2) NOT NULL DEFAULT 0;

-- Portion of task.advance that was taken from laborer.advance_balance (restore on delete)
ALTER TABLE labor_tasks
  ADD COLUMN IF NOT EXISTS advance_from_balance NUMERIC(12,2) NOT NULL DEFAULT 0;
