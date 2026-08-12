"use client";

import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CloseIcon, MessageIcon, SendIcon } from "@/components/Icons";
import { apiUrl } from "@/lib/api";

type Citation = { document_id: string; title: string; source: string; excerpt: string; score: number };
type Message = { role: "bot" | "user"; text: string; error?: boolean };
type ChatResult = { conversation_id: string; answer: string; citations: Citation[] };

function cleanAnswer(text: string) {
  return text.replace(/\s*\[\d+\]/g, "").trim();
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
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
                    <p>{message.text}</p>
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
