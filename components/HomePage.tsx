"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "@/components/Icons";
import { Reveal, Stagger, StaggerItem } from "@/components/Animated";
import VideoHero from "@/components/VideoHero";
import { solutions } from "@/data/site";

const capabilityTags = ["COMPUTER VISION", "GENERATIVE AI", "AGENTIC SYSTEMS", "BIOMETRICS", "EDGE AI", "IOT", "MLOPS", "DIGITAL PRODUCTS"];
const industries = [
  ["01", "SECURITY & CRITICAL OPERATIONS", "Situational awareness, identity intelligence and governed response for environments where every decision matters."],
  ["02", "MANUFACTURING & INDUSTRIAL SYSTEMS", "Visual inspection, anomaly detection and predictive insight for safer, more resilient operations."],
  ["03", "HEALTHCARE & DIGITAL HEALTH", "Assistive intelligence and secure digital experiences designed around patients, professionals and care workflows."],
  ["04", "RETAIL & CUSTOMER EXPERIENCE", "Visual insight, personalised service and intelligent workflows that make every interaction more responsive."],
  ["05", "ENTERPRISE KNOWLEDGE", "Secure search, grounded answers and supervised agents that put organisational knowledge to work."],
  ["06", "RESEARCH & NEW VENTURES", "Feasibility, rapid prototyping and product engineering for ambitious ideas without an existing playbook."]
];
const process = [
  ["DISCOVER", "FIND THE RIGHT PROBLEM", "We align on the outcome, the people it serves, the decisions it must improve and the reality in which it needs to work."],
  ["PROVE", "TEST WHAT MUST BE TRUE", "We use representative data and focused prototypes to resolve critical unknowns and define clear evidence of success."],
  ["ENGINEER", "BUILD THE COMPLETE SYSTEM", "We bring product, AI, data, cloud, edge and experience engineering together into one dependable system."],
  ["DEPLOY", "PUT IT TO WORK—WITH CONTROL", "We launch with observability, secure access, human oversight and the operational support needed to run with confidence."],
  ["IMPROVE", "LEARN FROM REALITY", "We monitor performance, exceptions and adoption—then adapt the system as users, data and operating conditions evolve."]
];
const faqs = [
  ["WHAT DOES TRUEFOX AI BUILD?", "We design and engineer AI-powered products for real operational needs—from computer vision, machine learning and intelligent agents to connected devices, enterprise platforms and custom web and mobile applications."],
  ["WHERE CAN YOUR SYSTEMS RUN?", "Wherever the work requires them. We design for cloud, private cloud, on-premise, edge or hybrid environments—balancing response time, privacy, connectivity, resilience and existing infrastructure."],
  ["HOW DOES AN ENGAGEMENT BEGIN?", "We begin by understanding the problem: who it affects, what decisions need to improve, which data and systems are involved and how success will be measured. From there, we recommend the right starting point—discovery, prototype, pilot or production engineering."],
  ["DOES TRUEFOX AI WORK WITH INTERNATIONAL CLIENTS?", "Yes. Truefox AI supports clients internationally through an integrated team operating across Canada and India, with a delivery model designed for close collaboration from discovery through long-term improvement."]
];

function KineticStatement() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-8%", "7%"]);
  return (
    <section className="kinetic-section" ref={ref} aria-label="Truefox AI approach">
      <motion.p style={reduce ? undefined : { x: x1 }}>BEYOND DEMOS. <strong>BUILT FOR REALITY.</strong></motion.p>
      <motion.p style={reduce ? undefined : { x: x2 }}><strong>FROM SIGNAL </strong>TO DECISION TO ACTION.</motion.p>
    </section>
  );
}

