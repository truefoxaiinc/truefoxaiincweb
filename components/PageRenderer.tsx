import Link from "next/link";
import type { PageData } from "@/data/site";
import { ArrowUpRight } from "@/components/Icons";
import { Reveal, Stagger, StaggerItem } from "@/components/Animated";
import LeadForm from "@/components/LeadForm";
import InnerHeroMedia from "@/components/InnerHeroMedia";
import { PageEntityGraph } from "@/components/seo/JsonLd";
import AttentionMinderPolicyPage from "@/components/AttentionMinderPolicyPage";

function CardGrid({ page }: { page: PageData }) {
  if (!page.cards?.length) return null;
  return (
    <Stagger className={`content-card-grid kind-${page.kind}`}>
      {page.cards.map((card, index) => (
        <StaggerItem key={`${card.title}-${index}`}>
          <article className="content-card cinematic-card">
            <div className="content-card-top"><span>{card.eyebrow || String(index + 1).padStart(2, "0")}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            {card.meta && <small>{card.meta}</small>}
            {card.href && (card.href.endsWith(".pdf")
              ? <a href={card.href} target="_blank" rel="noreferrer">Open resource<ArrowUpRight /></a>
              : <Link href={card.href}>Learn more<ArrowUpRight /></Link>)}
            <div className="card-signal" aria-hidden="true"><i /><i /><i /></div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function ContentSections({ page }: { page: PageData }) {
  if (!page.sections?.length) return null;
  if (page.kind === "faq") {
    return (
      <div className="faq-list cinematic-faq">
        {page.sections.map((section, index) => (
          <Reveal key={section.title} delay={Math.min(index * 0.025, 0.16)}>
            <details className="faq-item" open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{section.title}</h3><i /></summary>
              <div><p>{section.text}</p></div>
            </details>
          </Reveal>
        ))}
      </div>
    );
  }
  return (
    <div className={`detail-sections ${page.kind === "legal" ? "legal-copy" : ""}`}>
      {page.sections.map((section, index) => (
        <Reveal className="detail-section cinematic-detail" key={section.title} delay={Math.min(index * 0.035, 0.16)}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><h2>{section.title}</h2><p>{section.text}</p>{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</div>
        </Reveal>
      ))}
    </div>
  );
}

export default function PageRenderer({ page }: { page: PageData }) {
  if (page.slug === "attention-minder-privacy-policy") return <AttentionMinderPolicyPage page={page} />;
  const formIntent = page.slug === "request-quote" ? "quote" : page.slug === "book-demo" ? "demo" : "contact";
  const faqData = page.kind === "faq" ? page.sections?.map(({ title, text }) => ({ title, text })) : undefined;
  return (
    <main id="main-content">
      <PageEntityGraph slug={page.slug} title={page.title} description={page.description} eyebrow={page.navLabel} faqs={faqData} />
      <section className="inner-hero cinematic-inner-hero">
        <InnerHeroMedia />
        <div className="shell inner-hero-content">
          <Reveal className="inner-copy">
            <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><b>{page.navLabel}</b></nav>
            <span className="eyebrow">{page.eyebrow} / TRUEFOX AI</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            {page.cta && <Link className="button button-primary" href={page.cta.href}>{page.cta.label}<ArrowUpRight /></Link>}
          </Reveal>
          <Reveal className="inner-console" delay={0.12}>
            <div><span>PAGE SIGNAL</span><b>0{Math.max(1, page.navLabel.length % 9)}</b></div>
            <p>{page.description}</p>
            <ul><li>Canada headquarters</li><li>India engineering</li><li>International delivery</li></ul>
          </Reveal>
        </div>
        <div className="inner-hero-index">TFX / {page.eyebrow}</div>
      </section>

      {page.stats && (
        <section className="stat-band cinematic-stat-band"><div className="shell stat-grid">{page.stats.map((stat, index) => <div key={stat.label}><span>0{index + 1}</span><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</div></section>
      )}

      <section className="section page-answer-intro">
        <div className="shell answer-first">
          <Reveal><span className="eyebrow">ANSWER FIRST</span><h2>{page.navLabel}: what to know.</h2></Reveal>
          <Reveal delay={0.08}><p>{page.description}</p><div><span>Entity</span><b>Truefox AI Inc.</b><span>Delivery</span><b>Canada · India · International</b><span>Contact</span><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></div></Reveal>
        </div>
      </section>

      <section className="section page-content">
        <div className="shell">
          {(page.kind === "contact" || page.kind === "form") ? (
            <div className="form-layout">
              <Reveal className="form-aside"><span className="eyebrow">{page.kind === "contact" ? "START A CONVERSATION" : "PROJECT DETAILS"}</span><h2>{page.kind === "contact" ? "A clear problem is enough to begin." : "Help us prepare a useful response."}</h2><p>{page.description}</p><ContentSections page={page} /></Reveal>
              <Reveal delay={0.1}><LeadForm intent={formIntent} /></Reveal>
            </div>
          ) : (
            <><CardGrid page={page} /><ContentSections page={page} /></>
          )}
        </div>
      </section>

      {page.cta && page.kind !== "contact" && page.kind !== "form" && (
        <section className="page-cta cinematic-page-cta"><div className="shell"><Reveal><span className="eyebrow">NEXT SIGNAL</span><h2>Turn the question into a practical plan.</h2><p>Share the workflow, environment and desired result. We will help define the next step.</p><Link className="button button-primary" href={page.cta.href}>{page.cta.label}<ArrowUpRight /></Link></Reveal></div></section>
      )}
    </main>
  );
}
