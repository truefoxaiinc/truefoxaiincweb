"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const reduce = useReducedMotion();
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const smoothX = useSpring(x, { stiffness: 90, damping: 24, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 24, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine) and (min-width:981px)").matches;
    if (!finePointer || reduce) return;
    setEnabled(true);
    const move = (event: PointerEvent) => { x.set(event.clientX - 240); y.set(event.clientY - 240); };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (!enabled) return null;
  return <motion.div className="cursor-glow" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />;
}
