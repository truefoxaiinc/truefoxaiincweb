import { randomUUID } from "node:crypto";
import { getDatabase } from "@/lib/database";

export type LeadStatus = "new" | "contacted" | "qualified" | "closed";
export type ApplicationStatus = "new" | "reviewing" | "shortlisted" | "rejected" | "hired";
export type PublishStatus = "draft" | "published" | "archived";

export type Lead = { id: string; createdAt: string; updatedAt: string; status: LeadStatus; intent: string; name: string; email: string; company: string; phone: string; interest: string; timing: string; message: string; notes: string };
export type Application = { id: string; createdAt: string; updatedAt: string; status: ApplicationStatus; jobId: string; jobTitle: string; name: string; email: string; phone: string; location: string; experience: string; resumeUrl: string; coverLetter: string; notes: string };
export type Job = { id: string; createdAt: string; updatedAt: string; status: PublishStatus; title: string; department: string; location: string; employmentType: string; summary: string; description: string; requirements: string; sortOrder: number };
export type BlogPost = { id: string; createdAt: string; updatedAt: string; status: PublishStatus; title: string; slug: string; category: string; excerpt: string; content: string; author: string; publishedAt: string; readTime: string };
export type SiteRecord = { id: string; createdAt: string; updatedAt: string; status: PublishStatus; group: string; label: string; value: string; description: string; sortOrder: number };
export type CmsData = { leads: Lead[]; applications: Application[]; jobs: Job[]; posts: BlogPost[]; records: SiteRecord[] };
export type CollectionName = keyof CmsData;

const emptyStore: CmsData = { leads: [], applications: [], jobs: [], posts: [], records: [] };

export async function readCms(): Promise<CmsData> {
  const data = structuredClone(emptyStore);
  const rows = getDatabase().prepare("SELECT collection, payload FROM cms_items ORDER BY updated_at DESC").all() as { collection: CollectionName; payload: string }[];
  for (const row of rows) (data[row.collection] as Array<unknown>).push(JSON.parse(row.payload));
  return data;
}

function clean(value: unknown, max = 10_000) {
  return String(value ?? "").trim().slice(0, max);
}

function number(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalize(collection: CollectionName, input: Record<string, unknown>) {
  const now = new Date().toISOString();
  const common = { id: clean(input.id, 100) || randomUUID(), createdAt: clean(input.createdAt, 50) || now, updatedAt: now };
  if (collection === "leads") return { ...common, status: clean(input.status, 20) || "new", intent: clean(input.intent, 30), name: clean(input.name, 120), email: clean(input.email, 180), company: clean(input.company, 180), phone: clean(input.phone, 80), interest: clean(input.interest, 140), timing: clean(input.timing, 80), message: clean(input.message), notes: clean(input.notes) } as Lead;
  if (collection === "applications") return { ...common, status: clean(input.status, 20) || "new", jobId: clean(input.jobId, 100), jobTitle: clean(input.jobTitle, 180), name: clean(input.name, 120), email: clean(input.email, 180), phone: clean(input.phone, 80), location: clean(input.location, 180), experience: clean(input.experience, 80), resumeUrl: clean(input.resumeUrl, 1000), coverLetter: clean(input.coverLetter), notes: clean(input.notes) } as Application;
  if (collection === "jobs") return { ...common, status: clean(input.status, 20) || "draft", title: clean(input.title, 180), department: clean(input.department, 120), location: clean(input.location, 180), employmentType: clean(input.employmentType, 80), summary: clean(input.summary, 1000), description: clean(input.description), requirements: clean(input.requirements), sortOrder: number(input.sortOrder) } as Job;
  if (collection === "posts") return { ...common, status: clean(input.status, 20) || "draft", title: clean(input.title, 220), slug: clean(input.slug, 180).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""), category: clean(input.category, 100), excerpt: clean(input.excerpt, 1000), content: clean(input.content, 50_000), author: clean(input.author, 120), publishedAt: clean(input.publishedAt, 50), readTime: clean(input.readTime, 50) } as BlogPost;
  return { ...common, status: clean(input.status, 20) || "published", group: clean(input.group, 100), label: clean(input.label, 180), value: clean(input.value), description: clean(input.description, 1000), sortOrder: number(input.sortOrder) } as SiteRecord;
}

export async function createItem(collection: CollectionName, input: Record<string, unknown>) {
  const created = normalize(collection, input) as CmsData[CollectionName][number];
  const database = getDatabase();
  database.exec("BEGIN IMMEDIATE");
  try {
    database.prepare("INSERT INTO cms_items (collection, id, status, payload, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)").run(collection, created.id, created.status, JSON.stringify(created), created.createdAt, created.updatedAt);
    database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('create', ?, ?, ?)").run(collection, created.id, created.updatedAt);
    database.exec("COMMIT");
    return created;
  } catch (error) { database.exec("ROLLBACK"); throw error; }
}

export async function updateItem(collection: CollectionName, id: string, input: Record<string, unknown>) {
  const database = getDatabase();
  const row = database.prepare("SELECT payload FROM cms_items WHERE collection = ? AND id = ?").get(collection, id) as { payload: string } | undefined;
  if (!row) return undefined;
  const current = JSON.parse(row.payload) as Record<string, unknown>;
  const updated = normalize(collection, { ...current, ...input, id, createdAt: current.createdAt }) as CmsData[CollectionName][number];
  database.exec("BEGIN IMMEDIATE");
  try {
    database.prepare("UPDATE cms_items SET status = ?, payload = ?, updated_at = ? WHERE collection = ? AND id = ?").run(updated.status, JSON.stringify(updated), updated.updatedAt, collection, id);
    database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('update', ?, ?, ?)").run(collection, id, updated.updatedAt);
    database.exec("COMMIT");
    return updated;
  } catch (error) { database.exec("ROLLBACK"); throw error; }
}

export async function deleteItem(collection: CollectionName, id: string) {
  const database = getDatabase();
  database.exec("BEGIN IMMEDIATE");
  try {
    const result = database.prepare("DELETE FROM cms_items WHERE collection = ? AND id = ?").run(collection, id);
    if (result.changes) database.prepare("INSERT INTO audit_log (action, collection, item_id, occurred_at) VALUES ('delete', ?, ?, ?)").run(collection, id, new Date().toISOString());
    database.exec("COMMIT");
    return result.changes > 0;
  } catch (error) { database.exec("ROLLBACK"); throw error; }
}
