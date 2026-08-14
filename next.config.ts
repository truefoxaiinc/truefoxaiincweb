import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" }
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com"],
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  typedRoutes: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31_536_000 },
  experimental: { optimizePackageImports: ["motion"] },
  async redirects() {
    return [
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      {
        source: "/terms-conditions-and-privacy-policy/",
        destination: "/terms-and-conditions",
        permanent: true
      },
      {
        source: "/terms-conditions-and-privacy-policy",
        destination: "/terms-and-conditions",
        permanent: true
      },
      { source: "/:path+/", destination: "/:path+", permanent: true }
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/media/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/llms.txt", headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }, { key: "Cache-Control", value: "public, max-age=86400" }] }
    ];
  }
};

export default nextConfig;
