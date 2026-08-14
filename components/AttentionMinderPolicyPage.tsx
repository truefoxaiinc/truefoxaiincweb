import Link from "next/link";
import type { PageData } from "@/data/site";
import { PageEntityGraph } from "@/components/seo/JsonLd";

const sections = [
  {
    id: "scope",
    title: "1. Scope and acceptance",
    body: [
      "This Privacy Policy and Terms of Use applies to Attention Minder, including its Android application, website, and related services (the “Service”). Attention Minder is developed and published by True fox AI Inc, operating online as Truefox AI Inc.",
      "By accessing or using the Service, you acknowledge this policy. If you do not agree, discontinue use of the Service. Additional notices shown within the app may apply to a particular feature."
    ]
  },
  {
    id: "data-collected",
    title: "2. Information we collect",
    body: ["We limit collection to information reasonably necessary to operate, secure, and improve Attention Minder."],
    bullets: [
      "Account and profile data: name and email address.",
      "Attention and engagement data: generated attention scores, engagement analytics, posture signals, screen-engagement signals, and parent or teacher reports associated with the account.",
      "Technical data: device type, operating system, app version, crash logs, session duration, and app-usage diagnostics.",
      "Support data: information you choose to provide when contacting support or submitting feedback."
    ]
  },
  {
    id: "camera",
    title: "3. Camera data and real-time analysis",
    body: [
      "Attention Minder uses the device camera to perform real-time analysis of attention shifts, eye or face direction, posture, screen engagement, and non-medical signs of distraction.",
      "Camera frames are processed live for this feature. Attention Minder does not record camera video, capture screenshots, store camera images, or retain facial biometric templates. Camera frames are not retained after real-time processing."
    ]
  },
  {
    id: "use",
    title: "4. How we use information",
    bullets: [
      "Provide focus and attention-monitoring features requested by the user.",
      "Generate account-linked attention insights and parent or teacher reports.",
      "Maintain accounts, authentication, preferences, and customer support.",
      "Diagnose crashes, protect the Service, prevent misuse, and improve reliability.",
      "Comply with applicable legal obligations."
    ],
    body: ["We do not sell personal data or trade it for advertising purposes, and we do not use camera data for advertising."]
  },
  {
    id: "sharing",
    title: "5. When information may be shared",
    body: [
      "We do not sell personal data. Information may be made available to the parent, guardian, teacher, or institution authorized for the relevant account; to service providers that host, secure, analyze, or support the Service under contractual confidentiality and data-protection obligations; or when required by law, safety, or the protection of legal rights.",
      "If a third-party service or software development kit processes data for Attention Minder, its handling must also be accurately disclosed in the app’s Google Play Data safety declaration."
    ]
  },
  {
    id: "children",
    title: "6. Children, schools, and consent",
    body: [
      "Attention Minder is intended for parents, teachers, institutions, and supervised students aged five and above. A parent, legal guardian, or authorized educational institution must authorize use by a minor. Users under 18 must not use the Service independently without appropriate supervision and authorization.",
      "We seek to collect only the minimum information necessary for the Service and to handle children’s data in accordance with applicable requirements, including COPPA where it applies."
    ]
  },
  {
    id: "retention",
    title: "7. Data retention",
    body: [
      "Camera video and images are not recorded or retained. Live camera frames are discarded immediately after real-time processing.",
      "Account information, profile information, attention analytics, and reports are retained while the account remains active so the Service can provide account history and features. When an account is deleted, account-linked personal data is scheduled for permanent deletion from active systems.",
      "Residual copies may remain in encrypted backups for up to 30 days before being overwritten through the normal backup cycle. Limited security and diagnostic logs may be retained for up to 90 days. Information that must be retained for fraud prevention, security, dispute resolution, or a legal obligation is isolated, access-restricted, used only for that purpose, and deleted or anonymized when the applicable obligation ends."
    ]
  },
  {
    id: "account-deletion",
    title: "8. Account and data deletion",
    body: [
      "Deleting an Attention Minder account permanently removes the account and the personal data associated with it from active systems; it is not merely deactivated or frozen. This includes profile information and account-linked attention analytics and reports, subject only to the limited retention described above.",
      "In the app: sign in to Attention Minder, open Profile, select Delete Account, review the confirmation, and confirm deletion. The deletion control is available inside the Profile section.",
      "Outside the app: email info@truefoxaiinc.com from the email address associated with the account, use the subject “Attention Minder Account Deletion Request,” and state that you want the account and associated data deleted. We may request limited information solely to verify account ownership before completing the request.",
      "Uninstalling the app does not by itself delete an account. If a paid subscription is managed through Google Play, cancel that subscription separately in Google Play; deleting the account does not automatically cancel a store-managed subscription."
    ]
  },
  {
    id: "security",
    title: "9. Data security",
    body: [
      "We use administrative, technical, and organizational safeguards designed to protect information, including encryption in transit, access controls, secure infrastructure, and security review. No system is perfectly secure, and users remain responsible for protecting their login credentials and promptly reporting suspected unauthorized access."
    ]
  },
  {
    id: "choices",
    title: "10. User choices and rights",
    body: [
      "Depending on applicable law, users or their authorized parent or guardian may request access to, correction of, or deletion of personal data, or object to or restrict certain processing. Requests may be submitted to info@truefoxaiinc.com. We may verify identity or authority before acting on a request."
    ]
  },
  {
    id: "medical",
    title: "11. Not medical advice",
    body: [
      "Attention Minder is a supportive educational and behavioral tool. It is not a medical device, does not diagnose ADHD or any other condition, and does not replace professional evaluation, therapy, treatment, or medical advice. Seek qualified professional advice for health, learning, attention, or mental-health concerns. Contact an appropriate professional immediately in an emergency."
    ]
  },
  {
    id: "acceptable-use",
    title: "12. Acceptable use",
    body: ["You must not misuse the Service. Prohibited conduct includes:"],
    bullets: [
      "Unlawful, harmful, harassing, threatening, abusive, defamatory, obscene, hateful, or illegal activity.",
      "Unauthorized access, interference with security, malware, or disruption of the Service.",
      "Unauthorized bots, scrapers, crawlers, copying, reverse engineering, or interference with AI models or network architecture.",
      "Surveillance, spying, or unethical monitoring."
    ]
  },
  {
    id: "accounts",
    title: "13. Account responsibility and termination",
    body: [
      "Users must provide accurate account information, protect credentials, avoid account sharing, and promptly report unauthorized access. True fox AI Inc may suspend or terminate access for material violations, inaccurate information, abuse, or security threats. Users may end their use at any time and may delete their account using the process above."
    ]
  },
  {
    id: "intellectual-property",
    title: "14. Intellectual property and feedback",
    body: [
      "The Service, including its software, AI systems, design, graphics, and original content, is owned by True fox AI Inc or its licensors and may not be reproduced without permission. Feedback and suggestions may be used by True fox AI Inc on a royalty-free, perpetual basis. Users must not submit harmful or unlawful content."
    ]
  },
  {
    id: "disclaimers",
    title: "15. Disclaimers and limitation of liability",
    body: [
      "The Service is provided “as is” and “as available.” To the extent permitted by law, True fox AI Inc disclaims warranties concerning uninterrupted availability, the accuracy of AI-generated analysis, and fitness for medical use. True fox AI Inc is not liable for losses caused by misuse, service interruptions, or reliance on incorrect AI insights to the extent permitted by applicable law."
    ]
  },
  {
    id: "third-parties",
    title: "16. Third-party services and links",
    body: [
      "The Service may link to or integrate third-party services. Their privacy practices and content are governed by their own policies. True fox AI Inc is not responsible for unaffiliated third-party websites."
    ]
  },
  {
    id: "changes-law",
    title: "17. Changes and governing law",
    body: [
      "We may update this policy to reflect changes to the Service, law, or data practices. The updated date will be revised when changes are posted. Material changes may also be communicated in the app where appropriate. Continued use after an effective update constitutes acceptance of the revised Terms of Use.",
      "These Terms are governed by applicable law, and disputes will be handled by courts with proper jurisdiction."
    ]
  },
  {
    id: "contact",
    title: "18. Privacy contact",
    body: [
      "Questions, privacy requests, or account-deletion requests may be sent to info@truefoxaiinc.com. Please identify Attention Minder in the subject line so the request can be routed correctly."
    ]
  }
] as const;

