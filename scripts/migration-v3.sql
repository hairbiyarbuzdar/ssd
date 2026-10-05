-- Sky Digital v3 Migration — Workers / Payroll
-- Run this in Supabase SQL Editor

-- Workers (employees)
CREATE TABLE IF NOT EXISTS workers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT DEFAULT '',
  role TEXT DEFAULT '',
  monthly_wage NUMERIC(12,2) DEFAULT 0,
  status TEXT DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Worker Advances (advance salary taken during the month)
CREATE TABLE IF NOT EXISTS worker_advances (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  worker_id UUID REFERENCES workers(id) ON DELETE CASCADE,
  amount NUMERIC(12,2) NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  month TEXT NOT NULL,
  notes TEXT DEFAULT '',
  cashbook_entry_id UUID,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Worker Payments (monthly salary paid out)
CREATE TABLE IF NOT EXISTS worker_payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  worker_id UUID REFERENCES workers(id) ON DELETE CASCADE,
  month TEXT NOT NULL,
  total_wage NUMERIC(12,2) DEFAULT 0,
  advance_total NUMERIC(12,2) DEFAULT 0,
  net_paid NUMERIC(12,2) DEFAULT 0,
  paid_date DATE NOT NULL DEFAULT CURRENT_DATE,
  cashbook_entry_id UUID,
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE workers ENABLE ROW LEVEL SECURITY;
ALTER TABLE worker_advances ENABLE ROW LEVEL SECURITY;
ALTER TABLE worker_payments ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow all for authenticated" ON workers FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated" ON worker_advances FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated" ON worker_payments FOR ALL TO authenticated USING (true) WITH CHECK (true);
