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
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/truefox.ai.inc?igsh=amNoYXQ0b25ueWl4",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/people/Truefox-AI-Inc/61592832576925/?mibextid=wwXIfr&rdid=tWitnXkc7ef7wYfz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ByRraP2ty%2F%3Fmibextid%3DwwXIfr",
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
      ["Case Studies", "/case-studies"]
    ]
  },
  {
    label: "Resources",
    items: [
      ["Blog & News", "/blog"],
      ["FAQ", "/faq"],
      ["Help Centre", "/support"]
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
    title: "WHAT SHOULD WORK BETTER?",
    description: "Contact Truefox AI for AI consulting, product development, demonstrations, support and partnerships.",
    intro: "Tell us about the workflow, operational challenge or product idea you’re exploring. We’ll help turn the context into a clear and practical next step.",
    kind: "contact",
    sections: [
      { title: "CANADA", text: "Kitchener, Ontario\nHeadquarters, client strategy and delivery leadership." },
      { title: "INDIA", text: "Kochi, Kerala\nAI engineering, software development and technical support." },
      { title: "INTERNATIONAL", text: "Remote discovery, delivery and ongoing support for clients across regions." }
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
    description: "This policy explains how Truefox AI Inc. collects, uses, stores and protects personal information when you visit our website, contact our team or submit an enquiry.",
    intro: "This policy explains how Truefox AI Inc. collects, uses, stores and protects personal information when you visit our website, contact our team or submit an enquiry.",
    kind: "legal",
    sections: [
      { title: "INFORMATION WE COLLECT", text: "We may collect information you provide through contact forms, email and support requests. We may also collect limited technical data, including browser type, device information, IP address and website usage data." },
      { title: "HOW WE USE INFORMATION", text: "We use this information to respond to enquiries, provide requested services, operate and secure our website, improve user experiences and comply with applicable legal obligations." },
      { title: "SERVICE PROVIDERS AND INFORMATION SHARING", text: "We may share information with trusted service providers that support hosting, analytics, communications and customer service. These providers are permitted to process information only for authorized purposes and subject to appropriate safeguards." },
      { title: "RETENTION AND SECURITY", text: "We retain personal information only for as long as reasonably necessary for the purposes described in this policy or as required by law. We use administrative, technical and organizational measures appropriate to the nature and sensitivity of the information." },
      { title: "YOUR PRIVACY RIGHTS", text: "Depending on where you live, you may have the right to request access to, correction of or deletion of your personal information, or to restrict or object to certain processing." },
      { title: "CONTACT US", text: "For privacy-related questions or requests, contact Truefox AI Inc. at info@truefoxaiinc.com." }
    ]
  },
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    navLabel: "Terms and Conditions",
    eyebrow: "LEGAL",
    title: "Terms and Conditions",
    description: "These terms govern your access to and use of the Truefox AI Inc. website. By using this website, you agree to the conditions outlined below.",
    intro: "These terms govern your access to and use of the Truefox AI Inc. website. By using this website, you agree to the conditions outlined below.",
    kind: "legal",
    sections: [
      { title: "USE OF THIS WEBSITE", text: "This website provides general information about Truefox AI Inc., our products and our services. You must not misuse the website, interfere with its operation, introduce malicious code or attempt to access any system or information without authorization." },
      { title: "INFORMATIONAL PURPOSE", text: "Website content is provided for general informational purposes. It does not constitute professional advice, create a client relationship or form a binding commitment to provide products or services. Any engagement is governed by a separate written agreement." },
      { title: "INTELLECTUAL PROPERTY", text: "Unless otherwise stated, the Truefox AI name, branding, website design, text, software and original materials are owned by or licensed to Truefox AI Inc. They may not be copied, modified, distributed or commercially used without prior written permission." },
      { title: "THIRD-PARTY LINKS", text: "This website may contain links to third-party websites or services for convenience. Truefox AI Inc. does not control and is not responsible for their availability, content, security or privacy practices." },
      { title: "LIABILITY AND CHANGES", text: "To the fullest extent permitted by applicable law, Truefox AI Inc. limits its liability arising from access to or use of this website. We may update the website and these terms as our business, technology or legal obligations evolve." },
      { title: "CONTACT US", text: "For questions about these terms, contact Truefox AI Inc. at info@truefoxaiinc.com." }
    ]
  },
  team: {
    slug: "team",
    navLabel: "Our Team",
    eyebrow: "PEOPLE",
    title: "DIFFERENT DISCIPLINES. ONE SHARED STANDARD.",
    description: "Our team brings together business insight, AI and data expertise, software and cloud engineering, embedded systems, product design, quality assurance and client delivery—working as one team from idea to operation.",
    intro: "Our team brings together business insight, AI and data expertise, software and cloud engineering, embedded systems, product design, quality assurance and client delivery—working as one team from idea to operation.",
    kind: "team",
    cards: [
      { eyebrow: "LEADERSHIP", title: "STRATEGY & CLIENT SUCCESS", text: "Translates business priorities into clear outcomes, practical delivery plans and lasting client relationships." },
      { eyebrow: "INTELLIGENCE", title: "AI RESEARCH & MACHINE LEARNING", text: "Designs, trains and evaluates computer vision, language, predictive and optimization systems." },
      { eyebrow: "ENGINEERING", title: "PRODUCT & PLATFORM", text: "Builds the web, mobile, backend, integration and cloud foundations required for dependable production systems." },
      { eyebrow: "EDGE", title: "IoT & EMBEDDED SYSTEMS", text: "Connects sensors, devices, gateways and edge intelligence with the workflows they support." },
      { eyebrow: "QUALITY", title: "QA, SECURITY & RELIABILITY", text: "Validates performance, resilience, data protection, access controls and production readiness." },
      { eyebrow: "ADOPTION", title: "DELIVERY & SUPPORT", text: "Guides rollout, documentation, training, monitoring and continuous improvement after launch." }
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
    eyebrow: "PARTNERSHIPS",
    title: "AMBITIOUS WORK IS RARELY BUILT ALONE.",
    description: "Partnership opportunities with Truefox AI.",
    intro: "We collaborate with operating companies, product teams, technology providers and domain specialists who value practical execution, shared ownership and relationships built to last.",
    kind: "proof",
    cards: [
      { eyebrow: "01", title: "LAYMOON INC.", text: "Client engagement" },
      { eyebrow: "02", title: "STONEY LAKE", text: "Client engagement" },
      { eyebrow: "03", title: "VCARE FLOORING", text: "Client engagement" },
      { eyebrow: "04", title: "AL RABEAH WATER FACTORY", text: "Industrial automation" },
      { eyebrow: "05", title: "TEQNIA INC.", text: "Technology engagement" },
      { eyebrow: "06", title: "K&S FOOD INC.", text: "Computer vision for food manufacturing" },
      { eyebrow: "07", title: "WOW BRAIDS", text: "Cosmetic dispensing machine engineering" }
    ],
    sections: [
      { title: "TECHNOLOGY PARTNERSHIPS", text: "We collaborate with cloud, hardware, data, security and specialist technology providers when shared expertise creates a stronger, better-integrated solution." },
      { title: "DELIVERY & INTEGRATION PARTNERSHIPS", text: "Consultancies and system integrators can extend their delivery capabilities with Truefox AI’s expertise in artificial intelligence, computer vision and digital product engineering—without fragmenting the client experience." }
    ],
    cta: { label: "EXPLORE PARTNERSHIPS", href: "/contact" }
  },
  "case-studies": {
    slug: "case-studies",
    navLabel: "Case Studies",
    eyebrow: "SELECTED WORK",
    title: "SYSTEMS SHAPED BY THE WORK THEY NEED TO DO.",
    description: "Selected Truefox AI engagements across intelligent operations, automation, computer vision and digital product engineering.",
    intro: "Explore selected engagements across intelligent operations, automation, computer vision and digital product engineering—each designed around the people, processes and environments it serves.",
    kind: "proof",
    cards: [
      { eyebrow: "FOOD MANUFACTURING · ONTARIO", title: "REAL-TIME QUALITY INTELLIGENCE", text: "A conveyor-side computer vision system designed to identify visible product defects and help operators investigate issues sooner.", meta: "COMPUTER VISION · EDGE PROCESSING · OPERATOR WORKFLOW" },
      { eyebrow: "INDUSTRIAL AUTOMATION · SAUDI ARABIA", title: "CONNECTED PROCESS CONTROL", text: "A custom filling and control system designed around the production requirements, equipment and operating workflow of a water manufacturer.", meta: "AUTOMATION · CONTROL SYSTEMS · OPERATIONAL INTEGRATION" },
      { eyebrow: "HOSPITALITY · ONTARIO", title: "WORKFORCE IDENTITY & ATTENDANCE", text: "A biometric sign-in and attendance system designed to make everyday employee access and workforce records easier to manage.", meta: "BIOMETRICS · ATTENDANCE · WORKFLOW INTEGRATION" }
    ],
    sections: [
      { eyebrow: "HOW WE DOCUMENT OUTCOMES", title: "THE FULL STORY—NOT JUST THE TECHNOLOGY.", text: "Our case studies follow the work from operating context and constraints through architecture, implementation and adoption. Results are included only when they can be verified and approved." }
    ],
    cta: { label: "DISCUSS A SIMILAR CHALLENGE", href: "/request-quote" }
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
    title: "CLEAR ANSWERS. BETTER FIRST CONVERSATIONS.",
    description: "Frequently asked questions about Truefox AI services, delivery, deployment, data and support.",
    intro: "Explore how we typically approach products, projects, deployment and long-term support. Every engagement is different, so final recommendations, architecture, security requirements and commercial terms are defined around your specific context.",
    kind: "faq",
    sections: [
      { title: "WHAT KINDS OF PROJECTS DOES TRUEFOX AI TAKE ON?", text: "We build AI and digital systems that improve real workflows, decisions and customer experiences. Our work spans computer vision, biometrics, private AI assistants, agentic workflows, IoT, industrial automation, data platforms, web and mobile products, and applied R&D." },
      { title: "CAN YOU WORK WITH AN EXISTING PRODUCT OR TEAM?", text: "Yes. We can strengthen a specific area through architecture or specialist engineering, form a focused pilot team, or take responsibility for end-to-end delivery." },
      { title: "DO YOU SUPPORT ON-PREMISE AND EDGE DEPLOYMENT?", text: "Yes. We support cloud, private cloud, on-premise, edge and hybrid deployments. The architecture is selected around your latency, bandwidth, privacy, resilience and integration requirements." },
      { title: "HOW DO YOU BEGIN AN AI PROJECT?", text: "We begin with the problem—not the technology. Together, we clarify the workflow or decision being improved, the people involved, available data, operational constraints and measurable success criteria." },
      { title: "CAN YOU SIGN AN NDA?", text: "Yes. A mutual NDA can be considered and completed before confidential discovery begins, subject to review and agreement by both parties." },
      { title: "WHO OWNS THE DELIVERED SOFTWARE AND MODELS?", text: "Ownership and licensing terms are agreed before development begins and documented in the commercial agreement. This includes client-specific deliverables, third-party components and any reusable Truefox AI technology." },
      { title: "DO YOU PROVIDE SUPPORT AFTER LAUNCH?", text: "Yes. Post-launch support can include system monitoring, incident support, model performance reviews, cloud operations, product enhancements and continuous improvement—based on the agreed support plan." }
    ]
  },
  blog: {
    slug: "blog",
    navLabel: "Blog & News",
    eyebrow: "INSIGHTS",
    title: "PRACTICAL THINKING FOR REAL-WORLD AI.",
    description: "Ideas, lessons and technical perspectives drawn from our work across AI deployment, computer vision, agentic systems, data platforms, edge intelligence and digital product engineering.",
    intro: "Ideas, lessons and technical perspectives drawn from our work across AI deployment, computer vision, agentic systems, data platforms, edge intelligence and digital product engineering.",
    kind: "blog"
  },
  "request-quote": {
    slug: "request-quote",
    navLabel: "Request a Quote",
    eyebrow: "REQUEST A PROPOSAL",
    title: "START WITH THE PROBLEM—NOT A FINISHED SPECIFICATION.",
    description: "Request a scoped proposal from Truefox AI.",
    intro: "Share the challenge, the people it affects and any constraints we should understand. We’ll help clarify the requirements before recommending an approach, scope and commercial proposal.",
    kind: "form",
    sections: [
      { title: "USEFUL CONTEXT", text: "", bullets: ["How the workflow works today—and where it breaks down", "Who will use or benefit from the solution", "Relevant data, software and existing systems", "Preferred timing or important deadlines", "Cloud, on-premise, edge or other deployment needs", "Budget range, if already established"] }
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
    title: "THE RIGHT HELP, WITHOUT THE RUNAROUND.",
    description: "Truefox AI help centre for existing clients, product users and security reports.",
    intro: "Whether you need help with a live product, an active project or a technical issue, choose the appropriate support channel so our team can respond with the right context.",
    kind: "standard",
    cards: [
      { eyebrow: "CLIENT", title: "PROJECT SUPPORT", text: "For active projects and deployed systems, please use the support channel and project reference provided in your service agreement. This helps your request reach the right team quickly." },
      { eyebrow: "PRODUCT", title: "PRODUCT SUPPORT", text: "Include the product name, deployment environment, impact on users, screenshots and clear steps to reproduce the issue." },
      { eyebrow: "SECURITY", title: "SECURITY REPORTING", text: "Report suspected vulnerabilities privately with enough technical detail for us to investigate. Please avoid sharing credentials, personal information or other unnecessary sensitive data." },
      { eyebrow: "GENERAL", title: "GENERAL ENQUIRIES", text: "For questions about our website, billing, partnerships or other non-urgent matters, please use the contact form or email our team." }
    ],
    sections: [
      { title: "BEFORE YOU SUBMIT", text: "Help us understand the issue by including the affected environment, user or business impact, when it was first observed, any recent changes, relevant error messages and safe steps to reproduce it." },
      { title: "RESPONSE AND URGENCY", text: "Support availability and response targets are governed by your signed service agreement. This website is not monitored as an emergency-response channel." }
    ],
    cta: { label: "CONTACT SUPPORT", href: "/contact" }
  }
};

export const pageSlugs = Object.keys(pages);
