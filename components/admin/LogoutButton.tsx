"use client";

import { useState } from "react";

export default function LogoutButton() {
  const [busy, setBusy] = useState(false);
  async function logout() {
    setBusy(true);
    try { sessionStorage.removeItem("truefox_admin_token"); } finally { window.location.assign("/admin/login"); }
  }
  return <button className="admin-logout" onClick={logout} disabled={busy}>{busy ? "Signing out..." : "Sign out"}</button>;
}
