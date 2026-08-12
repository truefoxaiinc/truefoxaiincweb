"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { CmsData, CollectionName } from "@/lib/cms";
import { adminHeaders, apiUrl } from "@/lib/api";

type Item = Record<string, string | number> & { id: string };
type Field = { name: string; label: string; type?: "text" | "email" | "number" | "date" | "textarea" | "select"; options?: string[]; required?: boolean };

const labels: Record<CollectionName, string> = { leads: "Contact leads", applications: "Job applications", jobs: "Career jobs", posts: "Blog posts", records: "Other data" };
const fields: Record<CollectionName, Field[]> = {
  leads: [
    { name: "status", label: "Status", type: "select", options: ["new", "contacted", "qualified", "closed"] },
    { name: "name", label: "Name", required: true }, { name: "email", label: "Email", type: "email", required: true }, { name: "company", label: "Company" }, { name: "phone", label: "Phone" }, { name: "interest", label: "Interest" }, { name: "timing", label: "Timing" }, { name: "message", label: "Message", type: "textarea" }, { name: "notes", label: "Private notes", type: "textarea" }
  ],
  applications: [
    { name: "status", label: "Status", type: "select", options: ["new", "reviewing", "shortlisted", "rejected", "hired"] },
    { name: "jobTitle", label: "Position" }, { name: "name", label: "Candidate", required: true }, { name: "email", label: "Email", type: "email", required: true }, { name: "phone", label: "Phone" }, { name: "location", label: "Location" }, { name: "experience", label: "Experience" }, { name: "resumeUrl", label: "Resume URL" }, { name: "coverLetter", label: "Cover letter", type: "textarea" }, { name: "notes", label: "Private notes", type: "textarea" }
  ],
  jobs: [
    { name: "status", label: "Status", type: "select", options: ["draft", "published", "archived"] }, { name: "title", label: "Job title", required: true }, { name: "department", label: "Department", required: true }, { name: "location", label: "Location", required: true }, { name: "employmentType", label: "Employment type" }, { name: "summary", label: "Summary", type: "textarea", required: true }, { name: "description", label: "Description", type: "textarea" }, { name: "requirements", label: "Requirements (one per line)", type: "textarea" }, { name: "sortOrder", label: "Sort order", type: "number" }
  ],
  posts: [
    { name: "status", label: "Status", type: "select", options: ["draft", "published", "archived"] }, { name: "title", label: "Title", required: true }, { name: "slug", label: "URL slug", required: true }, { name: "category", label: "Category" }, { name: "excerpt", label: "Excerpt", type: "textarea", required: true }, { name: "content", label: "Article content", type: "textarea", required: true }, { name: "author", label: "Author" }, { name: "publishedAt", label: "Publish date", type: "date" }, { name: "readTime", label: "Read time" }
  ],
  records: [
    { name: "status", label: "Status", type: "select", options: ["draft", "published", "archived"] }, { name: "group", label: "Data group", required: true }, { name: "label", label: "Label", required: true }, { name: "value", label: "Value", type: "textarea", required: true }, { name: "description", label: "Description", type: "textarea" }, { name: "sortOrder", label: "Sort order", type: "number" }
  ]
};

const blankDefaults: Record<CollectionName, Record<string, string | number>> = {
  leads: { status: "new" }, applications: { status: "new" }, jobs: { status: "draft", sortOrder: 0 }, posts: { status: "draft", author: "Truefox AI" }, records: { status: "published", sortOrder: 0 }
};

