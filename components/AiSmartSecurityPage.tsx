import Link from "next/link";
import type { PageData } from "@/data/site";
import { PageEntityGraph } from "@/components/seo/JsonLd";

function sectionId(title: string, index: number) {
  return `${String(index + 1).padStart(2, "0")}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

export default function AiSmartSecurityPage({ page }: { page: PageData }) {
  const sections = (page.sections ?? []).map((section, index) => ({ ...section, id: sectionId(section.title, index) }));
  const capabilitiesSection = sections.find(section => section.eyebrow === "CORE CAPABILITIES")?.id;
  const workflowSection = sections.find(section => section.eyebrow === "HOW IT WORKS")?.id;
  const deploymentSection = sections.find(section => section.eyebrow === "DEPLOYMENT")?.id;

  return (
    <main id="main-content" className="attention-policy-page">
      <PageEntityGraph slug={page.slug} title={page.title} description={page.description} eyebrow={page.navLabel} kind={page.kind} cards={page.cards} />

      <header className="policy-hero">
        <div className="shell policy-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><b>AI Smart Security</b></nav>
          <div className="policy-status"><span>AI Smart Security</span><time dateTime="2026-08-14">Capability 01 · Truefox AI</time></div>
          <h1>AI video analytics for<br /><em>better-informed security.</em></h1>
          <p>{page.intro}</p>
          <div className="policy-quick-links">
            {capabilitiesSection && <a href={`#${capabilitiesSection}`}>Explore capabilities</a>}
            {workflowSection && <a href={`#${workflowSection}`}>How it works</a>}
            {deploymentSection && <a href={`#${deploymentSection}`}>Deployment options</a>}
          </div>
        </div>
      </header>

      <section className="shell policy-identity" aria-labelledby="security-brief-title">
        <div>
          <span>THE OPERATING BRIEF</span>
          <h2 id="security-brief-title">Turn live signals into timely awareness.</h2>
          <p>Design video intelligence around the events, locations, response rules and operator decisions that matter in the real environment.</p>
        </div>
        <dl>
          <div><dt>Observe</dt><dd>Approved video and connected operational signals</dd></div>
          <div><dt>Detect</dt><dd>Configured events, conditions and unusual activity</dd></div>
          <div><dt>Contextualise</dt><dd>Relevant visual, sensor and access information</dd></div>
          <div><dt>Notify</dt><dd>The authorised operator or connected workflow</dd></div>
          <div><dt>Verify</dt><dd>Human review before consequential action</dd></div>
          <div><dt>Deploy</dt><dd>Cloud, private cloud, on-premise, edge or hybrid</dd></div>
        </dl>
      </section>

      <section className="shell policy-promises" aria-label="AI Smart Security capability summary">
        {(page.cards ?? []).map((card, index) => (
          <article key={card.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <div className="shell policy-layout">
        <aside className="policy-toc">
          <strong>Explore the capability</strong>
          <nav aria-label="AI Smart Security page contents">
            {sections.map((section, index) => <a key={section.id} href={`#${section.id}`}>{index + 1}. {section.title}</a>)}
          </nav>
        </aside>

        <article className="policy-document">
          <div className="policy-introduction"><p>{page.description}</p></div>
          {sections.map((section, index) => {
            const highlighted = section.eyebrow === "SECURITY & GOVERNANCE" || section.eyebrow === "DELIVERY";
            return (
              <section key={section.id} id={section.id} className={highlighted ? "policy-section policy-section-highlight" : "policy-section"}>
                <h2>{index + 1}. {section.title}</h2>
                <p>{section.text}</p>
                {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
              </section>
            );
          })}
        </article>
      </div>
    </main>
  );
}
