/**
 * run-migration.mjs
 * Runs migrations v11–v14 in order against Supabase using pg.
 * Run once:  node scripts/run-migration.mjs
 */

import pg from "pg";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));

// Load .env
const envText = readFileSync(resolve(__dir, "../.env"), "utf8");
const env = Object.fromEntries(
  envText
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => {
      const [k, ...rest] = l.split("=");
      return [k.trim(), rest.join("=").trim().replace(/^"(.*)"$/, "$1")];
    })
);

const MIGRATIONS = [
  "migration-v11-multi-location.sql",
  "migration-v12-products-description.sql",
  "migration-v13-supplier-opening-balance.sql",
  "migration-v14-worker-extra-hours.sql",
];

const client = new pg.Client({ connectionString: env["SUPABASE_DB_URL"] });

await client.connect();
console.log("Connected to Supabase Postgres.\n");

for (const file of MIGRATIONS) {
  const sql = readFileSync(resolve(__dir, file), "utf8");
  try {
    await client.query(sql);
    console.log(`✅  ${file}`);
  } catch (e) {
    console.error(`✗   ${file}\n    ${e.message}`);
    await client.end();
    process.exit(1);
  }
}

await client.end();
console.log("\nAll migrations applied successfully.");
