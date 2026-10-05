-- Sky Digital v9 — Workers: overtime rate, working days, payment adjustments
-- Run in Supabase SQL Editor

ALTER TABLE workers ADD COLUMN IF NOT EXISTS hourly_overtime_rate NUMERIC(12,2) DEFAULT 0;
ALTER TABLE workers ADD COLUMN IF NOT EXISTS standard_working_days INTEGER DEFAULT 26 CHECK (standard_working_days > 0 AND standard_working_days <= 31);

ALTER TABLE worker_payments ADD COLUMN IF NOT EXISTS overtime_hours NUMERIC(10,2) DEFAULT 0;
ALTER TABLE worker_payments ADD COLUMN IF NOT EXISTS overtime_amount NUMERIC(12,2) DEFAULT 0;
ALTER TABLE worker_payments ADD COLUMN IF NOT EXISTS absent_days NUMERIC(8,2) DEFAULT 0;
ALTER TABLE worker_payments ADD COLUMN IF NOT EXISTS absence_deduction NUMERIC(12,2) DEFAULT 0;
