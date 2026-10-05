import pg from "pg";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Use the direct Supabase DB URL
const dbUrl = process.env.SUPABASE_DB_URL;
if (!dbUrl) {
  console.error("SUPABASE_DB_URL not set in .env");
  process.exit(1);
}

const client = new pg.Client({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });

async function migrate() {
  console.log("Connecting to Supabase database...");
  await client.connect();
  console.log("Connected!\n");

  const sqlFile = path.join(__dirname, "..", "supabase-schema.sql");
  const sql = fs.readFileSync(sqlFile, "utf-8");

  // Run the entire SQL file as one batch
  try {
    await client.query(sql);
    console.log("Migration completed successfully!");
    console.log("All tables, RLS policies, and seed data created.");
  } catch (err) {
    console.error("Migration error:", err.message);
    // If policies already exist, try individual statements
    if (err.message.includes("already exists")) {
      console.log("\nSome objects already exist — running statements individually...");
      const statements = sql
        .split(";")
        .map((s) => s.trim())
        .filter((s) => s.length > 0 && !s.startsWith("--"));

      let ok = 0, skip = 0;
      for (const stmt of statements) {
        try {
          await client.query(stmt);
          ok++;
        } catch (e) {
          if (e.message.includes("already exists")) {
            skip++;
          } else {
            console.error("  Failed:", e.message.slice(0, 80));
          }
        }
      }
      console.log(`Done: ${ok} executed, ${skip} skipped (already exist)`);
    }
  }

  await client.end();
}

migrate().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
