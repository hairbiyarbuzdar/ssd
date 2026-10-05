/**
 * seed-users.mjs
 * Creates / updates the S.S.D admin user in local PostgreSQL via Prisma.
 *
 * Run once:  node --env-file=.env scripts/seed-users.mjs
 *
 * Requires DATABASE_URL, ADMIN_EMAIL, and ADMIN_PASSWORD in .env
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD before seeding users.");
}

const USERS = [
  {
    email:    process.env.ADMIN_EMAIL.toLowerCase().trim(),
    password: process.env.ADMIN_PASSWORD,
    is_admin: true,
    label:    "Admin",
  },
];

async function main() {
  for (const user of USERS) {
    console.log(`\n[${user.label}] ${user.email}`);
    const hash = await bcrypt.hash(user.password, 12);

    const existing = await prisma.user.findUnique({ where: { email: user.email } });

    const role = user.is_admin ? "super_admin" : "sub_user";

    if (existing) {
      await prisma.user.update({
        where: { email: user.email },
        data: { password_hash: hash, is_admin: user.is_admin, role },
      });
      console.log(`  ✓ Updated`);
    } else {
      await prisma.user.create({
        data: { email: user.email, password_hash: hash, is_admin: user.is_admin, role },
      });
      console.log(`  ✓ Created`);
    }
  }
  console.log("\n✅ Done.\n");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
