# Product categories update

Run from `/home/deploy/ssd` after the updated code is pushed to GitHub.
Back up the SSD database before applying the migration.

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

Stop if any command fails. `db:upgrade:products` is a repeatable SQL migration for
the existing database; it does not require baselining Prisma migrations or using
`db push`. It adds the categories table and nullable product category relation,
and changes existing catalogue products to standalone pricing. Their numeric
prices stay the same and become per-unit prices for future product selections.
Existing invoice line amounts are not changed. Assign categories to existing
products by editing them in Products. New products require a category.

The current app also tracks product stock. Enter opening stock when creating new
products; stock is read-only when editing. Existing products start at zero when
the stock column is first added and need a separate inventory import if stocked. See `product-stock-deployment.md`
for the stock migration behavior and verification steps.

The expiry migration adds a nullable date. Existing products are Non-expiry by
default. Choose Has expiry date and enter a date, or choose Non-expiry product.
Invoice product selections display this information. Expiry does not block sales.

The repository no longer tracks `.env`, database backups, or `.next`. The commands
above preserve the VPS environment before pulling that cleanup commit. Keep the
backup private. If the pull or build fails, restore `.env` before restarting SSD.
