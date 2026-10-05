-- Sky Digital v4 Migration — Labor / Task-based Payroll
-- Run this in Supabase SQL Editor

-- Laborers (task-based workers with no fixed monthly wage)
CREATE TABLE IF NOT EXISTS laborers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT DEFAULT '',
  role TEXT DEFAULT '',
  status TEXT DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Labor Tasks (individual jobs assigned to a laborer)
CREATE TABLE IF NOT EXISTS labor_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  laborer_id UUID REFERENCES laborers(id) ON DELETE CASCADE,
  task_name TEXT NOT NULL,
  description TEXT DEFAULT '',
  amount NUMERIC(12,2) NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid')),
  cashbook_entry_id UUID,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Labor Advances (advance payments taken by a laborer)
CREATE TABLE IF NOT EXISTS labor_advances (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  laborer_id UUID REFERENCES laborers(id) ON DELETE CASCADE,
  amount NUMERIC(12,2) NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  notes TEXT DEFAULT '',
  cashbook_entry_id UUID,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE laborers ENABLE ROW LEVEL SECURITY;
ALTER TABLE labor_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE labor_advances ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow all for authenticated" ON laborers FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated" ON labor_tasks FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for authenticated" ON labor_advances FOR ALL TO authenticated USING (true) WITH CHECK (true);
