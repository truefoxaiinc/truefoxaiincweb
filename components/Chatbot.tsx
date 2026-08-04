"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useMemo, useRef, useState } from "react";
import { CloseIcon, MessageIcon, SendIcon } from "@/components/Icons";

type Message = { role: "bot" | "user"; text: string; href?: string; label?: string };

const answers = [
  { terms: ["service", "build", "develop"], text: "Truefox AI delivers computer vision, biometrics, private AI assistants, agentic automation, IoT, data/ML, web, mobile and cloud systems.", href: "/services", label: "Explore services" },
  { terms: ["product", "security", "biometric", "assistant", "agent"], text: "Our product areas include AI Smart Security, Biometric Intelligence, Private AI Assistants, Agentic Automation and IoT / Edge AI.", href: "/products", label: "View products" },
  { terms: ["price", "cost", "budget", "quote"], text: "Pricing depends on scope, data readiness, integrations, deployment and support. A discovery sprint, pilot, production project or managed support model can be proposed.", href: "/request-quote", label: "Request a quote" },
  { terms: ["demo", "meeting", "consultation", "call"], text: "You can book a tailored product demonstration or technical consultation. Share the environment and area of interest so the session is relevant.", href: "/book-demo", label: "Book a demo" },
  { terms: ["canada", "india", "office", "location"], text: "Truefox AI is headquartered in Kitchener, Ontario, Canada, with an engineering delivery centre in India and international client delivery." },
  { terms: ["support", "help", "issue", "problem"], text: "Existing clients should use the support route defined in their agreement. General support and security reports can be submitted through the Help Centre.", href: "/support", label: "Open Help Centre" },
  { terms: ["career", "job", "hiring", "apply"], text: "Career areas include AI/ML, full-stack product engineering, IoT/embedded systems, QA and delivery. Current openings must be confirmed on the Careers page.", href: "/careers", label: "Explore careers" }
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello — I’m the Truefox AI website assistant. Ask about services, products, pricing, demos, offices, support or careers." }
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const suggestions = useMemo(() => ["Explore services", "Book a demo", "Request a quote"], []);

  function respond(text: string) {
    const lower = text.toLowerCase();
    const answer = answers.find(item => item.terms.some(term => lower.includes(term)));
    const bot: Message = answer
      ? { role: "bot", text: answer.text, href: answer.href, label: answer.label }
      : { role: "bot", text: "The best next step is to share a little context about your project. Our team can then recommend a practical discovery, pilot or delivery approach.", href: "/contact", label: "Contact Truefox AI" };
    window.setTimeout(() => {
      setMessages(current => [...current, bot]);
      window.setTimeout(() => listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" }), 50);
    }, 350);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;
    setMessages(current => [...current, { role: "user", text: value }]);
    setInput("");
    respond(value);
  }

  return (
    <div className="chatbot-wrap">
      <AnimatePresence>
        {open && (
          <motion.aside className="chatbot" initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.96 }} aria-label="Truefox AI assistant">
            <header className="chatbot-head"><div className="bot-avatar">TFX<i /></div><div><strong>Truefox AI Assistant</strong><span>Online · website guidance</span></div><button onClick={() => setOpen(false)} aria-label="Close chatbot"><CloseIcon /></button></header>
            <div className="chatbot-status"><span>CANADA</span><span>INDIA</span><span>INTERNATIONAL</span></div>
            <div className="chatbot-messages" ref={listRef}>
              {messages.map((message, index) => (
                <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                  {message.role === "bot" && <span className="mini-avatar">TFX</span>}
                  <div><p>{message.text}</p>{message.href && <Link href={message.href}>{message.label} →</Link>}</div>
                </div>
              ))}
            </div>
            <div className="chat-suggestions">{suggestions.map(s => <button key={s} onClick={() => { setMessages(current => [...current, { role: "user", text: s }]); respond(s); }}>{s}</button>)}</div>
            <form className="chat-form" onSubmit={submit}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about a project..." aria-label="Chat message" /><button type="submit" aria-label="Send"><SendIcon /></button></form>
            <small>Automated website guidance. Do not share confidential information.</small>
          </motion.aside>
        )}
      </AnimatePresence>
      <button className="chat-launcher" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Open Truefox AI assistant"><MessageIcon /><span>AI Assistant</span><i /></button>
    </div>
  );
}