export default function AdminDataManager({ initialData }: { initialData: CmsData }) {
  const [data, setData] = useState(initialData);
  const [active, setActive] = useState<CollectionName>("leads");
  const [editing, setEditing] = useState<Item | null>(null);
  const [creating, setCreating] = useState(false);
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const list = data[active] as unknown as Item[];
  const visible = useMemo(() => list.filter((item) => JSON.stringify(item).toLowerCase().includes(search.toLowerCase())), [list, search]);
  const allowCreate = !["leads", "applications"].includes(active);

  useEffect(() => { void refresh().catch(() => setNotice("Sign in to load administration data.")); }, []);

  async function refresh() {
    const response = await fetch(apiUrl("/api/v1/admin/data"), { cache: "no-store", credentials: "include", headers: adminHeaders() });
    if (response.status === 401) { window.location.assign("/admin/login"); throw new Error("Unauthorized"); }
    if (!response.ok) throw new Error("Unable to reload data");
    setData(await response.json());
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setNotice("");
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const method = creating ? "POST" : "PATCH";
    const body = creating ? { collection: active, item: values } : { collection: active, id: editing?.id, item: values };
    try {
      const response = await fetch(apiUrl("/api/v1/admin/data"), { method, credentials: "include", headers: adminHeaders(), body: JSON.stringify(body) });
      if (!response.ok) throw new Error("Save failed");
      await refresh(); setEditing(null); setCreating(false); setNotice("Saved successfully.");
    } catch { setNotice("The record could not be saved."); } finally { setBusy(false); }
  }

  async function remove(item: Item) {
    if (!window.confirm("Delete this record permanently?")) return;
    setBusy(true);
    try {
      const response = await fetch(apiUrl("/api/v1/admin/data"), { method: "DELETE", credentials: "include", headers: adminHeaders(), body: JSON.stringify({ collection: active, id: item.id }) });
      if (!response.ok) throw new Error();
      await refresh(); setEditing(null); setNotice("Record deleted.");
    } catch { setNotice("The record could not be deleted."); } finally { setBusy(false); }
  }

  function switchTab(collection: CollectionName) { setActive(collection); setSearch(""); setEditing(null); setCreating(false); setNotice(""); }
  const primary = (item: Item) => String(item.title || item.name || item.label || "Untitled");
  const secondary = (item: Item) => String(item.email || item.department || item.category || item.group || "");

  return (
    <section className="admin-panel admin-manager" id="data">
      <div className="admin-manager-head"><div><span>DATA MANAGEMENT</span><h2>Manage website data</h2><p>Create, review, update and remove operational records.</p></div>{allowCreate && <button onClick={() => { setCreating(true); setEditing(null); }} className="admin-create">+ Add {labels[active].replace(/s$/, "")}</button>}</div>
      <div className="admin-manager-tabs">{(Object.keys(labels) as CollectionName[]).map((key) => <button className={active === key ? "is-active" : ""} onClick={() => switchTab(key)} key={key}>{labels[key]}<b>{data[key].length}</b></button>)}</div>
      <div className="admin-manager-tools"><div><strong>{labels[active]}</strong><span>{visible.length} records</span></div><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search records..." aria-label="Search records" /></div>
      {notice && <p className="admin-manager-notice">{notice}</p>}
      <div className="admin-record-list">
        {visible.length === 0 && <div className="admin-empty"><strong>No records found</strong><span>{search ? "Try a different search." : "New records will appear here."}</span></div>}
        {visible.map((item) => <article key={item.id}><span className={`admin-record-state is-${String(item.status)}`}>{String(item.status || "active")}</span><div><strong>{primary(item)}</strong><small>{secondary(item)}{item.createdAt ? ` · ${new Date(String(item.createdAt)).toLocaleDateString("en-CA")}` : ""}</small></div><p>{String(item.excerpt || item.summary || item.message || item.coverLetter || item.description || item.value || "").slice(0, 120)}</p><button onClick={() => { setEditing(item); setCreating(false); }}>Manage</button></article>)}
      </div>
      {(editing || creating) && <div className="admin-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) { setEditing(null); setCreating(false); } }}><section className="admin-editor" role="dialog" aria-modal="true" aria-label={`${creating ? "Create" : "Edit"} ${labels[active]}`}><header><div><span>{creating ? "NEW RECORD" : "MANAGE RECORD"}</span><h2>{creating ? `Add ${labels[active]}` : primary(editing!)}</h2></div><button onClick={() => { setEditing(null); setCreating(false); }} aria-label="Close">×</button></header><form onSubmit={save}><div className="admin-editor-fields">{fields[active].map((field) => <label className={field.type === "textarea" ? "is-wide" : ""} key={field.name}><span>{field.label}</span>{field.type === "textarea" ? <textarea name={field.name} defaultValue={String((editing || blankDefaults[active])[field.name] ?? "")} rows={field.name === "content" ? 12 : 5} required={field.required} /> : field.type === "select" ? <select name={field.name} defaultValue={String((editing || blankDefaults[active])[field.name] ?? field.options?.[0] ?? "")}>{field.options?.map((option) => <option value={option} key={option}>{option}</option>)}</select> : <input name={field.name} type={field.type || "text"} defaultValue={String((editing || blankDefaults[active])[field.name] ?? "")} required={field.required} />}</label>)}</div><footer>{editing && <button type="button" className="admin-delete" onClick={() => remove(editing)}>Delete record</button>}<span /><button type="button" onClick={() => { setEditing(null); setCreating(false); }}>Cancel</button><button className="admin-save" disabled={busy}>{busy ? "Saving..." : "Save changes"}</button></footer></form></section></div>}
    </section>
  );
}
