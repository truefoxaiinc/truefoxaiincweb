export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://api.truefoxaiinc.com").replace(/\/$/, "");

export function apiUrl(path: string) {
  return `${API_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function adminHeaders(): HeadersInit {
  const token = typeof window === "undefined" ? "" : sessionStorage.getItem("truefox_admin_token") || "";
  return { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) };
}
