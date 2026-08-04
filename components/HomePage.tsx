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
  ["01", "Security & critical environments", "Situational awareness, identity, event intelligence and governed response."],
  ["02", "Manufacturing & operations", "Inspection, anomaly detection, predictive intelligence and connected control."],
  ["03", "Healthcare & digital health", "Assistive analysis, workflow automation and secure intelligent experiences."],
  ["04", "Retail & customer operations", "Visual analytics, personalization, service assistants and workflow acceleration."],
  ["05", "Enterprise knowledge", "Private search, RAG, document intelligence and human-supervised agentic work."],
  ["06", "Research & new ventures", "Feasibility, prototypes and product engineering for technically ambitious ideas."]
];
const process = [
  ["DISCOVER", "Define the decision", "Align on the business outcome, users, data, constraints and operating reality."],
  ["PROVE", "Remove the unknowns", "Build a focused prototype with representative inputs and measurable acceptance criteria."],
  ["ENGINEER", "Create the system", "Integrate product, model, data, cloud, edge and experience engineering."],
  ["DEPLOY", "Operate with control", "Launch with observability, access controls, human oversight and support."],
  ["IMPROVE", "Learn in production", "Review performance, exceptions, adoption and changing operating conditions."]
];
const faqs = [
  ["What does Truefox AI build?", "Applied AI systems including computer vision, machine learning, generative AI, private assistants, agentic workflows, biometric intelligence, IoT and custom web or mobile products."],
  ["Can solutions run on-premise or at the edge?", "Yes. Architecture can be cloud, private cloud, on-premise, edge or hybrid, depending on latency, privacy, bandwidth, resilience and integration requirements."],
  ["How does an engagement begin?", "Most engagements begin by defining the operational problem, users, data, systems, constraints and success criteria. The next step may be discovery, a prototype, a pilot or direct production engineering."],
  ["Does Truefox AI work internationally?", "Truefox AI is headquartered in Kitchener, Canada, with engineering delivery in India and supports international client engagements."],
  ["How is pricing calculated?", "Pricing depends on scope clarity, technical risk, data readiness, integrations, deployment, validation, support and the preferred commercial model."]
];

function KineticStatement() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-8%", "7%"]);
  return (
    <section className="kinetic-section" ref={ref} aria-label="Truefox AI approach">
      <motion.p style={reduce ? undefined : { x: x1 }}>NOT AI FOR SHOW. <strong>AI FOR OPERATIONS.</strong></motion.p>
      <motion.p style={reduce ? undefined : { x: x2 }}><strong>FROM SIGNAL</strong> TO DECISION TO ACTION.</motion.p>
    </section>
  );
}

