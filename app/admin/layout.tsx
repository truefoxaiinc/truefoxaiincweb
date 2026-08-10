import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin Control Centre",
  description: "Truefox AI website administration and deployment overview.",
  robots: { index: false, follow: false, nocache: true }
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return children;
}
