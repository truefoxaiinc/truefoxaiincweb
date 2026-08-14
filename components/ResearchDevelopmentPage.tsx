import Link from "next/link";
import type { PageData } from "@/data/site";
import { ArrowUpRight } from "@/components/Icons";
import { PageEntityGraph } from "@/components/seo/JsonLd";

function sectionId(title: string, index: number) {
  return `${String(index + 1).padStart(2, "0")}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

export default function ResearchDevelopmentPage({ page }: { page: PageData }) {
  const sections = (page.sections ?? []).map((section, index) => ({ ...section, id: sectionId(section.title, index) }));
  const questionSection = sections[1]?.id ?? sections[0]?.id;
  const deliverablesSection = sections.find(section => section.eyebrow === "DELIVERABLES")?.id;
  const processSection = sections.find(section => section.eyebrow === "PROCESS")?.id;

  return (
    <main id="main-content" className="attention-policy-page research-development-page">
      <PageEntityGraph slug={page.slug} title={page.title} description={page.description} eyebrow={page.navLabel} kind={page.kind} cards={page.cards} />

      <header className="policy-hero rd-hero">
        <div className="shell policy-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><b>R&amp;D and Prototyping</b></nav>
          <div className="policy-status"><span>Research &amp; Validation</span><time dateTime="2026-08-14">Capability 08 · Truefox AI</time></div>
          <h1>Turn ambitious ideas into<br /><em>testable technology.</em></h1>
          <p>{page.intro}</p>
          <div className="policy-quick-links rd-quick-links">
            {questionSection && <a href={`#${questionSection}`}>Define the question</a>}
            {deliverablesSection && <a href={`#${deliverablesSection}`}>What you receive</a>}
            {processSection && <a href={`#${processSection}`}>Our process</a>}
          </div>
        </div>
      </header>

      <section className="shell policy-identity rd-brief" aria-labelledby="rd-brief-title">
        <div>
          <span>THE ENGAGEMENT BRIEF</span>
          <h2 id="rd-brief-title">Reduce uncertainty before scale.</h2>
          <p>A focused research engagement turns the most important assumption into measurable evidence and a clear next decision.</p>
        </div>
        <dl>
          <div><dt>Start with</dt><dd>One important technical or product question</dd></div>
          <div><dt>Build</dt><dd>The smallest useful experiment</dd></div>
          <div><dt>Test with</dt><dd>Representative data, hardware and conditions</dd></div>
          <div><dt>Measure</dt><dd>Criteria agreed before development</dd></div>
          <div><dt>Conclude</dt><dd>Proceed, modify, learn more or stop</dd></div>
          <div><dt>Next step</dt><dd>A practical production roadmap when viable</dd></div>
        </dl>
      </section>

      <section className="shell policy-promises rd-principles" aria-label="R&D engagement principles">
        {(page.cards ?? []).map((card, index) => (
          <article key={card.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{card.eyebrow}</small>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <div className="shell policy-layout rd-layout">
        <aside className="policy-toc rd-toc">
          <strong>Explore the capability</strong>
          <nav aria-label="R&D page contents">
            {sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.eyebrow || section.title}</a>)}
          </nav>
        </aside>

        <article className="policy-document rd-document">
          <div className="policy-introduction rd-introduction">
            <span>ANSWER FIRST</span>
            <p>{page.description}</p>
          </div>
          {sections.map((section, index) => {
            const highlighted = section.eyebrow === "DELIVERABLES" || section.eyebrow === "PRODUCTION READINESS" || section.eyebrow === "PROCESS";
            return (
              <section key={section.id} id={section.id} className={highlighted ? "policy-section rd-section policy-section-highlight" : "policy-section rd-section"}>
                <div className="rd-section-label"><span>{String(index + 1).padStart(2, "0")}</span><small>{section.eyebrow}</small></div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
              </section>
            );
          })}
        </article>
      </div>

      <section className="rd-final-cta">
        <div className="shell">
          <span>FROM QUESTION TO EVIDENCE</span>
          <h2>Build the smallest useful experiment.<br /><em>Decide what deserves to scale.</em></h2>
          <p>Bring us the technical question, available data and operating constraints. We’ll define a focused proof of concept around the decision you need to make next.</p>
          <Link className="button button-primary" href={page.cta?.href ?? "/request-quote"}>{page.cta?.label ?? "Start a proof of concept"}<ArrowUpRight /></Link>
        </div>
      </section>
    </main>
  );
}
