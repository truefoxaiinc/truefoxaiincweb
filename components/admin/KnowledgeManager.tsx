"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { adminHeaders, apiUrl } from "@/lib/api";

type KnowledgeDocument = { id: string; title: string; source: string; mime_type: string; chunk_count: number; created_at: string };

function authOnly(): HeadersInit {
  const token = sessionStorage.getItem("truefox_admin_token") || "";
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export default function KnowledgeManager() {
  const [documents, setDocuments] = useState<KnowledgeDocument[]>([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");

  const refresh = useCallback(async () => {
    const response = await fetch(apiUrl("/api/v1/knowledge"), { cache: "no-store", headers: adminHeaders() });
    if (response.status === 401) { window.location.assign("/admin/login"); return; }
    if (!response.ok) throw new Error("Unable to load knowledge");
    setDocuments(await response.json());
  }, []);

  useEffect(() => { void refresh().catch(() => setNotice("Knowledge service is unavailable.")); }, [refresh]);

  async function addText(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setNotice("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(apiUrl("/api/v1/knowledge/text"), { method: "POST", headers: adminHeaders(), body: JSON.stringify(values) });
      if (!response.ok) throw new Error();
      form.reset(); await refresh(); setNotice("Knowledge added and indexed for the chatbot.");
    } catch { setNotice("Knowledge could not be added."); } finally { setBusy(false); }
  }

  async function upload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setNotice("");
    const form = event.currentTarget;
    try {
      const response = await fetch(apiUrl("/api/v1/knowledge/upload"), { method: "POST", headers: authOnly(), body: new FormData(form) });
      if (!response.ok) throw new Error();
      form.reset(); await refresh(); setNotice("File uploaded and indexed for the chatbot.");
    } catch { setNotice("File could not be indexed. Use PDF, TXT, Markdown, CSV, or HTML."); } finally { setBusy(false); }
  }

  async function synchronize() {
    setBusy(true); setNotice("Synchronizing public website pages…");
    try {
      const response = await fetch(apiUrl("/api/v1/knowledge/sync-website"), { method: "POST", headers: adminHeaders(), body: "{}" });
      if (!response.ok) throw new Error();
      const indexed = await response.json() as KnowledgeDocument[];
      await refresh(); setNotice(`${indexed.length} website pages synchronized and indexed.`);
    } catch { setNotice("Website synchronization failed. Confirm the latest backend is deployed."); } finally { setBusy(false); }
  }

  async function remove(document: KnowledgeDocument) {
    if (!window.confirm(`Remove “${document.title}” from chatbot knowledge?`)) return;
    setBusy(true);
    try {
      const response = await fetch(apiUrl(`/api/v1/knowledge/${document.id}`), { method: "DELETE", headers: adminHeaders() });
      if (!response.ok) throw new Error();
      await refresh(); setNotice("Knowledge removed from the chatbot.");
    } catch { setNotice("Knowledge could not be removed."); } finally { setBusy(false); }
  }

  const chunks = documents.reduce((total, document) => total + document.chunk_count, 0);
  return <section className="admin-panel knowledge-manager" id="knowledge">
    <div className="admin-manager-head"><div><span>AI KNOWLEDGE BASE</span><h2>Train the website assistant</h2><p>Add approved company facts, upload documents, or synchronize the public website.</p></div><button className="admin-create" disabled={busy} onClick={() => void synchronize()}>{busy ? "Working…" : "↻ Sync website"}</button></div>
    <div className="knowledge-metrics"><div><strong>{documents.length}</strong><span>Documents</span></div><div><strong>{chunks}</strong><span>Search chunks</span></div><div><strong>RAG</strong><span>Grounded answers</span></div></div>
    {notice && <p className="admin-manager-notice">{notice}</p>}
    <div className="knowledge-inputs">
      <form onSubmit={addText}><strong>Add approved knowledge</strong><input name="title" required minLength={2} placeholder="Title, e.g. Service pricing policy" /><input name="source" defaultValue="admin:manual" placeholder="Source or page URL" /><textarea name="text" required minLength={20} rows={7} placeholder="Write the exact company information the assistant may use…" /><button disabled={busy}>Add and index</button></form>
      <form onSubmit={upload}><strong>Upload company document</strong><p>PDF, TXT, Markdown, CSV, or HTML up to 10 MB.</p><input name="file" type="file" required accept=".pdf,.txt,.md,.csv,.html,text/*,application/pdf" /><button disabled={busy}>Upload and index</button></form>
    </div>
    <div className="knowledge-list"><header><strong>Indexed knowledge</strong><span>{documents.length} sources</span></header>{documents.length ? documents.map(document => <article key={document.id}><div><strong>{document.title}</strong><small>{document.source}</small></div><span>{document.chunk_count} chunks</span><time>{new Date(document.created_at).toLocaleDateString("en-CA")}</time><button disabled={busy} onClick={() => void remove(document)}>Remove</button></article>) : <div className="admin-empty"><strong>No knowledge indexed</strong><span>Use “Sync website” to teach the chatbot about Truefox AI.</span></div>}</div>
  </section>;
}
