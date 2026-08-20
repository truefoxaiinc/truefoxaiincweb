# Metadata audit and implementation report

Audit date: 2026-08-20  
Production source: `https://www.truefoxaiinc.com`  
Implementation validation: local Next.js production build

## Before and after

| URL | Primary target | Old title | New title | Old description | New description | Changed? | Reason |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Enterprise AI Engineering Company | Enterprise AI Engineering Company \| Truefox AI Inc. | Enterprise AI Engineering Company \| Truefox AI Inc. | Truefox AI is a Canada-headquartered AI engineering company building computer vision, private AI, governed agents, biometrics, edge systems and digital products. | Truefox AI is a Canada-headquartered enterprise AI engineering company building computer vision, private AI, agents, biometrics, edge systems and product engineering. | Description/OG only | Preserve the strong title; clarify primary intent and align social metadata. |
| `/services` | AI Development Services | AI Development Services \| Truefox AI Inc. | Unchanged | Explore AI strategy, custom development, computer vision, private AI, agents, machine learning, edge systems and product engineering from Truefox AI. | Unchanged | No | Already clear, unique and aligned with the portfolio page. |
| `/kitchener` | AI Engineering Company Kitchener | AI Engineering Company in Kitchener \| Truefox AI | Unchanged | Truefox AI provides custom AI engineering from Kitchener, Ontario, including computer vision, private AI, automation, edge systems and product development. | Truefox AI builds custom AI solutions from Kitchener, Ontario, including computer vision, private AI, agentic automation, edge systems and AI product engineering for Canadian organizations. | Description | Strengthen Canadian commercial context without implying a Waterloo office. |
| `/kochi` | AI Development Company Kochi | AI Engineering in Kochi \| Truefox AI Inc. | AI Development Company in Kochi \| Truefox AI | Truefox AI’s Kochi engineering team develops custom AI, computer vision, private assistants, automation, edge systems and digital products. | Truefox AI’s Kochi engineering team supports AI development, computer vision, private AI, automation, edge systems and product engineering for Canadian and international clients. | Yes | Match local engineering intent while keeping Kochi secondary to Canadian positioning. |
| `/ai-smart-security` | AI Video Analytics | AI Video Analytics & Smart Security \| Truefox AI | Unchanged | Truefox AI builds AI video analytics and intelligent surveillance systems for security, safety and operational awareness. | Unchanged | No | Strong service intent and content alignment. |
| `/biometric-intelligence` | Biometric AI Solutions | Biometric AI & Identity Verification \| Truefox AI | Unchanged | Truefox AI develops biometric intelligence systems for face recognition, fingerprint authentication, attendance, identity verification, liveness detection and anti-spoofing workflows. | Unchanged | No | Strong, specific and supported by the page. |
| `/private-ai-assistants` | Private Enterprise AI Assistants | Private AI Assistants & Enterprise RAG \| Truefox AI | Unchanged | Truefox AI builds private enterprise AI assistants, RAG systems and copilots grounded in approved company knowledge and controlled business tools. | Unchanged | No | Clearly separated from agentic workflow execution. |
| `/agentic-automation` | AI Agent Development | AI Agent Development & Automation \| Truefox AI | Unchanged | Truefox AI builds governed enterprise AI agents that connect reasoning, approved tools, business rules and human oversight. | Unchanged | No | Clearly owns tool-using workflow automation intent. |
| `/iot-edge-ai` | Edge AI Development | Edge AI & IoT Development \| Truefox AI | Unchanged | Truefox AI builds IoT and Edge AI systems spanning sensors, embedded firmware, gateways, local inference, cloud services and enterprise integrations. | Unchanged | No | Specific and supported. |
| `/custom-ai-ml` | Custom Machine Learning Development | Custom Machine Learning Development \| Truefox AI | Unchanged | Truefox AI develops custom machine-learning systems across data engineering, predictive analytics, computer vision, NLP, MLOps and production deployment. | Unchanged | No | MLOps is supported by visible content; page remains distinct from Services. |
| `/web-mobile-products` | AI Product Engineering | AI Product, Web & Mobile Development \| Truefox AI | Unchanged | Truefox AI designs and builds custom web applications, mobile apps, SaaS platforms, enterprise products and AI-powered digital experiences. | Unchanged | No | Clear product-engineering ownership. |
| `/research-development` | AI Proof of Concept Development | AI Proof of Concept & Prototyping \| Truefox AI | Unchanged | Truefox AI provides feasibility studies, applied AI research, proof-of-concept development and rapid prototyping across AI, IoT, edge and digital products. | Unchanged | No | Clear feasibility and validation intent. |
| `/products` | AI Products for Operational Intelligence | Products \| Truefox AI Inc. | AI Products for Security, Identity & Operations \| Truefox AI | Truefox AI products for identity, security and operational decision-making. | Explore Truefox AI products for AI video analytics, biometric intelligence, private assistants, agentic automation and connected edge systems. | Yes | Replace vague metadata with the supported product portfolio. |
| `/attention-minder` | Attention Minder Educational Focus Support | Attention Minder \| Truefox AI Inc. | Attention Minder \| Educational Focus Support \| Truefox AI | Attention Minder supports attention awareness, guided practice and engagement analysis. | See how Attention Minder supports focus awareness through guided practice, progress tracking and privacy-conscious analysis in supervised educational settings. | Yes | Reflect only visible focus-practice, progress, educational and privacy functionality. |
| `/case-studies` | AI Engineering Case Studies | Case Studies \| Truefox AI Inc. | AI Engineering Case Studies \| Truefox AI | Selected Truefox AI engagements across intelligent operations, automation, computer vision and digital product engineering. | Explore selected Truefox AI case studies across computer vision, workflow automation and digital product engineering, designed around real operations. | Yes | Strengthen proof/evaluation intent without inventing results. |
| `/about` | About Truefox AI | About Us \| Truefox AI Inc. | About Truefox AI \| AI Engineering in Canada | Learn about Truefox AI, our Canada–India delivery model and our approach to production-grade AI. | Meet Truefox AI, a Canada-headquartered AI engineering company with an integrated Kochi delivery team building practical, production-ready AI systems. | Yes | Clarify the company and Canada–India delivery model. |
| `/contact` | Contact Truefox AI Canada | Contact Us \| Truefox AI Inc. | Contact Truefox AI in Canada \| AI Project Enquiries | Contact Truefox AI for AI consulting, product development, demonstrations, support and partnerships. | Contact Truefox AI in Kitchener, Canada, to discuss AI consulting, product development, demonstrations, support, partnerships or a specific project. | Yes | Add useful location and enquiry context. |
| `/request-quote` | AI Development Quote | Request a Quote \| Truefox AI Inc. | Request an AI Development Quote \| Truefox AI | Request a scoped proposal from Truefox AI. | Tell Truefox AI about your workflow, product idea or technical constraints to receive a scoped AI development proposal built around your requirements. | Yes | Replace a thin description with conversion-relevant detail. |
| `/book-demo` | AI Product Demo | Book a Demo \| Truefox AI Inc. | Book an AI Product Demo \| Truefox AI | Book a tailored Truefox AI product demonstration. | Book a tailored Truefox AI product demo for video analytics, biometrics, private AI, agentic automation or Edge AI, shaped around your workflow. | Yes | Clarify what can be demonstrated and preserve a distinct conversion intent. |

