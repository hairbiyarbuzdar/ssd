-- Sky Digital v14 — Worker extra hours (manual entries before payday; linked when paid)

CREATE TABLE IF NOT EXISTS worker_extra_hours (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  worker_id UUID NOT NULL REFERENCES workers(id) ON DELETE CASCADE,
  month TEXT NOT NULL,
  hours NUMERIC(10,2) NOT NULL CHECK (hours > 0),
  rate_per_hour NUMERIC(12,2) NOT NULL CHECK (rate_per_hour > 0),
  amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0),
  payment_id UUID REFERENCES worker_payments(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_worker_extra_hours_worker_month_pending
  ON worker_extra_hours(worker_id, month)
  WHERE payment_id IS NULL;

ALTER TABLE worker_extra_hours ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for authenticated" ON worker_extra_hours
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
