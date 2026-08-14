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
  url: "https://www.truefoxaiinc.com",
  email: "info@truefoxaiinc.com",
  phoneLabel: "+1 (Canada)",
  lastUpdated: "2026-08-14",
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
    title: "AI video analytics for faster, better-informed security decisions.",
    description: "Truefox AI builds intelligent video surveillance and connected monitoring systems for security, safety and operational awareness.",
    intro: "Truefox AI Smart Security applies computer vision to live video and connected signals so teams can identify relevant events, understand what is happening and respond with better context. Each system is configured around the operating environment, existing infrastructure and the decisions people need to make.",
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
    title: "Secure identity verification built for real-world workflows.",
    description: "Truefox AI develops biometric intelligence systems for face recognition, fingerprint authentication, attendance, identity verification, liveness detection and anti-spoofing workflows.",
    intro: "Identity should be fast, reliable and difficult to fake. Truefox AI designs complete biometric workflows around the real operating environment—including capture devices, lighting, enrollment quality, access rules, network conditions, privacy requirements and integration with existing enterprise systems.",
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
        title: "WHAT IS BIOMETRIC INTELLIGENCE?",
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
        bullets: ["AI SMART SECURITY · /ai-smart-security", "IoT & EDGE AI · /iot-edge-ai", "WEB & MOBILE PRODUCTS · /services"]
      }
    ], cta: { label: "Discuss your biometric requirement", href: "/book-demo" }
  },
  "private-ai-assistants": {
    slug: "private-ai-assistants", navLabel: "Private AI Assistants", eyebrow: "PRODUCT · KNOWLEDGE",
    title: "Enterprise AI that understands your business, knowledge and workflows.",
    description: "Truefox AI builds private enterprise AI assistants, RAG systems and copilots grounded in approved company knowledge and controlled business tools.",
    intro: "Your organisation already has valuable knowledge. Truefox AI Private AI Assistants bring approved documents, data and tools into a secure conversational experience—helping people retrieve relevant information, understand it clearly and, where appropriate, work with authorised enterprise systems.",
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
        bullets: ["AGENTIC AUTOMATION · /agentic-automation", "WEB & MOBILE PRODUCTS · /services", "BOOK A PRIVATE AI DEMO · /book-demo"]
      }
    ], cta: { label: "Discuss your private AI requirement", href: "/book-demo" }
  },
  "agentic-automation": {
    slug: "agentic-automation", navLabel: "Agentic Automation", eyebrow: "PRODUCT · WORKFLOWS",
    title: "AI agents that reason, use tools and complete multi-step workflows.",
    description: "Truefox AI builds governed enterprise AI agents that connect reasoning, approved tools, business rules and human oversight.",
    intro: "Most AI assistants stop at answering a question. Truefox AI Agentic Automation goes further by connecting AI reasoning with approved applications, databases, APIs, documents and operational processes—so suitable parts of a workflow can move forward while consequential decisions remain controlled.",
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
        title: "WHAT IS AGENTIC AUTOMATION?",
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
    title: "Intelligence closer to where work happens.",
    description: "Connected sensors, embedded software, gateways and edge inference for operational environments.",
    intro: "IoT & Edge AI connects devices, sensors and gateways with embedded software and on-device intelligence—supporting faster decisions when connectivity, latency, bandwidth or privacy matter.",
    kind: "products",
    sections: [
      { title: "SENSORS & DEVICES", text: "Connect operational signals through sensors, embedded firmware, secure connectivity and device integration." },
      { title: "EDGE INFERENCE", text: "Process selected data closer to its source for faster response and reduced dependence on continuous cloud connectivity." },
      { title: "GATEWAYS & FLEET OPERATIONS", text: "Coordinate device communication, telemetry, gateway software and fleet monitoring within the wider platform." }
    ], cta: { label: "Discuss an edge deployment", href: "/book-demo" }
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
      { title: "18. Contact Information", text: "For questions related to these Terms, privacy, or support, contact Truefox AI Inc. at truefoxaiinc@gmail.com or visit https://www.truefoxaiinc.com/." }
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
