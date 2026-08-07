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
    <Stagger className={`content-card-grid kind-${page.kind}${page.slug === "about" ? " about-card-grid" : page.slug === "why-choose-us" ? " why-card-grid" : page.slug === "careers" ? " careers-card-grid" : page.slug === "products" ? " products-card-grid" : page.slug === "services" ? " services-card-grid" : page.slug === "clients-partners" ? " partnerships-card-grid" : page.slug === "case-studies" ? " case-studies-card-grid" : page.slug === "support" ? " support-card-grid" : ""}`}>
      {page.cards.map((card, index) => (
        <StaggerItem key={`${card.title}-${index}`}>
          <article className="content-card cinematic-card">
            <div className="content-card-top"><span>{card.eyebrow || String(index + 1).padStart(2, "0")}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            {card.meta && <small>{card.meta}</small>}
            {card.href && (card.href.endsWith(".pdf")
              ? <a href={card.href} target="_blank" rel="noreferrer">Open resource<ArrowUpRight /></a>
              : <Link href={card.href}>{page.slug === "products" ? "Explore Product" : "Learn more"}<ArrowUpRight /></Link>)}
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
          <div>{section.eyebrow ? <div className="detail-title"><span className="detail-eyebrow">{section.eyebrow}</span><h2>{section.title}</h2></div> : <h2>{section.title}</h2>}{section.text && (page.slug === "privacy-policy" && section.title === "CONTACT US" ? <p>For privacy-related questions or requests, contact:<br /><br />Truefox AI Inc.<br /><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></p> : page.slug === "terms-and-conditions" && section.title === "CONTACT US" ? <p>For questions about these terms, contact:<br /><br />Truefox AI Inc.<br /><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></p> : <p>{section.text}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</div>
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
      <section className={`inner-hero cinematic-inner-hero${page.slug === "request-quote" ? " request-quote-hero" : page.slug === "about" ? " about-hero" : page.slug === "why-choose-us" ? " why-choose-us-hero" : page.slug === "careers" ? " careers-hero" : page.slug === "products" ? " products-hero" : page.slug === "services" ? " services-hero" : page.slug === "book-demo" ? " book-demo-hero" : page.slug === "clients-partners" ? " partnerships-hero" : page.slug === "case-studies" ? " case-studies-hero" : page.slug === "faq" ? " faq-hero" : page.slug === "support" ? " support-hero" : page.slug === "contact" ? " contact-hero" : page.slug === "privacy-policy" ? " privacy-policy-hero" : page.slug === "terms-and-conditions" ? " terms-hero" : ""}`}>
        <InnerHeroMedia />
        <div className="shell inner-hero-content">
          <Reveal className="inner-copy">
            <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><b>{page.navLabel}</b></nav>
            <span className="eyebrow">{page.slug === "why-choose-us" ? "TRUEFOX AI" : `${page.eyebrow} / TRUEFOX AI`}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            {page.cta && page.slug !== "careers" && <Link className="button button-primary" href={page.cta.href}>{page.cta.label}<ArrowUpRight /></Link>}
          </Reveal>
          <Reveal className="inner-console" delay={0.12}>
            {page.slug === "request-quote" ? (
              <>
                <div><span>WHAT HAPPENS NEXT</span></div>
                <p>A THOUGHTFUL RESPONSE,<br />BUILT AROUND YOUR CONTEXT.</p>
                <ul><li>REVIEW · WE UNDERSTAND THE CHALLENGE</li><li>CLARIFY · WE IDENTIFY WHAT MATTERS</li><li>RECOMMEND · WE DEFINE THE RIGHT NEXT STEP</li></ul>
              </>
            ) : page.slug === "about" ? (
              <>
                <div><span>ABOUT TRUEFOX AI</span><b>08</b></div>
                <p>ENGINEERING INTELLIGENCE<br />FROM FIRST QUESTION<br />TO PRODUCTION.</p>
                <ul><li>CANADA · HEADQUARTERS &amp; PARTNERSHIP</li><li>INDIA · PRODUCT &amp; ENGINEERING</li><li>WORLDWIDE · CLIENT ENGAGEMENTS</li></ul>
              </>
            ) : page.slug === "why-choose-us" ? (
              <>
                <div><span>THE TRUEFOX DIFFERENCE</span><b>04</b></div>
                <p>WHY ORGANISATIONS TRUST TRUEFOX AI<br />WITH COMPLEX SYSTEMS AND DIGITAL PRODUCTS.</p>
                <ul><li>OPERATION-LED THINKING</li><li>END-TO-END OWNERSHIP</li><li>BUILT FOR PRODUCTION</li></ul>
              </>
            ) : page.slug === "careers" ? (
              <>
                <div><span>CAREERS AT TRUEFOX AI</span><b>07</b></div>
                <p>DO DEEP WORK.<br />OWN THE OUTCOME.<br />BUILD FOR REAL USE.</p>
                <ul><li>MULTIDISCIPLINARY TEAMS</li><li>PRODUCTION-FOCUSED ENGINEERING</li><li>GLOBAL COLLABORATION</li></ul>
              </>
            ) : page.slug === "products" ? (
              <>
                <div><span>PRODUCT OVERVIEW</span></div>
                <p>INTELLIGENT PRODUCTS FOR<br />IDENTITY, SECURITY AND<br />OPERATIONAL DECISIONS.</p>
                <ul><li>CONFIGURED TO THE ENVIRONMENT</li><li>CONNECTED TO EXISTING SYSTEMS</li><li>DEPLOYED WHERE THE WORK HAPPENS</li></ul>
              </>
            ) : page.slug === "services" ? (
              <>
                <div><span>SERVICE MODEL</span><b>08</b></div>
                <p>ONE ACCOUNTABLE TEAM<br />FROM FIRST DECISION<br />TO CONTINUOUS IMPROVEMENT.</p>
                <ul><li>STRATEGY &amp; VALIDATION</li><li>PRODUCT &amp; ENGINEERING</li><li>DEPLOYMENT &amp; IMPROVEMENT</li></ul>
              </>
            ) : page.slug === "book-demo" ? (
              <>
                <div><span>TAILORED DEMONSTRATION</span></div>
                <p>A FOCUSED SESSION<br />BUILT AROUND YOUR OPERATION.</p>
                <ul><li>RELEVANT PRODUCT CAPABILITIES</li><li>DEPLOYMENT &amp; INTEGRATION CONTEXT</li><li>PRACTICAL NEXT STEPS</li></ul>
              </>
            ) : page.slug === "clients-partners" ? (
              <>
                <div><span>PARTNERSHIP OVERVIEW</span></div>
                <p>WHERE THE RIGHT CAPABILITIES<br />COME TOGETHER.</p>
                <ul><li>CLIENT ENGAGEMENTS</li><li>TECHNOLOGY PARTNERSHIPS</li><li>SPECIALIST COLLABORATION</li></ul>
              </>
            ) : page.slug === "case-studies" ? (
              <>
                <div><span>WORK OVERVIEW</span></div>
                <p>REAL PROBLEMS.<br />PURPOSE-BUILT SYSTEMS.</p>
                <ul><li>COMPUTER VISION</li><li>INTELLIGENT AUTOMATION</li><li>IDENTITY &amp; BIOMETRICS</li></ul>
              </>
            ) : page.slug === "faq" ? (
              <>
                <div><span>FAQ OVERVIEW</span></div>
                <p>WHAT CLIENTS USUALLY<br />WANT TO KNOW.</p>
                <ul><li>SERVICES &amp; PRODUCTS</li><li>DELIVERY &amp; DEPLOYMENT</li><li>DATA, SECURITY &amp; SUPPORT</li></ul>
              </>
            ) : page.slug === "support" ? (
              <>
                <div><span>PAGE SIGNAL</span></div>
                <p>Find the right support channel for active projects, Truefox AI products and responsible security reporting.</p>
                <ul><li>CANADA · HEADQUARTERS</li><li>INDIA · ENGINEERING</li><li>INTERNATIONAL · SUPPORT</li></ul>
              </>
            ) : page.slug === "contact" ? (
              <>
                <div><span>PAGE SIGNAL</span></div>
                <p>Connect with Truefox AI about AI strategy, product engineering, tailored demonstrations, client support or partnership opportunities.</p>
                <ul><li>CANADA · HEADQUARTERS</li><li>INDIA · ENGINEERING</li><li>INTERNATIONAL · DELIVERY</li></ul>
              </>
            ) : page.slug === "privacy-policy" ? (
              <>
                <div><span>PAGE SIGNAL</span></div>
                <p>How Truefox AI Inc. handles personal information collected through its website, contact forms and business enquiries.</p>
                <ul><li>CANADA · HEADQUARTERS</li><li>INDIA · ENGINEERING</li><li>INTERNATIONAL · DELIVERY</li></ul>
              </>
            ) : page.slug === "terms-and-conditions" ? (
              <>
                <div><span>PAGE SIGNAL</span></div>
                <p>Terms governing access to and use of the Truefox AI Inc. website, its content and related materials.</p>
                <ul><li>CANADA · HEADQUARTERS</li><li>INDIA · ENGINEERING</li><li>INTERNATIONAL · DELIVERY</li></ul>
              </>
            ) : (
              <>
                <div><span>PAGE SIGNAL</span><b>0{Math.max(1, page.navLabel.length % 9)}</b></div>
                <p>{page.description}</p>
                <ul><li>Canada headquarters</li><li>India engineering</li><li>International delivery</li></ul>
              </>
            )}
          </Reveal>
        </div>
        {page.slug !== "request-quote" && page.slug !== "about" && page.slug !== "why-choose-us" && page.slug !== "careers" && page.slug !== "products" && page.slug !== "services" && page.slug !== "book-demo" && page.slug !== "clients-partners" && page.slug !== "case-studies" && page.slug !== "faq" && page.slug !== "support" && page.slug !== "contact" && page.slug !== "privacy-policy" && page.slug !== "terms-and-conditions" && <div className="inner-hero-index">TFX / {page.eyebrow}</div>}
      </section>

      {page.stats && (
        <section className="stat-band cinematic-stat-band"><div className="shell stat-grid">{page.stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</div></section>
      )}

      {page.slug !== "request-quote" && page.slug !== "why-choose-us" && page.slug !== "careers" && page.slug !== "products" && page.slug !== "services" && page.slug !== "book-demo" && page.slug !== "clients-partners" && page.slug !== "case-studies" && page.slug !== "faq" && page.slug !== "support" && page.slug !== "contact" && page.slug !== "privacy-policy" && page.slug !== "terms-and-conditions" && (
        <section className={`section page-answer-intro${page.slug === "about" ? " company-details-section" : ""}`}>
          {page.slug === "about" ? (
            <div className="shell answer-first company-details-panel">
              <Reveal><span className="eyebrow">COMPANY DETAILS</span><h2>TRUEFOX AI,<br />AT A GLANCE.</h2></Reveal>
              <Reveal delay={0.08}>
                <p>Truefox AI is an AI product and engineering company operating across Canada and India, supporting clients from early discovery through production and continuous improvement.</p>
                <div className="company-entity"><span>LEGAL ENTITY</span><b>Truefox AI Inc.</b></div>
                <div className="company-office-grid">
                  <article><span>CANADA OFFICE</span><address>Suite 300<br />72 Victoria Street South<br />Kitchener, Ontario N2G 4Y9<br />Canada</address></article>
                  <article><span>INDIA OFFICE</span><address>Olangattu Tower<br />Chittethukara, Kakkanad<br />Kochi, Kerala 682037<br />India</address></article>
                </div>
                <div className="company-detail-footer">
                  <div><span>DELIVERY</span><b>Canada · India · International</b></div>
                  <div><span>CONTACT</span><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></div>
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="shell answer-first">
              <Reveal><span className="eyebrow">ANSWER FIRST</span><h2>{page.navLabel}: what to know.</h2></Reveal>
              <Reveal delay={0.08}><p>{page.description}</p><div><span>Entity</span><b>Truefox AI Inc.</b><span>Delivery</span><b>Canada · India · International</b><span>Contact</span><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></div></Reveal>
            </div>
          )}
        </section>
      )}

      <section className={`section page-content${page.slug === "request-quote" ? " request-quote-content" : page.slug === "about" ? " about-content" : page.slug === "why-choose-us" ? " why-choose-us-content" : page.slug === "careers" ? " careers-content" : page.slug === "products" ? " products-content" : page.slug === "services" ? " services-content" : page.slug === "book-demo" ? " book-demo-content" : page.slug === "clients-partners" ? " partnerships-content" : page.slug === "case-studies" ? " case-studies-content" : page.slug === "faq" ? " faq-content" : page.slug === "support" ? " support-content" : page.slug === "contact" ? " contact-content" : page.slug === "privacy-policy" ? " privacy-policy-content" : page.slug === "terms-and-conditions" ? " terms-content" : ""}`}>
        <div className="shell">
          {(page.kind === "contact" || page.kind === "form") ? (
            <div className="form-layout">
              <Reveal className="form-aside">
                <span className="eyebrow">{page.kind === "contact" ? "START A CONVERSATION" : page.slug === "book-demo" ? "SESSION DETAILS" : "PROJECT DETAILS"}</span>
                <h2>{page.kind === "contact" ? "A CLEAR CHALLENGE IS ENOUGH TO BEGIN." : page.slug === "request-quote" ? <>WHAT SHOULD WE<br />UNDERSTAND?</> : page.slug === "book-demo" ? <>HELP US MAKE THE<br />CONVERSATION USEFUL.</> : "Help us prepare a useful response."}</h2>
                <p>{page.kind === "contact" ? "Whether you’re exploring an idea, improving an existing system or looking for specialist support, tell us what you’re working through. We’ll help identify the most practical next step." : page.slug === "request-quote" ? "A short overview is enough. Tell us what needs to work better, why it matters and what a successful outcome would look like." : page.slug === "book-demo" ? "Choose the type of session you need and the capability you’re interested in. Add a little context about your workflow or environment, and we’ll tailor the conversation accordingly." : page.description}</p>
                <ContentSections page={page} />
              </Reveal>
              <Reveal delay={0.1}><LeadForm intent={formIntent} /></Reveal>
            </div>
          ) : (
            <>{page.slug === "careers" && <Reveal className="careers-open-heading"><span className="eyebrow">NOW HIRING</span><h2>CURRENT OPEN POSITION</h2></Reveal>}{page.slug === "clients-partners" && <Reveal className="partnerships-section-heading"><span className="eyebrow">SELECTED ENGAGEMENTS</span></Reveal>}<CardGrid page={page} />{page.slug === "careers" && <Reveal className="careers-contact"><span className="eyebrow">INTERESTED IN JOINING TRUEFOX AI?</span><p>Send your resume to <a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></p></Reveal>}<ContentSections page={page} /></>
          )}
        </div>
      </section>

      {page.cta && page.kind !== "contact" && page.kind !== "form" && (
        <section className={`page-cta cinematic-page-cta${page.slug === "why-choose-us" ? " why-choose-us-cta" : page.slug === "products" ? " products-cta" : page.slug === "services" ? " services-cta" : page.slug === "clients-partners" ? " partnerships-cta" : page.slug === "case-studies" ? " case-studies-cta" : page.slug === "support" ? " support-cta" : ""}`}><div className="shell"><Reveal><span className="eyebrow">{page.slug === "about" ? "READY WHEN YOU ARE" : page.slug === "why-choose-us" ? "READY TO MOVE FORWARD?" : page.slug === "products" ? "EXPLORE THE PRODUCTS" : page.slug === "services" ? "READY TO DEFINE THE WORK?" : page.slug === "clients-partners" ? "OPEN TO COLLABORATION" : page.slug === "case-studies" ? "FACING A SIMILAR CHALLENGE?" : page.slug === "support" ? "NEXT STEP" : "NEXT SIGNAL"}</span><h2>{page.slug === "about" ? <>BRING US THE QUESTION.<br />LEAVE WITH A WAY FORWARD.</> : page.slug === "why-choose-us" ? <>FROM OPEN QUESTION<br />TO CLEAR NEXT STEP.</> : page.slug === "products" ? <>SEE HOW IT COULD WORK<br />IN YOUR OPERATION.</> : page.slug === "services" ? <>FROM COMPLEX REQUIREMENT<br />TO CLEAR SCOPE.</> : page.slug === "clients-partners" ? <>LET’S BUILD SOMETHING<br />STRONGER TOGETHER.</> : page.slug === "case-studies" ? <>LET’S UNDERSTAND WHAT<br />YOUR OPERATION NEEDS.</> : page.slug === "support" ? "TELL US WHAT’S HAPPENING." : "Turn the question into a practical plan."}</h2><p>{page.slug === "about" ? "Tell us what needs to work better, the environment it must work within and the outcome you’re aiming for. We’ll help identify the most practical next step." : page.slug === "why-choose-us" ? "Tell us what needs to improve, where it must work and what a successful outcome looks like. We’ll help turn that context into a practical way forward." : page.slug === "products" ? "Tell us about your workflow, environment and requirements. We’ll tailor the demonstration around the products and capabilities most relevant to you." : page.slug === "services" ? "Share the workflow, operating environment and outcome you need. We’ll assess the context, identify the right approach and define a practical path forward." : page.slug === "clients-partners" ? "Tell us about your capabilities, the opportunity you see and the kind of partnership you have in mind. We’ll explore where our expertise aligns and what we could create together." : page.slug === "case-studies" ? "Share the workflow, constraints and outcome you’re working toward. We’ll help identify the right approach and a practical way forward." : page.slug === "support" ? "Share the affected product or project, operating environment and impact. We’ll route your request to the right team and help determine the next step." : "Share the workflow, environment and desired result. We will help define the next step."}</p><Link className="button button-primary" href={page.cta.href}>{page.slug === "why-choose-us" ? "DISCUSS YOUR PROJECT" : page.slug === "products" ? "BOOK A PRODUCT DEMO" : page.slug === "services" ? "REQUEST A SCOPING CONVERSATION" : page.slug === "clients-partners" ? "DISCUSS A PARTNERSHIP" : page.slug === "case-studies" ? "DISCUSS YOUR CHALLENGE" : page.slug === "support" ? "CONTACT SUPPORT" : page.cta.label}<ArrowUpRight /></Link></Reveal></div></section>
      )}
    </main>
  );
}