## Findings

### Metadata and Search Console evidence

- Production returned HTTP 200 for all audited URLs, with one H1, indexable robots, and the expected canonical domain.
- Production emitted `meta keywords` on every audited page. The implementation removes that output globally while retaining internal planning data.
- Core service pages already had strong, unique metadata and were preserved.
- The available GSC export covers the last three months and reports 1,155 impressions and 145 clicks in the chart aggregate. Known query rows are predominantly branded; no ranking claim is inferred from metadata.
- Kochi terms appear only in tiny samples: “ai companies in kochi” (4 impressions), “kochi ai” (1), and “ai company in kochi” (1). They are experimental signals, not ranking evidence.
- Products has substantial legacy non-www/trailing-slash visibility but extremely low CTR in that historical row. The current canonical Products URL has limited data, so the rewrite is justified primarily by weak production metadata and supported page content.
- Legacy `/about-us/`, `/contact-us/`, author archives and non-www URLs remain historical reporting rows. No legacy URL or redirect was changed.

### Cannibalization

- Homepage owns enterprise AI engineering; Services owns the broad service portfolio; Custom AI/ML owns model-specific machine-learning development; Web/Mobile owns product engineering.
- Private AI Assistants owns retrieval and grounded knowledge work. Agentic Automation owns approved tool use and multi-step workflow execution.
- AI Smart Security owns video/event analytics. Biometric Intelligence owns identity verification, liveness and authentication.
- Kitchener owns Canadian local commercial intent. Kochi owns the India engineering-presence intent and does not claim a separate Canadian market position.

### H1, content and internal links

- H1s were preserved on established pages. Products and Attention Minder retain the user-owned, content-supported H1 refinements already present in the working tree.
- No additional introductory copy was needed: audited priority pages already identify the provider, capability, workflow and delivery context early.
- Existing Services-to-capability, Kitchener-to-Services, and related-capability links passed the Phase 1 and location validators. No extra exact-match anchors were added.

## Validation

- TypeScript: pass
- Next.js production build: pass
- Content audit: pass (128 files)
- Phase 1 SEO validator: pass
- Service schema validator: pass for all eight capability pages; no capability-page Product schema
- Kitchener validator: pass
- Kochi validator: pass
- Analytics validator: pass
- SEO reporting validator: pass
- Rendered 19-page metadata audit: 19 HTTP 200 responses; zero duplicate titles; zero duplicate descriptions; one H1 per page; all indexable; all canonical URLs on `https://www.truefoxaiinc.com`; Open Graph title/description/URL aligned; zero `meta keywords` tags

## Files changed

- `app/layout.tsx`
- `app/[slug]/page.tsx`
- `data/site.ts`
- `config/seo-reporting.json`
- `docs/seo-keyword-ownership.md`
- `docs/metadata-audit-2026-08-20.md`
- `scripts/validate-kitchener-schema.mjs`
- `scripts/validate-kochi-schema.mjs`
