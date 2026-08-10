import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const file = path.resolve(process.env.DATABASE_PATH || path.join(root, "data", "truefox.sqlite"));
fs.mkdirSync(path.dirname(file), { recursive: true });
const database = new DatabaseSync(file);
database.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;");
database.exec("CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY, applied_at TEXT NOT NULL)");
const migrations = [{ version: 1, file: path.join(root, "data", "migrations", "001_initial.sql") }];
const applied = new Set(database.prepare("SELECT version FROM schema_migrations").all().map((row) => row.version));
for (const migration of migrations) {
  if (applied.has(migration.version)) continue;
  database.exec("BEGIN IMMEDIATE");
  try { database.exec(fs.readFileSync(migration.file, "utf8")); database.exec("COMMIT"); console.log(`Applied migration ${migration.version}.`); }
  catch (error) { database.exec("ROLLBACK"); throw error; }
}
const count = database.prepare("SELECT COUNT(*) AS count FROM cms_items").get().count;
const seedPath = path.join(root, "data", "cms.json");
if (count === 0 && fs.existsSync(seedPath)) {
  const seed = JSON.parse(fs.readFileSync(seedPath, "utf8"));
  const insert = database.prepare("INSERT OR IGNORE INTO cms_items (collection, id, status, payload, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)");
  const audit = database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('import', ?, ?, ?)");
  database.exec("BEGIN IMMEDIATE");
  try {
    let imported = 0;
    for (const [collection, items] of Object.entries(seed)) for (const item of items) {
      const now = new Date().toISOString(); const id = String(item.id || ""); if (!id) continue;
      insert.run(collection, id, String(item.status || "published"), JSON.stringify(item), String(item.createdAt || now), String(item.updatedAt || now));
      audit.run(collection, id, now); imported++;
    }
    database.exec("COMMIT"); console.log(`Imported ${imported} seed records.`);
  } catch (error) { database.exec("ROLLBACK"); throw error; }
}
const integrity = database.prepare("PRAGMA quick_check").get().quick_check;
console.log(`Database: ${file}`);
console.log(`Integrity: ${integrity}`);
console.log(database.prepare("SELECT collection, COUNT(*) AS count FROM cms_items GROUP BY collection ORDER BY collection").all());
database.close();
if (integrity !== "ok") process.exit(1);
