import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Truefox AI Inc.",
    short_name: "Truefox AI",
    description: "Applied AI engineering from Canada and India for international organizations.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#ff7200",
    icons: [{ src: "/images/truefox-logo.webp", sizes: "620x190", type: "image/webp", purpose: "any" }]
  };
}
