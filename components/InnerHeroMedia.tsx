"use client";

import { useEffect, useRef, useState } from "react";

export default function InnerHeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => {
      setReady(true);
      void videoRef.current?.play().catch(() => undefined);
    };
    const id = window.setTimeout(start, 900);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <div className="inner-cinematic-media" aria-hidden="true">
      <picture><source srcSet="/media/video-poster-4k.webp" type="image/webp" /><img src="/media/video-poster-4k.jpg" alt="" /></picture>
      <video ref={videoRef} className={ready ? "is-ready" : ""} muted loop playsInline preload="none" poster="/media/video-poster-4k.webp">
        <source media="(min-width: 900px)" src="/media/truefox-ai-1080.mp4" type="video/mp4" />
        <source src="/media/truefox-ai-mobile.mp4" type="video/mp4" />
      </video>
      <div className="inner-vignette" /><div className="inner-grid" /><div className="inner-beam" />
    </div>
  );
}
