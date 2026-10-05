-- Activity log table — records create/update/delete events across the app.

CREATE TABLE IF NOT EXISTS activity_log (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action      TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id   TEXT NOT NULL DEFAULT '',
  title       TEXT NOT NULL DEFAULT '',
  subtitle    TEXT NOT NULL DEFAULT '',
  amount      NUMERIC(12, 2),
  metadata    TEXT NOT NULL DEFAULT '',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS activity_log_created_at_idx ON activity_log (created_at);
CREATE INDEX IF NOT EXISTS activity_log_entity_type_idx ON activity_log (entity_type);
CREATE INDEX IF NOT EXISTS activity_log_action_idx     ON activity_log (action);