export default function HomePage() {
  const reduce = useReducedMotion();
  return (
    <main id="main-content">
      <VideoHero />

      <section className="signal-rail" aria-label="Core capabilities">
        <div className="signal-label"><span>CAPABILITY SIGNAL</span><i /></div>
        <div className="signal-track-wrap">
          <motion.div className="signal-track" animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 32, ease: "linear" }}>
            {[...capabilityTags, ...capabilityTags].map((tag, index) => <span key={`${tag}-${index}`}>{tag}<i /></span>)}
          </motion.div>
        </div>
      </section>

      <section className="section manifesto-section">
        <div className="shell manifesto-grid">
          <Reveal className="manifesto-index"><span>01 / INTENT</span><i /></Reveal>
          <Reveal className="manifesto-copy" delay={0.08}>
            <p className="eyebrow">BEYOND IMAGINATION / GROUNDED IN DELIVERY</p>
            <h2>We turn ambitious intelligence into systems people can trust, use and improve.</h2>
            <div className="manifesto-bottom">
              <p>Truefox AI combines strategy, research, product design, model engineering, software, cloud, embedded systems and deployment. The goal is not a disconnected demonstration—it is a useful operating capability.</p>
              <Link href="/about" className="text-link">Inside Truefox AI<ArrowUpRight /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <KineticStatement />

      <section className="section bento-section">
        <div className="shell">
          <Reveal className="cinematic-heading">
            <div><span className="eyebrow">02 / CAPABILITIES</span><h2>One connected AI engineering stack.</h2></div>
            <p>Choose a focused capability or assemble an integrated platform around your operation.</p>
          </Reveal>
          <Stagger className="capability-bento">
            {solutions.map((item, index) => (
              <StaggerItem className={`capability-cell cell-${index + 1}`} key={item.title}>
                <Link href={item.href || "/services"} className="capability-card">
                  <div className="capability-visual" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i /><i /><i />
                  </div>
                  <div className="capability-copy"><span>{item.eyebrow} / TFX</span><h3>{item.title}</h3><p>{item.text}</p><b>Explore capability<ArrowUpRight /></b></div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section systems-section">
        <div className="shell systems-layout">
          <div className="systems-sticky">
            <Reveal><span className="eyebrow">03 / APPLIED SYSTEMS</span><h2>Built around the environment—not forced into it.</h2><p>Every system is shaped by users, existing infrastructure, data quality, response time, governance and the consequences of being wrong.</p><Link href="/case-studies" className="button button-glass">View case studies<ArrowUpRight /></Link></Reveal>
          </div>
          <div className="system-stories">
            {[
              ["VISION INTELLIGENCE", "Make visual operations observable.", "Live video, images and sensor context become events, evidence and decisions—with operator controls built into the workflow.", ["Detection", "Tracking", "Inspection", "Alerts"]],
              ["PRIVATE KNOWLEDGE", "Put approved knowledge in the flow of work.", "Secure retrieval and assistants provide grounded answers, source visibility and role-aware access across enterprise information.", ["RAG", "Citations", "Access", "Evaluation"]],
              ["AGENTIC EXECUTION", "Automate work without losing control.", "Agents coordinate tools and multi-step tasks while approvals, permissions, run history and exceptions remain visible.", ["Tools", "Approvals", "Audit", "Handoffs"]],
              ["CONNECTED EDGE", "Move intelligence closer to the signal.", "Sensors, firmware, gateways and edge inference support low-latency, resilient and privacy-sensitive operations.", ["Sensors", "Firmware", "Inference", "Fleet"]]
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
          <Reveal className="cinematic-heading"><div><span className="eyebrow">04 / OPERATING CONTEXTS</span><h2>Intelligence across industries.</h2></div><p>Reusable engineering patterns, adapted to each domain’s process, risk and evidence needs.</p></Reveal>
          <div className="industry-list">
            {industries.map(([number, title, text]) => (
              <Reveal className="industry-row" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><i><ArrowUpRight /></i></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-cinematic">
        <div className="shell">
          <Reveal className="cinematic-heading"><div><span className="eyebrow">05 / DELIVERY</span><h2>Momentum without uncontrolled risk.</h2></div><p>A clear path from operational question to measurable production system.</p></Reveal>
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
          <Reveal className="global-copy"><span className="eyebrow">06 / GLOBAL DELIVERY</span><h2>Canada-led.<br />India-powered.<br /><em>Worldwide ready.</em></h2><p>Client leadership in Kitchener connects with engineering delivery in India to support international discovery, product development and long-term improvement.</p><Link href="/contact" className="button button-primary">Connect with our team<ArrowUpRight /></Link></Reveal>
          <Reveal className="world-interface" delay={0.12}>
            <div className="world-ring ring-1" /><div className="world-ring ring-2" /><div className="world-ring ring-3" />
            <div className="world-core">TFX<span>GLOBAL<br />DELIVERY</span></div>
            <div className="world-node node-canada"><i /><span><b>KITCHENER</b>CANADA HQ</span></div>
            <div className="world-node node-india"><i /><span><b>INDIA</b>ENGINEERING</span></div>
            <div className="world-node node-global"><i /><span><b>WORLDWIDE</b>ENGAGEMENTS</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section answer-section">
        <div className="shell answer-layout">
          <Reveal className="answer-intro"><span className="eyebrow">07 / ANSWERS</span><h2>Start with the questions that determine fit.</h2><p>Clear, crawlable answers help buyers, search engines and AI systems understand the company’s capabilities and delivery model.</p><Link href="/faq" className="text-link">View all FAQs<ArrowUpRight /></Link></Reveal>
          <div className="answer-list">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={Math.min(index * 0.03, 0.12)}><details className="answer-item" open={index === 0}><summary><span>0{index + 1}</span><h3>{question}</h3><i /></summary><p>{answer}</p></details></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-media" aria-hidden="true"><video autoPlay muted loop playsInline preload="none" poster="/media/video-poster-4k.webp"><source src="/media/truefox-ai-1080.mp4" type="video/mp4" /></video><i /></div>
        <div className="shell final-cta-content"><Reveal><span className="eyebrow">YOUR NEXT SYSTEM</span><h2>What should intelligence change in your operation?</h2><p>Bring the workflow, constraint or idea. We will help define a practical next move.</p><div><Link href="/request-quote" className="button button-primary">Request a proposal<ArrowUpRight /></Link><Link href="/book-demo" className="button button-glass">Book a consultation<ArrowUpRight /></Link></div></Reveal></div>
      </section>
    </main>
  );
}
