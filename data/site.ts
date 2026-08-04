export type Card = {
  eyebrow?: string;
  title: string;
  text: string;
  meta?: string;
  href?: string;
};

export type PageData = {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  kind:
    | "standard"
    | "services"
    | "products"
    | "contact"
    | "legal"
    | "team"
    | "proof"
    | "pricing"
    | "faq"
    | "blog"
    | "resources"
    | "form";
  stats?: { value: string; label: string }[];
  cards?: Card[];
  sections?: { title: string; text: string; bullets?: string[] }[];
  cta?: { label: string; href: string };
};

export const site = {
  name: "Truefox AI Inc.",
  shortName: "Truefox AI",
  url: "https://truefoxaiinc.com",
  email: "info@truefoxaiinc.com",
  phoneLabel: "+1 (Canada)",
  lastUpdated: "2026-08-03",
  description:
    "Canada-headquartered applied AI engineering with an India delivery centre, serving international organizations with computer vision, generative AI, agentic automation, biometrics, IoT and custom software.",
  address: {
    street: "Suite 300, 72 Victoria Street South",
    city: "Kitchener",
    region: "Ontario",
    postalCode: "N2G 4Y9",
    country: "CA"
  },
  offices: [
    {
      country: "Canada",
      city: "Kitchener, Ontario",
      role: "Headquarters, strategy and client success"
    },
    {
      country: "India",
      city: "Engineering delivery centre",
      role: "AI research, product engineering and support"
    }
  ],
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://ca.linkedin.com/company/truefox-ai-inc",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    x: process.env.NEXT_PUBLIC_X_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || ""
  }
};

export const navGroups = [
  {
    label: "Company",
    items: [
      ["About Us", "/about"],
      ["Our Team", "/team"],
      ["Why Choose Us", "/why-choose-us"],
      ["Careers", "/careers"],
      ["Certifications & Awards", "/certifications-awards"]
    ]
  },
  {
    label: "Solutions",
    items: [
      ["Products", "/products"],
      ["Services", "/services"],
      ["Pricing", "/pricing"],
      ["Book a Demo", "/book-demo"]
    ]
  },
  {
    label: "Proof",
    items: [
      ["Clients & Partners", "/clients-partners"],
      ["Case Studies", "/case-studies"],
      ["Testimonials", "/testimonials"]
    ]
  },
  {
    label: "Resources",
    items: [
      ["Blog & News", "/blog"],
      ["FAQ", "/faq"],
      ["Help Centre", "/support"],
      ["Downloads", "/resources"]
    ]
  }
] satisfies ReadonlyArray<{
  label: string;
  items: ReadonlyArray<readonly [string, string]>;
}>;

export const solutions: Card[] = [
  {
    eyebrow: "01",
    title: "AI Smart Security",
    text: "Real-time video analytics for threat detection, safety monitoring and situational awareness.",
    href: "/products#security"
  },
  {
    eyebrow: "02",
    title: "Biometric Intelligence",
    text: "Identity, attendance, liveness and anti-spoofing for face and fingerprint workflows.",
    href: "/products#biometrics"
  },
  {
    eyebrow: "03",
    title: "Private AI Assistants",
    text: "Secure RAG and domain-aware assistants connected to enterprise knowledge and tools.",
    href: "/products#assistants"
  },
  {
    eyebrow: "04",
    title: "Agentic Automation",
    text: "Governed AI agents that reason, use tools and complete multi-step business workflows.",
    href: "/products#agents"
  },
  {
    eyebrow: "05",
    title: "IoT & Edge AI",
    text: "Sensors, firmware, gateways and edge inference for connected operations.",
    href: "/products#iot"
  },
  {
    eyebrow: "06",
    title: "Custom AI & ML",
    text: "Data engineering, model development, MLOps and bespoke decision systems.",
    href: "/services"
  },
  {
    eyebrow: "07",
    title: "Web & Mobile Products",
    text: "Modern digital products that bring intelligent workflows to customers and teams.",
    href: "/services"
  },
  {
    eyebrow: "08",
    title: "R&D and Prototyping",
    text: "Feasibility studies, rapid prototypes and applied research for ambitious ideas.",
    href: "/services"
  }
];

