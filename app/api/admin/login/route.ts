import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, adminCookieOptions, createAdminSession } from "@/lib/admin-auth";

const attempts = new Map<string, { count: number; resetAt: number }>();
function equal(value: string, expected: string) {
  const left = Buffer.from(value); const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 10_000) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now(); const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 8) return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  let body: { username?: string; password?: string };
  try { body = await request.json() as { username?: string; password?: string }; }
  catch { return NextResponse.json({ error: "Invalid sign-in request." }, { status: 400 }); }
  const username = String(body.username || ""); const password = String(body.password || "");
  const expectedUser = process.env.ADMIN_USERNAME || ""; const expectedPassword = process.env.ADMIN_PASSWORD || "";
  if (!expectedUser || !expectedPassword || !equal(username, expectedUser) || !equal(password, expectedPassword)) {
    attempts.set(ip, { count: current && current.resetAt > now ? current.count + 1 : 1, resetAt: now + 15 * 60 * 1000 });
    return NextResponse.json({ error: "Incorrect email or password." }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }
  attempts.delete(ip);
  const response = NextResponse.json({ ok: true });
  const sessionSecret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
  response.cookies.set(ADMIN_COOKIE, await createAdminSession(username, sessionSecret), adminCookieOptions);
  return response;
}
