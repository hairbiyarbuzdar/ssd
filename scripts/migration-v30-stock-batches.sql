BEGIN;

ALTER TABLE purchase_order_items ADD COLUMN IF NOT EXISTS stock_received_qty INTEGER NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS stock_batches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  purchase_item_id UUID UNIQUE REFERENCES purchase_order_items(id) ON DELETE RESTRICT,
  received_qty INTEGER NOT NULL CHECK (received_qty >= 0),
  remaining_qty INTEGER NOT NULL CHECK (remaining_qty >= 0 AND remaining_qty <= received_qty),
  expiry_date DATE,
  received_date DATE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS stock_batches_product_id_received_date_created_at_idx
  ON stock_batches(product_id, received_date, created_at);

CREATE TABLE IF NOT EXISTS stock_allocations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  batch_id UUID NOT NULL REFERENCES stock_batches(id) ON DELETE RESTRICT,
  qty INTEGER NOT NULL CHECK (qty > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(invoice_id, batch_id)
);

-- Current counted stock becomes opening batches. Do not replay historical purchases.
INSERT INTO stock_batches (product_id, received_qty, remaining_qty, expiry_date, received_date, created_at)
SELECT p.id, p.quantity, p.quantity, p.expiry_date, p.created_at::date, p.created_at
FROM products p
WHERE NOT EXISTS (SELECT 1 FROM stock_batches b WHERE b.product_id = p.id);

COMMIT;
