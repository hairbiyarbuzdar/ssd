-- Rename Mobile Wallet → EasyPaisa (canonical labels in app)
UPDATE cashbook SET method = 'EasyPaisa' WHERE method = 'Mobile Wallet' OR LOWER(method) LIKE '%mobile wallet%';
UPDATE invoices SET payment_method = 'EasyPaisa' WHERE payment_method = 'Mobile Wallet';
UPDATE purchase_orders SET payment_method = 'EasyPaisa' WHERE payment_method = 'Mobile Wallet';
