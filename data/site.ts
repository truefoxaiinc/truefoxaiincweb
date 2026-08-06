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
    | "faq"
    | "blog"
    | "resources"
    | "form";
  stats?: { value: string; label: string }[];
  cards?: Card[];
  sections?: { eyebrow?: string; title: string; text: string; bullets?: string[] }[];
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
      ["Careers", "/careers"]
    ]
  },
  {
    label: "Solutions",
    items: [
      ["Products", "/products"],
      ["Services", "/services"],
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
    title: "We build intelligence that earns its place.",
    description: "Learn about Truefox AI, our Canada–India delivery model and our approach to production-grade AI.",
    intro:
      "Truefox AI brings strategy, product thinking and deep engineering together to create systems people can trust and organisations can put to work—from computer vision and intelligent agents to connected platforms and digital products.",
    kind: "standard",
    stats: [
      { value: "2", label: "Operating regions" },
      { value: "8+", label: "Core capability areas" },
      { value: "1", label: "Integrated delivery team" }
    ],
    cards: [
      { eyebrow: "MISSION", title: "MAKE INTELLIGENCE USEFUL.", text: "We turn ambitious ideas into systems that improve real decisions, workflows and outcomes—not technology that exists for its own sake." },
      { eyebrow: "HOW WE WORK", title: "ONE TEAM, CONNECTED BY THE WORK.", text: "Across Canada and India, strategy, research, design and engineering work together from the first question through production and continuous improvement." },
      { eyebrow: "OUR STANDARD", title: "BUILT BEYOND THE DEMO.", text: "Security, governance, observability, maintainability and user adoption are designed into every system from the beginning—not added after launch." }
    ],
    sections: [
      {
        eyebrow: "WHAT GUIDES US",
        title: "GOOD AI BEGINS WITH HOW THE WORK ACTUALLY HAPPENS.",
        text: "We design around the decisions, people and conditions that shape the real environment—not an idealised version of it.",
        bullets: ["UNDERSTAND THE DECISION", "TEST WITH REPRESENTATIVE DATA", "KEEP PEOPLE IN CONTROL", "BUILD TO OPERATE AND IMPROVE"]
      },
      {
        eyebrow: "HOW WE PARTNER",
        title: "START WHERE THE WORK NEEDS US.",
        text: "From a focused discovery engagement to long-term product engineering, we shape the partnership around the problem, its maturity and the level of support required.",
        bullets: ["DEFINE · ADVISORY & ARCHITECTURE", "PROVE · PROTOTYPES & VALIDATION", "BUILD · PRODUCTION PRODUCT DELIVERY", "EVOLVE · MANAGED IMPROVEMENT & SUPPORT"]
      }
    ],
    cta: { label: "Start a conversation", href: "/contact" }
  },
  products: {
    slug: "products",
    navLabel: "Products",
    eyebrow: "PRODUCTS",
    title: "INTELLIGENCE THAT ADAPTS TO THE OPERATION.",
    description: "Truefox AI products for identity, security and operational decision-making.",
    intro:
      "Our products support identity, security and operational decision-making—configured around the environment, connected to existing systems and deployed wherever the work demands: cloud, on-premise, edge or hybrid.",
    kind: "products",
    cards: [
      { eyebrow: "01", title: "INTELLIGENT SECURITY", text: "Turn live video into timely awareness with real-time detection for security events, safety risks and unusual activity.", href: "/products#security" },
      { eyebrow: "02", title: "IDENTITY INTELLIGENCE", text: "Support secure identity, access and attendance workflows with face recognition, fingerprint verification, liveness detection and anti-spoofing.", href: "/products#biometrics" },
      { eyebrow: "03", title: "ENTERPRISE KNOWLEDGE ASSISTANTS", text: "Give teams secure, grounded answers from approved company knowledge—with visible sources, controlled access and connections to the tools they use.", href: "/products#assistants" },
      { eyebrow: "04", title: "WORKFLOW AGENTS", text: "Coordinate tools, information and multi-step business workflows with permissions, approvals, audit history and human oversight built in.", href: "/products#agents" },
      { eyebrow: "05", title: "CONNECTED EDGE", text: "Bring intelligence closer to the operation through connected sensors, embedded software, gateways and on-device inference.", href: "/products#iot" }
    ],
    sections: [
      { title: "AI SMART SECURITY", text: "Turn live video into timely operational awareness with real-time detection for security events, perimeter activity and safety risks.", bullets: ["MULTI-CAMERA ANALYTICS", "CONFIGURABLE EVENT RULES", "REAL-TIME OPERATOR ALERTS", "AUDIT-READY EVENT HISTORY"] },
      { title: "BIOMETRIC INTELLIGENCE", text: "Support secure identity, access and attendance workflows with flexible biometric verification, liveness detection and policy-based controls.", bullets: ["FACE & FINGERPRINT VERIFICATION", "LIVENESS & ANTI-SPOOFING", "ACCESS & ATTENDANCE WORKFLOWS", "API & SYSTEM INTEGRATION"] },
      { title: "PRIVATE AI ASSISTANTS", text: "Give teams secure, grounded answers from approved organisational knowledge, policies and connected tools.", bullets: ["PRIVATE KNOWLEDGE RETRIEVAL", "ROLE-BASED ACCESS", "SOURCE-BACKED ANSWERS", "WORKFLOW & HUMAN HANDOFFS"] },
      { title: "AGENTIC AUTOMATION", text: "Coordinate complex, multi-step work across approved systems with permissions, checkpoints and human oversight built in.", bullets: ["TOOL USE & ORCHESTRATION", "APPROVAL CHECKPOINTS", "TRACEABLE RUN HISTORY", "EXCEPTION HANDLING"] },
      { title: "IoT & EDGE AI", text: "Process data closer to its source when response time, connectivity, bandwidth or privacy make cloud-only systems impractical.", bullets: ["SENSOR & DEVICE INTEGRATION", "ON-DEVICE INFERENCE", "GATEWAY SOFTWARE", "FLEET MONITORING"] }
    ],
    cta: { label: "Book a product demo", href: "/book-demo" }
  },
  services: {
    slug: "services",
    navLabel: "Services",
    eyebrow: "SERVICES",
    title: "FROM COMPLEX NEED TO WORKING SYSTEM.",
    description: "Strategy, product and engineering services for secure, maintainable systems.",
    intro:
      "Truefox AI brings strategy, product, AI, software, cloud and edge engineering into one accountable partnership—helping clients build secure, maintainable systems without managing handoffs across multiple vendors.",
    kind: "services",
    cards: [
      { eyebrow: "06", title: "CUSTOM AI & ML", text: "Turn complex data into dependable models, decision systems and production-ready machine learning capabilities.", href: "/services#custom-ai-ml" },
      { eyebrow: "07", title: "WEB & MOBILE PRODUCTS", text: "Create intuitive digital products that bring intelligent workflows to customers, operators and internal teams.", href: "/services#web-mobile-products" },
      { eyebrow: "08", title: "R&D & PRODUCT VALIDATION", text: "Test ambitious ideas through focused research, technical feasibility studies and representative prototypes.", href: "/services#product-validation" }
    ],
    sections: [
      { title: "AI STRATEGY & SYSTEMS ARCHITECTURE", text: "Identify the right opportunities, assess feasibility and define a practical roadmap across data, technology, risk and deployment." },
      { title: "COMPUTER VISION & BIOMETRICS", text: "Build systems for detection, tracking, inspection and identity—with liveness, anti-spoofing and human oversight where required." },
      { title: "GENERATIVE & AGENTIC AI", text: "Create secure knowledge assistants and governed agents that retrieve information, use approved tools and move workflows forward." },
      { title: "DATA, MACHINE LEARNING & MLOps", text: "Develop the pipelines, models and operating practices needed to experiment, deploy, monitor and improve machine learning systems." },
      { title: "IoT, EMBEDDED & EDGE SYSTEMS", text: "Connect sensors, devices and gateways with reliable firmware, telemetry, edge inference and operational controls." },
      { title: "WEB, MOBILE & CLOUD PRODUCTS", text: "Build customer experiences, operational applications, APIs and cloud platforms that connect intelligence to everyday work." },
      { title: "RESEARCH & RAPID PROTOTYPING", text: "Resolve technical uncertainty through product discovery, feasibility studies and proof-of-concept systems built with representative inputs." }
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
  "attention-minder-privacy-policy": {
    slug: "attention-minder-privacy-policy",
    navLabel: "Attention Minder Privacy Policy",
    eyebrow: "LEGAL · UPDATED 25 NOVEMBER 2025",
    title: "Attention Minder Privacy Policy",
    description: "Terms and Conditions of Use and Privacy Policy for the Attention Minder platform by Truefox AI Inc.",
    intro: "These Terms and Conditions of Use and Privacy Policy govern access to and use of the Attention Minder website, mobile application, and related online services provided by Truefox AI Inc. By using the Platform, you agree to this Agreement. If you do not agree, you must discontinue use immediately.",
    kind: "legal",
    sections: [
      { title: "1. Not Medical Advice", text: "The Platform offers AI-powered, real-time camera tools that analyze student behavior, posture, and attention levels. It is a supportive educational and behavioral tool only. Always seek qualified professional advice for health, attention disorder, learning disability, or mental health concerns. Contact a qualified healthcare professional immediately in a medical or psychological emergency.", bullets: ["Nothing on the Platform should be treated as medical advice.", "It does not diagnose ADHD or any other medical condition.", "It does not replace professional evaluation, therapy, treatment, or medical counsel."] },
      { title: "2. Modification of Terms", text: "Truefox AI may update, modify, or revise this Agreement at any time. Updates become effective when posted, and continued use indicates acceptance of the latest version. Additional guidelines, privacy notices, and policies may apply to specific features or services." },
      { title: "3. Age Requirements", text: "The Platform is intended for parents, teachers, institutions, and students aged five and above.", bullets: ["Users under 18 must use the Platform under parent or teacher supervision.", "Account creation by minors may require parent or school authorization.", "The Platform is not intended for independent use by children without supervision."] },
      { title: "4. Acceptable Use Policy", text: "Violations may result in account suspension or legal action. You agree that you will not:", bullets: ["Use the Platform for unlawful, harmful, harassing, threatening, or abusive purposes.", "Interfere with security features or attempt unauthorized access.", "Use automated bots, scrapers, or crawlers to copy or extract data.", "Post or transmit defamatory, obscene, hateful, or illegal content.", "Upload viruses, malware, or harmful components.", "Reverse-engineer, modify, or interfere with AI models, monitoring systems, or network architecture.", "Use the Platform for surveillance, spying, or unethical monitoring."] },
      { title: "5. Camera-Based Features", text: "The Platform uses the device camera only for live analysis. Analysis occurs in real time and is not stored on servers unless a future feature expressly provides otherwise with user consent.", bullets: ["Analysis may detect attention shifts, eye or face direction, posture, screen engagement, and non-medical behavioral signs of distraction.", "We do not record video, store images, capture screenshots, or save biometric facial data."] },
      { title: "6. Account Setup and Responsibility", text: "Truefox AI may suspend or terminate accounts for violations of this Agreement or inaccurate information.", bullets: ["Provide accurate and current registration information.", "Maintain the confidentiality of login credentials.", "Do not share accounts with others.", "Inform us immediately of unauthorized access."] },
      { title: "7. Privacy Policy — Data We Collect", text: "We collect only information needed to provide and improve the Platform.", bullets: ["Information you provide: name, email, grade level or age, optional school or institution details, and profile preferences.", "Real-time sensor information: live camera monitoring that is not saved, engagement analytics, and generated attention scores.", "Automatic data: device type, operating system, crash logs, session duration, and application usage insights.", "No biometric storage: we do not collect or store facial recognition data, biometric identifiers, or recorded footage."] },
      { title: "8. How We Use Your Information", text: "We use data to provide focus and attention monitoring, improve student engagement, generate teacher or parent reports, and enhance Platform functionality. We never sell or trade your information for advertising purposes." },
      { title: "9. Data Security", text: "We use encryption, secure servers, and regular audits to protect data. However, no system is perfectly secure. Users are responsible for safeguarding their login credentials." },
      { title: "10. Children’s Data and Consent", text: "Because the Platform supports students, parents, guardians, or institutions must authorize its use. We collect only the minimum data required and comply with COPPA and other applicable laws." },
      { title: "11. User-Generated Content", text: "Feedback or suggestions submitted to Truefox AI are granted on a royalty-free and perpetual basis. Users may not submit harmful or illegal content." },
      { title: "12. Intellectual Property", text: "All content, AI systems, graphics, and code belong exclusively to Truefox AI Inc. Reproduction without permission is prohibited." },
      { title: "13. Disclaimers", text: "The Platform is provided ‘as is.’ Truefox AI makes no warranties regarding the accuracy of AI analysis, continuous availability, or fitness for medical use." },
      { title: "14. Limitation of Liability", text: "Truefox AI is not liable for damage arising from misuse, service interruptions, or incorrect AI insights. Your sole remedy is to stop using the Platform." },
      { title: "15. Third-Party Links", text: "We are not responsible for the content or privacy practices of external websites linked from the Platform." },
      { title: "16. Termination of Use", text: "We may suspend access for Agreement violations or security threats. You may terminate your account at any time by contacting support." },
      { title: "17. Governing Law", text: "These Terms are governed by the laws of your jurisdiction. Disputes shall be settled in the applicable courts." },
      { title: "18. Contact Information", text: "For questions related to these Terms, privacy, or support, contact Truefox AI Inc. at truefoxaiinc@gmail.com or visit https://truefoxaiinc.com/." }
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
    title: "Built for what happens after the demo.",
    description: "Why organizations choose Truefox AI for complex applied AI and digital product delivery.",
    intro: "A prototype proves what is possible. We engineer what comes next—designing around real users, operating conditions, risk and long-term ownership from the beginning.",
    kind: "standard",
    cards: [
      { eyebrow: "01", title: "BUILT AROUND REALITY", text: "Every architecture begins with the people, processes, data and constraints it must work with." },
      { eyebrow: "02", title: "ONE TEAM. ONE OUTCOME.", text: "Strategy, product, AI, software, cloud and edge engineering move together under clear ownership." },
      { eyebrow: "03", title: "DEPLOYED WHERE IT WORKS", text: "Cloud, private cloud, on-premise, edge or hybrid—chosen according to the operation, not convention." },
      { eyebrow: "04", title: "CONTROL FROM THE START", text: "Human oversight, permissions, auditability and exception handling are designed into the system from day one." },
      { eyebrow: "05", title: "PROVE BEFORE YOU SCALE", text: "Representative data and focused pilots reveal practical risks before significant investment is made." },
      { eyebrow: "06", title: "CONNECTED DELIVERY", text: "Our teams across Canada and India work as one, supporting international clients from discovery through continuous improvement." }
    ],
    cta: { label: "Discuss your project", href: "/request-quote" }
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
  careers: {
    slug: "careers",
    navLabel: "Careers",
    eyebrow: "CAREERS",
    title: "BUILD WHAT THE REAL WORLD CAN RELY ON.",
    description: "Build dependable real-world systems with Truefox AI.",
    intro: "We’re looking for people who bring technical depth, genuine curiosity and the ownership to carry ideas into production—without losing sight of the people and environments those systems are built to serve.",
    kind: "standard",
    cards: [
      { eyebrow: "EDGE SYSTEMS", title: "EMBEDDED & IoT ENGINEER", text: "Build reliable firmware and connected-device systems—from sensors and gateways to telemetry, remote management and on-device AI.", meta: "C/C++ · EMBEDDED LINUX / RTOS · DEVICE PROTOCOLS · EDGE INFERENCE" }
    ]
  },
  faq: {
    slug: "faq",
    navLabel: "Frequently Asked Questions",
    eyebrow: "FAQ",
    title: "Useful answers before the first meeting.",
    description: "Frequently asked questions about Truefox AI services, delivery, deployment, data and support.",
    intro: "These answers explain our typical approach. Final scope, architecture, security and commercial terms depend on the engagement.",
    kind: "faq",
    sections: [
      { title: "What kinds of projects does Truefox AI take on?", text: "Applied AI, computer vision, biometrics, private assistants, agentic workflows, IoT, industrial automation, web and mobile products, data platforms and R&D." },
      { title: "Can you work with an existing product or team?", text: "Yes. We can provide focused architecture, specialist engineering, a pilot team or end-to-end delivery depending on the gap." },
      { title: "Do you support on-premise and edge deployment?", text: "Yes. Deployment can be cloud, private cloud, on-premise, edge or hybrid based on latency, bandwidth, integration and privacy needs." },
      { title: "How do you begin an AI project?", text: "We clarify the business decision or workflow, users, available data, constraints and success criteria before choosing technology." },
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
  "request-quote": {
    slug: "request-quote",
    navLabel: "Request a Quote",
    eyebrow: "PROJECT ENQUIRY",
    title: "Tell us what you’re working through.",
    description: "Request a scoped proposal from Truefox AI.",
    intro: "Share the challenge, the people it affects and any constraints we should understand. You don’t need to have the solution figured out—we’ll help define the right way forward.",
    kind: "form",
    sections: [
      { title: "WHAT HELPS US GET STARTED", text: "", bullets: ["The current workflow and where it breaks down", "The people who will use or benefit from the solution", "Any relevant data, software or existing systems", "Your preferred timeline or important deadlines", "Cloud, on-premise, edge or other deployment needs", "A budget range, if one has already been established"] }
    ]
  },
  "book-demo": {
    slug: "book-demo",
    navLabel: "Book a Demo",
    eyebrow: "PRODUCT DEMO",
    title: "SEE THE PRODUCT IN THE CONTEXT THAT MATTERS.",
    description: "Book a tailored Truefox AI product demonstration.",
    intro: "Tell us which capability you’re exploring, how the workflow operates today and where the system would need to run. We’ll tailor the session around your questions, environment and requirements—not a generic feature walkthrough.",
    kind: "form",
    sections: [
      { title: "CONVERSATION TYPE", text: "", bullets: ["PRODUCT DEMONSTRATION", "TECHNICAL CONSULTATION", "AI OPPORTUNITY WORKSHOP", "PARTNERSHIP DISCUSSION"] },
      { title: "AREA OF INTEREST", text: "", bullets: ["AI SMART SECURITY", "BIOMETRIC INTELLIGENCE", "PRIVATE AI ASSISTANTS", "AGENTIC AUTOMATION", "IoT & EDGE AI", "CUSTOM PRODUCT ENGINEERING"] }
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
