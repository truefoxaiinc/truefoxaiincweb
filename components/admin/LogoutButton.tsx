"use client";

import { useState } from "react";
import { apiUrl } from "@/lib/api";

export default function LogoutButton() {
  const [busy, setBusy] = useState(false);
  async function logout() {
    setBusy(true);
    try {
      await fetch(apiUrl("/api/v1/admin/logout"), { method: "POST", credentials: "include" });
      sessionStorage.removeItem("truefox_admin_token");
    } finally { window.location.assign("/admin/login"); }
  }
  return <button className="admin-logout" onClick={logout} disabled={busy}>{busy ? "Signing out..." : "Sign out"}</button>;
}
