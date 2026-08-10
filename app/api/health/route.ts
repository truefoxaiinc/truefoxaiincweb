import { getDatabaseHealth } from "@/lib/database";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET() {
  try {
    const database = getDatabaseHealth();
    return Response.json({ status: database.status === "ok" ? "ok" : "degraded", service: "truefox-ai-web", database: database.status, timestamp: new Date().toISOString() }, { status: database.status === "ok" ? 200 : 503, headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ status: "degraded", service: "truefox-ai-web", database: "error", timestamp: new Date().toISOString() }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
