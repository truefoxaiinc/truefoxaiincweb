import { NextResponse } from "next/server";
import { getDatabaseHealth } from "@/lib/database";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET() {
  try { return NextResponse.json(getDatabaseHealth(), { headers: { "Cache-Control": "no-store" } }); }
  catch { return NextResponse.json({ status: "error", error: "Database unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } }); }
}
