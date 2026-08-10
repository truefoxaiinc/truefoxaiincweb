CREATE TABLE IF NOT EXISTS schema_migrations (
  version INTEGER PRIMARY KEY,
  applied_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cms_items (
  collection TEXT NOT NULL CHECK (collection IN ('leads', 'applications', 'jobs', 'posts', 'records')),
  id TEXT NOT NULL,
  status TEXT NOT NULL,
  payload TEXT NOT NULL CHECK (json_valid(payload)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (collection, id)
);

CREATE INDEX IF NOT EXISTS idx_cms_items_collection_updated ON cms_items (collection, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_cms_items_collection_status ON cms_items (collection, status);

CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  action TEXT NOT NULL CHECK (action IN ('create', 'update', 'delete', 'import')),
  collection TEXT NOT NULL,
  item_id TEXT NOT NULL,
  occurred_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_audit_log_occurred ON audit_log (occurred_at DESC);

INSERT OR IGNORE INTO schema_migrations (version, applied_at) VALUES (1, datetime('now'));
