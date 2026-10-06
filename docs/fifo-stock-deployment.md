# Purchase batches and FIFO stock

Purchase invoice items now have an editable expiry date and a Non-expiry option.
Saving a new purchase receives its quantities into stock. Each line is a separate
batch. Sales consume the oldest purchase date first; receipt creation time and ID
break ties. Expiry does not change FIFO priority. Products and invoice pickers show
the next available FIFO batch's expiry. Products also show the remaining batches.
Batch expiry is edited through its purchase invoice, rather than overwriting all
batches from the product form.

Purchase edits change only the received quantity difference. Already-sold units
cannot be removed or moved to another product. Sales edits and deletion restore
their recorded batches. Purchase headers, items, batch quantities, and product
stock/expiry summaries commit together. Repeated create requests do not receive
stock again. Existing payment and cashbook workflows remain in place.

## Existing stock

The migration preserves each product's current counted quantity as an opening
batch, using its current expiry and creation date. It does not replay historical
purchases or deduct old sales again. Existing purchase lines keep an untracked
baseline: saving one unchanged does not add stock; increasing it receives only
the added units. Expiry edits to an untracked historical purchase change its
record, not the independent opening batch. Confirm physical opening quantities
before relying on FIFO for existing inventory. Deductions from sales saved before
batch tracking can still be returned as opening stock when those sales are reduced
or deleted.

## Deployment

Run as `deploy` on the VPS. Stop on any error. This is specific to SSD; other PM2
apps and Nginx sites are unchanged.

```bash
(
  set -e
  cd /home/deploy/ssd
  umask 077
  backup_dir="/home/deploy/ssd-deploy-backups/$(date +%Y%m%d-%H%M%S)"
  mkdir -p "$backup_dir"
  cp .env "$backup_dir/.env"
  sudo -u postgres pg_dump -p 5432 -Fc ssd > "$backup_dir/ssd.dump"
  pm2 stop ssd
  git pull --ff-only origin main
  npm ci
  npm run db:upgrade:products
  npm run db:upgrade:stock
  npm run db:upgrade:expiry
  npm run db:upgrade:purchases
  npm run db:upgrade:users
  npm run db:upgrade:batches
  npm run db:generate
  npm run build
  pm2 restart ssd --update-env
  pm2 save
)
```

Reload open browser tabs after deployment. Check `curl -I http://127.0.0.1:3012`
and `curl -I https://ssd.addsmint.com`.

## Verification

The automated route tests use a rollback-capable adapter. Check the real
PostgreSQL migration and these flows on the VPS with a disposable product and
unpaid invoices: start with zero opening units, receive 2 units dated January 1
and 3 units dated February 1 (give the newer batch an earlier expiry). Sell 3:
the first batch must have zero left and the second 2. Save the sale again: stock
must remain 2. Delete it: quantities must return to 2 and 3. Change a purchase's
expiry without changing quantity: no stock is added. Try reducing a purchase
below its sold quantity: the purchase and stock must remain unchanged.
