/**
 * Creates or confirms a Supabase Auth user (server-side only).
 *
 * Requires in .env:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY  (Settings → API → service_role — never expose in the browser)
 *   SEED_USER_EMAIL
 *   SEED_USER_PASSWORD
 *
 * Run: npm run seed:user
 * (Uses Node 20+ --env-file to load .env)
 */

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const email = process.env.SEED_USER_EMAIL;
const password = process.env.SEED_USER_PASSWORD;

if (!url || !serviceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.\n" +
      "Add your service_role key from Supabase → Project Settings → API.\n" +
      "Alternatively, create the user in Dashboard → Authentication → Users."
  );
  process.exit(1);
}

if (!email || !password) {
  console.error(
    "Missing SEED_USER_EMAIL or SEED_USER_PASSWORD.\n" +
      "Add them to .env (see .env.example), then run: npm run seed:user"
  );
  process.exit(1);
}

const admin = createClient(url, serviceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const { data, error } = await admin.auth.admin.createUser({
  email,
  password,
  email_confirm: true,
});

if (error) {
  const msg = error.message?.toLowerCase() ?? "";
  if (
    msg.includes("already been registered") ||
    msg.includes("already exists") ||
    error.status === 422
  ) {
    console.log("User already exists:", email);
    process.exit(0);
  }
  console.error("createUser failed:", error.message);
  process.exit(1);
}

console.log("Created Auth user:", data.user?.email);
