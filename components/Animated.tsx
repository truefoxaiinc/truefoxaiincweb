"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

const easing = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, className = "", delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 34 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.72, delay, ease: easing }}
    >{children}</motion.div>
  );
}

export function Stagger({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={reduce ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.055 } } }}>{children}</motion.div>;
}

export function StaggerItem({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={reduce ? undefined : { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: easing } } }}>{children}</motion.div>;
}
