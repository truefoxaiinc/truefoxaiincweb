"use client";

import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CloseIcon, MessageIcon, SendIcon } from "@/components/Icons";
import { apiUrl } from "@/lib/api";
import styles from "./ChatbotLead.module.css";
import { trackEvent } from "@/lib/analytics";

type Citation = { document_id: string; title: string; source: string; excerpt: string; score: number };
type Message = { role: "bot" | "user"; text: string; error?: boolean };
type LeadResult = { status: "sent" | "not_sent"; message: string };
type ChatResult = { conversation_id: string; capability_token?: string | null; answer: string; citations: Citation[] };

function cleanAnswer(text: string) {
  return text.replace(/\s*\[\d+\]/g, "").trim();
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState<string>();
  const [conversationCapability, setConversationCapability] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadSending, setLeadSending] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadSummary, setLeadSummary] = useState("");
  const [leadConsent, setLeadConsent] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const suggestions = useMemo(() => ["AI CCTV security", "Build an AI solution", "Talk about my project"], []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function ask(text: string) {
    if (loading) return;
    setMessages(current => [...current, { role: "user", text }]);
    setLoading(true);
    try {
      const response = await fetch(apiUrl("/api/v1/chat"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(conversationId && conversationCapability ? { "X-Conversation-Capability": conversationCapability } : {}),
        },
        body: JSON.stringify({ message: text, conversation_id: conversationId }),
      });
      const result = (await response.json()) as ChatResult & { error?: string };
      if (!response.ok) {
        if (response.status === 404 && conversationId) {
          setConversationId(undefined);
          setConversationCapability(undefined);
        }
        throw new Error(result.error || "The assistant is unavailable.");
      }
      setConversationId(result.conversation_id);
      if (result.capability_token) setConversationCapability(result.capability_token);
      const answer = cleanAnswer(result.answer);
      setMessages(current => [...current, { role: "bot", text: answer || "I’m sorry — I couldn’t form a useful answer. Could you ask that another way?" }]);
    } catch {
      setMessages(current => [...current, {
        role: "bot",
        text: "I can’t reach the AI service right now. Please try again or contact the Truefox AI team.",
        error: true,
      }]);
    } finally {
      setLoading(false);
    }
  }

  function showLeadForm() {
    const userRequests = messages
      .filter(message => message.role === "user")
      .map(message => message.text.trim())
      .filter(Boolean);
    setLeadSummary(current => current || userRequests.slice(-6).join("; ").slice(0, 3000));
    setLeadOpen(true);
    setLeadError("");
  }

  async function sendLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!conversationId || !conversationCapability || !leadConsent || leadSending || leadSent) return;
    const name = leadName.trim();
    const email = leadEmail.trim();
    const summary = leadSummary.trim();
    if (name.length < 2 || !email || summary.length < 15) {
      setLeadError("Please enter your name, email and a short project summary.");
      return;
    }
    setLeadSending(true);
    setLeadError("");
    try {
      const response = await fetch(apiUrl("/api/v1/leads"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Conversation-Capability": conversationCapability,
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          name,
          email,
          phone: leadPhone.trim() || null,
          company: leadCompany.trim() || null,
          project_summary: summary,
          consent_to_contact: true,
        }),
      });
      const result = (await response.json()) as Partial<LeadResult>;
      if (!response.ok || result.status !== "sent") {
        throw new Error("We couldn't send your enquiry. Please email info@truefoxaiinc.com.");
      }
      setLeadSent(true);
      setLeadOpen(false);
      setMessages(current => [...current, {
        role: "bot",
        text: "Your project enquiry has been emailed to the Truefox AI team. Thank you! They can follow up using the contact details you provided.",
      }]);
    } catch {
      setLeadError("Delivery was not confirmed. Please email info@truefoxaiinc.com directly.");
    } finally {
      setLeadSending(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = input.trim();
    if (!value || loading) return;
    setInput("");
    void ask(value);
  }

  function toggleChat() {
    setOpen(value => {
      const next = !value;
      if (next) trackEvent("chat_start", { chat_type: "website_assistant", link_location: "floating_launcher" });
      return next;
    });
  }

  return (
    <div className="chatbot-wrap">
      <AnimatePresence>
        {open && (
          <motion.aside className="chatbot" initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.96 }} aria-label="Truefox AI assistant">
            <header className="chatbot-head"><div className="bot-avatar">TFX<i /></div><div><strong>TFX · Virtual Consultant</strong><span>Here to help with your project</span></div><button onClick={() => setOpen(false)} aria-label="Close chatbot"><CloseIcon /></button></header>
            <div className="chatbot-status"><span>CANADA</span><span>INDIA</span><span>INTERNATIONAL</span></div>
            <div className="chatbot-messages" ref={listRef} aria-live="polite">
              {messages.length === 0 && <div className="chat-message bot"><span className="mini-avatar">TFX</span><div><p>Hi! Welcome to Truefox AI. What are you looking to build or improve?</p></div></div>}
              {messages.map((message, index) => (
                <div className={`chat-message ${message.role}${message.error ? " error" : ""}`} key={`${message.role}-${index}`}>
                  {message.role === "bot" && <span className="mini-avatar">TFX</span>}
                  <div>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              {loading && <div className="chat-message bot"><span className="mini-avatar">TFX</span><div className="chat-typing" aria-label="Assistant is thinking"><i /><i /><i /></div></div>}
            </div>
            {messages.some(message => message.role === "user") && !leadSent && (
              <div className={styles.leadAction}>
                <button type="button" className={styles.leadToggle} onClick={() => leadOpen ? setLeadOpen(false) : showLeadForm()} disabled={loading || leadSending}>
                  {leadOpen ? "Continue chatting" : "Share my project with the team"}
                </button>
              </div>
            )}
            {leadOpen && !leadSent && (
              <form className={styles.leadForm} onSubmit={sendLead} aria-label="Project enquiry">
                <strong>Send your project enquiry</strong>
                <span>Review the summary and consent before sharing. Your full conversation is not emailed.</span>
                <div className={styles.fields}>
                  <input autoComplete="name" required minLength={2} maxLength={120} placeholder="Your name *" aria-label="Your name" value={leadName} onChange={event => setLeadName(event.target.value)} />
                  <input type="email" autoComplete="email" required maxLength={254} placeholder="Email address *" aria-label="Email address" value={leadEmail} onChange={event => setLeadEmail(event.target.value)} />
                  <input type="tel" autoComplete="tel" maxLength={40} placeholder="Phone (optional)" aria-label="Phone" value={leadPhone} onChange={event => setLeadPhone(event.target.value)} />
                  <input autoComplete="organization" maxLength={160} placeholder="Company (optional)" aria-label="Company" value={leadCompany} onChange={event => setLeadCompany(event.target.value)} />
                </div>
                <label htmlFor="tfx-lead-summary">Project summary *</label>
                <textarea id="tfx-lead-summary" required minLength={15} maxLength={3000} rows={3} value={leadSummary} onChange={event => setLeadSummary(event.target.value)} />
                <label className={styles.consent}><input type="checkbox" checked={leadConsent} onChange={event => setLeadConsent(event.target.checked)} required /> <span>I agree to share these contact details and my project summary with Truefox AI so the team can contact me about this enquiry.</span></label>
                {leadError && <p className={styles.error} role="alert">{leadError}</p>}
                <button className={styles.sendLead} disabled={leadSending || !leadConsent || !conversationId || !conversationCapability} type="submit">
                  {leadSending ? "Sending..." : "Send enquiry to Truefox AI"}
                </button>
                <a className={styles.mailLink} href="mailto:info@truefoxaiinc.com">Or email info@truefoxaiinc.com</a>
              </form>
            )}
            <div className="chat-suggestions">{suggestions.map(s => <button key={s} disabled={loading} onClick={() => void ask(s)}>{s}</button>)}</div>
            <form className="chat-form" onSubmit={submit}><input value={input} maxLength={4000} disabled={loading} onChange={e => setInput(e.target.value)} placeholder="Tell me what you need..." aria-label="Chat message" /><button type="submit" disabled={loading || !input.trim()} aria-label="Send"><SendIcon /></button></form>
            <small>TFX is an AI assistant. Responses may be imperfect; please avoid sharing confidential information.</small>
          </motion.aside>
        )}
      </AnimatePresence>
      <button className="chat-launcher" onClick={toggleChat} aria-expanded={open} aria-label="Open Truefox AI assistant"><MessageIcon /><span>Chat with TFX</span><i /></button>
    </div>
  );
}
