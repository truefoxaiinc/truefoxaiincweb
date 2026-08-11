"use client";

import { FormEvent, useState } from "react";
import type { Job } from "@/lib/cms";
import { apiUrl } from "@/lib/api";

export default function CareerApplicationForm({ jobs }: { jobs: Job[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(apiUrl("/api/v1/applications"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, consent: values.consent === "on" }) });
      if (!response.ok) throw new Error();
      form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }

  if (!jobs.length) return null;
  return (
    <form className="career-application-form" onSubmit={submit} id="career-application">
      <header className="career-form-head">
        <div>
          <span className="eyebrow">APPLY ONLINE</span>
          <h2>START YOUR<br />APPLICATION.</h2>
          <p>Tell us where you do your best work and what you would bring to the team. A concise application is enough to begin.</p>
        </div>
        <aside aria-label="Application information">
          <span>APPLICATION / 01</span>
          <strong>One short form.<br />A thoughtful review.</strong>
          <ul><li>About 4 minutes</li><li>Securely stored</li><li>Reviewed by our team</li></ul>
        </aside>
      </header>

      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>

      <section className="career-form-section">
        <div className="career-form-section-title"><span>01</span><div><strong>Role and contact</strong><small>Choose your position and share your details.</small></div></div>
        <div className="career-form-grid">
          <label className="career-field career-field-wide"><span>Position <b>*</b></span><select name="jobId" required defaultValue=""><option value="" disabled>Select a position</option>{jobs.map((job) => <option value={job.id} key={job.id}>{job.title}</option>)}</select></label>
          <label className="career-field"><span>Full name <b>*</b></span><input name="name" required autoComplete="name" placeholder="Your full name" /></label>
          <label className="career-field"><span>Email address <b>*</b></span><input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
          <label className="career-field"><span>Phone number</span><input name="phone" autoComplete="tel" placeholder="+1 000 000 0000" /></label>
          <label className="career-field"><span>Current location</span><input name="location" autoComplete="address-level2" placeholder="City, country" /></label>
          <label className="career-field"><span>Years of experience</span><input name="experience" placeholder="e.g. 4 years" /></label>
        </div>
      </section>

      <section className="career-form-section">
        <div className="career-form-section-title"><span>02</span><div><strong>Experience and motivation</strong><small>Help us understand your background and interest.</small></div></div>
        <div className="career-form-grid">
          <label className="career-field career-field-wide"><span>Resume or portfolio link</span><input name="resumeUrl" type="url" placeholder="https://your-portfolio.com" /></label>
          <label className="career-field career-field-wide"><span>Why are you interested? <b>*</b></span><textarea name="coverLetter" required minLength={20} rows={7} placeholder="Share relevant experience, the problems you enjoy solving, and why this role feels like a good fit." /></label>
        </div>
      </section>

      <footer className="career-form-actions">
        <label className="career-consent"><input type="checkbox" name="consent" required /><span>I agree that Truefox AI may securely process this information for recruitment purposes.</span></label>
        <button className="button button-primary" disabled={status === "sending"}>{status === "sending" ? "Submitting..." : <>Submit application <span aria-hidden="true">→</span></>}</button>
      </footer>
      {status === "success" && <p className="form-notice success">Application received. Our team can now review it in the admin dashboard.</p>}
      {status === "error" && <p className="form-notice error">The application could not be submitted. Please review the fields and try again.</p>}
    </form>
  );
}
