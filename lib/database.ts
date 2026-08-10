import { readFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

type DatabaseState = { instance?: DatabaseSync; imported?: boolean };
const state = globalThis as typeof globalThis & { __truefoxDatabase?: DatabaseState };
state.__truefoxDatabase ??= {};

function databasePath() {
  const configured = process.env.DATABASE_PATH?.trim();
  return configured ? path.resolve(/* turbopackIgnore: true */ configured) : path.join(/* turbopackIgnore: true */ process.cwd(), "data", "truefox.sqlite");
}

function migrate(database: DatabaseSync) {
  database.exec("CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY, applied_at TEXT NOT NULL)");
  const applied = new Set((database.prepare("SELECT version FROM schema_migrations").all() as { version: number }[]).map((row) => row.version));
  const migrations = [{ version: 1, file: path.join(/* turbopackIgnore: true */ process.cwd(), "data", "migrations", "001_initial.sql") }];
  for (const migration of migrations) {
    if (applied.has(migration.version)) continue;
    database.exec("BEGIN IMMEDIATE");
    try { database.exec(readFileSync(migration.file, "utf8")); database.exec("COMMIT"); }
    catch (error) { database.exec("ROLLBACK"); throw error; }
  }
}

function importSeed(database: DatabaseSync) {
  if (state.__truefoxDatabase?.imported) return;
  const count = database.prepare("SELECT COUNT(*) AS count FROM cms_items").get() as { count: number };
  const seedPath = path.join(/* turbopackIgnore: true */ process.cwd(), "data", "cms.json");
  if (count.count === 0 && existsSync(seedPath)) {
    const seed = JSON.parse(readFileSync(seedPath, "utf8")) as Record<string, Array<Record<string, unknown>>>;
    const insert = database.prepare("INSERT OR IGNORE INTO cms_items (collection, id, status, payload, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)");
    const audit = database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('import', ?, ?, ?)");
    database.exec("BEGIN IMMEDIATE");
    try {
      for (const [collection, items] of Object.entries(seed)) for (const item of items) {
        const now = new Date().toISOString();
        const id = String(item.id || "");
        if (!id) continue;
        insert.run(collection, id, String(item.status || "published"), JSON.stringify(item), String(item.createdAt || now), String(item.updatedAt || now));
        audit.run(collection, id, now);
      }
      database.exec("COMMIT");
    } catch (error) { database.exec("ROLLBACK"); throw error; }
  }
  state.__truefoxDatabase!.imported = true;
}

export function getDatabase() {
  if (!state.__truefoxDatabase!.instance) {
    const file = databasePath();
    mkdirSync(path.dirname(file), { recursive: true });
    const database = new DatabaseSync(file);
    database.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;");
    migrate(database);
    state.__truefoxDatabase!.instance = database;
    importSeed(database);
  }
  return state.__truefoxDatabase!.instance;
}

export function getDatabaseHealth() {
  const database = getDatabase();
  const integrity = database.prepare("PRAGMA quick_check").get() as { quick_check: string };
  const counts = database.prepare("SELECT collection, COUNT(*) AS count FROM cms_items GROUP BY collection").all() as { collection: string; count: number }[];
  const migrations = database.prepare("SELECT version, applied_at AS appliedAt FROM schema_migrations ORDER BY version").all();
  return { status: integrity.quick_check === "ok" ? "ok" : "degraded", engine: "sqlite", integrity: integrity.quick_check, counts: Object.fromEntries(counts.map((row) => [row.collection, row.count])), migrations };
}
