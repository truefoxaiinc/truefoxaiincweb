import { NextResponse } from "next/server";
import { createItem, readCms } from "@/lib/cms";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max = 5000) => String(value ?? "").trim().replace(/[<>]/g, "").slice(0, max);

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 30_000) return NextResponse.json({ error: "Request too large" }, { status: 413 });
    const body = await request.json() as Record<string, unknown>;
    if (clean(body.website, 100)) return NextResponse.json({ ok: true });
    const name = clean(body.name, 120);
    const email = clean(body.email, 180).toLowerCase();
    const jobId = clean(body.jobId, 100);
    const coverLetter = clean(body.coverLetter);
    if (name.length < 2 || !emailPattern.test(email) || !jobId || coverLetter.length < 20 || body.consent !== true) return NextResponse.json({ error: "Invalid application" }, { status: 400 });
    const store = await readCms();
    const job = store.jobs.find((item) => item.id === jobId && item.status === "published");
    if (!job) return NextResponse.json({ error: "Position is unavailable" }, { status: 404 });
    const application = await createItem("applications", { status: "new", jobId, jobTitle: job.title, name, email, phone: clean(body.phone, 80), location: clean(body.location, 180), experience: clean(body.experience, 80), resumeUrl: clean(body.resumeUrl, 1000), coverLetter, notes: "" });
    return NextResponse.json({ ok: true, reference: application.id }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Unable to submit application" }, { status: 500 });
  }
}
