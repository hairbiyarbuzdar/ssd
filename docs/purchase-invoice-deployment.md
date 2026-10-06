# Purchase invoice products and expiry

After pushing the updated code, run from `/home/deploy/ssd`. Back up the SSD
database before applying migrations. Stop if any command fails.

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
npm run db:generate
npm run build
pm2 restart ssd
pm2 save
```

Purchase invoices now select from Products, using the product's cost price and
expiry date. Quantity and rate remain editable. Gram and MM are removed from
the purchase invoice form. Product identity and expiry are saved on invoice
lines and included in draft and saved print/PDF documents. Existing descriptions,
quantities, prices, and totals are preserved; old invoices without a catalogue
selection can still be opened and edited.

This change does not add purchases to stock automatically.

Verify with an expiring product and a Non-expiry product: select each on separate
lines, change their quantities, save, reopen, and inspect the PDF. Changing the
product's expiry afterward should not change the saved invoice's expiry.

The repository no longer tracks `.env`, database backups, or `.next`. The commands
above preserve the VPS environment before pulling that cleanup commit. Keep the
backup private. If the pull or build fails, restore `.env` before restarting SSD.
