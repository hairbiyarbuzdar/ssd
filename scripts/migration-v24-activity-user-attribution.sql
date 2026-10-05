-- Activity log: track which user performed each action
-- and stamp creators on the source tables that surface in the log.

ALTER TABLE activity_log
  ADD COLUMN IF NOT EXISTS user_id    UUID,
  ADD COLUMN IF NOT EXISTS user_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS user_name  TEXT NOT NULL DEFAULT '';

CREATE INDEX IF NOT EXISTS activity_log_user_id_idx ON activity_log (user_id);

-- Source tables — used by the activity log "Created" rows so we can show
-- who created each invoice / cashbook entry / etc.
ALTER TABLE invoices
  ADD COLUMN IF NOT EXISTS created_by_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS created_by_name  TEXT NOT NULL DEFAULT '';

ALTER TABLE cashbook
  ADD COLUMN IF NOT EXISTS created_by_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS created_by_name  TEXT NOT NULL DEFAULT '';

ALTER TABLE quick_invoices
  ADD COLUMN IF NOT EXISTS created_by_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS created_by_name  TEXT NOT NULL DEFAULT '';

ALTER TABLE quotations
  ADD COLUMN IF NOT EXISTS created_by_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS created_by_name  TEXT NOT NULL DEFAULT '';

ALTER TABLE purchase_orders
  ADD COLUMN IF NOT EXISTS created_by_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS created_by_name  TEXT NOT NULL DEFAULT '';

ALTER TABLE labor_tasks
  ADD COLUMN IF NOT EXISTS created_by_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS created_by_name  TEXT NOT NULL DEFAULT '';

ALTER TABLE worker_payments
  ADD COLUMN IF NOT EXISTS created_by_email TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS created_by_name  TEXT NOT NULL DEFAULT '';