export const pages: Record<string, PageData> = {
  about: {
    slug: "about",
    navLabel: "About Us",
    eyebrow: "COMPANY",
    title: "Applied AI engineering, built for the real world.",
    description: "Learn about Truefox AI, our Canada–India delivery model and our approach to production-grade AI.",
    intro:
      "Truefox AI Inc. brings strategy, research, product design, software engineering, cloud, embedded systems and deployment into one accountable delivery team.",
    kind: "standard",
    stats: [
      { value: "2", label: "Operating regions" },
      { value: "8+", label: "Core capability areas" },
      { value: "1", label: "Integrated delivery team" }
    ],
    cards: [
      { eyebrow: "MISSION", title: "Turn ambitious ideas into useful systems", text: "We focus on measurable operational outcomes rather than technology for its own sake." },
      { eyebrow: "MODEL", title: "Canada-led, India-powered", text: "Client strategy and delivery leadership are paired with focused engineering and research capacity." },
      { eyebrow: "STANDARD", title: "Production before presentation", text: "Security, monitoring, governance, maintainability and user adoption are considered from day one." }
    ],
    sections: [
      {
        title: "What we believe",
        text: "AI succeeds when it fits the process, the people and the operating environment.",
        bullets: ["Start with the decision or workflow", "Validate with representative data", "Keep humans in control", "Design for operation and improvement"]
      },
      {
        title: "How we engage",
        text: "From a focused discovery sprint to long-term product engineering, the engagement model scales with the problem.",
        bullets: ["Advisory and architecture", "Prototype and proof of value", "Production product delivery", "Managed improvement and support"]
      }
    ],
    cta: { label: "Start a conversation", href: "/contact" }
  },
  products: {
    slug: "products",
    navLabel: "Products",
    eyebrow: "PRODUCTS",
    title: "Intelligent products for identity, security and operations.",
    description: "Explore Truefox AI product platforms for security, biometrics, assistants, agents and connected operations.",
    intro:
      "Our product modules are designed to be configured around the environment, integrated with existing systems and deployed in cloud, on-premise, edge or hybrid architectures.",
    kind: "products",
    cards: solutions.slice(0, 5),
    sections: [
      { title: "AI Smart Security", text: "Video intelligence for event detection, perimeter monitoring, safety and operational visibility.", bullets: ["Multi-camera analytics", "Configurable event rules", "Operator alerts", "Audit-ready event history"] },
      { title: "Biometric Intelligence", text: "Identity and attendance workflows with liveness, anti-spoofing and configurable policy controls.", bullets: ["Face and fingerprint options", "Liveness controls", "Attendance workflows", "API and system integration"] },
      { title: "Private AI Assistants", text: "Enterprise assistants grounded in approved knowledge, policies and connected tools.", bullets: ["Private knowledge retrieval", "Role-based access", "Source citations", "Workflow handoffs"] },
      { title: "Agentic Automation", text: "Human-governed agents that plan and complete multi-step work across approved systems.", bullets: ["Tool use and orchestration", "Approval checkpoints", "Run history", "Exception handling"] },
      { title: "IoT & Edge AI", text: "Connected intelligence where bandwidth, latency or privacy require processing close to the source.", bullets: ["Sensor integration", "Edge inference", "Gateway software", "Fleet monitoring"] }
    ],
    cta: { label: "Book a product demo", href: "/book-demo" }
  },
  services: {
    slug: "services",
    navLabel: "Services",
    eyebrow: "SERVICES",
    title: "One team from AI strategy to production operation.",
    description: "AI consulting, computer vision, ML, agentic AI, IoT, web, mobile, cloud and R&D services.",
    intro:
      "Truefox AI combines specialist disciplines so clients can move from a complex business need to a secure, maintainable production system without coordinating multiple vendors.",
    kind: "services",
    cards: solutions.slice(5),
    sections: [
      { title: "AI strategy and architecture", text: "Opportunity discovery, feasibility, roadmap, data strategy, risk analysis and architecture decisions." },
      { title: "Computer vision and biometrics", text: "Detection, classification, tracking, inspection, identity, liveness and anti-spoofing." },
      { title: "Generative and agentic AI", text: "Private RAG, domain assistants, tool use, workflow automation and evaluation systems." },
      { title: "Data, ML and MLOps", text: "Data pipelines, model development, experimentation, deployment, monitoring and retraining." },
      { title: "IoT and embedded systems", text: "Firmware, gateways, device connectivity, telemetry, edge inference and control systems." },
      { title: "Web, mobile and cloud", text: "Customer portals, operational applications, APIs, integrations and cloud platforms." },
      { title: "Research and rapid prototyping", text: "Technical feasibility, proof-of-concept builds and product discovery for new ideas." }
    ],
    cta: { label: "Request a scoped proposal", href: "/request-quote" }
  },
  contact: {
    slug: "contact",
    navLabel: "Contact Us",
    eyebrow: "CONTACT",
    title: "Tell us what needs to change in your operation.",
    description: "Contact Truefox AI for AI consulting, product development, demonstrations, support and partnerships.",
    intro: "Share the workflow, challenge or product idea. We will help clarify the most practical next step.",
    kind: "contact",
    sections: [
      { title: "Canada", text: "Kitchener, Ontario — headquarters, strategy and client success." },
      { title: "India", text: "Engineering delivery centre — AI research, software engineering and support." },
      { title: "International", text: "Remote discovery, implementation and support for clients across regions." }
    ]
  },
  "privacy-policy": {
    slug: "privacy-policy",
    navLabel: "Privacy Policy",
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    description: "Truefox AI website privacy policy template.",
    intro: "This template describes how website and enquiry information may be collected, used and protected. It requires legal review before publication.",
    kind: "legal",
    sections: [
      { title: "Information we collect", text: "Information you submit through forms, email or support interactions, plus limited technical information such as browser type and website usage data." },
      { title: "How information is used", text: "To respond to enquiries, provide requested services, maintain website security, improve experiences and meet legal obligations." },
      { title: "Sharing and processors", text: "Information may be handled by approved service providers for hosting, analytics, communications or customer support under appropriate safeguards." },
      { title: "Retention and security", text: "Information should be retained only as long as necessary and protected using administrative, technical and organizational controls appropriate to its sensitivity." },
      { title: "Your choices", text: "Depending on your jurisdiction, you may request access, correction, deletion or restriction of personal information." },
      { title: "Contact", text: "Privacy enquiries can be sent to info@truefoxaiinc.com." }
    ]
  },
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    navLabel: "Terms and Conditions",
    eyebrow: "LEGAL",
    title: "Terms and Conditions",
    description: "Truefox AI website terms and conditions template.",
    intro: "These website terms are a general template and must be reviewed by qualified legal counsel before publication.",
    kind: "legal",
    sections: [
      { title: "Website use", text: "The website is provided for general company, product and service information. You agree not to misuse, disrupt or attempt unauthorized access to the website." },
      { title: "No professional guarantee", text: "Website content is general information and does not create a client relationship, warranty or binding service commitment." },
      { title: "Intellectual property", text: "Branding, design, text, software and original materials remain the property of their respective owners and may not be copied without permission." },
      { title: "Third-party links", text: "External links may be provided for convenience. Truefox AI is not responsible for third-party content, security or privacy practices." },
      { title: "Limitation and changes", text: "To the extent permitted by law, liability is limited. Terms may be updated as business, legal or technical requirements change." },
      { title: "Contact", text: "Questions about these terms can be sent to info@truefoxaiinc.com." }
    ]
  },
  team: {
    slug: "team",
    navLabel: "Our Team",
    eyebrow: "PEOPLE",
    title: "A multidisciplinary team for applied intelligence.",
    description: "Meet the disciplines behind Truefox AI's product, research and delivery work.",
    intro: "Our work brings together business analysis, AI research, data engineering, software, cloud, embedded systems, product design, QA and client success.",
    kind: "team",
    cards: [
      { eyebrow: "LEADERSHIP", title: "Strategy & Client Success", text: "Clarifies outcomes, operating constraints, delivery model and executive alignment." },
      { eyebrow: "AI", title: "Research & Machine Learning", text: "Builds and evaluates computer vision, language, prediction and optimization models." },
      { eyebrow: "ENGINEERING", title: "Product & Platform", text: "Develops web, mobile, backend, integration and cloud systems for production use." },
      { eyebrow: "EDGE", title: "IoT & Embedded", text: "Connects sensors, gateways, devices and edge inference to operational workflows." },
      { eyebrow: "QUALITY", title: "QA, Security & Reliability", text: "Tests performance, resilience, data handling, access controls and release readiness." },
      { eyebrow: "ADOPTION", title: "Delivery & Support", text: "Coordinates rollout, documentation, training, monitoring and continuous improvement." }
    ],
    sections: [
      { title: "Leadership profiles", text: "Verified names, biographies and photographs should be added only after company approval." }
    ],
    cta: { label: "Explore careers", href: "/careers" }
  },
  "why-choose-us": {
    slug: "why-choose-us",
    navLabel: "Why Choose Us",
    eyebrow: "WHY TRUEFOX",
    title: "Built around the details that determine real-world performance.",
    description: "Why organizations choose Truefox AI for complex applied AI and digital product delivery.",
    intro: "A strong prototype is only the beginning. We design around the operating environment, risk, user workflow and long-term ownership from the start.",
    kind: "standard",
    cards: [
      { eyebrow: "01", title: "Applied, not theoretical", text: "Architecture is shaped around the real process, users, data and constraints." },
      { eyebrow: "02", title: "One accountable team", text: "Strategy, AI, software, cloud, edge and support work as one delivery system." },
      { eyebrow: "03", title: "Flexible deployment", text: "Cloud, private cloud, on-premise, edge and hybrid patterns based on need." },
      { eyebrow: "04", title: "Governance by design", text: "Human oversight, access controls, auditability and exception handling are built in." },
      { eyebrow: "05", title: "Evidence before scale", text: "Representative pilots expose practical risks before major investment." },
      { eyebrow: "06", title: "International delivery", text: "Canadian client leadership supported by focused engineering capacity in India." }
    ],
    cta: { label: "Discuss your project", href: "/contact" }
  },
  "clients-partners": {
    slug: "clients-partners",
    navLabel: "Clients & Partners",
    eyebrow: "RELATIONSHIPS",
    title: "Collaboration across industries and regions.",
    description: "Selected Truefox AI client engagements and partnership opportunities.",
    intro: "We work with operating companies, product businesses, technology providers and specialists that value practical execution and long-term relationships.",
    kind: "proof",
    cards: [
      { title: "Laymoon Inc.", text: "Selected client engagement reference." },
      { title: "Stoney Lake", text: "Selected client engagement reference." },
      { title: "VCare Flooring", text: "Selected client engagement reference." },
      { title: "Al Rabeah Water Factory", text: "Industrial automation engagement reference." },
      { title: "Teqnia Inc.", text: "Selected technology engagement reference." },
      { title: "K&S Food Inc.", text: "Food manufacturing computer vision engagement reference." }
    ],
    sections: [
      { title: "Technology partnerships", text: "We collaborate with cloud, hardware, data, security and specialist technology providers when they improve the solution." },
      { title: "Delivery partnerships", text: "Regional consultants and system integrators can work with Truefox AI for specialist AI, computer vision and product engineering capacity." }
    ],
    cta: { label: "Explore partnership options", href: "/contact" }
  },
  testimonials: {
    slug: "testimonials",
    navLabel: "Testimonials",
    eyebrow: "CLIENT VOICE",
    title: "Trust is earned through delivery.",
    description: "A structured area for verified Truefox AI client testimonials.",
    intro: "This page is ready for approved customer quotes, video testimonials and references. Placeholder claims have intentionally not been invented.",
    kind: "proof",
    cards: [
      { eyebrow: "VERIFIED QUOTE", title: "Client outcome story", text: "Add an approved quote with the client's name, role, organization and permission status." },
      { eyebrow: "VIDEO", title: "Executive testimonial", text: "Embed a captioned customer video with a transcript and accessibility controls." },
      { eyebrow: "REFERENCE", title: "Reference conversation", text: "Offer qualified prospects a reference call where client consent and context allow." }
    ],
    sections: [
      { title: "Testimonial publishing checklist", text: "Every testimonial should be approved, attributable and representative.", bullets: ["Written client permission", "Accurate role and organization", "No unsupported performance claims", "Date and project context", "Accessible transcript for video"] }
    ],
    cta: { label: "View case studies", href: "/case-studies" }
  },
  "case-studies": {
    slug: "case-studies",
    navLabel: "Case Studies",
    eyebrow: "SELECTED WORK",
    title: "Systems designed for actual operating conditions.",
    description: "Selected Truefox AI case study summaries across computer vision, automation and biometrics.",
    intro: "The following summaries are based on client engagement references previously published by Truefox AI. Quantified outcomes should be added only when verified and approved.",
    kind: "proof",
    cards: [
      { eyebrow: "FOOD MANUFACTURING · ONTARIO", title: "Real-time quality intelligence", text: "A computer vision approach designed to detect product defects on a production conveyor and support faster operator response.", meta: "Computer vision · Edge deployment · Operator workflow" },
      { eyebrow: "INDUSTRIAL AUTOMATION · SAUDI ARABIA", title: "Connected process control", text: "A custom automated filling system tailored around the requirements of water production operations.", meta: "Automation · Controls · Operational integration" },
      { eyebrow: "HOSPITALITY · ONTARIO", title: "Trusted workforce identity", text: "A biometric employee login and attendance workflow designed for everyday hospitality operations.", meta: "Biometrics · Attendance · Workflow integration" }
    ],
    sections: [
      { title: "How we document outcomes", text: "Each case study should explain the context, constraints, architecture, implementation, adoption and verified result rather than presenting isolated technology features." }
    ],
    cta: { label: "Discuss a similar challenge", href: "/request-quote" }
  },
  "certifications-awards": {
    slug: "certifications-awards",
    navLabel: "Certifications & Awards",
    eyebrow: "TRUST",
    title: "Verification before decoration.",
    description: "Truefox AI certifications, awards, standards and assurance information.",
    intro: "This page is designed for verified company certifications, partner badges, awards, security assessments and employee credentials. Nothing should be published without evidence and approval.",
    kind: "proof",
    cards: [
      { eyebrow: "COMPANY", title: "Corporate certifications", text: "Add official certificate name, issuing body, certificate ID, scope and validity dates." },
      { eyebrow: "PARTNER", title: "Technology partner status", text: "Add verified cloud, platform or hardware partnership badges with official profile links." },
      { eyebrow: "TEAM", title: "Professional credentials", text: "Summarize relevant employee certifications without exposing unnecessary personal information." },
      { eyebrow: "RECOGNITION", title: "Awards and media", text: "Publish award name, organizer, category, year and independent verification link." }
    ],
    sections: [
      { title: "Recommended assurance roadmap", text: "The appropriate roadmap depends on client sector and data sensitivity.", bullets: ["Information security controls", "Privacy and data governance", "Secure software development", "Business continuity", "Supplier and access management", "Model risk and AI governance"] }
    ]
  },
  careers: {
    slug: "careers",
    navLabel: "Careers",
    eyebrow: "CAREERS",
    title: "Build systems that leave the lab and enter the world.",
    description: "Careers in AI, computer vision, software, cloud, IoT, product and delivery at Truefox AI.",
    intro: "We value people who can connect technical depth with curiosity, ownership and respect for the realities of users and operations.",
    kind: "standard",
    cards: [
      { eyebrow: "AI & DATA", title: "Machine Learning Engineer", text: "Computer vision, language models, evaluation, data pipelines and model deployment.", meta: "India / Hybrid · Opening status to confirm" },
      { eyebrow: "PRODUCT", title: "Full-stack Engineer", text: "Modern web applications, APIs, integrations, cloud and production quality.", meta: "India / Hybrid · Opening status to confirm" },
      { eyebrow: "EDGE", title: "Embedded & IoT Engineer", text: "Firmware, gateways, device integration, telemetry and edge inference.", meta: "India / Hybrid · Opening status to confirm" },
      { eyebrow: "DELIVERY", title: "Business Analyst / Project Lead", text: "Discovery, requirements, process mapping, client communication and delivery control.", meta: "Canada or India · Opening status to confirm" }
    ],
    sections: [
      { title: "How hiring works", text: "A clear process respects candidate time and helps both sides evaluate fit.", bullets: ["Application review", "Introductory conversation", "Role-relevant practical discussion", "Team and values conversation", "Offer and reference checks"] },
      { title: "Important", text: "Replace sample roles with approved, current openings before publication. Truefox AI should never request payment from candidates." }
    ],
    cta: { label: "Send a general application", href: "/contact" }
  },
  faq: {
    slug: "faq",
    navLabel: "Frequently Asked Questions",
    eyebrow: "FAQ",
    title: "Useful answers before the first meeting.",
    description: "Frequently asked questions about Truefox AI services, delivery, deployment, data, pricing and support.",
    intro: "These answers explain our typical approach. Final scope, architecture, security and commercial terms depend on the engagement.",
    kind: "faq",
    sections: [
      { title: "What kinds of projects does Truefox AI take on?", text: "Applied AI, computer vision, biometrics, private assistants, agentic workflows, IoT, industrial automation, web and mobile products, data platforms and R&D." },
      { title: "Can you work with an existing product or team?", text: "Yes. We can provide focused architecture, specialist engineering, a pilot team or end-to-end delivery depending on the gap." },
      { title: "Do you support on-premise and edge deployment?", text: "Yes. Deployment can be cloud, private cloud, on-premise, edge or hybrid based on latency, bandwidth, integration and privacy needs." },
      { title: "How do you begin an AI project?", text: "We clarify the business decision or workflow, users, available data, constraints and success criteria before choosing technology." },
      { title: "How is project pricing determined?", text: "Pricing reflects scope clarity, technical risk, integrations, data readiness, deployment model, assurance needs and support expectations." },
      { title: "Can you sign an NDA?", text: "A mutual NDA can be considered before detailed confidential discovery, subject to company review." },
      { title: "Who owns the delivered software and models?", text: "Ownership, licensing, third-party components and reusable platform elements are defined clearly in the commercial agreement." },
      { title: "Do you provide support after launch?", text: "Yes. Support can include monitoring, incident response, model review, improvements, cloud operations and product enhancement." }
    ]
  },
  blog: {
    slug: "blog",
    navLabel: "Blog & News",
    eyebrow: "INSIGHTS",
    title: "Practical thinking for applied AI teams.",
    description: "Truefox AI articles, project insights, product news and technical explainers.",
    intro: "A publication area for useful, evidence-based perspectives on AI deployment, computer vision, agents, data, edge systems and digital products.",
    kind: "blog",
    cards: [
      { eyebrow: "GUIDE", title: "From AI demo to production system", text: "The architecture, operating and governance questions that should be answered before scaling a prototype.", meta: "8 min read · Draft editorial concept" },
      { eyebrow: "COMPUTER VISION", title: "Designing inspection for the factory floor", text: "Why lighting, camera position, line speed, defect definitions and operator workflow matter as much as the model.", meta: "7 min read · Draft editorial concept" },
      { eyebrow: "AGENTIC AI", title: "Where human approval belongs in an AI workflow", text: "A practical framework for choosing checkpoints, permissions, audit history and exception handling.", meta: "6 min read · Draft editorial concept" },
      { eyebrow: "EDGE AI", title: "Cloud, edge or hybrid?", text: "A decision guide based on latency, bandwidth, privacy, resilience and lifecycle management.", meta: "6 min read · Draft editorial concept" },
      { eyebrow: "NEWS", title: "Company announcements", text: "Publish verified partnerships, product releases, events and hiring updates here.", meta: "Newsroom template" },
      { eyebrow: "R&D", title: "Research notes", text: "Share reproducible experiments, evaluations and practical lessons without exposing client-confidential information.", meta: "Technical publication template" }
    ]
  },
  pricing: {
    slug: "pricing",
    navLabel: "Pricing",
    eyebrow: "ENGAGEMENTS",
    title: "Commercial models matched to the work.",
    description: "Truefox AI pricing and engagement models for discovery, pilots, product delivery and ongoing support.",
    intro: "Complex AI work should not be forced into a misleading one-size price. We use clear engagement models and provide a proposal after understanding scope, risk and success criteria.",
    kind: "pricing",
    cards: [
      { eyebrow: "START", title: "Discovery Sprint", text: "For clarifying opportunity, data, constraints, architecture, roadmap and proof plan.", meta: "Fixed scope · Typically 1–3 weeks" },
      { eyebrow: "PROVE", title: "Prototype or Pilot", text: "For testing feasibility and operational fit using representative data and workflows.", meta: "Milestone-based · Scope dependent" },
      { eyebrow: "BUILD", title: "Production Delivery", text: "For complete product, platform, integration and deployment engineering.", meta: "Project or dedicated team" },
      { eyebrow: "OPERATE", title: "Managed Support", text: "For monitoring, incident response, cloud operations, model review and improvements.", meta: "Monthly service agreement" }
    ],
    sections: [
      { title: "What affects price", text: "Data readiness, model complexity, integrations, hardware, deployment environment, user experience, security, validation and support all shape effort." },
      { title: "What a proposal includes", text: "Scope, assumptions, exclusions, milestones, deliverables, responsibilities, commercial model, payment schedule and change process." }
    ],
    cta: { label: "Request a quote", href: "/request-quote" }
  },
  "request-quote": {
    slug: "request-quote",
    navLabel: "Request a Quote",
    eyebrow: "PROJECT ENQUIRY",
    title: "Give us enough context to propose the right next step.",
    description: "Request a scoped proposal from Truefox AI.",
    intro: "Describe the problem, users, current process, available data, target timing and any technology or deployment constraints.",
    kind: "form",
    sections: [
      { title: "Helpful information", text: "You do not need a complete specification. A clear business problem is a strong starting point.", bullets: ["Current workflow and pain point", "Who will use the solution", "Available data or systems", "Desired timing", "Preferred deployment", "Budget range, if established"] }
    ]
  },
  "book-demo": {
    slug: "book-demo",
    navLabel: "Book a Demo",
    eyebrow: "DEMO",
    title: "See how a Truefox solution could fit your operation.",
    description: "Book a Truefox AI product demonstration or consultation.",
    intro: "Select the area of interest and tell us about the environment. We will tailor the conversation rather than showing a generic product tour.",
    kind: "form",
    sections: [
      { title: "Available conversations", text: "Product demonstration, technical consultation, AI opportunity workshop or partnership discussion.", bullets: ["AI Smart Security", "Biometric Intelligence", "Private AI Assistants", "Agentic Automation", "IoT & Edge AI", "Custom product engineering"] }
    ]
  },
  support: {
    slug: "support",
    navLabel: "Support / Help Centre",
    eyebrow: "SUPPORT",
    title: "Clear routes for product and project support.",
    description: "Truefox AI help centre for existing clients, product users and security reports.",
    intro: "Use the correct channel so the request reaches the team with the right context and urgency.",
    kind: "standard",
    cards: [
      { eyebrow: "CLIENT", title: "Project support", text: "Existing clients should use the support channel and references defined in their service agreement." },
      { eyebrow: "PRODUCT", title: "Product help", text: "Share product name, environment, user impact, screenshots and steps to reproduce the issue." },
      { eyebrow: "SECURITY", title: "Security reporting", text: "Report suspected vulnerabilities privately with enough detail for triage. Do not include unnecessary sensitive data." },
      { eyebrow: "GENERAL", title: "General assistance", text: "For website, billing, partnership or non-urgent questions, use the contact form or company email." }
    ],
    sections: [
      { title: "Before submitting", text: "Include the environment, impact, time first observed, recent changes, error messages and safe reproduction steps where relevant." },
      { title: "Urgency", text: "Published support hours and response targets must match the signed service agreement. Do not rely on the website for emergency services." }
    ],
    cta: { label: "Contact support", href: "/contact" }
  },
  resources: {
    slug: "resources",
    navLabel: "Downloads / Resources",
    eyebrow: "RESOURCES",
    title: "Useful material for planning an AI initiative.",
    description: "Download Truefox AI capability, readiness and deployment resources.",
    intro: "Use these resources to structure internal conversations, identify gaps and prepare for a productive discovery session.",
    kind: "resources",
    cards: [
      { eyebrow: "PDF", title: "AI Capability Overview", text: "A concise summary of Truefox AI capabilities, delivery model and solution areas.", href: "/resources/truefox-capability-overview.pdf" },
      { eyebrow: "PDF", title: "AI Readiness Checklist", text: "Questions covering outcomes, users, data, integration, governance and ownership.", href: "/resources/truefox-ai-readiness-checklist.pdf" },
      { eyebrow: "PDF", title: "Deployment & Security Brief", text: "A discussion guide for cloud, on-premise, edge, access, monitoring and operations.", href: "/resources/truefox-deployment-security-brief.pdf" }
    ],
    cta: { label: "Discuss your readiness", href: "/contact" }
  }
};

export const pageSlugs = Object.keys(pages);
