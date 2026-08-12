"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { apiUrl } from "@/lib/api";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (window.location.hostname === "www.truefoxaiinc.com") {
      window.location.replace(`https://truefoxaiinc.com${window.location.pathname}${window.location.search}`);
    }
  }, []);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading"); setMessage("");
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch(apiUrl("/api/v1/admin/login"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json() as { detail?: string; access_token?: string };
      if (!response.ok || !result.access_token) throw new Error(result.detail || "Unable to sign in.");
      localStorage.setItem("truefox_admin_token", result.access_token);
      sessionStorage.removeItem("truefox_admin_token");
      const next = new URLSearchParams(window.location.search).get("next");
      window.location.assign(next?.startsWith("/admin") ? next : "/admin");
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Unable to sign in."); }
  }

  return <main className="admin-login" id="main-content"><section className="admin-login-visual"><div className="admin-login-brand"><span>TFX</span><strong>TRUEFOX AI</strong></div><div className="admin-login-message"><span>ADMINISTRATION / SECURE ACCESS</span><h1>CONTROL THE<br /><em>SIGNAL.</em></h1><p>Manage content, opportunities, enquiries and operational website data from one protected workspace.</p></div><div className="admin-login-status"><span><i />Secure session</span><span>Canada · India · International</span></div></section><section className="admin-login-panel"><div className="admin-login-box"><div className="admin-login-mark">TFX</div><span className="admin-login-kicker">CONTROL CENTRE</span><h2>Welcome back.</h2><p>Enter your administrator credentials to continue.</p><form onSubmit={login}><label><span>Email or username</span><div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></svg><input name="username" type="text" autoComplete="username" required autoFocus placeholder="admin@example.com" /></div></label><label><span>Password</span><div><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg><input name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required placeholder="Enter your password" /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "HIDE" : "SHOW"}</button></div></label>{message && <div className="admin-login-error" role="alert">{message}</div>}<button className="admin-login-submit" disabled={status === "loading"}>{status === "loading" ? <><i />Signing in...</> : <>Sign in securely <span>→</span></>}</button></form><div className="admin-login-help"><span>Protected by secure token authentication.</span><Link href="/">Return to website</Link></div></div><footer>© {new Date().getFullYear()} Truefox AI Inc. · Authorized personnel only</footer></section></main>;
}
