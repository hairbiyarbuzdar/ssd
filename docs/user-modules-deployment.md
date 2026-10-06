# User module access

After pushing the code, back up the SSD database and run from `/home/deploy/ssd`:

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

Stop if any command fails. The user migration preserves existing sub-users'
Parties and Walk-in Invoice access. Super administrators keep full access and
exclusive user administration. Create User and Edit User provide an Allow / No
access radio pair for each module. At least one module is required.

Navigation and page redirects use these grants. The database API checks the
current active user and grants on each request, including with an existing token.
The navigation refreshes on browser focus and every minute. Modules retain the
read access and supporting financial writes required by their existing workflows;
grants do not isolate individual parties, suppliers, or rows within shared tables.
Products and payment methods can be read by invoicing workflows without granting
their management screens. Existing administrator-only controls within modules
remain administrator-only.

Verify by creating a user with only Products enabled. It should open Products,
hide other modules, redirect a direct visit to Suppliers, and reject a direct
purchase-order API request. Change its grants to Suppliers, then refocus or reload
its browser; the new screen should be available and Products management blocked.

The repository no longer tracks `.env`, database backups, or `.next`. The commands
above preserve the VPS environment before pulling that cleanup commit. Keep the
backup private. If the pull or build fails, restore `.env` before restarting SSD.
