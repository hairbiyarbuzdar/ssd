/**
 * Creates an admin user in the S.S.D PostgreSQL database.
 *
 * Requires in .env:
 *   DATABASE_URL=postgresql://user:password@localhost:5432/ssd
 *   ADMIN_EMAIL=admin@example.com
 *   ADMIN_PASSWORD=yourpassword
 *
 * Run: npm run create:admin
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  console.error("Missing ADMIN_EMAIL or ADMIN_PASSWORD in environment.");
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);

try {
  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    await prisma.user.update({
      where: { email },
      data: { password_hash: hash, is_admin: true, role: "super_admin" },
    });
    console.log(`✓ Updated existing user: ${email}  (admin: true)`);
  } else {
    await prisma.user.create({
      data: { email, password_hash: hash, is_admin: true, role: "super_admin" },
    });
    console.log(`✓ Created admin user: ${email}`);
  }
} finally {
  await prisma.$disconnect();
}
