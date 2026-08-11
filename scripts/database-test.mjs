import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const file = path.resolve(process.env.DATABASE_PATH || path.join(process.cwd(), "data", "truefox.sqlite"));
const database = new DatabaseSync(file);
const id = `backend-validation-${Date.now()}`;
const now = new Date().toISOString();

try {
  database.exec("PRAGMA busy_timeout = 5000; BEGIN IMMEDIATE");
  const item = { id, status: "draft", group: "validation", label: "Backend validation", value: "created", description: "temporary", sortOrder: 999, createdAt: now, updatedAt: now };
  database.prepare("INSERT INTO cms_items (collection, id, status, payload, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)").run("records", id, "draft", JSON.stringify(item), now, now);
  database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('create', ?, ?, ?)").run("records", id, now);
  database.exec("COMMIT");
  if (!database.prepare("SELECT 1 FROM cms_items WHERE collection = ? AND id = ?").get("records", id)) throw new Error("Create check failed");

  item.value = "updated"; item.updatedAt = new Date().toISOString();
  database.exec("BEGIN IMMEDIATE");
  database.prepare("UPDATE cms_items SET payload = ?, updated_at = ? WHERE collection = ? AND id = ?").run(JSON.stringify(item), item.updatedAt, "records", id);
  database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('update', ?, ?, ?)").run("records", id, item.updatedAt);
  database.exec("COMMIT");
  const updated = database.prepare("SELECT payload FROM cms_items WHERE collection = ? AND id = ?").get("records", id);
  if (!updated || JSON.parse(updated.payload).value !== "updated") throw new Error("Update check failed");

  database.exec("BEGIN IMMEDIATE");
  database.prepare("DELETE FROM cms_items WHERE collection = ? AND id = ?").run("records", id);
  database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('delete', ?, ?, ?)").run("records", id, new Date().toISOString());
  database.exec("COMMIT");
  if (database.prepare("SELECT 1 FROM cms_items WHERE collection = ? AND id = ?").get("records", id)) throw new Error("Delete check failed");
  const audit = database.prepare("SELECT COUNT(*) AS count FROM audit_log WHERE item_id = ?").get(id);
  if (audit.count !== 3) throw new Error("Audit check failed");
  database.prepare("DELETE FROM audit_log WHERE item_id = ?").run(id);
  const integrity = database.prepare("PRAGMA quick_check").get().quick_check;
  if (integrity !== "ok") throw new Error(`Integrity check failed: ${integrity}`);
  console.log("Database integration test passed: create, update, delete, audit and integrity.");
} catch (error) {
  try { database.exec("ROLLBACK") } catch {}
  database.prepare("DELETE FROM cms_items WHERE collection = ? AND id = ?").run("records", id);
  database.prepare("DELETE FROM audit_log WHERE item_id = ?").run(id);
  throw error;
} finally { database.close(); }
