"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, PauseIcon, PlayIcon } from "@/components/Icons";

const NeuralField = dynamic(() => import("@/components/three/NeuralField"), { ssr: false });

const headline = ["Intelligence", "engineered", "for reality."];

export default function VideoHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  useEffect(() => {
    if (reduce) return;
    const video = videoRef.current;
    if (!video) return;
    const start = () => {
      setVideoReady(true);
      void video.play().catch(() => setPlaying(false));
    };
    const timeout = window.setTimeout(start, 450);
    return () => window.clearTimeout(timeout);
  }, [reduce]);

  useEffect(() => {
    const onVisibility = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) video.pause();
      else if (playing) void video.play().catch(() => undefined);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [playing]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { void video.play(); setPlaying(true); }
    else { video.pause(); setPlaying(false); }
  }

  return (
    <section className="cinematic-hero" ref={ref} aria-labelledby="hero-title">
      <motion.div className="cinematic-media" style={reduce ? undefined : { scale: mediaScale }}>
        <picture className="hero-poster" aria-hidden="true"><source srcSet="/media/video-poster-4k.webp" type="image/webp" /><img src="/media/video-poster-4k.jpg" alt="" /></picture>
        <video
          ref={videoRef}
          className={videoReady ? "is-ready" : ""}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/video-poster-4k.webp"
          aria-label="Abstract cinematic artificial intelligence network"
        >
          <source media="(min-width: 2200px)" src="/media/truefox-ai-4k.mp4" type="video/mp4" />
          <source media="(min-width: 1400px)" src="/media/truefox-ai-1440.mp4" type="video/mp4" />
          <source media="(min-width: 760px)" src="/media/truefox-ai-1080.mp4" type="video/mp4" />
          <source src="/media/truefox-ai-mobile.mp4" type="video/mp4" />
        </video>
        <div className="cinematic-vignette" />
        <div className="cinematic-scan" />
        <div className="cinematic-grid" />
      </motion.div>

      <NeuralField />

      <motion.div className="hero-stage shell" style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}>
        {/* <div className="hero-topline">
          <span><i /> LIVE DELIVERY NETWORK</span>
          <span>KITCHENER / INDIA / WORLDWIDE</span>
        </div> */}

        <div className="hero-copy">
          <motion.p className="hero-kicker" initial={reduce ? false : { opacity: 0, y: 16 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>GLOBAL AI PRODUCT ENGINEERING</motion.p>
          <h1 id="hero-title" aria-label="Intelligence engineered for reality.">
            {headline.map((line, index) => (
              <span className={`hero-line hero-line-${index + 1}`} key={line}>
                <motion.i initial={reduce ? false : { y: "110%" }} animate={reduce ? undefined : { y: "0%" }} transition={{ duration: 0.9, delay: 0.1 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}>{line}</motion.i>
              </span>
            ))}
          </h1>
          <motion.p className="hero-lede" initial={reduce ? false : { opacity: 0, y: 18 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.5 }}>
            Computer vision, generative AI, agentic automation, biometrics, IoT and custom software - designed around real workflows, deployed with control and built to improve.
          </motion.p>
          <motion.div className="hero-actions" initial={reduce ? false : { opacity: 0, y: 18 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.62 }}>
            <Link href="/request-quote" className="button button-primary button-cinematic">Get Started<ArrowUpRight /></Link>
            <Link href="/case-studies" className="button button-glass">Explore selected work<ArrowUpRight /></Link>
          </motion.div>
        </div>

        <motion.aside className="hero-console" initial={reduce ? false : { opacity: 0, x: 36 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.45 }} aria-label="Truefox AI capability summary">
          <div className="console-head"><span>AI ECOSYSTEM</span><b>ACTIVE</b></div>
          <div className="console-core"><span>AGENTIC AI <br /></span><i /><i /><i /></div>
          <div className="console-row"><span>01</span><p><b>PERCEIVE</b>Vision, surveillance & detection</p></div>
          <div className="console-row"><span>02</span><p><b>UNDERSTAND</b>AI agent, insights & decisions</p></div>
          <div className="console-row"><span>03</span><p><b>TRANSFORM</b>Intelligent apps, platform & automation</p></div>
          <div className="console-foot"><span>BUILT TO SCALE </span><b>WEB · MOBILE · CLOUD · EDGE </b></div>
        </motion.aside>

      </motion.div>

      <button className="video-control cinematic-control" onClick={toggleVideo} aria-label={playing ? "Pause background video" : "Play background video"}>{playing ? <PauseIcon /> : <PlayIcon />}</button>
    </section>
  );
}