export default function AttentionMinderPolicyPage({ page }: { page: PageData }) {
  return (
    <main id="main-content" className="attention-policy-page">
      <PageEntityGraph slug={page.slug} title={page.title} description={page.description} eyebrow={page.navLabel} kind={page.kind} sections={page.sections} />
      <header className="policy-hero">
        <div className="shell policy-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><b>Privacy Policy</b></nav>
          <div className="policy-status"><span>Privacy Policy</span><time dateTime="2025-11-25">Updated 25 November 2025</time></div>
          <h1>Attention Minder<br /><em>Privacy Policy</em></h1>
          <p>A clear explanation of how Attention Minder handles user data, camera-based analysis, retention, security, and account deletion.</p>
          <div className="policy-quick-links"><a href="#account-deletion">Delete your account</a><a href="#retention">Data retention</a><a href="#contact">Contact privacy team</a></div>
        </div>
      </header>

      <section className="shell policy-identity" aria-labelledby="developer-identity-title">
        <div><span>APP &amp; DEVELOPER IDENTITY</span><h2 id="developer-identity-title">Who provides Attention Minder</h2><p>These identifiers match the organization developer account associated with the Google Play listing.</p></div>
        <dl>
          <div><dt>App name</dt><dd>Attention Minder</dd></div>
          <div><dt>Developer name</dt><dd>attentionminder234</dd></div>
          <div><dt>Legal entity</dt><dd>True fox AI Inc</dd></div>
          <div><dt>Developer account ID</dt><dd>7885196042486487392</dd></div>
          <div><dt>Address</dt><dd>72 Victoria St S, Suite 300<br />Kitchener, ON N2G 4Y9, Canada</dd></div>
          <div><dt>Privacy contact</dt><dd><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a><br /><a href="tel:+15197782078">+1 519 778 2078</a></dd></div>
        </dl>
      </section>

      <section className="shell policy-promises" aria-label="Privacy summary">
        <article><span>01</span><h2>No camera recordings</h2><p>Live camera frames are processed in real time and are not recorded or retained.</p></article>
        <article><span>02</span><h2>Defined retention</h2><p>Account data is held while needed for the Service and removed under the schedule below.</p></article>
        <article><span>03</span><h2>Account deletion</h2><p>Delete in Profile inside the app, or request deletion by email if you cannot access the app.</p><a href="#account-deletion">View deletion steps →</a></article>
      </section>

      <div className="shell policy-layout">
        <aside className="policy-toc">
          <strong>On this page</strong>
          <nav aria-label="Privacy policy contents">
            {sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
          </nav>
        </aside>
        <article className="policy-document">
          <div className="policy-introduction">
            <p>This document combines the Privacy Policy and Terms of Use for Attention Minder. The privacy disclosures—including identity, collection, sharing, retention, and deletion—apply specifically to the Attention Minder app and Service.</p>
          </div>
          {sections.map(section => (
            <section key={section.id} id={section.id} className={section.id === "account-deletion" ? "policy-section policy-section-highlight" : "policy-section"}>
              <h2>{section.title}</h2>
              {section.body?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {"bullets" in section && section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
