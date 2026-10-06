# Stock quantity update

Apply to SSD's database before starting this app version. Back up the database first.
From `/home/deploy/ssd`, after these changes have been committed and pushed:

```bash
umask 077
env_backup=$(mktemp /home/deploy/ssd-env.XXXXXX)
cp .env "$env_backup"
pm2 stop ssd
git pull --ff-only
cp "$env_backup" .env
chmod 600 .env
npm ci
npm run db:upgrade:products
npm run db:upgrade:stock
npm run db:upgrade:expiry
npm run db:upgrade:purchases
npm run db:upgrade:users
npm run db:upgrade:batches
npm run db:generate
npm run build
pm2 restart ssd
pm2 save
```

Stop on any error. The repeatable stock migration adds quantity to products and
product identity and deducted quantity to canonical invoice items. Existing
products start with zero stock when the stock column is first added. Existing
stock values are preserved on subsequent runs. Opening stock is entered only
when creating a product; product edits cannot change it. Existing products that
need initial stock require a separately reviewed inventory import before sale. The migration attaches old invoice lines only when their
product name matches one catalogue product unambiguously. Historical sales are
not deducted from opening stock. Increasing their quantity consumes the added
units; deleting old untracked sales does not invent stock.

Both party and walk-in invoices save their header, items, and stock adjustments
in one transaction. Duplicate lines are combined when checking stock. Insufficient
stock rejects the save and preserves the previous invoice and stock. Editing an
invoice applies its net stock change; deleting it restores its tracked deductions.
The legacy quick-invoice mirror never deducts stock a second time. Printing, PDFs,
quotations, and unsaved drafts do not consume stock. Referenced products cannot be
deleted, so their inventory history retains a stable identity.

After deployment, reload browser tabs. Verify with a product holding 10 units:
sell 3 (7 remain), edit to 5 (5 remain), save unchanged (still 5), then delete
the invoice (10 remain). Attempting to sell 11 must fail without saving a new
invoice or changing stock. Do this with a disposable test product and unpaid
invoice so that the existing cashbook does not need cleanup.

The expiry migration adds a nullable date. Existing products are Non-expiry by
default. Choose Has expiry date and enter a date, or choose Non-expiry product.
Invoice product selections display this information. Expiry does not block sales.

The repository no longer tracks `.env`, database backups, or `.next`. The commands
above preserve the VPS environment before pulling that cleanup commit. Keep the
backup private. If the pull or build fails, restore `.env` before restarting SSD.

Purchases now add stock as separate FIFO batches; expiry follows the next batch
to sell. See `fifo-stock-deployment.md` for existing-stock handling and batch tests.
