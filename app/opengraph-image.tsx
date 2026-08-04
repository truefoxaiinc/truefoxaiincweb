import { ImageResponse } from "next/og";

export const alt = "Truefox AI — Intelligence engineered for reality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, color: "#f6f1e8", background: "radial-gradient(circle at 80% 35%, #6b2d00 0, #130a04 28%, #050505 62%)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, letterSpacing: 4 }}><b style={{ color: "#ff7200" }}>TRUEFOX AI INC.</b><span style={{ fontSize: 13 }}>CANADA · INDIA · WORLDWIDE</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 20, letterSpacing: 6, color: "#ff9133", marginBottom: 22 }}>APPLIED AI ENGINEERING</span><strong style={{ fontSize: 92, lineHeight: .92, letterSpacing: -5, maxWidth: 1000 }}>INTELLIGENCE<br />ENGINEERED FOR REALITY.</strong></div>
      <div style={{ display: "flex", gap: 24, fontSize: 17, color: "#c7c0b6" }}><span>Computer Vision</span><span>Generative AI</span><span>Agentic Systems</span><span>Edge Intelligence</span></div>
    </div>, size
  );
}
