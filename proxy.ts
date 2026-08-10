import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

export async function proxy(request: NextRequest) {
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
    return new NextResponse("Admin dashboard is unavailable until ADMIN_USERNAME and ADMIN_PASSWORD are configured.", {
      status: 503,
      headers: { "Cache-Control": "no-store", "Content-Type": "text/plain; charset=utf-8" }
    });
  }

  const pathname = request.nextUrl.pathname;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
  const authenticated = await verifyAdminSession(request.cookies.get(ADMIN_COOKIE)?.value, sessionSecret);
  if (pathname === "/admin/login") return authenticated ? NextResponse.redirect(new URL("/admin", request.url)) : NextResponse.next();
  if (pathname === "/api/admin/login") return NextResponse.next();
  if (authenticated) return NextResponse.next();

  if (pathname.startsWith("/api/admin/")) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  const login = new URL("/admin/login", request.url);
  login.searchParams.set("next", `${pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(login);
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
