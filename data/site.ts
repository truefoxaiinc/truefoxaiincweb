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
  seoTitle?: string;
  seoKeywords?: string[];
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
  url: "https://www.truefoxaiinc.com",
  email: "info@truefoxaiinc.com",
  phoneLabel: "+1 (Canada)",
  lastUpdated: "2026-08-16",
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
      city: "Kochi, Kerala",
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
      ["Kitchener Headquarters", "/kitchener"],
      ["Kochi Engineering Office", "/kochi"],
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
    href: "/ai-smart-security"
  },
  {
    eyebrow: "02",
    title: "Biometric Intelligence",
    text: "Identity, attendance, liveness and anti-spoofing for face and fingerprint workflows.",
    href: "/biometric-intelligence"
  },
  {
    eyebrow: "03",
    title: "Private AI Assistants",
    text: "Secure RAG and domain-aware assistants connected to enterprise knowledge and tools.",
    href: "/private-ai-assistants"
  },
  {
    eyebrow: "04",
    title: "Agentic Automation",
    text: "Governed AI agents that reason, use tools and complete multi-step business workflows.",
    href: "/agentic-automation"
  },
  {
    eyebrow: "05",
    title: "IoT & Edge AI",
    text: "Sensors, firmware, gateways and edge inference for connected operations.",
    href: "/iot-edge-ai"
  },
  {
    eyebrow: "06",
    title: "Custom AI & ML",
    text: "Data engineering, model development, MLOps and bespoke decision systems.",
    href: "/custom-ai-ml"
  },
  {
    eyebrow: "07",
    title: "Web & Mobile Products",
    text: "Modern digital products that bring intelligent workflows to customers and teams.",
    href: "/web-mobile-products"
  },
  {
    eyebrow: "08",
    title: "R&D and Prototyping",
    text: "Feasibility studies, rapid prototypes and applied research for ambitious ideas.",
    href: "/research-development"
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
      { eyebrow: "OUR STANDARD", title: "BUILT BEYOND THE DEMO.", text: "Security, governance, observability, maintainability and user adoption are designed into every system from the beginning—not added after launch." },
      { eyebrow: "CANADA HEADQUARTERS", title: "OUR KITCHENER PRESENCE.", text: "Learn how Truefox AI’s Canadian headquarters connects client strategy, AI engineering and delivery leadership from Kitchener, Ontario.", href: "/kitchener" },
      { eyebrow: "INDIA ENGINEERING", title: "OUR KOCHI ENGINEERING PRESENCE.", text: "Learn how the engineering team in Kakkanad supports AI research, product development, software engineering and technical delivery.", href: "/kochi" }
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
  kitchener: {
    slug: "kitchener",
    navLabel: "AI Engineering in Kitchener",
    seoTitle: "AI Engineering Company in Kitchener | Truefox AI",
    seoKeywords: ["AI company Kitchener", "AI engineering Kitchener", "AI development Kitchener", "AI solutions Kitchener", "AI company Kitchener-Waterloo"],
    eyebrow: "CANADIAN HEADQUARTERS",
    title: "AI Engineering & Development in Kitchener",
    description: "Truefox AI provides custom AI engineering from Kitchener, Ontario, including computer vision, private AI, automation, edge systems and product development.",
    intro: "Truefox AI Inc. is a Canada-headquartered AI engineering company with its Canadian office in Kitchener, Ontario. The team connects client strategy and commercial engagement with AI, software and product delivery supported by the company’s engineering presence in Kochi, India.",
    kind: "standard",
    stats: [
      { value: "CANADA", label: "Primary commercial presence" },
      { value: "08", label: "Connected capability areas" },
      { value: "ONE", label: "Integrated Canada–India team" }
    ],
    cards: [
      { eyebrow: "01 · VISION", title: "AI SMART SECURITY", text: "Computer-vision and video-analytics systems for security, safety and operational awareness.", href: "/ai-smart-security" },
      { eyebrow: "02 · IDENTITY", title: "BIOMETRIC INTELLIGENCE", text: "Identity, access and attendance workflows using face, fingerprint, liveness and anti-spoofing capabilities.", href: "/biometric-intelligence" },
      { eyebrow: "03 · KNOWLEDGE", title: "PRIVATE AI ASSISTANTS", text: "Enterprise assistants grounded in approved knowledge and connected to controlled business data and tools.", href: "/private-ai-assistants" },
      { eyebrow: "04 · WORKFLOWS", title: "AGENTIC AUTOMATION", text: "Governed AI agents that coordinate permitted tools and information across multi-step workflows.", href: "/agentic-automation" },
      { eyebrow: "05 · EDGE", title: "IoT & EDGE AI", text: "Connected devices, embedded systems, gateways and local inference for distributed and real-world operations.", href: "/iot-edge-ai" },
      { eyebrow: "06 · APPLIED AI", title: "CUSTOM AI & ML", text: "Purpose-built machine-learning systems spanning data engineering, prediction, vision, language and MLOps.", href: "/custom-ai-ml" },
      { eyebrow: "07 · PRODUCTS", title: "WEB & MOBILE PRODUCTS", text: "Web applications, mobile products and enterprise platforms built around real users and workflows.", href: "/web-mobile-products" },
      { eyebrow: "08 · VALIDATION", title: "RESEARCH & DEVELOPMENT", text: "Feasibility studies, applied research and representative prototypes that test important assumptions early.", href: "/research-development" }
    ],
    sections: [
      {
        eyebrow: "CANADIAN PRESENCE",
        title: "HEADQUARTERED IN KITCHENER, CONNECTED THROUGH DELIVERY.",
        text: "Truefox AI’s Kitchener headquarters supports company strategy, client engagement and delivery leadership. Work is coordinated through an integrated Canada–India model, with the Kochi engineering presence contributing AI research, product engineering, software development and technical delivery."
      },
      {
        eyebrow: "VERIFIED OFFICE",
        title: "TRUEFOX AI INC. — CANADIAN HEADQUARTERS",
        text: "Suite 300 · 72 Victoria Street South · Kitchener, Ontario N2G 4Y9 · Canada"
      },
      {
        eyebrow: "CUSTOM AI DEVELOPMENT",
        title: "ENGINEERING AROUND THE DECISION, WORKFLOW AND ENVIRONMENT.",
        text: "Truefox AI develops AI and software systems around a defined operational need rather than a predetermined technology. Work can include opportunity assessment, data and feasibility review, architecture, machine learning, software integration, deployment and the operating controls required to maintain and improve the system."
      },
      {
        eyebrow: "ENGAGEMENT PROCESS",
        title: "MOVE FROM OPEN QUESTION TO OPERATING SYSTEM.",
        text: "An engagement can begin with discovery, continue through feasibility work or a focused proof of concept, and progress into development, integration, deployment and ongoing improvement. The appropriate starting point depends on the available data, current systems, operating constraints, risk and outcome that needs to improve.",
        bullets: ["DISCOVERY", "FEASIBILITY & PROOF OF CONCEPT", "DEVELOPMENT", "INTEGRATION & DEPLOYMENT", "ONGOING IMPROVEMENT"]
      },
      {
        eyebrow: "FAQ",
        title: "WHERE IS TRUEFOX AI LOCATED IN CANADA?",
        text: "Truefox AI Inc. has its Canadian headquarters at Suite 300, 72 Victoria Street South, Kitchener, Ontario N2G 4Y9, Canada. The Kitchener office supports company strategy, client engagement and delivery leadership, working with the company’s engineering presence in Kochi, India."
      },
      {
        eyebrow: "FAQ",
        title: "WHAT AI DEVELOPMENT SERVICES DOES TRUEFOX AI PROVIDE IN KITCHENER?",
        text: "Truefox AI provides AI strategy, custom machine learning, computer vision, biometric systems, private AI assistants, agentic automation, IoT and edge AI, web and mobile product engineering, and applied research. Each engagement is shaped around the organization’s workflow, data, systems, operating environment and required outcome."
      },
      {
        eyebrow: "FAQ",
        title: "DOES TRUEFOX AI BUILD CUSTOM AI SYSTEMS FOR CANADIAN BUSINESSES?",
        text: "Yes. Truefox AI develops custom AI and software systems for organizations with specific operational requirements. The work can begin with discovery or a proof of concept and continue through production development, integration, deployment and ongoing improvement, depending on feasibility and project scope."
      },
      {
        eyebrow: "FAQ",
        title: "CAN TRUEFOX AI DEVELOP AI AGENTS AND AUTOMATION SYSTEMS?",
        text: "Yes. Truefox AI builds governed AI agents that can retrieve approved information, use permitted tools and coordinate bounded multi-step workflows. Permissions, validation, human approval, exception handling and auditability are designed according to the sensitivity and consequences of the workflow."
      },
      {
        eyebrow: "FAQ",
        title: "DOES TRUEFOX AI BUILD COMPUTER-VISION SOLUTIONS?",
        text: "Yes. Truefox AI develops computer-vision systems for applications such as video analytics, detection, tracking, inspection, security awareness and operational monitoring. The design considers camera conditions, representative data, response requirements, integration needs, deployment location and human review."
      },
      {
        eyebrow: "FAQ",
        title: "HOW CAN A COMPANY DISCUSS AN AI PROJECT WITH TRUEFOX AI?",
        text: "Use the project enquiry form to share the workflow, current challenge, available systems or data, operating environment and desired result. A short overview is enough to begin. The team can then identify whether discovery, a proof of concept, a demonstration or a scoped development engagement is appropriate."
      }
    ],
    cta: { label: "Discuss an AI project", href: "/request-quote" }
  },
  kochi: {
    slug: "kochi",
    navLabel: "AI Engineering in Kochi",
    eyebrow: "INDIA ENGINEERING OFFICE",
    title: "AI Engineering & Development in Kochi",
    description: "Truefox AI’s Kochi engineering team develops custom AI, computer vision, private assistants, automation, edge systems and digital products.",
    intro: "Truefox AI Inc. is an applied AI and product engineering company with an engineering presence in Kakkanad, Kochi, supporting AI research, software development and technical delivery across the company’s capability areas.",
    kind: "standard",
    stats: [
      { value: "KOCHI", label: "India engineering presence" },
      { value: "08", label: "Connected capability areas" },
      { value: "ONE", label: "Integrated Canada–India team" }
    ],
    cards: [
      { eyebrow: "01 · VISION", title: "AI SMART SECURITY", text: "Computer-vision systems for video analytics, situational awareness and operational monitoring.", href: "/ai-smart-security" },
      { eyebrow: "02 · IDENTITY", title: "BIOMETRIC INTELLIGENCE", text: "Identity and attendance workflows spanning face, fingerprint, liveness and anti-spoofing capabilities.", href: "/biometric-intelligence" },
      { eyebrow: "03 · KNOWLEDGE", title: "PRIVATE AI ASSISTANTS", text: "Grounded enterprise assistants that work with approved knowledge, controlled data and business tools.", href: "/private-ai-assistants" },
      { eyebrow: "04 · WORKFLOWS", title: "AGENTIC AUTOMATION", text: "Governed AI agents that reason across multi-step workflows and use explicitly permitted tools.", href: "/agentic-automation" },
      { eyebrow: "05 · EDGE", title: "IoT & EDGE AI", text: "Connected devices, embedded systems, gateways and local inference for real-world operations.", href: "/iot-edge-ai" },
      { eyebrow: "06 · APPLIED AI", title: "CUSTOM AI & ML", text: "Purpose-built machine-learning systems across data engineering, prediction, vision, language and MLOps.", href: "/custom-ai-ml" },
      { eyebrow: "07 · PRODUCTS", title: "WEB & MOBILE PRODUCTS", text: "Web applications, mobile products, SaaS platforms and enterprise software connected to reliable backend systems.", href: "/web-mobile-products" },
      { eyebrow: "08 · VALIDATION", title: "RESEARCH & DEVELOPMENT", text: "Feasibility studies, applied research and representative prototypes that reduce uncertainty before larger investment.", href: "/research-development" }
    ],
    sections: [
      {
        eyebrow: "KOCHI ENGINEERING PRESENCE",
        title: "A CONNECTED PART OF TRUEFOX AI’S DELIVERY TEAM.",
        text: "The Kochi engineering operation supports AI research, product engineering, software development and technical delivery. It works as part of Truefox AI’s integrated Canada–India model, connecting early discovery and technical validation with production engineering, deployment and ongoing improvement."
      },
      {
        eyebrow: "VERIFIED OFFICE",
        title: "INDIA ENGINEERING OFFICE",
        text: "Olangattu Tower · Chittethukara · Kakkanad · Kochi, Kerala 682037 · India"
      },
      {
        eyebrow: "ENGAGEMENT MODEL",
        title: "FROM THE FIRST QUESTION TO A SYSTEM THAT CAN OPERATE.",
        text: "Engagements can begin with discovery and feasibility work, move through a focused proof of concept, and continue into product development, integration, deployment and ongoing improvement. The path depends on the workflow, available data, operating environment, risks and outcome the organization needs to improve.",
        bullets: ["DISCOVERY", "PROOF OF CONCEPT", "DEVELOPMENT", "INTEGRATION", "ONGOING IMPROVEMENT"]
      },
      {
        eyebrow: "FAQ",
        title: "WHERE IS TRUEFOX AI LOCATED IN KOCHI?",
        text: "Truefox AI’s India engineering office is at Olangattu Tower, Chittethukara, Kakkanad, Kochi, Kerala 682037, India. The location supports AI research, product engineering, software development and technical delivery as part of the company’s integrated Canada–India team."
      },
      {
        eyebrow: "FAQ",
        title: "WHAT AI SERVICES DOES THE KOCHI ENGINEERING TEAM PROVIDE?",
        text: "The Kochi engineering team contributes across computer vision, biometric systems, private AI assistants, agentic automation, IoT and edge AI, custom machine learning, web and mobile products, and research and prototyping. The exact technical approach is shaped around the client’s workflow, data, environment and integration requirements."
      },
      {
        eyebrow: "FAQ",
        title: "DOES TRUEFOX AI BUILD CUSTOM AI AND MACHINE-LEARNING SYSTEMS?",
        text: "Yes. Truefox AI develops custom AI and machine-learning systems around a defined operational problem and the data that is genuinely available. Work can include data engineering, predictive analytics, computer vision, natural-language processing, model integration, deployment and MLOps."
      },
      {
        eyebrow: "FAQ",
        title: "CAN TRUEFOX AI DEVELOP PRIVATE AI ASSISTANTS AND AI AGENTS?",
        text: "Yes. Truefox AI builds private assistants grounded in approved company knowledge and governed AI agents that can use permitted tools within defined workflows. Access control, validation, human approval and auditability are designed according to the sensitivity and consequences of each use case."
      },
      {
        eyebrow: "FAQ",
        title: "HOW CAN A COMPANY DISCUSS AN AI PROJECT WITH TRUEFOX AI?",
        text: "Use the project enquiry form to describe the workflow, current challenge, operating environment and desired outcome. A short overview is enough to begin; the team can then identify whether discovery, a proof of concept, a demonstration or a scoped development engagement is the most practical next step."
      }
    ],
    cta: { label: "Discuss an AI project", href: "/request-quote" }
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
      { eyebrow: "01", title: "INTELLIGENT SECURITY", text: "Turn live video into timely awareness with real-time detection for security events, safety risks and unusual activity.", href: "/ai-smart-security" },
      { eyebrow: "02", title: "IDENTITY INTELLIGENCE", text: "Support secure identity, access and attendance workflows with face recognition, fingerprint verification, liveness detection and anti-spoofing.", href: "/biometric-intelligence" },
      { eyebrow: "03", title: "ENTERPRISE KNOWLEDGE ASSISTANTS", text: "Give teams secure, grounded answers from approved company knowledge—with visible sources, controlled access and connections to the tools they use.", href: "/private-ai-assistants" },
      { eyebrow: "04", title: "WORKFLOW AGENTS", text: "Coordinate tools, information and multi-step business workflows with permissions, approvals, audit history and human oversight built in.", href: "/agentic-automation" },
      { eyebrow: "05", title: "CONNECTED EDGE", text: "Bring intelligence closer to the operation through connected sensors, embedded software, gateways and on-device inference.", href: "/iot-edge-ai" },
      { eyebrow: "06", title: "ATTENTION MINDER", text: "Support healthier focus habits through guided assessments, personalised training, practical activities and privacy-conscious attention analysis.", href: "/attention-minder" }
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
  "ai-smart-security": {
    slug: "ai-smart-security", navLabel: "AI Smart Security", eyebrow: "PRODUCT · INTELLIGENT SECURITY",
    seoTitle: "AI Video Analytics & Smart Security | Truefox AI",
    seoKeywords: ["AI video analytics", "intelligent video surveillance", "computer vision security", "operational monitoring"],
    title: "AI video analytics for faster, better-informed security decisions.",
    description: "Truefox AI builds AI video analytics and intelligent surveillance systems for security, safety and operational awareness.",
    intro: "Truefox AI builds computer vision security systems for organisations that need to identify relevant events across live video and connected signals. Each AI video analytics system is shaped around the operating environment, existing camera infrastructure, operator workflow and decisions people need to make.",
    kind: "products",
    stats: [
      { value: "LIVE", label: "Video and signal analysis" },
      { value: "EDGE", label: "On-site processing option" },
      { value: "HUMAN", label: "Operator-led decisions" }
    ],
    cards: [
      { eyebrow: "SECURITY", title: "EVENT AWARENESS", text: "Surface configured security events and unusual activity from live camera feeds so operators can focus attention where it matters." },
      { eyebrow: "SAFETY", title: "OPERATIONAL MONITORING", text: "Use visual signals to support safety monitoring and awareness of conditions that may require review or intervention." },
      { eyebrow: "CONTEXT", title: "COORDINATED RESPONSE", text: "Connect video events with sensors, access-control signals and alert workflows to give teams more useful context before they act." }
    ],
    sections: [
      {
        eyebrow: "OVERVIEW",
        title: "WHAT IS AI VIDEO ANALYTICS?",
        text: "AI video analytics uses computer vision to examine video streams for defined objects, activities and conditions. Instead of asking operators to watch every feed continuously, it can bring relevant moments to their attention for review. The purpose is not to replace human judgement, but to help people find important signals sooner and respond with clearer visual context."
      },
      {
        eyebrow: "THE OPERATIONAL PROBLEM",
        title: "MORE CAMERAS DO NOT AUTOMATICALLY CREATE MORE AWARENESS.",
        text: "Security and operations teams may be responsible for many simultaneous video feeds, disconnected systems and high volumes of routine footage. Important events can be difficult to notice quickly, while generic alerts can create unnecessary noise. Truefox AI designs monitoring around the events, locations, response rules and escalation paths that matter in the actual environment.",
        bullets: ["TOO MANY FEEDS FOR CONTINUOUS MANUAL REVIEW", "DISCONNECTED VIDEO, SENSOR AND ACCESS SIGNALS", "ALERT NOISE WITHOUT ENOUGH CONTEXT", "TIME-CONSUMING SEARCH THROUGH RECORDED FOOTAGE"]
      },
      {
        eyebrow: "CORE CAPABILITIES",
        title: "TURN VISUAL ACTIVITY INTO ACTIONABLE EVENTS.",
        text: "The system can be configured to analyze live video for relevant activities, unusual events, perimeter conditions, safety risks and other operational signals defined during discovery. Detection logic, alert rules and review workflows are shaped around the use case rather than treated as a one-size-fits-all package.",
        bullets: ["MULTI-CAMERA VIDEO ANALYTICS", "CONFIGURABLE EVENT AND ZONE RULES", "REAL-TIME OPERATOR ALERTS", "SEARCHABLE EVENT HISTORY", "VISUAL CONTEXT FOR REVIEW"]
      },
      {
        eyebrow: "HOW IT WORKS",
        title: "FROM CAMERA SIGNAL TO OPERATOR REVIEW.",
        text: "Approved camera feeds and connected signals are processed by computer-vision models configured for the target environment. When a defined condition is detected, the system creates an event, adds the available context and routes it through the required alert or review workflow. Operators remain responsible for verification and response.",
        bullets: ["01 · CONNECT APPROVED VIDEO AND SIGNAL SOURCES", "02 · ANALYZE DEFINED AREAS AND CONDITIONS", "03 · CREATE A CONTEXTUAL EVENT", "04 · NOTIFY THE RIGHT OPERATOR OR SYSTEM", "05 · REVIEW, RESPOND AND RETAIN THE EVENT HISTORY"]
      },
      {
        eyebrow: "USE CASES",
        title: "DESIGNED AROUND THE CONDITIONS YOU NEED TO SEE.",
        text: "Potential applications depend on camera placement, image quality, environment, policies and available training data. During discovery, Truefox AI identifies which events are technically appropriate, operationally useful and safe to deploy before defining a pilot.",
        bullets: ["PERIMETER AND RESTRICTED-AREA AWARENESS", "UNUSUAL ACTIVITY REVIEW", "WORKPLACE SAFETY MONITORING", "FACILITY AND SITE OVERSIGHT", "OPERATIONAL EVENT DETECTION"]
      },
      {
        eyebrow: "INTEGRATIONS",
        title: "WORK WITH THE WIDER MONITORING ENVIRONMENT.",
        text: "AI Smart Security can be designed to connect video with relevant sensors, access-control signals, alert channels and operational systems. Integration scope is confirmed for each project based on available interfaces, security requirements and the actions that should follow a verified event.",
        bullets: ["CAMERA AND VIDEO STREAM INPUTS", "SENSOR AND ACCESS-CONTROL SIGNALS", "ALERT AND NOTIFICATION WORKFLOWS", "APIS AND APPROVED BUSINESS SYSTEMS"]
      },
      {
        eyebrow: "DEPLOYMENT",
        title: "PLACE PROCESSING WHERE THE OPERATION REQUIRES IT.",
        text: "Architecture can support cloud, private-cloud, on-premise, edge or hybrid environments. The right model depends on response time, connectivity, bandwidth, privacy, resilience, camera infrastructure and integration requirements. Edge processing can keep selected analysis closer to the source when continuous cloud dependence is impractical."
      },
      {
        eyebrow: "SECURITY & GOVERNANCE",
        title: "CONTROL IS PART OF THE SYSTEM DESIGN.",
        text: "Video systems require clear purpose, controlled access and responsible operation. Truefox AI considers data flow, retention, permissions, auditability, model limitations and human review during solution design. Final policies and legal obligations remain specific to the organisation and deployment location.",
        bullets: ["ROLE-BASED ACCESS", "CONFIGURABLE RETENTION", "EVENT AND OPERATOR AUDIT HISTORY", "HUMAN VERIFICATION", "DEPLOYMENT-SPECIFIC PRIVACY REVIEW"]
      },
      {
        eyebrow: "DELIVERY",
        title: "PROVE THE USE CASE BEFORE SCALING IT.",
        text: "Engagements begin with the operational problem, target events, camera conditions and response workflow. A focused prototype or pilot can then validate data quality, detection behaviour and operator usefulness before broader integration and deployment.",
        bullets: ["DISCOVERY · DEFINE EVENTS, USERS AND CONSTRAINTS", "VALIDATION · REVIEW VIDEO QUALITY AND FEASIBILITY", "PILOT · TEST IN REPRESENTATIVE CONDITIONS", "INTEGRATION · CONNECT ALERTS AND OPERATING SYSTEMS", "IMPROVEMENT · MONITOR PERFORMANCE AND REFINE"]
      },
      {
        eyebrow: "FAQ",
        title: "CAN AI WORK WITH EXISTING CCTV CAMERAS?",
        text: "It may be possible to use existing camera infrastructure when compatible video streams are available and the footage has sufficient quality for the intended analysis. Truefox AI reviews stream access, resolution, frame rate, placement, lighting, network conditions and security requirements before confirming compatibility."
      },
      {
        eyebrow: "FAQ",
        title: "DOES AI SMART SECURITY REPLACE SECURITY OPERATORS?",
        text: "No. AI Smart Security is designed to help operators notice and review relevant events; it does not replace human judgement or responsibility. Alerts should be verified by an authorised person before consequential action is taken."
      },
      {
        eyebrow: "FAQ",
        title: "CAN THE SYSTEM RUN ON-PREMISE OR AT THE EDGE?",
        text: "Yes, the architecture can be designed for on-premise, edge, cloud, private-cloud or hybrid deployment. The appropriate option is selected according to latency, privacy, bandwidth, resilience and integration needs."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "CONNECT SECURITY WITH IDENTITY, EDGE AND AUTOMATION.",
        text: "AI Smart Security can be explored alongside Truefox AI's Biometric Intelligence, IoT and Edge AI, and Agentic Automation capabilities when a workflow requires identity signals, local processing or controlled coordination with other systems.",
        bullets: ["BIOMETRIC INTELLIGENCE · /biometric-intelligence", "IoT & EDGE AI · /iot-edge-ai", "AGENTIC AUTOMATION · /agentic-automation"]
      }
    ], cta: { label: "Book a security demo", href: "/book-demo" }
  },
  "biometric-intelligence": {
    slug: "biometric-intelligence", navLabel: "Biometric Intelligence", eyebrow: "PRODUCT · IDENTITY",
    seoTitle: "Biometric AI & Identity Verification | Truefox AI",
    seoKeywords: ["biometric AI solutions", "identity verification", "face recognition", "liveness detection", "anti-spoofing"],
    title: "Secure identity verification built for real-world workflows.",
    description: "Truefox AI develops biometric intelligence systems for face recognition, fingerprint authentication, attendance, identity verification, liveness detection and anti-spoofing workflows.",
    intro: "Truefox AI develops biometric AI solutions for organisations that need reliable identity verification, attendance or access workflows. Each system is designed around face or fingerprint capture, liveness, anti-spoofing, permissions, operating conditions, privacy requirements and integration with existing systems.",
    kind: "products",
    stats: [
      { value: "FACE", label: "Identification and verification" },
      { value: "LIVE", label: "Liveness and anti-spoofing" },
      { value: "EDGE", label: "Flexible deployment options" }
    ],
    cards: [
      { eyebrow: "IDENTITY", title: "FACE RECOGNITION", text: "Support identification and one-to-one verification using facial biometrics within defined enrollment, access and attendance workflows." },
      { eyebrow: "ASSURANCE", title: "LIVENESS DETECTION", text: "Help determine whether a biometric sample comes from a live person rather than a photograph, screen, recording or other presentation attack." },
      { eyebrow: "WORKFORCE", title: "BIOMETRIC ATTENDANCE", text: "Record verified attendance events and connect them to organisation-specific shifts, reporting, HR, payroll or workforce-management processes." }
    ],
    sections: [
      {
        eyebrow: "OVERVIEW",
        title: "WHAT ARE BIOMETRIC AI SOLUTIONS?",
        text: "Biometric intelligence uses measurable human characteristics—such as the face or fingerprint—to support identity recognition, verification and authentication. Its purpose is not simply to recognise a person, but to establish identity within a defined workflow such as attendance, enrollment, access, visitor management or approval of a sensitive action."
      },
      {
        eyebrow: "IDENTITY DECISIONS",
        title: "MAKE ACCESS SIMPLE FOR GENUINE USERS AND DIFFICULT TO ABUSE.",
        text: "A reliable biometric workflow must determine more than whether two samples appear similar. It must consider whether the sample is genuine, whether capture quality is sufficient, whether the person has permission, how failures are handled and how sensitive identity events are protected and audited.",
        bullets: ["WHO IS THIS PERSON?", "IS THIS THE CLAIMED PERSON?", "IS A LIVE PERSON PRESENT?", "DOES THIS PERSON HAVE PERMISSION?", "WHAT HAPPENS IF VERIFICATION FAILS?"]
      },
      {
        eyebrow: "FACE BIOMETRICS",
        title: "IDENTIFICATION AND VERIFICATION SERVE DIFFERENT WORKFLOWS.",
        text: "Face identification asks who a person is by comparing a captured face with multiple enrolled profiles. Face verification asks whether a person matches a specific claimed identity. Truefox AI selects the appropriate approach according to the decision, risk, user experience and operating environment.",
        bullets: ["KNOWN-USER IDENTIFICATION", "ONE-TO-ONE FACE VERIFICATION", "ENROLLMENT VALIDATION", "CONTROLLED ENTRY", "APPLICATION AND ACCOUNT VERIFICATION"]
      },
      {
        eyebrow: "LIVENESS & ANTI-SPOOFING",
        title: "VERIFY THAT A REAL PERSON IS PRESENT.",
        text: "A biometric match alone does not prove that a live person is interacting with the system. Liveness detection can evaluate visual and temporal signals or use a challenge-response step to help identify photographs, displayed images, video replays and other presentation attacks. The appropriate method depends on available hardware, risk and desired user experience.",
        bullets: ["PASSIVE LIVENESS FOR LOWER-FRICTION CAPTURE", "ACTIVE CHALLENGES FOR SELECTED HIGHER-ASSURANCE FLOWS", "CAPTURE-QUALITY CHECKS", "RISK-BASED ANTI-SPOOFING CONTROLS"]
      },
      {
        eyebrow: "FINGERPRINT & MULTI-FACTOR",
        title: "COMBINE IDENTITY SIGNALS WHERE THE WORKFLOW REQUIRES IT.",
        text: "Fingerprint authentication can support attendance, access, enrollment and transaction workflows. Higher-assurance scenarios may combine factors such as employee ID and face, fingerprint and PIN, or face, liveness and device identity. The right combination balances the value of the protected action with acceptable user friction."
      },
      {
        eyebrow: "ENROLLMENT",
        title: "RECOGNITION QUALITY BEGINS WITH TRUSTED ENROLLMENT.",
        text: "Enrollment creates the association between a person, their identity record and a biometric representation. A robust process considers consent or acknowledgement, capture quality, duplicate checks, template creation, approval and audit history. Poor enrollment quality can reduce recognition performance later.",
        bullets: ["IDENTITY AND CONSENT WORKFLOW", "FACE OR FINGERPRINT CAPTURE", "QUALITY ASSESSMENT", "DUPLICATE REVIEW", "BIOMETRIC TEMPLATE AND USER ASSOCIATION"]
      },
      {
        eyebrow: "ATTENDANCE & ACCESS",
        title: "CONNECT VERIFICATION TO THE BUSINESS RULE THAT FOLLOWS.",
        text: "A verified identity event can support contactless attendance, physical access, visitor management or workforce operations. Attendance data can include check-in, check-out, device, location, shift and verification result, while the business layer applies organisation-specific rules for schedules, grace periods, exceptions and approvals.",
        bullets: ["OFFICE AND WORKPLACE ATTENDANCE", "ACCESS-CONTROL DECISIONS", "VISITOR ENROLLMENT AND TEMPORARY PERMISSIONS", "MULTI-LOCATION WORKFORCE REPORTING", "IDENTITY EVENT AUDIT TRAILS"]
      },
      {
        eyebrow: "DIGITAL PRODUCTS & INTEGRATIONS",
        title: "EMBED BIOMETRIC VERIFICATION INTO EXISTING SYSTEMS.",
        text: "Selected biometric capabilities can be integrated into mobile, web and enterprise applications through approved interfaces. Depending on project scope, workflows can connect with HRMS, payroll, ERP, access control, workforce management, employee directories and reporting tools rather than creating another isolated application.",
        bullets: ["ENROLLMENT AND VERIFICATION APIS", "MOBILE IDENTITY WORKFLOWS", "HRMS, PAYROLL AND ERP INTEGRATION", "ACCESS-CONTROL INTEGRATION", "USER, DEVICE AND EVENT MANAGEMENT"]
      },
      {
        eyebrow: "DEPLOYMENT",
        title: "CHOOSE CLOUD, ON-PREMISE, EDGE OR HYBRID AROUND THE OPERATION.",
        text: "Edge processing can support lower latency, reduced cloud dependency and continued local operation. On-premise architecture can keep selected application, database and inference components within customer infrastructure. Cloud systems can support central management across locations, while hybrid deployment can combine immediate local verification with central policy, reporting and administration."
      },
      {
        eyebrow: "PRIVACY & SECURITY",
        title: "BIOMETRIC INFORMATION REQUIRES DELIBERATE CONTROL.",
        text: "Architecture should define what biometric information is collected, why it is required, where it is processed and stored, who can access it, how long it is retained and how deletion is handled. Applicable privacy and legal requirements vary by jurisdiction and use case and should be reviewed for each deployment.",
        bullets: ["ROLE-BASED ACCESS AND ADMINISTRATIVE PERMISSIONS", "ENCRYPTION AND SECURE APIS", "DATA RETENTION AND DELETION POLICIES", "DEVICE AND ENVIRONMENT AUTHENTICATION", "AUDIT LOGGING AND MONITORING"]
      },
      {
        eyebrow: "REAL-WORLD PERFORMANCE",
        title: "ACCURACY DEPENDS ON CAPTURE CONDITIONS AND SYSTEM DESIGN.",
        text: "No biometric system is 100% accurate. Face performance can be affected by lighting, camera angle, motion, occlusion, resolution, distance and enrollment quality. Fingerprint performance can be influenced by sensor quality, placement and finger condition. Representative testing is required before broad rollout, with a defined fallback for failed verification.",
        bullets: ["CAPTURE RETRY", "ALTERNATIVE BIOMETRIC OR DEVICE", "PIN OR ACCESS CARD", "MANUAL VERIFICATION", "ADMINISTRATOR REVIEW"]
      },
      {
        eyebrow: "DELIVERY",
        title: "BUILD AROUND THE IDENTITY DECISION, NOT JUST THE MODEL.",
        text: "Truefox AI begins by defining the identity decision, users, devices, environment, risks and fallback workflow. A proof of concept then validates representative capture conditions before integration, production deployment and continued evaluation of recognition behaviour, user experience, device reliability and operational exceptions.",
        bullets: ["01 · UNDERSTAND THE IDENTITY WORKFLOW", "02 · EVALUATE DEVICES AND ENVIRONMENT", "03 · DESIGN ARCHITECTURE AND CONTROLS", "04 · VALIDATE A PROOF OF CONCEPT", "05 · INTEGRATE, DEPLOY AND EVALUATE"]
      },
      {
        eyebrow: "FAQ",
        title: "WHAT IS THE DIFFERENCE BETWEEN FACE RECOGNITION AND FACE VERIFICATION?",
        text: "Face recognition can search for a person's identity among multiple enrolled profiles, while face verification compares a person with one specific claimed identity. The correct method depends on the workflow and risk."
      },
      {
        eyebrow: "FAQ",
        title: "CAN BIOMETRICS WORK OFFLINE OR ON-PREMISE?",
        text: "Some biometric workflows can use local or edge processing when connectivity is limited, and selected components can be deployed on-premise. Exact offline behaviour depends on the required models, devices, user volume, synchronization and application architecture."
      },
      {
        eyebrow: "FAQ",
        title: "WHAT HAPPENS IF BIOMETRIC VERIFICATION FAILS?",
        text: "A well-designed system provides an appropriate fallback, such as retrying capture, using another biometric or credential, or escalating to authorised manual verification. The fallback should match the workflow's operational and security requirements."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "CONNECT IDENTITY WITH SECURITY, EDGE AND DIGITAL WORKFLOWS.",
        text: "Biometric Intelligence can be explored alongside AI Smart Security, IoT and Edge AI, and Truefox AI's web and mobile product engineering when identity events must connect with monitoring, local devices or business applications.",
        bullets: ["AI SMART SECURITY · /ai-smart-security", "IoT & EDGE AI · /iot-edge-ai", "WEB & MOBILE PRODUCTS · /web-mobile-products"]
      }
    ], cta: { label: "Discuss your biometric requirement", href: "/book-demo" }
  },
  "private-ai-assistants": {
    slug: "private-ai-assistants", navLabel: "Private AI Assistants", eyebrow: "PRODUCT · KNOWLEDGE",
    seoTitle: "Private AI Assistants & Enterprise RAG | Truefox AI",
    seoKeywords: ["private enterprise AI assistants", "enterprise RAG", "secure AI assistants", "enterprise chatbot"],
    title: "Enterprise AI that understands your business, knowledge and workflows.",
    description: "Truefox AI builds private enterprise AI assistants, RAG systems and copilots grounded in approved company knowledge and controlled business tools.",
    intro: "Truefox AI builds private enterprise AI assistants and RAG systems that help authorised users work with approved documents, data and business tools. Unlike general chatbots, these assistants are designed around organisational knowledge, retrieval quality, permissions, security, integrations and human handoff.",
    kind: "products",
    stats: [
      { value: "RAG", label: "Grounded enterprise retrieval" },
      { value: "RBAC", label: "Permission-aware access" },
      { value: "HUMAN", label: "Approval for important actions" }
    ],
    cards: [
      { eyebrow: "KNOWLEDGE", title: "ENTERPRISE SEARCH", text: "Let users ask natural-language questions across approved policies, manuals, reports, knowledge bases and other business information." },
      { eyebrow: "COPILOT", title: "WORKFLOW SUPPORT", text: "Retrieve relevant records, compare information, summarise context and prepare useful drafts while keeping people responsible for final decisions." },
      { eyebrow: "CONTROL", title: "PRIVATE AI ARCHITECTURE", text: "Design retrieval, models, identity, permissions, integrations and deployment around the organisation's security and operating requirements." }
    ],
    sections: [
      {
        eyebrow: "OVERVIEW",
        title: "WHAT IS A PRIVATE AI ASSISTANT?",
        text: "A Private AI Assistant is an AI-powered system designed to work with an organisation's own approved data, documents, applications and processes. Unlike a general-purpose public chatbot, it can be designed around internal terminology, users, permissions, security requirements and the business systems people already use."
      },
      {
        eyebrow: "THE OPERATIONAL PROBLEM",
        title: "THE ANSWER EXISTS. FINDING IT SHOULD NOT SLOW THE WORK DOWN.",
        text: "Important information is often spread across policies, shared folders, technical manuals, support records, knowledge bases, databases and disconnected applications. A private assistant creates a conversational layer over approved information so the experience can move from repeated searching and comparison to asking, retrieving, understanding and acting.",
        bullets: ["POLICIES AND STANDARD OPERATING PROCEDURES", "TECHNICAL AND PRODUCT DOCUMENTATION", "SUPPORT AND PROJECT RECORDS", "CRM, ERP AND OPERATIONAL DATA", "INTERNAL KNOWLEDGE BASES"]
      },
      {
        eyebrow: "ENTERPRISE RAG",
        title: "GROUND ANSWERS IN RELEVANT BUSINESS KNOWLEDGE.",
        text: "Retrieval-Augmented Generation, or RAG, searches approved knowledge before a language model creates a response. The assistant interprets the question, retrieves relevant information, supplies that context to the model and can show supporting sources where verification matters. This lets the system work with organisation-specific information that may not exist in a model's general training data.",
        bullets: ["INTERPRET THE USER'S REQUEST", "SEARCH APPROVED ENTERPRISE SOURCES", "RANK AND FILTER RELEVANT INFORMATION", "GENERATE A GROUNDED RESPONSE", "SHOW SUPPORTING SOURCES WHEN APPROPRIATE"]
      },
      {
        eyebrow: "KNOWLEDGE CONNECTIONS",
        title: "CONNECT DOCUMENTS, DATABASES AND BUSINESS APPLICATIONS.",
        text: "Private AI Assistants can work across structured and unstructured information. The right ingestion and retrieval approach depends on source quality, scale, permissions and update patterns. Structured systems require controlled queries and record-level access, while documents require careful extraction, cleaning, chunking, metadata and indexing.",
        bullets: ["PDF, WORD, PRESENTATION AND SPREADSHEET CONTENT", "POLICIES, MANUALS, REPORTS AND KNOWLEDGE ARTICLES", "SQL DATABASES AND DATA WAREHOUSES", "CRM, ERP, HRMS AND TICKETING SYSTEMS", "DOCUMENT PLATFORMS, INTERNAL APPS AND CUSTOM APIS"]
      },
      {
        eyebrow: "SOURCE-AWARE ANSWERS",
        title: "LET USERS VERIFY IMPORTANT INFORMATION.",
        text: "For important enterprise questions, an answer should not always stand alone. The assistant can provide the relevant document title, section, knowledge article, record or linked source so an authorised user can inspect the information behind the response. Grounding, source restrictions, validation and refusal behaviour help reduce unsupported answers without pretending AI is infallible."
      },
      {
        eyebrow: "USE CASES",
        title: "DESIGN THE ASSISTANT AROUND ONE HIGH-VALUE WORKFLOW.",
        text: "A useful first implementation focuses on a real group of users, trusted information and measurable work. The same foundation can later support additional departments and tools after retrieval quality, permissions and user value have been proven.",
        bullets: ["EMPLOYEE KNOWLEDGE AND POLICY ASSISTANT", "HR AND IT HELPDESK ASSISTANT", "TECHNICAL SUPPORT COPILOT", "ENGINEERING AND OPERATIONS KNOWLEDGE", "SALES AND CUSTOMER-SERVICE SUPPORT", "CONTRACT, POLICY AND DOCUMENT ANALYSIS"]
      },
      {
        eyebrow: "DOCUMENT INTELLIGENCE",
        title: "MOVE BEYOND SINGLE-DOCUMENT QUESTION ANSWERING.",
        text: "Where the source material and permissions allow it, assistants can summarise, extract, classify, compare and navigate information across multiple documents. They can preserve useful conversational context for follow-up questions and learn the organisation's terminology, abbreviations, products and processes without carrying irrelevant context into unrelated requests.",
        bullets: ["SUMMARISATION AND INFORMATION EXTRACTION", "DOCUMENT AND POLICY COMPARISON", "TABLE AND CLAUSE RETRIEVAL", "MULTI-DOCUMENT SYNTHESIS", "DOMAIN-AWARE FOLLOW-UP CONVERSATIONS"]
      },
      {
        eyebrow: "TOOLS & HUMAN CONTROL",
        title: "FROM KNOWLEDGE ASSISTANT TO CONTROLLED COPILOT.",
        text: "An assistant can be given permission to use selected tools—for example, retrieving a CRM record, checking ticket status, preparing a report or drafting a response. Higher-risk actions can require explicit human review and approval before execution. Tool access should remain narrow, traceable and aligned with the active user's permissions.",
        bullets: ["APPROVED TOOL AND API ACCESS", "EXPLICIT OPERATIONAL BOUNDARIES", "HUMAN APPROVAL CHECKPOINTS", "TRACEABLE TOOL AND WORKFLOW HISTORY", "SAFE HANDLING OF EXCEPTIONS"]
      },
      {
        eyebrow: "IDENTITY & PERMISSIONS",
        title: "THE ASSISTANT MUST NOT BECOME A SHORTCUT AROUND ACCESS CONTROL.",
        text: "Retrieval and tool use can be designed around roles, individual users and source-level permissions. Depending on the environment, the assistant can integrate with existing identity and Single Sign-On infrastructure for authentication, role mapping, session management and auditability. Sensitive sources should be connected intentionally rather than made available by default.",
        bullets: ["ROLE-BASED AND USER-LEVEL ACCESS", "DATA-SOURCE PERMISSION ENFORCEMENT", "SINGLE SIGN-ON INTEGRATION", "SESSION AND IDENTITY CONTEXT", "AUDITABLE ACCESS TO KNOWLEDGE AND TOOLS"]
      },
      {
        eyebrow: "DEPLOYMENT & MODELS",
        title: "SELECT THE ARCHITECTURE AROUND DATA, QUALITY AND OPERATIONS.",
        text: "Private-cloud, on-premise and hybrid architectures can be evaluated according to data control, networking, infrastructure, workload, latency and security requirements. Commercial, open-source or self-hosted models may be appropriate. Separating application logic, retrieval, tools, security, model interfaces and evaluation helps keep the wider business system maintainable as models change."
      },
      {
        eyebrow: "SECURITY & GOVERNANCE",
        title: "DEFINE WHAT AI CAN ACCESS, SAY AND DO.",
        text: "Enterprise AI security begins with clear boundaries. Architecture can include authentication, encryption, API security, environment isolation, tool permissions, data-retention controls, monitoring and audit logs. Prompt injection and untrusted content require layered controls such as input validation, data boundaries, permission checks, output validation, sandboxing and human approval.",
        bullets: ["CLASSIFIED AND INTENTIONALLY CONNECTED KNOWLEDGE", "PROMPT-INJECTION AND UNTRUSTED-CONTENT CONTROLS", "USAGE, SOURCE AND TOOL AUDITABILITY", "DATA-RETENTION AND MONITORING POLICIES", "DEFINED INCIDENT AND HUMAN-REVIEW PROCESSES"]
      },
      {
        eyebrow: "EVALUATION",
        title: "A GOOD DEMO IS NOT A PRODUCTION READINESS TEST.",
        text: "Private AI Assistants should be tested with representative business questions, users and failure cases. Evaluation can measure retrieval accuracy, answer relevance, source correctness, completeness, refusal behaviour, permission handling, tool accuracy, latency and user satisfaction. Weaknesses should be found before wider deployment.",
        bullets: ["REPRESENTATIVE EVALUATION DATASETS", "RETRIEVAL AND SOURCE QUALITY", "SUPPORTED-ANSWER AND REFUSAL BEHAVIOUR", "PERMISSION AND TOOL-USE TESTING", "CONTINUOUS QUALITY MONITORING"]
      },
      {
        eyebrow: "KNOWLEDGE OPERATIONS",
        title: "GOOD ANSWERS BEGIN WITH WELL-PREPARED, CURRENT INFORMATION.",
        text: "Enterprise documents can contain repeated headers, scanned pages, tables, old versions and inconsistent formatting. A reliable pipeline extracts, cleans, structures, chunks, enriches and indexes approved content. Scheduled or event-based synchronization, version tracking, source expiration and re-indexing help prevent outdated information from remaining authoritative."
      },
      {
        eyebrow: "DELIVERY",
        title: "START WITH ONE WORKFLOW. PROVE IT. THEN EXPAND.",
        text: "Truefox AI approaches models, RAG, data engineering, search, security, integrations, applications and evaluation as one operational system. Delivery begins by identifying users, approved sources, permissions, prohibited access and useful outcomes before a focused proof of concept and production architecture are defined.",
        bullets: ["01 · DISCOVER THE WORKFLOW AND USERS", "02 · ASSESS KNOWLEDGE, SYSTEMS AND PERMISSIONS", "03 · PROTOTYPE WITH REALISTIC QUESTIONS", "04 · DESIGN RETRIEVAL, SECURITY AND DEPLOYMENT", "05 · BUILD, INTEGRATE AND EVALUATE", "06 · DEPLOY, MONITOR AND IMPROVE"]
      },
      {
        eyebrow: "FAQ",
        title: "HOW IS A PRIVATE AI ASSISTANT DIFFERENT FROM CHATGPT?",
        text: "A general-purpose assistant is designed for broad conversation. A Private AI Assistant is built around specific organisational knowledge, permissions, applications, terminology and workflows, with deployment and governance selected for the enterprise environment."
      },
      {
        eyebrow: "FAQ",
        title: "CAN A PRIVATE AI ASSISTANT HALLUCINATE?",
        text: "Yes. Language models can produce incorrect information. Retrieval grounding, source restrictions, validation, evaluation and workflow controls can reduce this risk and help the system refuse unsupported questions, but they do not make AI infallible."
      },
      {
        eyebrow: "FAQ",
        title: "CAN IT RUN ON-PREMISE OR USE OPEN-SOURCE MODELS?",
        text: "Potentially, yes. On-premise, private-cloud and hybrid deployment can be evaluated, and open-source or self-hosted models may be used when they meet the required quality, infrastructure, latency and security needs."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "CONNECT KNOWLEDGE WITH CONTROLLED AUTOMATION AND PRODUCT ENGINEERING.",
        text: "Private AI Assistants can be combined with Agentic Automation when approved tools and multi-step actions are required, or delivered through custom web and mobile products that fit the organisation's existing user experience.",
        bullets: ["AGENTIC AUTOMATION · /agentic-automation", "WEB & MOBILE PRODUCTS · /web-mobile-products", "BOOK A PRIVATE AI DEMO · /book-demo"]
      }
    ], cta: { label: "Discuss your private AI requirement", href: "/book-demo" }
  },
  "agentic-automation": {
    slug: "agentic-automation", navLabel: "Agentic Automation", eyebrow: "PRODUCT · WORKFLOWS",
    seoTitle: "AI Agent Development & Automation | Truefox AI",
    seoKeywords: ["AI agent development", "agentic AI", "AI workflow automation", "governed business agents"],
    title: "AI agents that reason, use tools and complete multi-step workflows.",
    description: "Truefox AI builds governed enterprise AI agents that connect reasoning, approved tools, business rules and human oversight.",
    intro: "Truefox AI develops governed AI agents for organisations with bounded, multi-step digital workflows. Unlike an assistant focused on retrieving and explaining knowledge, an agent can use approved tools, applications, databases and APIs to help execute work while permissions, validation and consequential decisions remain under human control.",
    kind: "products",
    stats: [
      { value: "TOOLS", label: "Approved system access" },
      { value: "STATE", label: "Multi-step workflow memory" },
      { value: "HUMAN", label: "Oversight and approval gates" }
    ],
    cards: [
      { eyebrow: "REASON", title: "INTERPRET THE GOAL", text: "Understand a request, identify the required steps and select from an explicitly permitted set of tools and workflow paths." },
      { eyebrow: "ACT", title: "COORDINATE THE WORK", text: "Retrieve information, prepare structured outputs, update approved systems and preserve state across multi-step or long-running processes." },
      { eyebrow: "CONTROL", title: "ESCALATE IMPORTANT DECISIONS", text: "Apply permissions, validation, thresholds, approval gates and audit history so the agent stops or asks for review when required." }
    ],
    sections: [
      {
        eyebrow: "OVERVIEW",
        title: "WHAT IS AGENTIC AI DEVELOPMENT?",
        text: "Agentic Automation combines AI reasoning with tools, rules and workflow orchestration so a system can work toward a defined goal across multiple steps. An agent may retrieve information, perform calculations, prepare structured outputs, request approval, use authorised tools and record the outcome. Its autonomy should always match the risk and importance of the workflow."
      },
      {
        eyebrow: "ASSISTANTS VS AGENTS",
        title: "MOVE FROM AI THAT ANSWERS TO AI THAT CAN HELP ACT.",
        text: "An AI assistant primarily helps a user understand information. An AI agent can also perform controlled actions—for example, gathering approved operational data, identifying missing inputs, preparing a report and routing it to a manager for review. The agent adds workflow execution without removing the people responsible for consequential decisions."
      },
      {
        eyebrow: "MULTI-STEP WORKFLOWS",
        title: "COORDINATE TASKS THAT CANNOT BE COMPLETED WITH ONE API CALL.",
        text: "Real business processes often involve a sequence of systems, decisions, documents, validations and approvals. An agentic workflow can manage that sequence while giving each step its own permissions, input checks, completion criteria and failure handling.",
        bullets: ["UNDERSTAND THE REQUEST AND REQUIRED OUTCOME", "RETRIEVE APPROVED DATA AND DOCUMENTS", "APPLY BUSINESS RULES AND VALIDATIONS", "PREPARE A STRUCTURED RESULT", "REQUEST HUMAN APPROVAL WHERE REQUIRED", "UPDATE THE SYSTEM AND LOG THE OUTCOME"]
      },
      {
        eyebrow: "TOOLS & INTEGRATIONS",
        title: "GIVE EACH AGENT ONLY THE TOOLS ITS JOB REQUIRES.",
        text: "Agentic workflows can connect with enterprise applications through authenticated and authorised APIs or controlled integration mechanisms. Tool design defines what an agent can read, prepare, create or update and is therefore one of the most important parts of the architecture.",
        bullets: ["CRM, ERP AND HRMS", "PROCUREMENT AND TICKETING SYSTEMS", "DOCUMENT REPOSITORIES AND INTERNAL PORTALS", "DATABASES AND REPORTING SERVICES", "CUSTOM APPLICATIONS, APIS AND WORKFLOW ENGINES"]
      },
      {
        eyebrow: "HUMAN OVERSIGHT",
        title: "AUTOMATE THE WORK WITHOUT AUTOMATING AWAY ACCOUNTABILITY.",
        text: "Human-in-the-loop workflows pause for review before selected actions execute. Lower-risk tasks may operate with human-on-the-loop supervision, where authorised people inspect activity, stop workflows, override results and investigate exceptions. The appropriate oversight model depends on the consequences of an error.",
        bullets: ["APPROVAL BEFORE PAYMENTS OR FINANCIAL ADJUSTMENTS", "REVIEW BEFORE CUSTOMER COMMUNICATIONS", "AUTHORISATION FOR ACCESS OR PRODUCTION CHANGES", "OVERRIDE AND STOP CONTROLS", "ESCALATION WHEN THE AGENT IS UNCERTAIN"]
      },
      {
        eyebrow: "PERMISSIONS & GUARDRAILS",
        title: "BOUND EVERY AGENT BY IDENTITY, POLICY AND LEAST PRIVILEGE.",
        text: "An agent should receive only the information and actions necessary for its defined workflow. Permissions can reflect both the agent's purpose and the identity of the user requesting the action. Policy enforcement should exist outside the language model rather than depending on the model to follow instructions correctly.",
        bullets: ["TOOL-LEVEL READ AND WRITE PERMISSIONS", "ROLE-BASED WORKFLOW ACCESS", "TRANSACTION AND APPROVAL THRESHOLDS", "ALLOWED WORKFLOW PATHS", "VALIDATED INPUTS AND STRUCTURED OUTPUTS"]
      },
      {
        eyebrow: "USE CASES",
        title: "START WITH REPETITIVE DIGITAL WORK THAT HAS CLEAR BOUNDARIES.",
        text: "Strong candidates combine repeatable steps, information from several systems, unstructured inputs and objective completion criteria. A narrowly defined workflow is usually a better first project than a general agent for the entire company.",
        bullets: ["PROCUREMENT COMPARISON AND APPROVAL PREPARATION", "INVOICE AND DOCUMENT PROCESSING", "SUPPORT TICKET TRIAGE AND RESPONSE DRAFTING", "CRM RESEARCH AND UPDATE PREPARATION", "EMPLOYEE ONBOARDING COORDINATION", "OPERATIONS REPORTING AND INCIDENT SUPPORT"]
      },
      {
        eyebrow: "ORCHESTRATION & STATE",
        title: "KEEP MULTI-STEP AND LONG-RUNNING WORKFLOWS COHERENT.",
        text: "An orchestration layer determines which agent or tool receives a task, what context is shared, which actions require approval and what happens after failure. Workflow state records completed steps, retrieved data, pending approvals, exceptions and responsibility so the process can continue after an external dependency without repeating work or losing context."
      },
      {
        eyebrow: "MULTI-AGENT SYSTEMS",
        title: "SEPARATE RESPONSIBILITIES WHEN ONE AGENT SHOULD NOT DO EVERYTHING.",
        text: "Some complex workflows may use specialised agents for research, analysis, policy checking, reporting or approval routing. Separating responsibilities can make systems easier to permission, observe and evaluate, but multi-agent design should only be introduced when it provides a clear operational benefit."
      },
      {
        eyebrow: "RELIABLE EXECUTION",
        title: "COMBINE AI REASONING WITH DETERMINISTIC SOFTWARE.",
        text: "Not every step needs AI. A reliable system may use AI to interpret unstructured requests and summarise results, deterministic rules to enforce limits, APIs to retrieve or update data, and an approval service to control final actions. When information is missing, validation fails or a tool is unavailable, the correct behaviour is often to stop and escalate rather than guess.",
        bullets: ["SCHEMA-VALIDATED TOOL INPUTS AND OUTPUTS", "RETRY AND TIMEOUT POLICIES", "EXPLICIT FAILURE AND EXCEPTION PATHS", "IDEMPOTENT ACTION DESIGN WHERE POSSIBLE", "SAFE ESCALATION TO AN AUTHORISED PERSON"]
      },
      {
        eyebrow: "PRIVATE KNOWLEDGE",
        title: "COMBINE CONTROLLED ACTION WITH GROUNDED ENTERPRISE CONTEXT.",
        text: "Private AI Assistants and Agentic Automation can work together. The assistant provides a conversational interface grounded in approved company knowledge; the agent retrieves authorised system data or prepares controlled actions. Users can review the result before permitted changes are made."
      },
      {
        eyebrow: "SECURITY",
        title: "TOOL-ENABLED AI CREATES A DIFFERENT SECURITY BOUNDARY.",
        text: "Agent security can include strong authentication, role-based access, tool permissions, secret management, network controls, approval gates, validation, environment isolation and audit logging. Untrusted content and prompt injection require layered defences, including separating trusted data, restricting tools and re-validating every consequential tool argument.",
        bullets: ["LEAST-PRIVILEGE TOOL AND DATA ACCESS", "CREDENTIAL AND SECRET MANAGEMENT", "POLICY ENFORCEMENT OUTSIDE THE MODEL", "HUMAN APPROVAL FOR SENSITIVE ACTIONS", "MONITORING FOR UNEXPECTED AGENT BEHAVIOUR"]
      },
      {
        eyebrow: "AUDITABILITY & OBSERVABILITY",
        title: "UNDERSTAND WHAT THE AGENT DID AND WHERE WORKFLOWS FAIL.",
        text: "Production systems should make agent activity inspectable according to privacy and retention policies. Logs can capture the requesting user, decision, selected tool, attempted action, approval, outcome and exception. Operational monitoring can show running workflows, tool failures, stuck processes, escalation rates and user overrides."
      },
      {
        eyebrow: "EVALUATION",
        title: "TEST NORMAL CASES, EDGE CASES AND FAILURES BEFORE PRODUCTION.",
        text: "Agents can misinterpret requests, choose the wrong tool or encounter unexpected integration conditions. Evaluation should use representative workflows and measure task completion, tool selection, data extraction, permission compliance, failure handling, latency, human intervention and the business outcome that matters.",
        bullets: ["REALISTIC WORKFLOW TEST SETS", "TOOL AND PERMISSION ACCURACY", "APPROVAL AND EXCEPTION BEHAVIOUR", "TASK COMPLETION AND OUTPUT QUALITY", "CONTINUOUS PRODUCTION MONITORING"]
      },
      {
        eyebrow: "DELIVERY",
        title: "PROVE ONE HIGH-VALUE WORKFLOW BEFORE EXPANDING.",
        text: "Truefox AI maps the existing process, separates steps suited to AI from deterministic automation and human judgement, then defines tools, permissions and approval boundaries. A focused prototype validates value and failure behaviour before approved integrations and production monitoring are introduced.",
        bullets: ["01 · WORKFLOW DISCOVERY", "02 · AUTOMATION AND RISK ASSESSMENT", "03 · TOOL, STATE AND PERMISSION DESIGN", "04 · FOCUSED PROTOTYPE", "05 · EDGE-CASE AND FAILURE EVALUATION", "06 · INTEGRATION, DEPLOYMENT AND MONITORING"]
      },
      {
        eyebrow: "FAQ",
        title: "HOW IS AN AI AGENT DIFFERENT FROM A CHATBOT?",
        text: "A chatbot primarily communicates with users. An AI agent can also use approved tools, retrieve information and perform bounded actions as part of a multi-step workflow. Its permissions and autonomy should be explicitly designed."
      },
      {
        eyebrow: "FAQ",
        title: "CAN AI AGENTS WORK WITHOUT HUMAN APPROVAL?",
        text: "Some low-risk workflows may operate with greater autonomy, but higher-impact actions should use appropriate review, approval and override controls. The oversight model should match the consequences of an incorrect action."
      },
      {
        eyebrow: "FAQ",
        title: "IS AGENTIC AUTOMATION THE SAME AS RPA?",
        text: "No. Traditional robotic process automation generally follows predefined rules and interface steps. Agentic AI can interpret unstructured information and make bounded workflow decisions. The two approaches can also complement each other within one controlled process."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "CONNECT AGENTS WITH PRIVATE KNOWLEDGE AND ENTERPRISE SOFTWARE.",
        text: "Agentic Automation can be paired with Private AI Assistants for grounded conversational access or custom software engineering when the workflow requires a purpose-built user interface, integration layer or operational platform.",
        bullets: ["PRIVATE AI ASSISTANTS · /private-ai-assistants", "CUSTOM SOFTWARE DEVELOPMENT · /services", "BOOK AN AUTOMATION DEMO · /book-demo"]
      }
    ], cta: { label: "Discuss your automation use case", href: "/book-demo" }
  },
  "iot-edge-ai": {
    slug: "iot-edge-ai", navLabel: "IoT & Edge AI", eyebrow: "PRODUCT · CONNECTED EDGE",
    seoTitle: "Edge AI & IoT Development | Truefox AI",
    seoKeywords: ["Edge AI development", "IoT AI", "embedded AI", "local inference", "connected device systems"],
    title: "Connect devices, process data locally and make operations smarter.",
    description: "Truefox AI builds IoT and Edge AI systems spanning sensors, embedded firmware, gateways, local inference, cloud services and enterprise integrations.",
    intro: "Truefox AI provides Edge AI and IoT development for operations that depend on sensors, machines, cameras, meters and connected devices. We design the device, firmware, gateway, local-inference and cloud layers around the real environment—processing time-sensitive signals locally and connecting wider systems where they add value.",
    kind: "products",
    stats: [
      { value: "SENSE", label: "Devices and real-world signals" },
      { value: "EDGE", label: "Local intelligence and response" },
      { value: "SYNC", label: "Cloud and enterprise integration" }
    ],
    cards: [
      { eyebrow: "DEVICES", title: "CONNECTED SENSING", text: "Integrate appropriate sensors, embedded firmware and communication technologies to capture useful physical and operational signals." },
      { eyebrow: "INTELLIGENCE", title: "EDGE INFERENCE", text: "Run selected machine-learning workloads near the data source for lower latency, reduced bandwidth and continued local operation." },
      { eyebrow: "OPERATIONS", title: "MANAGED FLEETS", text: "Coordinate gateways, telemetry, configuration, health, updates, dashboards and enterprise workflows across deployed devices and locations." }
    ],
    sections: [
      {
        eyebrow: "OVERVIEW",
        title: "WHAT IS EDGE AI DEVELOPMENT?",
        text: "The Internet of Things connects physical devices that collect, exchange or act on data. Edge AI runs selected machine-learning workloads on devices close to where that data is generated. Together, they can monitor real-world conditions, make time-sensitive local decisions and send relevant events or summaries to central systems."
      },
      {
        eyebrow: "WHY THE EDGE",
        title: "NOT EVERY SIGNAL SHOULD WAIT FOR A CLOUD ROUND TRIP.",
        text: "Cloud processing remains useful for central management, long-term storage and cross-site analytics, but some environments require faster response, lower data transfer, local resilience or greater control over where raw information is processed. Edge architecture handles selected work locally while using cloud services where they provide the most value.",
        bullets: ["LOWER RESPONSE LATENCY", "REDUCED BANDWIDTH USAGE", "CONTINUED OPERATION DURING CONNECTIVITY LOSS", "LOCAL FILTERING AND DATA MINIMISATION", "MORE EFFICIENT USE OF CENTRAL COMPUTE"]
      },
      {
        eyebrow: "END-TO-END ENGINEERING",
        title: "DESIGN THE DEVICE, DATA AND APPLICATION LAYERS AS ONE SYSTEM.",
        text: "IoT projects become fragile when hardware, connectivity, AI and software are treated as separate problems. Truefox AI designs the complete architecture around the decision the operation needs to make and the conditions in which the system must keep working.",
        bullets: ["SENSORS AND DEVICE INTERFACES", "EMBEDDED FIRMWARE AND LOCAL RULES", "CONNECTIVITY AND COMMUNICATION PROTOCOLS", "GATEWAYS AND EDGE COMPUTE", "AI INFERENCE AND DATA PIPELINES", "CLOUD SERVICES, DASHBOARDS AND ENTERPRISE APIS"]
      },
      {
        eyebrow: "SENSORS & FIRMWARE",
        title: "CAPTURE THE RIGHT SIGNAL WITH RELIABLE DEVICE SOFTWARE.",
        text: "Sensor selection depends on accuracy, range, sampling frequency, power, physical conditions and the decision being supported. Embedded firmware can read sensors, control devices, buffer data, manage power and connectivity, run diagnostics and apply local rules. Long-term reliability begins at this layer.",
        bullets: ["TEMPERATURE, HUMIDITY AND AIR QUALITY", "VIBRATION, MOTION AND MACHINE STATE", "PRESSURE, CURRENT, VOLTAGE AND ENERGY", "POSITION, LIGHT AND ENVIRONMENTAL CONDITIONS", "CUSTOM DEVICE LOGIC AND DIAGNOSTICS"]
      },
      {
        eyebrow: "CONNECTIVITY & GATEWAYS",
        title: "BRIDGE FIELD DEVICES AND CENTRAL SYSTEMS.",
        text: "Communication technology is selected according to range, power, bandwidth, infrastructure and environment. Gateways can collect information from multiple devices, translate protocols, buffer records, apply rules, run local models and synchronize selected data when connectivity is available.",
        bullets: ["WI-FI, BLUETOOTH, ETHERNET AND CELLULAR", "LoRaWAN, ZIGBEE AND OTHER LOW-POWER NETWORKS", "MODBUS, CAN AND RS-485 INDUSTRIAL INTERFACES", "MQTT AND EVENT-DRIVEN MESSAGING", "OFFLINE BUFFERING AND PROTOCOL CONVERSION"]
      },
      {
        eyebrow: "EDGE INFERENCE",
        title: "RUN SELECTED AI WORKLOADS CLOSE TO THE SOURCE.",
        text: "Edge devices can perform anomaly detection, condition classification, object detection, audio analysis or other inference tasks within their compute, memory, thermal and power limits. Models may require quantisation, compression or hardware-specific acceleration before they are suitable for a target device.",
        bullets: ["MACHINE AND EQUIPMENT CONDITION ANALYSIS", "CAMERA-BASED DETECTION AND INSPECTION", "AUDIO AND VIBRATION CLASSIFICATION", "ENVIRONMENTAL EVENT DETECTION", "LOCAL SAFETY OR PROCESS ALERTS"]
      },
      {
        eyebrow: "OFFLINE-FIRST OPERATION",
        title: "KEEP ESSENTIAL WORK RUNNING WHEN THE NETWORK DOES NOT.",
        text: "Where required, devices and gateways can continue collecting data, applying local rules, running inference, storing records and triggering local actions during temporary connectivity loss. When service returns, selected information can synchronize according to consistency, priority and retention rules."
      },
      {
        eyebrow: "CLOUD + EDGE",
        title: "BALANCE IMMEDIATE LOCAL ACTION WITH CENTRAL VISIBILITY.",
        text: "The edge can handle real-time processing, filtering, compression and immediate alerts. Central services can provide long-term storage, cross-site analysis, configuration, reporting, model distribution and fleet management. A reliable data pipeline defines how telemetry moves from sensor to device, gateway, broker, processing service, database and dashboard.",
        bullets: ["EVENT AND TELEMETRY PIPELINES", "LONG-TERM DATA STORAGE", "CROSS-SITE REPORTING AND ANALYTICS", "CENTRAL CONFIGURATION AND POLICY", "MODEL AND FIRMWARE DISTRIBUTION"]
      },
      {
        eyebrow: "DEVICE OPERATIONS",
        title: "PLAN FOR THE FULL FLEET LIFECYCLE.",
        text: "Production deployments require device identity, registration, configuration, health monitoring, connectivity status, diagnostics and controlled updates. Firmware and model releases should use compatibility checks, signed artifacts, staged rollout, health validation and rollback strategies appropriate to the operational risk.",
        bullets: ["DEVICE INVENTORY AND PROVISIONING", "HEALTH, VERSION AND CONNECTIVITY MONITORING", "SECURE OVER-THE-AIR UPDATES", "MODEL VERSIONING AND COMPATIBILITY", "STAGED DEPLOYMENT AND ROLLBACK"]
      },
      {
        eyebrow: "SECURITY & PRIVACY",
        title: "PROTECT EVERY LAYER OF THE CONNECTED SYSTEM.",
        text: "Each connected device can add to the attack surface. Security architecture can include device identity, secure boot, certificate-based authentication, encrypted communication, signed firmware, restricted APIs, network segmentation and access control. Local processing may reduce how much raw data leaves a site, but privacy requirements still depend on the application and jurisdiction.",
        bullets: ["DEVICE AND SERVICE AUTHENTICATION", "ENCRYPTION IN TRANSIT AND AT REST", "SIGNED SOFTWARE AND SECURE UPDATES", "NETWORK AND API BOUNDARIES", "DATA RETENTION AND ACCESS POLICIES"]
      },
      {
        eyebrow: "USE CASES",
        title: "CONNECT THE PHYSICAL SIGNAL TO A MEASURABLE OPERATIONAL OUTCOME.",
        text: "IoT and Edge AI can support industries where local conditions, equipment or distributed assets need continuous visibility. The viable approach depends on available interfaces, sensor quality, physical conditions and the value of the decision being improved.",
        bullets: ["MANUFACTURING · CONDITION, QUALITY, ENERGY AND SAFETY", "LOGISTICS · ASSETS, FLEETS, COLD CHAIN AND WAREHOUSES", "BUILDINGS · ENERGY, OCCUPANCY AND EQUIPMENT HEALTH", "UTILITIES & INFRASTRUCTURE · REMOTE CONDITION MONITORING", "AGRICULTURE · ENVIRONMENTAL SENSING AND REMOTE EQUIPMENT", "RETAIL · ENERGY, OCCUPANCY AND ASSET VISIBILITY"]
      },
      {
        eyebrow: "ENTERPRISE INTEGRATION",
        title: "TURN DEVICE EVENTS INTO DIGITAL OPERATIONS WORKFLOWS.",
        text: "Dashboards, APIs, alerts and notifications can connect device information with approved maintenance, asset, operations or business systems. Integration should define which events create work, who receives them, what context is required and how acknowledgement or resolution returns to the platform."
      },
      {
        eyebrow: "FIELD PERFORMANCE",
        title: "EVALUATE MORE THAN MODEL ACCURACY.",
        text: "A cloud model that performs well in a lab may be too slow, large or power-hungry for an edge device. Representative testing should measure inference latency, memory, processor use, power, thermal behaviour, throughput, connectivity recovery, device reliability and model accuracy under real operating conditions.",
        bullets: ["TARGET-HARDWARE BENCHMARKS", "REPRESENTATIVE SENSOR AND ENVIRONMENT DATA", "NETWORK AND POWER-LOSS TESTING", "THERMAL AND LONG-DURATION STABILITY", "END-TO-END OPERATIONAL OUTCOMES"]
      },
      {
        eyebrow: "DELIVERY",
        title: "MOVE FROM A FOCUSED PROTOTYPE TO A MANAGEABLE FLEET.",
        text: "Truefox AI begins with the operational problem, required response time, available connectivity and physical environment. Sensors, hardware and model feasibility are validated before the device, edge, cloud, security and application architecture is scaled into production.",
        bullets: ["01 · DEFINE THE SIGNAL, DECISION AND RESPONSE", "02 · EVALUATE SENSORS, HARDWARE AND CONNECTIVITY", "03 · PROTOTYPE DATA QUALITY AND EDGE PERFORMANCE", "04 · DESIGN DEVICE, CLOUD AND SECURITY ARCHITECTURE", "05 · BUILD AND INTEGRATE THE WORKFLOW", "06 · FIELD TEST, DEPLOY AND MONITOR"]
      },
      {
        eyebrow: "FAQ",
        title: "WHAT IS THE DIFFERENCE BETWEEN EDGE AI AND CLOUD AI?",
        text: "Edge AI processes selected data on local devices near its source, while cloud AI runs in remote infrastructure. Many production systems use both: the edge for immediate processing and the cloud for central management, storage and cross-site analysis."
      },
      {
        eyebrow: "FAQ",
        title: "CAN EDGE AI WORK WITHOUT INTERNET ACCESS?",
        text: "Yes, selected workloads can continue locally when the architecture provides on-device processing, storage and offline rules. Synchronization, remote management and some integrations may still require connectivity when it becomes available."
      },
      {
        eyebrow: "FAQ",
        title: "CAN IoT INTEGRATE WITH EXISTING MACHINES?",
        text: "Often, but compatibility depends on the machine's interfaces, protocols, available signals, ownership constraints and safe access to operational data. These factors must be evaluated before an integration approach is confirmed."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "CONNECT EDGE SYSTEMS WITH VISION, SECURITY AND CUSTOM SOFTWARE.",
        text: "IoT and Edge AI can be paired with AI Smart Security for local video analysis or custom software engineering for dashboards, mobile tools and enterprise workflow integration.",
        bullets: ["AI SMART SECURITY · /ai-smart-security", "CUSTOM SOFTWARE DEVELOPMENT · /services", "BOOK AN EDGE AI DEMO · /book-demo"]
      }
    ], cta: { label: "Discuss your IoT and Edge AI use case", href: "/book-demo" }
  },
  "attention-minder": {
    slug: "attention-minder", navLabel: "Attention Minder", eyebrow: "PRODUCT · ATTENTION",
    title: "Build healthier focus habits with meaningful feedback.",
    description: "Attention Minder supports attention awareness, guided practice and engagement analysis.",
    intro: "Attention Minder helps people understand their attention, build healthier focus habits and follow progress through guided assessments, personalised training and practical activities.",
    kind: "products",
    sections: [
      { title: "GUIDED ATTENTION PRACTICE", text: "Use guided assessments, personalised training and practical activities to support attention awareness and everyday focus habits." },
      { title: "REAL-TIME ANALYSIS", text: "The device camera can perform live analysis of attention shifts, eye or face direction, posture and screen engagement. Camera frames are not retained after real-time processing." },
      { title: "EDUCATIONAL SUPPORT", text: "Attention Minder is intended for parents, teachers, institutions and supervised students aged five and above. It is not a medical device and does not diagnose ADHD or replace professional advice." },
      { title: "PRIVACY INFORMATION", text: "Attention Minder does not record camera video, capture screenshots, store camera images or retain facial biometric templates.", bullets: ["Read the full Attention Minder privacy policy for account, retention and deletion information."] }
    ],
    cards: [{ eyebrow: "PRIVACY", title: "ATTENTION MINDER PRIVACY POLICY", text: "Review how Attention Minder handles camera analysis, user information, retention and account deletion.", href: "/attention-minder-privacy-policy" }],
    cta: { label: "Contact the Attention Minder team", href: "/contact" }
  },
  "custom-ai-ml": {
    slug: "custom-ai-ml", navLabel: "Custom AI & ML", eyebrow: "SERVICE · APPLIED AI",
    seoTitle: "Custom Machine Learning Development | Truefox AI",
    seoKeywords: ["custom machine learning development", "custom ML models", "predictive analytics", "NLP", "MLOps"],
    title: "AI and machine learning built around your business problem.",
    description: "Truefox AI develops custom machine-learning systems across data engineering, predictive analytics, computer vision, NLP, MLOps and production deployment.",
    intro: "Truefox AI provides custom machine-learning development for specialised decisions that off-the-shelf systems cannot address reliably. This page focuses on data readiness, predictive analytics, computer vision, NLP, model evaluation, production integration and MLOps; broader custom AI service discovery belongs within our AI development services portfolio.",
    kind: "services",
    stats: [
      { value: "DATA", label: "Feasibility before modelling" },
      { value: "MODEL", label: "Measured against a baseline" },
      { value: "MLOps", label: "Built to operate and improve" }
    ],
    cards: [
      { eyebrow: "PREDICT", title: "PREDICTIVE SYSTEMS", text: "Develop forecasting, classification, ranking, recommendation and anomaly-detection systems around a defined operational decision." },
      { eyebrow: "PERCEIVE", title: "VISION & LANGUAGE", text: "Build computer-vision, document-intelligence and natural-language pipelines for specialised data, content and workflows." },
      { eyebrow: "OPERATE", title: "PRODUCTION MACHINE LEARNING", text: "Connect data pipelines, model services, APIs, monitoring, versioning and controlled retraining into maintainable production software." }
    ],
    sections: [
      {
        eyebrow: "OVERVIEW",
        title: "WHAT IS CUSTOM MACHINE-LEARNING DEVELOPMENT?",
        text: "Custom AI and machine learning refers to systems designed around a specific organisation, dataset, process or decision. The result may be a prediction service, forecasting platform, recommendation engine, computer-vision model, NLP pipeline, anomaly detector or broader decision-support application integrated into the way people already work."
      },
      {
        eyebrow: "PROBLEM FIRST",
        title: "START WITH THE DECISION, NOT THE MODEL.",
        text: "Before selecting technology, the project should define the decision or workflow to improve, the available data, required response time, cost of errors, intended users, integration constraints and measurable outcome. A sophisticated model is not useful if it cannot improve the real process around it.",
        bullets: ["WHAT DECISION NEEDS TO IMPROVE?", "WHAT DATA AND LABELS EXIST?", "WHAT HAPPENS WHEN THE MODEL IS WRONG?", "HOW FAST MUST THE RESULT ARRIVE?", "WHO USES OR REVIEWS THE OUTPUT?", "HOW WILL BUSINESS VALUE BE MEASURED?"]
      },
      {
        eyebrow: "FEASIBILITY",
        title: "DETERMINE WHETHER AI IS APPROPRIATE BEFORE FULL DEVELOPMENT.",
        text: "An AI feasibility assessment examines data quality, label availability, expected performance, infrastructure, operational constraints, integration effort, risk and potential value. It can show whether the project should proceed, be reframed, gather more data or use a simpler non-AI approach.",
        bullets: ["DATA AND LABEL ASSESSMENT", "TECHNICAL BASELINE", "MODEL AND INFRASTRUCTURE OPTIONS", "RISK AND FAILURE ANALYSIS", "PROOF-OF-CONCEPT RECOMMENDATION"]
      },
      {
        eyebrow: "DATA ENGINEERING",
        title: "BUILD RELIABLE DATA BEFORE EXPECTING A RELIABLE MODEL.",
        text: "Real-world datasets commonly contain missing values, duplicate records, inconsistent labels, noisy measurements, sparse history, class imbalance and outdated formats. Truefox AI can design repeatable pipelines for collection, validation, cleaning, transformation, feature generation, storage, versioning and monitoring.",
        bullets: ["INGESTION AND SCHEMA VALIDATION", "CLEANING AND DUPLICATE HANDLING", "LABEL AND FEATURE PIPELINES", "DATASET VERSIONING AND LINEAGE", "QUALITY AND DISTRIBUTION MONITORING"]
      },
      {
        eyebrow: "MODEL DEVELOPMENT",
        title: "SELECT THE SIMPLEST APPROACH THAT MEETS THE REQUIREMENT.",
        text: "Depending on the problem, suitable approaches may include statistical methods, classical machine learning, gradient-boosted trees, neural networks, transformers, time-series models or hybrid systems. The most complex model is not automatically the best; reliability, interpretability, latency, cost and maintainability all matter.",
        bullets: ["CLASSIFICATION, REGRESSION AND RANKING", "FORECASTING AND PREDICTIVE ANALYTICS", "RECOMMENDATION AND PERSONALISATION", "ANOMALY, FRAUD AND RISK MODELLING", "OPTIMISATION AND DECISION SUPPORT"]
      },
      {
        eyebrow: "VISION & LANGUAGE",
        title: "APPLY SPECIALISED MODELS TO IMAGES, VIDEO, TEXT AND DOCUMENTS.",
        text: "Custom computer-vision systems can support object detection, classification and visual inspection. NLP and document-intelligence pipelines can classify, extract, compare or route information from text and business documents. The exact approach depends on representative data, target conditions and the workflow using the result.",
        bullets: ["CUSTOM OBJECT DETECTION", "VISUAL QUALITY INSPECTION", "TEXT AND DOCUMENT CLASSIFICATION", "INFORMATION AND TABLE EXTRACTION", "DOMAIN-SPECIFIC NLP PIPELINES"]
      },
      {
        eyebrow: "LIMITED DATA",
        title: "USE THE DATA STRATEGY THAT FITS THE PROBLEM.",
        text: "Not every use case requires millions of labelled examples. Depending on the available signal, projects may use pre-trained models, transfer learning, human-in-the-loop labelling, weak supervision, carefully governed synthetic data or rule-based augmentation. Feasibility still depends on representative coverage and a defensible evaluation set."
      },
      {
        eyebrow: "FOUNDATION MODELS",
        title: "USE FINE-TUNING ONLY WHEN IT CHANGES THE RIGHT BEHAVIOUR.",
        text: "Foundation models may be useful for general language or vision capabilities, while custom models can better suit structured predictions, specialised domains, low-latency workloads or constrained compute. Fine-tuning may help with terminology, output formats or task behaviour, but retrieval or tool integration is often more appropriate when the requirement is access to current knowledge."
      },
      {
        eyebrow: "EVALUATION",
        title: "MEASURE TECHNICAL PERFORMANCE AND BUSINESS OUTCOMES.",
        text: "Evaluation metrics should reflect the cost of different errors. Accuracy alone may hide poor behaviour in important cases, so projects can use precision, recall, F1, ranking, forecasting error and segment-level measures alongside operational outcomes such as time saved, downtime reduced or decisions improved.",
        bullets: ["COMPARE AGAINST A SIMPLE BASELINE", "TEST REPRESENTATIVE AND EDGE CASES", "MEASURE HIGH-COST FALSE POSITIVES AND NEGATIVES", "EVALUATE PERFORMANCE ACROSS RELEVANT SEGMENTS", "CONNECT MODEL METRICS TO BUSINESS VALUE"]
      },
      {
        eyebrow: "EXPLAINABILITY & RESPONSIBILITY",
        title: "DESIGN FOR THE CONSEQUENCES OF AN INCORRECT OUTPUT.",
        text: "Where AI affects people or important decisions, architecture should consider explanation, dataset representation, bias testing, threshold review, user awareness and human oversight. Low-confidence or high-risk cases can be routed to an authorised person rather than allowed to proceed automatically."
      },
      {
        eyebrow: "DEPLOYMENT",
        title: "DELIVER THE MODEL THROUGH THE ENVIRONMENT THE WORK REQUIRES.",
        text: "Models can be delivered through real-time APIs, scheduled batch pipelines or embedded directly into cloud, private-cloud, on-premise or edge applications. Deployment choices depend on latency, availability, compute, privacy, connectivity, scale and cost—not every prediction needs a real-time service.",
        bullets: ["REAL-TIME PREDICTION APIS", "BATCH FORECASTING AND ANALYSIS", "PRIVATE-CLOUD OR ON-PREMISE SERVICES", "EDGE AND EMBEDDED INFERENCE", "INTEGRATION WITH EXISTING SOFTWARE"]
      },
      {
        eyebrow: "MLOps",
        title: "OPERATE THE MODEL AS A VERSIONED PRODUCTION SYSTEM.",
        text: "Production machine learning requires deployment, testing, versioning, monitoring, rollback, dataset tracking and controlled update workflows. Monitoring can identify changes in inputs, predictions, latency, failures and business performance so drift or degradation does not remain invisible.",
        bullets: ["MODEL AND DATASET VERSIONING", "AUTOMATED TESTING AND DEPLOYMENT CONTROLS", "LATENCY, FAILURE AND DISTRIBUTION MONITORING", "SAFE ROLLBACK AND MODEL COMPARISON", "REVIEWED RETRAINING AND RELEASE"]
      },
      {
        eyebrow: "SECURITY",
        title: "PROTECT DATA, MODELS AND INFERENCE SERVICES.",
        text: "Custom AI should be secured like any other production system. Depending on the application, controls can include authentication, authorisation, encryption, API security, network restrictions, secret management, environment separation and audit logging, with additional protections for sensitive datasets and model assets."
      },
      {
        eyebrow: "DELIVERY",
        title: "PROTOTYPE THE UNCERTAINTY BEFORE SCALING THE PLATFORM.",
        text: "Truefox AI begins with discovery and data assessment, establishes a baseline and compares suitable approaches using agreed metrics. A focused prototype proves technical and business feasibility before production APIs, infrastructure, security, monitoring and integrations are built.",
        bullets: ["01 · PROBLEM AND WORKFLOW DISCOVERY", "02 · DATA AND LABEL ASSESSMENT", "03 · BASELINE AND FEASIBILITY", "04 · CONTROLLED EXPERIMENTATION", "05 · WORKING PROTOTYPE", "06 · PRODUCTION ENGINEERING AND INTEGRATION", "07 · DEPLOYMENT, MONITORING AND IMPROVEMENT"]
      },
      {
        eyebrow: "FAQ",
        title: "WHEN SHOULD A BUSINESS BUILD A CUSTOM AI MODEL?",
        text: "Custom development can make sense when the problem is specialised, existing solutions are insufficient, proprietary data provides useful signal or performance and integration requirements are specific. A feasibility assessment should confirm whether building is justified."
      },
      {
        eyebrow: "FAQ",
        title: "DO ALL AI PROJECTS REQUIRE DEEP LEARNING OR LARGE DATASETS?",
        text: "No. Simpler statistical or machine-learning approaches can be more reliable and maintainable, and pre-trained models or transfer learning can reduce data needs. The required data depends on the problem, expected performance and representativeness of available examples."
      },
      {
        eyebrow: "FAQ",
        title: "WHAT IS MODEL DRIFT?",
        text: "Model drift occurs when production inputs, behaviour or relationships change compared with development data, causing performance to deteriorate. Monitoring helps identify these changes so the model and surrounding workflow can be investigated before a controlled update."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "CONNECT CUSTOM MODELS WITH EDGE, PRODUCTS AND OPERATIONAL SOFTWARE.",
        text: "Custom AI & ML can be combined with IoT and Edge AI for local inference, AI Smart Security for computer-vision monitoring, or custom software engineering to deliver the model through a dependable user and integration layer.",
        bullets: ["IoT & EDGE AI · /iot-edge-ai", "AI SMART SECURITY · /ai-smart-security", "WEB & MOBILE PRODUCTS · /web-mobile-products"]
      }
    ],
    cta: { label: "Request an AI feasibility assessment", href: "/request-quote" }
  },
  "web-mobile-products": {
    slug: "web-mobile-products", navLabel: "Web & Mobile Products", eyebrow: "SERVICE · DIGITAL PRODUCTS",
    seoTitle: "AI Product, Web & Mobile Development | Truefox AI",
    seoKeywords: ["AI product engineering", "AI software development", "AI applications", "SaaS development", "mobile development"],
    title: "Digital products designed around real users, workflows and business goals.",
    description: "Truefox AI designs and builds custom web applications, mobile apps, SaaS platforms, enterprise products and AI-powered digital experiences.",
    intro: "Truefox AI provides AI product engineering for organisations building or improving web applications, mobile products, SaaS platforms and enterprise software. Product strategy, UX, frontend, backend, cloud systems, integrations and applied AI are engineered as one maintainable product rather than disconnected technical workstreams.",
    kind: "services",
    stats: [
      { value: "UX", label: "Designed around real users" },
      { value: "FULL", label: "Frontend through cloud" },
      { value: "LIVE", label: "Operated beyond launch" }
    ],
    cards: [
      { eyebrow: "WEB", title: "CUSTOM WEB APPLICATIONS", text: "Build customer portals, SaaS platforms, workflow applications, dashboards, internal tools and enterprise systems around your processes." },
      { eyebrow: "MOBILE", title: "iOS & ANDROID EXPERIENCES", text: "Deliver native, cross-platform or progressive web experiences selected according to device integration, performance, offline and roadmap needs." },
      { eyebrow: "INTELLIGENCE", title: "AI-POWERED PRODUCTS", text: "Integrate private assistants, search, recommendations, computer vision and governed workflow automation into a coherent user experience." }
    ],
    sections: [
      {
        eyebrow: "PRODUCT FIRST",
        title: "AI PRODUCT ENGINEERING STARTS WITH THE USER AND WORKFLOW.",
        text: "Product decisions begin with the people, workflow and outcome—not a predetermined feature list. Discovery identifies who will use the product, what they are trying to accomplish, where the current process creates friction, which systems must connect and how success will be measured for users and the business.",
        bullets: ["TARGET USERS AND OPERATING CONTEXT", "CURRENT JOURNEY AND PAIN POINTS", "CRITICAL TASKS AND INFORMATION", "DESKTOP, MOBILE AND FIELD REQUIREMENTS", "BUSINESS OUTCOMES AND PRODUCT METRICS"]
      },
      {
        eyebrow: "WEB APPLICATIONS",
        title: "TURN FRAGMENTED PROCESSES INTO ONE COHERENT EXPERIENCE.",
        text: "Custom web applications can bring customer service, approvals, operations, reporting, content and administration into software shaped around the organisation's own workflow. The architecture is selected for the product's expected users, integrations, security and long-term maintenance needs.",
        bullets: ["CUSTOMER AND EMPLOYEE PORTALS", "ENTERPRISE WORKFLOW APPLICATIONS", "OPERATIONS AND CASE-MANAGEMENT SYSTEMS", "ADMINISTRATION AND CONTENT PLATFORMS", "REAL-TIME DATA AND MONITORING DASHBOARDS"]
      },
      {
        eyebrow: "MOBILE PRODUCTS",
        title: "DESIGN FOR HOW AND WHERE THE USER ACTUALLY WORKS.",
        text: "Mobile products can support customers, field teams, logistics, attendance, service operations, monitoring and internal workflows. Native iOS, Android, cross-platform or progressive-web approaches are selected according to performance, hardware access, distribution, offline behaviour and the long-term product roadmap.",
        bullets: ["CUSTOMER AND EMPLOYEE APPLICATIONS", "FIELD-SERVICE AND LOGISTICS TOOLS", "OFFLINE DATA CAPTURE AND SYNCHRONISATION", "PUSH NOTIFICATIONS AND ACTION REQUESTS", "MAPS, LOCATION AND DEVICE INTEGRATION"]
      },
      {
        eyebrow: "SaaS & ENTERPRISE",
        title: "BUILD THE PRODUCT MODEL BEHIND THE INTERFACE.",
        text: "SaaS and enterprise platforms may require organisations, subscriptions, tenant isolation, account administration, permissions, analytics and operational support. Internal applications must also fit existing processes and identity systems rather than creating another disconnected place to work.",
        bullets: ["MULTI-TENANT DATA AND CONFIGURATION", "PLANS, SUBSCRIPTIONS AND PRODUCT ACCESS", "ROLE-BASED ADMINISTRATION", "CUSTOMER AND ORGANISATION MANAGEMENT", "ENTERPRISE IDENTITY AND SINGLE SIGN-ON"]
      },
      {
        eyebrow: "AI EXPERIENCES",
        title: "MAKE INTELLIGENCE PART OF THE PRODUCT, NOT A DISCONNECTED WIDGET.",
        text: "Existing and new products can integrate private AI assistants, enterprise search, recommendations, computer vision and controlled workflow agents. The experience should make AI limitations, source context, permissions and human decision points clear rather than hiding them behind a generic chat interface.",
        bullets: ["PRIVATE KNOWLEDGE ASSISTANTS", "SEMANTIC AND ENTERPRISE SEARCH", "RECOMMENDATION AND DECISION SUPPORT", "VISION-ENABLED APPLICATION WORKFLOWS", "GOVERNED AGENTIC EXPERIENCES"]
      },
      {
        eyebrow: "BACKEND & APIS",
        title: "ENGINEER THE SERVICES USERS DO NOT SEE BUT ALWAYS DEPEND ON.",
        text: "Backend services manage business rules, accounts, permissions, integrations, files, notifications, payments, AI services and workflows. APIs are designed with authentication, authorisation, validation, versioning, error handling, performance and documentation appropriate to the consumers that depend on them.",
        bullets: ["APPLICATION AND INTEGRATION APIS", "BUSINESS RULES AND WORKFLOW SERVICES", "RELATIONAL, DOCUMENT, SEARCH AND VECTOR DATA", "EVENT-DRIVEN AND REAL-TIME COMMUNICATION", "BACKGROUND JOBS AND NOTIFICATION SERVICES"]
      },
      {
        eyebrow: "OFFLINE & REAL-TIME",
        title: "MATCH THE DATA FLOW TO THE OPERATING ENVIRONMENT.",
        text: "Field applications can store approved information, accept forms and capture evidence while connectivity is unavailable, then synchronize according to conflict and retry rules. Live dashboards, messaging and monitoring products can use event-driven services or persistent connections when users need immediate updates."
      },
      {
        eyebrow: "INTEGRATIONS",
        title: "CONNECT THE PRODUCT TO THE SYSTEMS THE BUSINESS ALREADY USES.",
        text: "Products can integrate with approved ERP, CRM, HRMS, payment, identity, IoT and third-party services where suitable interfaces exist. Legacy integration and migration are planned around data integrity, user accounts, service continuity, dependencies and the risk of changing established workflows.",
        bullets: ["ERP, CRM, HRMS AND INTERNAL SYSTEMS", "PAYMENT AND SUBSCRIPTION PROVIDERS", "IDENTITY, SSO AND USER PROVISIONING", "IoT, AI AND DATA SERVICES", "LEGACY APPLICATIONS AND CUSTOM APIS"]
      },
      {
        eyebrow: "UX & ACCESSIBILITY",
        title: "MAKE IMPORTANT TASKS CLEAR ACROSS DEVICES AND ABILITIES.",
        text: "User journeys, information architecture, wireframes and interactive prototypes help identify friction before engineering begins. Responsive design adapts the task—not only the screen size—while accessibility work can address semantic structure, keyboard navigation, form labels, contrast, focus and assistive-technology support according to the product's audience and requirements."
      },
      {
        eyebrow: "SECURITY & PRIVACY",
        title: "DESIGN PROTECTION INTO THE PRODUCT FROM THE BEGINNING.",
        text: "Application security can include secure authentication, multi-factor options, role-based authorisation, input validation, encryption, API protection, session management, secret handling, dependency management, audit history and environment separation. Privacy design limits collection to what the product needs and defines consent, retention, access and deletion.",
        bullets: ["AUTHENTICATION AND ACCOUNT RECOVERY", "ROLE-BASED AND TENANT-AWARE AUTHORISATION", "SECURE API AND DATA HANDLING", "AUDITABLE ADMINISTRATIVE ACTIONS", "DATA-MINIMISATION AND RETENTION CONTROLS"]
      },
      {
        eyebrow: "CLOUD & RELIABILITY",
        title: "SCALE AROUND REALISTIC DEMAND AND OPERATIONAL IMPORTANCE.",
        text: "Cloud architecture can use application services, containers, serverless workloads, databases, object storage, queues, caches and content delivery according to the product. Business-critical systems may require redundancy, health checks, backups, automated recovery and tested failure paths, while smaller products should avoid unnecessary complexity."
      },
      {
        eyebrow: "OBSERVABILITY & INSIGHT",
        title: "KNOW WHEN THE PRODUCT IS UNHEALTHY AND HOW PEOPLE USE IT.",
        text: "Production monitoring can track response time, errors, API and integration failures, database performance, background jobs and infrastructure health. Product analytics can measure adoption, feature usage, conversion, workflow completion and drop-off—answering defined product questions rather than collecting activity without purpose."
      },
      {
        eyebrow: "MVP & MODERNISATION",
        title: "VALIDATE THE CORE ASSUMPTION OR IMPROVE THE SYSTEM IN STAGES.",
        text: "A focused MVP tests whether a workflow creates enough user and business value before every possible feature is built. Existing products can be modernised incrementally through UX improvements, component replacement, performance work, security upgrades or staged infrastructure migration rather than assuming a complete rewrite is always required."
      },
      {
        eyebrow: "QUALITY & DELIVERY",
        title: "MOVE FROM PRODUCT DISCOVERY TO MEASURED IMPROVEMENT.",
        text: "Truefox AI combines product, design, frontend, backend, cloud, data and AI as one delivery system. Iterative engineering, automated and manual testing, CI/CD, monitored releases and real user feedback help the product move from a validated concept into dependable production software.",
        bullets: ["01 · DISCOVER USERS, WORKFLOW AND OUTCOME", "02 · DEFINE JOURNEYS, SCOPE AND PRIORITIES", "03 · DESIGN AND PROTOTYPE THE EXPERIENCE", "04 · ARCHITECT DATA, APIS, SECURITY AND CLOUD", "05 · BUILD AND TEST ITERATIVELY", "06 · DEPLOY WITH MONITORING AND RELEASE CONTROLS", "07 · LEARN FROM USAGE AND IMPROVE"]
      },
      {
        eyebrow: "FAQ",
        title: "DO YOU DEVELOP BOTH THE FRONTEND AND BACKEND?",
        text: "Yes. Truefox AI can design the product experience and build the frontend, backend services, databases, APIs, integrations and cloud infrastructure required for a complete web or mobile product."
      },
      {
        eyebrow: "FAQ",
        title: "CAN YOU ADD AI TO AN EXISTING APPLICATION?",
        text: "Potentially, yes. Existing products can integrate capabilities such as private assistants, semantic search, recommendations, computer vision or workflow automation when the data, interfaces, permissions and user experience support the use case."
      },
      {
        eyebrow: "FAQ",
        title: "CAN AN APPLICATION WORK OFFLINE?",
        text: "Selected mobile and web workflows can be designed for offline operation. Exact behaviour depends on what data may be stored locally, which tasks require central systems and how synchronization conflicts, retries and permissions must be handled."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "BRING AI, AGENTS AND CONNECTED OPERATIONS INTO THE PRODUCT.",
        text: "Web & Mobile Product Development can be combined with Custom AI & ML, Private AI Assistants, Agentic Automation and IoT & Edge AI when the application is the interface to a wider intelligent system.",
        bullets: ["CUSTOM AI & ML · /custom-ai-ml", "PRIVATE AI ASSISTANTS · /private-ai-assistants", "AGENTIC AUTOMATION · /agentic-automation", "IoT & EDGE AI · /iot-edge-ai"]
      }
    ],
    cta: { label: "Start a product discovery session", href: "/request-quote" }
  },
  "research-development": {
    slug: "research-development", navLabel: "R&D and Prototyping", eyebrow: "SERVICE · RESEARCH & VALIDATION",
    seoTitle: "AI Proof of Concept & Prototyping | Truefox AI",
    seoKeywords: ["AI proof of concept development", "AI feasibility studies", "applied AI research", "AI prototyping", "MVP validation"],
    title: "Turn ambitious ideas into testable technology.",
    description: "Truefox AI provides feasibility studies, applied AI research, proof-of-concept development and rapid prototyping across AI, IoT, edge and digital products.",
    intro: "Truefox AI provides AI proof-of-concept development and feasibility studies for organisations that need evidence before larger production investment. We define the most important uncertainty, test it with representative data, hardware or workflows, and turn the results into a practical proceed, modify or stop decision.",
    kind: "services",
    stats: [
      { value: "ASK", label: "Define the uncertainty" },
      { value: "TEST", label: "Build the smallest experiment" },
      { value: "DECIDE", label: "Proceed with evidence" }
    ],
    cards: [
      { eyebrow: "FEASIBILITY", title: "TECHNICAL STUDIES", text: "Assess data, models, hardware, integrations, performance, security and delivery constraints before committing to development." },
      { eyebrow: "EVIDENCE", title: "PROOFS OF CONCEPT", text: "Build a focused implementation that answers one important question using representative inputs and measurable criteria." },
      { eyebrow: "EXPERIENCE", title: "WORKING PROTOTYPES", text: "Combine enough interface, workflow and system integration for stakeholders to evaluate how the concept could work in practice." }
    ],
    sections: [
      {
        eyebrow: "OVERVIEW",
        title: "WHAT IS AI PROOF-OF-CONCEPT DEVELOPMENT?",
        text: "R&D prototyping explores a technical concept through structured research, experimentation and a working early implementation. It does not need every production feature. Its purpose is to focus effort on the uncertainty that matters most—whether a model, device, integration, architecture or user workflow can meet a defined requirement."
      },
      {
        eyebrow: "FROM IDEA TO EVIDENCE",
        title: "TURN THE BIGGEST ASSUMPTION INTO A TESTABLE QUESTION.",
        text: "A strong prototype does not begin with a broad request to build an impressive demo. It identifies what the organisation must learn next: whether data is sufficient, accuracy is achievable, hardware can support the workload, a system can operate offline, an integration is practical or users can complete the proposed workflow.",
        bullets: ["CAN THE TECHNOLOGY WORK IN REPRESENTATIVE CONDITIONS?", "IS THE AVAILABLE DATA SUITABLE?", "CAN THE REQUIRED HARDWARE MEET PERFORMANCE NEEDS?", "ARE INTEGRATION AND SECURITY BOUNDARIES PRACTICAL?", "WILL THE PROPOSED EXPERIENCE HELP THE USER?"]
      },
      {
        eyebrow: "WHEN TO PROTOTYPE",
        title: "REDUCE UNCERTAINTY BEFORE IT BECOMES EXPENSIVE.",
        text: "Prototyping is useful when technical feasibility is unclear, several approaches could work, data or hardware needs evaluation, accuracy is unknown, stakeholders need a working concept or production delivery would require significant investment. Finding a limitation early is a successful research outcome when it prevents the wrong system from being scaled."
      },
      {
        eyebrow: "PoC, PROTOTYPE OR MVP",
        title: "CHOOSE THE STAGE THAT ANSWERS THE QUESTION YOU ACTUALLY HAVE.",
        text: "A proof of concept asks whether the technology can work. A prototype explores what the solution could look and feel like. A minimum viable product is stable enough for a controlled group of real users and tests whether the product creates value. Choosing the right stage avoids production engineering before technical and product assumptions are ready.",
        bullets: ["PROOF OF CONCEPT · TECHNICAL FEASIBILITY", "PROTOTYPE · WORKFLOW AND EXPERIENCE", "MVP · REAL-USER VALUE AND ADOPTION"]
      },
      {
        eyebrow: "APPLIED AI RESEARCH",
        title: "COMPARE MODELS, DATA STRATEGIES AND SYSTEM ARCHITECTURES.",
        text: "Applied AI experiments can test custom machine learning, generative AI, RAG, computer vision, multimodal systems or controlled agents. The research may compare commercial and open models, retrieval approaches, single and multi-agent designs, cloud and local inference, or AI against a simpler deterministic alternative.",
        bullets: ["MACHINE-LEARNING AND FORECASTING PROTOTYPES", "GENERATIVE AI AND RAG PROOFS OF CONCEPT", "COMPUTER-VISION BENCHMARKS", "AGENT AND WORKFLOW EXPERIMENTS", "MULTIMODAL AND VOICE CONCEPTS"]
      },
      {
        eyebrow: "IoT, EDGE & HARDWARE",
        title: "TEST THE PHYSICAL SYSTEM BEFORE COMMITTING TO A FLEET.",
        text: "IoT and Edge AI prototypes can validate sensor quality, device communication, embedded behaviour, local model performance and connectivity assumptions. Representative hardware benchmarks help determine whether compute, memory, power, thermal behaviour and response time are suitable before equipment is purchased at scale.",
        bullets: ["SENSOR AND SIGNAL FEASIBILITY", "EMBEDDED AND GATEWAY PROTOTYPES", "EDGE-MODEL PERFORMANCE", "OFFLINE AND NETWORK-LOSS BEHAVIOUR", "HARDWARE AND PROTOCOL INTEGRATION"]
      },
      {
        eyebrow: "DIGITAL PRODUCTS",
        title: "VALIDATE THE WORKFLOW BEFORE BUILDING THE FULL PLATFORM.",
        text: "Interactive product prototypes can explore navigation, interface, business rules, AI touchpoints and connections with existing systems. Workflow prototyping also makes it clear which steps benefit from automation and where human judgement, approval or exception handling should remain."
      },
      {
        eyebrow: "DATA & BENCHMARKS",
        title: "USE REPRESENTATIVE INPUTS AND MEASURABLE SUCCESS CRITERIA.",
        text: "Clean demonstration data can hide important limitations. R&D should use representative documents, images, sensor readings, user questions, hardware, network conditions and workflows whenever possible. Success criteria are defined before building and can measure accuracy, latency, throughput, memory, cost, usability or another requirement relevant to the decision.",
        bullets: ["DATA VOLUME, QUALITY, LABELS AND COVERAGE", "MODEL ACCURACY AND ERROR TRADE-OFFS", "LATENCY, THROUGHPUT AND RESOURCE USE", "WORKFLOW COMPLETION AND USER FEEDBACK", "CLEAR PASS, MODIFY OR STOP CRITERIA"]
      },
      {
        eyebrow: "ARCHITECTURE COMPARISON",
        title: "COMPARE OPTIONS BEFORE CREATING AN EXPENSIVE DEPENDENCY.",
        text: "A focused technical spike can evaluate an API, framework, database, integration or hardware target without building a complete prototype. Broader research can compare cloud and edge, custom and foundation models, build and buy, or alternative application architectures using the same requirements and benchmarks."
      },
      {
        eyebrow: "SECURITY & PRIVACY",
        title: "DISCOVER CRITICAL CONSTRAINTS WHILE THE DESIGN CAN STILL CHANGE.",
        text: "R&D can identify data exposure, authentication, device security, agent permissions, API boundaries, model access and network risks before production architecture is fixed. Sensitive concepts should also test what data is actually required, whether collection can be minimised and whether selected processing can remain local.",
        bullets: ["DATA AND MODEL ACCESS", "IDENTITY, API AND DEVICE SECURITY", "NETWORK AND DEPLOYMENT BOUNDARIES", "DATA MINIMISATION AND RETENTION", "HUMAN REVIEW FOR HIGH-RISK OUTPUTS"]
      },
      {
        eyebrow: "RAPID EXPERIMENTATION",
        title: "BUILD TO LEARN, MEASURE AND ADJUST.",
        text: "Short hypothesis, build, test and measurement cycles keep R&D focused on learning. The simplest useful solution may be rules instead of machine learning, traditional search instead of generative AI, cloud instead of edge or deterministic automation instead of an agent. A recommendation not to use AI can be the most valuable result."
      },
      {
        eyebrow: "DELIVERABLES",
        title: "LEAVE WITH EVIDENCE AND A CLEAR NEXT DECISION.",
        text: "Deliverables are defined around what decision the organisation needs to make. They may include a feasibility report, model or hardware benchmark, data assessment, architecture comparison, working proof of concept, interactive prototype, test results, risk analysis and a production roadmap.",
        bullets: ["WHAT WAS TESTED", "WHAT WORKED AND FAILED", "MEASURED RESULTS AND LIMITATIONS", "RISKS AND TRADE-OFFS", "RECOMMENDED NEXT STEP"]
      },
      {
        eyebrow: "PRODUCTION READINESS",
        title: "A SUCCESSFUL PROTOTYPE IS NOT AUTOMATICALLY PRODUCTION-READY.",
        text: "Production usually requires additional reliability, security, monitoring, scalability, user management, data lifecycle, error handling, documentation and infrastructure. A readiness assessment makes this gap visible and can define a staged path from prototype to pilot, production and scale."
      },
      {
        eyebrow: "PROCESS",
        title: "BUILD THE SMALLEST USEFUL EXPERIMENT AROUND THE BIGGEST QUESTION.",
        text: "Truefox AI combines research across AI, software, cloud, embedded systems, IoT and product design so complete ideas can be tested rather than isolated components. Each engagement ends with a direct recommendation based on the evidence produced.",
        bullets: ["01 · DEFINE THE QUESTION", "02 · RESEARCH TECHNOLOGIES, DATA AND CONSTRAINTS", "03 · SET MEASURABLE SUCCESS CRITERIA", "04 · BUILD THE FOCUSED PROTOTYPE", "05 · TEST IN REPRESENTATIVE CONDITIONS", "06 · ANALYSE RESULTS, LIMITATIONS AND RISKS", "07 · RECOMMEND PROCEED, MODIFY, LEARN MORE OR STOP", "08 · DEFINE A PRODUCTION ROADMAP WHEN VIABLE"]
      },
      {
        eyebrow: "FAQ",
        title: "WHAT IS THE DIFFERENCE BETWEEN A PROTOTYPE AND AN MVP?",
        text: "A prototype explores how a solution could work and may not be production-ready. An MVP is a usable product designed for a controlled group of real users so the organisation can test whether it creates enough value to continue."
      },
      {
        eyebrow: "FAQ",
        title: "WHAT HAPPENS IF THE IDEA DOES NOT WORK?",
        text: "That can still be a successful R&D result. Discovering a technical, data, hardware or business limitation through a focused experiment is less expensive than discovering it after full-scale development. The evidence should inform whether to modify, pause or stop."
      },
      {
        eyebrow: "FAQ",
        title: "CAN A SUCCESSFUL PROTOTYPE BECOME A PRODUCTION PRODUCT?",
        text: "Yes, but it generally needs additional engineering for reliability, security, monitoring, scalability, user experience and operations. A production-readiness assessment defines that work rather than treating the prototype as a finished system."
      },
      {
        eyebrow: "RELATED CAPABILITIES",
        title: "PROTOTYPE ACROSS AI, EDGE AND DIGITAL PRODUCTS.",
        text: "R&D engagements can connect with Custom AI & ML, IoT & Edge AI, Private AI Assistants, Agentic Automation and Web & Mobile Products depending on which technical question must be answered.",
        bullets: ["CUSTOM AI & ML · /custom-ai-ml", "IoT & EDGE AI · /iot-edge-ai", "PRIVATE AI ASSISTANTS · /private-ai-assistants", "WEB & MOBILE PRODUCTS · /web-mobile-products"]
      }
    ],
    cta: { label: "Start a proof of concept", href: "/request-quote" }
  },
  services: {
    slug: "services",
    navLabel: "Services",
    seoTitle: "AI Development Services | Truefox AI Inc.",
    seoKeywords: ["AI development services", "enterprise AI solutions", "custom AI development", "AI consulting", "AI systems engineering"],
    eyebrow: "SERVICES",
    title: "FROM COMPLEX NEED TO WORKING SYSTEM.",
    description: "Explore AI strategy, custom development, computer vision, private AI, agents, machine learning, edge systems and product engineering from Truefox AI.",
    intro:
      "Truefox AI provides AI development services spanning strategy, custom AI development, systems engineering, software, cloud and edge delivery. We help organisations select the right capability and move from discovery and feasibility through integration, deployment and ongoing improvement without managing handoffs across multiple vendors.",
    kind: "services",
    cards: [
      { eyebrow: "01", title: "AI SMART SECURITY", text: "Apply AI video analytics to security, safety and operational monitoring workflows.", href: "/ai-smart-security" },
      { eyebrow: "02", title: "BIOMETRIC INTELLIGENCE", text: "Build identity verification, attendance, liveness and anti-spoofing workflows.", href: "/biometric-intelligence" },
      { eyebrow: "03", title: "PRIVATE AI ASSISTANTS", text: "Create secure assistants and enterprise RAG around approved knowledge and permissions.", href: "/private-ai-assistants" },
      { eyebrow: "04", title: "AGENTIC AUTOMATION", text: "Develop governed AI agents for approved tools and multi-step business workflows.", href: "/agentic-automation" },
      { eyebrow: "05", title: "IoT & EDGE AI", text: "Connect devices, embedded systems, local inference and central operations.", href: "/iot-edge-ai" },
      { eyebrow: "06", title: "CUSTOM AI & ML", text: "Turn complex data into dependable models, decision systems and production-ready machine learning capabilities.", href: "/custom-ai-ml" },
      { eyebrow: "07", title: "WEB & MOBILE PRODUCTS", text: "Create intuitive digital products that bring intelligent workflows to customers, operators and internal teams.", href: "/web-mobile-products" },
      { eyebrow: "08", title: "R&D & PRODUCT VALIDATION", text: "Test ambitious ideas through focused research, technical feasibility studies and representative prototypes.", href: "/research-development" }
    ],
    sections: [
      { title: "AI DEVELOPMENT STRATEGY & SYSTEMS ARCHITECTURE", text: "Identify the right opportunities, assess feasibility and define a practical roadmap across data, technology, risk and deployment." },
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
      { title: "CANADA", text: "Suite 300 · 72 Victoria Street South · Kitchener, Ontario N2G 4Y9 · Canada\nHeadquarters, client strategy and delivery leadership." },
      { title: "INDIA", text: "Olangattu Tower · Chittethukara · Kakkanad · Kochi, Kerala 682037 · India\nAI engineering, software development and technical support." },
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
      { title: "18. Contact Information", text: "For questions related to these Terms, privacy, or support, contact Truefox AI Inc. at info@truefoxaiinc.com or visit https://www.truefoxaiinc.com/." }
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
