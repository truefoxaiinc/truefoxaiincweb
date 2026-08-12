"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CloseIcon, MessageIcon, SendIcon } from "@/components/Icons";
import { apiUrl } from "@/lib/api";

type Citation = { document_id: string; title: string; source: string; excerpt: string; score: number };
type Message = { role: "bot" | "user"; text: string; citations?: Citation[]; error?: boolean };
type ChatResult = { conversation_id: string; answer: string; citations: Citation[] };

const welcome: Message = {
  role: "bot",
  text: "Hello — I’m the Truefox AI assistant. Ask me about services, products, demos, offices, support, or careers.",
};

function citationHref(source: string) {
  if (source.startsWith("/")) return source;
  if (/^https:\/\//i.test(source)) return source;
  return null;
}

function cleanAnswer(text: string) {
  return text.replace(/\s*\[\d+\]/g, "").trim();
}

function uniqueCitations(citations: Citation[] = []) {
  return citations.filter((citation, index, all) =>
    all.findIndex(item => item.document_id === citation.document_id || item.source === citation.source) === index
  ).slice(0, 3);
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [conversationId, setConversationId] = useState<string>();
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const suggestions = useMemo(() => ["Explore services", "Book a demo", "How can I apply?"], []);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, conversation_id: conversationId }),
      });
      const result = (await response.json()) as ChatResult & { error?: string };
      if (!response.ok) throw new Error(result.error || "The assistant is unavailable.");
      setConversationId(result.conversation_id);
      setMessages(current => [...current, { role: "bot", text: result.answer, citations: result.citations }]);
    } catch {
      setMessages(current => [...current, {
        role: "bot",
        text: "I can’t reach the AI service right now. Please try again or contact the Truefox AI team.",
        citations: [{ document_id: "contact", title: "Contact Truefox AI", source: "/contact", excerpt: "", score: 1 }],
        error: true,
      }]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = input.trim();
    if (!value || loading) return;
    setInput("");
    void ask(value);
  }

  return (
    <div className="chatbot-wrap">
      <AnimatePresence>
        {open && (
          <motion.aside className="chatbot" initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.96 }} aria-label="Truefox AI assistant">
            <header className="chatbot-head"><div className="bot-avatar">TFX<i /></div><div><strong>Truefox AI Assistant</strong><span>AI-powered · source grounded</span></div><button onClick={() => setOpen(false)} aria-label="Close chatbot"><CloseIcon /></button></header>
            <div className="chatbot-status"><span>CANADA</span><span>INDIA</span><span>INTERNATIONAL</span></div>
            <div className="chatbot-messages" ref={listRef} aria-live="polite">
              {messages.map((message, index) => (
                <div className={`chat-message ${message.role}${message.error ? " error" : ""}`} key={`${message.role}-${index}`}>
                  {message.role === "bot" && <span className="mini-avatar">TFX</span>}
                  <div>
                    <p>{cleanAnswer(message.text)}</p>
                    {message.citations?.length ? <details className="chat-citations"><summary>View sources</summary><div>{uniqueCitations(message.citations).map((citation) => {
                      const href = citationHref(citation.source);
                      return href ? <Link href={href} key={`${citation.document_id}-${citation.source}`} target={href.startsWith("https://") ? "_blank" : undefined} rel="noreferrer">{citation.title}</Link> : <span key={`${citation.document_id}-${citation.source}`}>{citation.title}</span>;
                    })}</div></details> : null}
                  </div>
                </div>
              ))}
              {loading && <div className="chat-message bot"><span className="mini-avatar">TFX</span><div className="chat-typing" aria-label="Assistant is thinking"><i /><i /><i /></div></div>}
            </div>
            <div className="chat-suggestions">{suggestions.map(s => <button key={s} disabled={loading} onClick={() => void ask(s)}>{s}</button>)}</div>
            <form className="chat-form" onSubmit={submit}><input value={input} maxLength={4000} disabled={loading} onChange={e => setInput(e.target.value)} placeholder="Ask about Truefox AI..." aria-label="Chat message" /><button type="submit" disabled={loading || !input.trim()} aria-label="Send"><SendIcon /></button></form>
            <small>AI answers may be imperfect. Do not share confidential information.</small>
          </motion.aside>
        )}
      </AnimatePresence>
      <button className="chat-launcher" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-label="Open Truefox AI assistant"><MessageIcon /><span>AI Assistant</span><i /></button>
    </div>
  );
}
