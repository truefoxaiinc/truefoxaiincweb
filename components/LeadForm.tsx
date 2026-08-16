"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight } from "@/components/Icons";
import { apiUrl } from "@/lib/api";
import { trackLead } from "@/lib/analytics";

export default function LeadForm({ intent = "contact" }: { intent?: "contact" | "quote" | "demo" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submissionInProgress = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInProgress.current) return;
    submissionInProgress.current = true;
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(apiUrl("/api/v1/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent: payload.consent === "on", intent })
      });
      if (!response.ok) throw new Error("Submission failed");
      trackLead(intent);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submissionInProgress.current = false;
    }
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-grid">
        <label><span>Name *</span><input name="name" required autoComplete="name" /></label>
        <label><span>Work email *</span><input name="email" type="email" required autoComplete="email" /></label>
        <label><span>Company</span><input name="company" autoComplete="organization" /></label>
        <label><span>Phone / WhatsApp</span><input name="phone" autoComplete="tel" /></label>
        <label><span>Area of interest</span><select name="interest" defaultValue=""><option value="" disabled>Select</option><option>Computer vision</option><option>Biometrics</option><option>Private AI assistant</option><option>Agentic automation</option><option>IoT / Edge AI</option><option>Web or mobile product</option><option>Other</option></select></label>
        <label><span>Target timing</span><select name="timing" defaultValue=""><option value="" disabled>Select</option><option>Immediately</option><option>1–3 months</option><option>3–6 months</option><option>Exploring options</option></select></label>
      </div>
      <label className="full-field"><span>Project context *</span><textarea name="message" required rows={7} placeholder="Describe the current process, problem, users, available data and desired result." /></label>
      <label className="consent"><input type="checkbox" name="consent" required /><span>I agree that Truefox AI may use this information to respond to my enquiry.</span></label>
      <div className="form-actions"><button className="button button-primary" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Submit enquiry"}<ArrowUpRight /></button><p>Or email <a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></p></div>
      {status === "success" && <p className="form-notice success">Thank you. Your enquiry has been received by the website endpoint.</p>}
      {status === "error" && <p className="form-notice error">The form could not submit. Please email info@truefoxaiinc.com.</p>}
    </form>
  );
}