export default function HomePage() {
  const reduce = useReducedMotion();
  return (
    <main id="main-content">
      <VideoHero />

      <section className="signal-rail" aria-label="Core capabilities">
        <div className="signal-label"><span>CORE CAPABILITIES</span><i /></div>
        <div className="signal-track-wrap">
          <motion.div className="signal-track" animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 32, ease: "linear" }}>
            {[...capabilityTags, ...capabilityTags].map((tag, index) => <span key={`${tag}-${index}`}>{tag}<i /></span>)}
          </motion.div>
        </div>
      </section>

      <section className="section manifesto-section">
        <div className="shell manifesto-grid">
          <Reveal className="manifesto-index">
            <span>01 / PURPOSE</span>
            <Link href="/about" className="text-link">HOW WE THINK<ArrowUpRight /></Link>
          </Reveal>
          <Reveal className="manifesto-copy" delay={0.08}>
            <p className="eyebrow">BUILT FOR THE REAL WORLD</p>
            <h2>WE BUILD INTELLIGENCE
              THAT EARNS ITS PLACE
              IN THE REAL WORLD.</h2>
            <div className="manifesto-bottom">
              <p>Truefox AI brings strategy, design and engineering together to create intelligent products that solve meaningful problems. From computer vision and AI agents to healthcare platforms and connected systems, we build technology people can trust, teams can use and businesses can grow with.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <KineticStatement />

      <section className="section bento-section">
        <div className="shell">
          <Reveal className="cinematic-heading">
            <div><span className="eyebrow">02 / CAPABILITIES</span><h2>SPECIALISED BY DESIGN. CONNECTED BY NATURE.</h2></div>
            <p>Engage us for one focused capability—or bring them together into an intelligent platform built around the way your operation works.</p>
          </Reveal>
          <Stagger className="capability-bento">
            {solutions.map((item, index) => (
              <StaggerItem className={`capability-cell cell-${index + 1}`} key={item.title}>
                <Link href={item.href || "/services"} className="capability-card">
                  <div className="capability-card-anim">
                    <div className="capability-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><b>Explore<ArrowUpRight /></b></div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section systems-section">
        <div className="shell systems-layout">
          <div className="systems-sticky">
            <Reveal><span className="eyebrow">03 / APPLIED SYSTEMS</span><h2>CONTEXT ISN’T A CONSTRAINT.
              IT’S WHERE GOOD AI BEGINS.</h2><p>We shape every system around its users, infrastructure and data—balancing speed, governance and accuracy according to what is truly at stake.</p><Link href="/case-studies" className="button button-glass">View case studies<ArrowUpRight /></Link></Reveal>
          </div>
          <div className="system-stories">
            {[
              ["VISION INTELLIGENCE", "SEE WHAT’S HAPPENING. KNOW WHAT TO DO NEXT.", "We turn live video, images and sensor data into meaningful events, actionable alerts and traceable evidence—while keeping people in control of every critical decision.", ["DETECT", "TRACK", "INSPECT", "RESPOND"]],
              ["KNOWLEDGE INTELLIGENCE", "TURN WHAT YOUR ORGANISATION KNOWS INTO WHAT YOUR PEOPLE CAN USE.", "We connect approved enterprise knowledge to secure AI assistants—delivering grounded answers, visible sources and role-aware access wherever work happens.", ["RETRIEVE", "VERIFY", "CONTROL", "EVALUATE"]],
              ["AGENT INTELLIGENCE", "MOVE WORK FORWARD. KEEP PEOPLE IN CONTROL.", "Our AI agents coordinate tools, information and multi-step workflows—while permissions, approvals, execution history and exceptions remain visible at every stage.", ["CONNECT", "APPROVE", "AUDIT", "HAND OFF"]],
              ["EDGE INTELLIGENCE", "THINK CLOSER TO THE SIGNAL. ACT WITHOUT THE DELAY.", "We bring intelligence to devices, sensors and gateways—enabling faster decisions, resilient operations and privacy-conscious processing wherever the work happens.", ["SENSE", "INFER", "CONNECT", "MANAGE"]]
            ].map(([label, title, text, tags], index) => (
              <Reveal className="system-story" key={label as string}>
                <div className="system-story-head"><span>0{index + 1}</span><b>{label as string}</b></div>
                <h3>{title as string}</h3><p>{text as string}</p>
                <div>{(tags as string[]).map(tag => <span key={tag}>{tag}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section industries-section">
        <div className="shell">
          <Reveal className="cinematic-heading"><div><span className="eyebrow">04 / INDUSTRIES</span><h2>WE REUSE WHAT WORKS. NEVER THE ASSUMPTIONS.</h2></div><p>Every industry operates differently. We apply proven engineering foundations while designing around each domain’s workflows, risks, regulations and evidence requirements.</p></Reveal>
          <div className="industry-list">
            {industries.map(([number, title, text]) => (
              <Reveal className="industry-row" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><i><ArrowUpRight /></i></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-cinematic">
        <div className="shell">
          <Reveal className="cinematic-heading"><div><span className="eyebrow">05 / DELIVERY</span><h2>PROVE WHAT MATTERS. THEN BUILD IT TO LAST.</h2></div><p>We turn operational questions into testable ideas, working systems and measurable outcomes—reducing uncertainty at every step toward production.</p></Reveal>
          <div className="process-timeline">
            {process.map(([label, title, text], index) => (
              <Reveal className="process-step" key={label} delay={Math.min(index * 0.04, 0.15)}><span>0{index + 1}</span><div><b>{label}</b><h3>{title}</h3><p>{text}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="global-cinematic">
        <div className="global-lines" aria-hidden="true" />
        <div className="shell global-stage">
          <Reveal className="global-copy"><span className="eyebrow">06 / GLOBAL DELIVERY</span><h2>Close to the challenge.<br />Connected through the build.<br /><em>Committed beyond launch.</em></h2><p>Our teams across Canada and India bring strategy, design and engineering into one continuous partnership—turning early questions into dependable products that keep improving in the real world.</p><Link href="/contact" className="button button-primary">Connect with our team<ArrowUpRight /></Link></Reveal>
          <Reveal className="world-interface" delay={0.12}>
            <div className="world-ring ring-1" /><div className="world-ring ring-2" /><div className="world-ring ring-3" />
            <div className="world-core"><b>ONE TEAM</b><span>END-TO-END<br />DELIVERY</span></div>
            <div className="world-node node-canada"><i /><span><b>KITCHENER</b>CANADA HQ</span></div>
            <div className="world-node node-india"><i /><span><b>INDIA</b>ENGINEERING</span></div>
            <div className="world-node node-global"><i /><span><b>WORLDWIDE</b>ENGAGEMENTS</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section answer-section">
        <div className="shell answer-layout">
          <Reveal className="answer-intro"><span className="eyebrow">07 / COMMON QUESTIONS</span><h2>The questions worth answering early.</h2><p>Straight answers about what we build, how we work and what it takes to move from an idea to a dependable system.</p><Link href="/faq" className="text-link">View all FAQs<ArrowUpRight /></Link></Reveal>
          <div className="answer-list">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={Math.min(index * 0.03, 0.12)}><details className="answer-item" open={index === 0}><summary><span>0{index + 1}</span><h3>{question}</h3><i /></summary><p>{answer}</p></details></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-media" aria-hidden="true"><video autoPlay muted loop playsInline preload="none" poster="/media/video-poster-4k.webp"><source src="/media/truefox-ai-1080.mp4" type="video/mp4" /></video></div>
        <div className="shell final-cta-content"><Reveal><span className="eyebrow">YOUR NEXT SYSTEM</span><h2>From operational challenge<br />to intelligent system.</h2><p>Bring us the workflow that slows you down, the decision that needs better information or the idea that deserves to become real. We’ll help determine what to build—and how to move forward with confidence.</p><div><Link href="/request-quote" className="button button-primary">Discuss your project<ArrowUpRight /></Link></div></Reveal></div>
      </section>
    </main>
  );
}
