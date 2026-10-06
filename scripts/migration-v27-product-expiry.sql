-- NULL expiry_date represents a non-expiring product, including existing products.
ALTER TABLE products ADD COLUMN IF NOT EXISTS expiry_date DATE;
