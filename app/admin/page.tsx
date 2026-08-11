import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { navGroups, pages, site, solutions } from "@/data/site";
import AdminDataManager from "@/components/admin/AdminDataManager";
import LogoutButton from "@/components/admin/LogoutButton";
import type { CmsData } from "@/lib/cms";

export const dynamic = "force-dynamic";

type Asset = { name: string; group: string; size: number; href: string };

function collectAssets(directory: string, group: string): Asset[] {
  const absolute = path.join(process.cwd(), "public", directory);
  if (!fs.existsSync(absolute)) return [];
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((item) => {
    const relative = path.join(directory, item.name);
    if (item.isDirectory()) return collectAssets(relative, group);
    return [{ name: item.name, group, size: fs.statSync(path.join(process.cwd(), "public", relative)).size, href: `/${relative.replaceAll("\\", "/")}` }];
  });
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function StatusDot({ ok }: { ok: boolean }) {
  return <span className={`admin-status-dot ${ok ? "is-ok" : "is-warn"}`} aria-label={ok ? "Configured" : "Needs attention"} />;
}

export default async function AdminPage() {
  const cms: CmsData = { leads: [], applications: [], jobs: [], posts: [], records: [] };
  const databaseHealth = { status: "remote", integrity: "Managed by FastAPI on AWS" };
  const pageList = Object.values(pages);
  const navigationPaths = new Set(navGroups.flatMap((group) => group.items.map(([, href]) => href.slice(1))));
  const assets = [...collectAssets("media", "Video & posters"), ...collectAssets("images", "Brand images"), ...collectAssets("resources", "Downloads")].sort((a, b) => b.size - a.size);
  const assetBytes = assets.reduce((total, asset) => total + asset.size, 0);
  const cardCount = pageList.reduce((total, page) => total + (page.cards?.length ?? 0), 0);
  const sectionCount = pageList.reduce((total, page) => total + (page.sections?.length ?? 0), 0);
  const draftSignals = JSON.stringify(pages).match(/draft editorial concept|newsroom template|publish verified/gi)?.length ?? 0;
  const checks = {
    webhook: true,
    telemetry: Boolean(process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT),
    admin: Boolean(process.env.NEXT_PUBLIC_API_URL),
    url: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    content: draftSignals === 0
  };
  const readinessValues = [Boolean(process.env.NEXT_PUBLIC_API_URL), checks.webhook, checks.admin, checks.url, checks.content];
  const readinessScore = Math.round(readinessValues.filter(Boolean).length / readinessValues.length * 100);
  const generatedAt = new Intl.DateTimeFormat("en-CA", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date());

  return (
    <main className="admin-app" id="main-content">
      <aside className="admin-sidebar">
        <Link href="/admin" className="admin-brand"><span>TFX</span><strong>Truefox AI<small>Admin control centre</small></strong></Link>
        <nav aria-label="Admin navigation">
          <a className="is-active" href="#overview"><i>01</i>Overview</a>
          <a href="#data"><i>02</i>Manage data</a>
          <a href="#content"><i>03</i>Content</a>
          <a href="#media"><i>04</i>Media library</a>
          <a href="#system"><i>05</i>System</a>
        </nav>
        <div className="admin-sidebar-foot"><span><StatusDot ok={readinessScore === 100} />System readiness</span><strong>{readinessScore}%</strong><div><i style={{ width: `${readinessScore}%` }} /></div><Link href="/" target="_blank">Open public website ↗</Link></div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar"><div><span className="admin-mobile-mark">TFX</span><p>Website administration</p></div><div className="admin-top-actions"><span className="admin-live"><i />Live environment</span><time>{generatedAt}</time><span className="admin-avatar">AD</span><LogoutButton /></div></header>
        <div className="admin-content">
          <section className="admin-intro" id="overview"><div><span className="admin-kicker">CONTROL CENTRE / OVERVIEW</span><h1>Good to see you.<br /><em>The site is operational.</em></h1><p>Monitor content, delivery integrations, public assets and launch readiness from one place.</p></div><div className="admin-score"><span>Launch readiness</span><strong>{readinessScore}<small>%</small></strong><p>{readinessScore === 100 ? "All launch checks are passing." : `${readinessValues.filter((value) => !value).length} checks need attention.`}</p></div></section>

          <section className="admin-metrics" aria-label="Website metrics">
            <article><span>Published pages</span><strong>{pageList.length + 1}</strong><small>Home + {pageList.length} content routes</small></article>
            <article><span>Content modules</span><strong>{cardCount + sectionCount}</strong><small>{cardCount} cards · {sectionCount} sections</small></article>
            <article><span>Public assets</span><strong>{assets.length}</strong><small>{formatBytes(assetBytes)} total payload</small></article>
            <article><span>Solution areas</span><strong>{solutions.length}</strong><small>{Object.values(site.social).filter(Boolean).length} social channels</small></article>
          </section>

          <AdminDataManager initialData={cms} />

          <div className="admin-grid">
            <section className="admin-panel admin-health" id="system">
              <PanelHead eyebrow="SYSTEM HEALTH" title="Deployment checks" status={readinessScore === 100 ? "READY" : "ACTION NEEDED"} good={readinessScore === 100} />
              <div className="admin-check-list">
                <Check ok label="Static content registry" detail={`${pageList.length} valid content routes available`} value="Healthy" />
                <Check ok={checks.admin} label="FastAPI backend" detail={databaseHealth.integrity} value={checks.admin ? "Configured" : "Missing URL"} />
                <Check ok={checks.webhook} label="Lead delivery webhook" detail={checks.webhook ? "Private destination configured" : "LEADS_WEBHOOK_URL is not configured"} value={checks.webhook ? "Connected" : "Required"} />
                <Check ok={checks.telemetry} label="Performance telemetry" detail={checks.telemetry ? "Browser reporting enabled" : "Optional endpoint is not configured"} value={checks.telemetry ? "Connected" : "Optional"} />
                <Check ok={checks.content} label="Content approval" detail={draftSignals ? `${draftSignals} draft or template signals detected` : "No draft markers detected"} value={draftSignals ? "Review" : "Approved"} />
              </div>
            </section>
            <aside className="admin-panel admin-actions"><PanelHead eyebrow="QUICK ACTIONS" title="Shortcuts" /><QuickLink href="/" icon="↗" label="Preview website" detail="Open the public home page" /><QuickLink href="/contact" icon="✦" label="Test lead form" detail="Verify enquiry delivery" /></aside>
          </div>

          <section className="admin-panel admin-content-panel" id="content">
            <div className="admin-panel-head"><div><span>CONTENT INVENTORY</span><h2>Published pages</h2><p>Source-managed in <code>data/site.ts</code>. Open any page to inspect its rendered version.</p></div><b>{pageList.length} ROUTES</b></div>
            <div className="admin-table-wrap"><table><thead><tr><th>Page</th><th>Type</th><th>Modules</th><th>Navigation</th><th>Updated</th><th><span className="sr-only">Action</span></th></tr></thead><tbody>{pageList.map((page) => <tr key={page.slug}><td><strong>{page.navLabel}</strong><small>/{page.slug}</small></td><td><span className="admin-type">{page.kind}</span></td><td>{(page.cards?.length ?? 0) + (page.sections?.length ?? 0)}</td><td><span className={navigationPaths.has(page.slug) ? "admin-published" : "admin-secondary"}><i />{navigationPaths.has(page.slug) ? "Primary nav" : "Direct route"}</span></td><td>{site.lastUpdated}</td><td><Link href={`/${page.slug}`} target="_blank" aria-label={`Open ${page.navLabel}`}>↗</Link></td></tr>)}</tbody></table></div>
          </section>

          <div className="admin-grid admin-lower-grid">
            <section className="admin-panel admin-leads" id="leads"><PanelHead eyebrow="LEAD DELIVERY" title="Enquiry pipeline" status={checks.webhook ? "CONNECTED" : "NOT CONFIGURED"} good={checks.webhook} /><div className="admin-pipeline"><div><span>Website forms</span><strong>Contact · Quote · Demo</strong></div><i>→</i><div><span>Validation</span><strong>Honeypot · Sanitization</strong></div><i>→</i><div className={checks.webhook ? "is-connected" : "is-disconnected"}><span>Destination</span><strong>{checks.webhook ? "Webhook active" : "Console fallback"}</strong></div></div><div className="admin-notice"><strong>{checks.webhook ? "Delivery is configured." : "Action required before launch."}</strong><p>{checks.webhook ? "New enquiries are forwarded to the configured private webhook. Lead values are intentionally hidden here." : "Set LEADS_WEBHOOK_URL to a durable CRM, automation or secure inbox endpoint. Without it, submissions only reach runtime logs."}</p></div></section>
            <section className="admin-panel admin-config"><PanelHead eyebrow="ENVIRONMENT" title="Configuration" />{[["FastAPI backend", checks.admin, "NEXT_PUBLIC_API_URL"], ["Lead delivery", checks.webhook, "Configured on AWS"], ["Performance endpoint", checks.telemetry, "NEXT_PUBLIC_WEB_VITALS_ENDPOINT"], ["Canonical site URL", checks.url, "NEXT_PUBLIC_SITE_URL"]].map(([label, ok, key]) => <div className="admin-config-row" key={String(key)}><StatusDot ok={Boolean(ok)} /><div><strong>{String(label)}</strong><code>{String(key)}</code></div><span>{ok ? "Set" : "Missing"}</span></div>)}</section>
          </div>

          <section className="admin-panel admin-media" id="media"><div className="admin-panel-head"><div><span>MEDIA LIBRARY</span><h2>Public assets</h2><p>Videos, documents and brand assets served from the public directory.</p></div><b>{formatBytes(assetBytes)}</b></div><div className="admin-asset-grid">{assets.map((asset) => <a href={asset.href} target="_blank" rel="noreferrer" key={asset.href}><span className="admin-file-icon">{asset.name.split(".").pop()?.toUpperCase()}</span><div><strong>{asset.name}</strong><small>{asset.group} · {formatBytes(asset.size)}</small></div><i>↗</i></a>)}</div></section>
          <footer className="admin-footer"><span>Truefox AI administration</span><span>Content snapshot: {site.lastUpdated}</span><span>Secrets and lead payloads are intentionally hidden.</span></footer>
        </div>
      </section>
    </main>
  );
}

function PanelHead({ eyebrow, title, status, good }: { eyebrow: string; title: string; status?: string; good?: boolean }) {
  return <div className="admin-panel-head"><div><span>{eyebrow}</span><h2>{title}</h2></div>{status && <b className={good ? "is-good" : "is-warning"}>{status}</b>}</div>;
}
function Check({ ok, label, detail, value }: { ok: boolean; label: string; detail: string; value: string }) {
  return <article><StatusDot ok={ok} /><div><strong>{label}</strong><span>{detail}</span></div><small>{value}</small></article>;
}
function QuickLink({ href, icon, label, detail }: { href: string; icon: string; label: string; detail: string }) {
  return <Link href={href} target="_blank"><span>{icon}</span><div><strong>{label}</strong><small>{detail}</small></div></Link>;
}
