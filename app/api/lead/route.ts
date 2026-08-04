import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedIntents = new Set(["contact", "quote", "demo"]);

function clean(value: unknown, max = 4000) {
  return String(value || "").trim().replace(/[<>]/g, "").slice(0, max);
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 25_000) return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });

    const body = await request.json() as Record<string, unknown>;
    if (clean(body.website, 100)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const email = clean(body.email, 180).toLowerCase();
    const message = clean(body.message, 5000);
    const intent = allowedIntents.has(clean(body.intent, 20)) ? clean(body.intent, 20) : "contact";
    if (name.length < 2 || !emailPattern.test(email) || message.length < 15) {
      return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
    }

    const lead = {
      intent,
      name,
      email,
      company: clean(body.company, 180),
      phone: clean(body.phone, 80),
      interest: clean(body.interest, 140),
      timing: clean(body.timing, 80),
      message,
      receivedAt: new Date().toISOString(),
      source: "truefoxaiinc.com"
    };

    const webhook = process.env.LEADS_WEBHOOK_URL;
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", "User-Agent": "TruefoxAI-Web/2.0" },
        body: JSON.stringify(lead),
        cache: "no-store",
        signal: AbortSignal.timeout(8000)
      });
      if (!response.ok) throw new Error("Lead webhook failed");
    } else {
      console.info("Truefox AI lead received", { ...lead, message: `${message.slice(0, 120)}${message.length > 120 ? "…" : ""}` });
    }
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process enquiry" }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}
