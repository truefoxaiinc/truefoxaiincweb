"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), { ssr: false });

export default function DeferredExperience() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const activate = () => setReady(true);
    const idle = window.requestIdleCallback?.(activate, { timeout: 1200 });
    const timer = idle === undefined ? window.setTimeout(activate, 800) : undefined;
    return () => { if (idle !== undefined) window.cancelIdleCallback?.(idle); if (timer !== undefined) window.clearTimeout(timer); };
  }, []);
  return ready ? <><CursorGlow /><Chatbot /></> : null;
}
