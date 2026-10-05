-- Run once in Supabase SQL Editor if `products` is missing (fixes PostgREST "schema cache" / table not found).
-- Safe to re-run: uses IF NOT EXISTS and idempotent policy drops.

CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  cost_price NUMERIC(12,2) DEFAULT 0,
  sale_price NUMERIC(12,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all for authenticated" ON public.products;
CREATE POLICY "Allow all for authenticated" ON public.products
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
