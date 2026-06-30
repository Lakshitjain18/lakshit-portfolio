// ─────────────────────────────────────────────────
// Portfolio Data — Lakshit Jain
// ─────────────────────────────────────────────────

export const personalInfo = {
  name: "Lakshit Jain",
  initials: "LJ",
  designations: [
    "Aspiring Product Manager",
    "PM Fellow, Airtribe",
    "AI Product Builder",
  ],
  email: "mail.lakshitjain@gmail.com",
  phone: "+91 9538350253",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/lakshit-jain1852004/",
  tagline: "Building products with empathy, data, and velocity.",
} as const;

export const heroIntro =
  "Aspiring Product Manager with hands-on AI/ML engineering experience and structured PM training across product discovery, user research, prioritization, roadmapping, and GTM strategy. I've worked on product strategy for a 12M+ user platform, built a monetization model targeting ₹78 Cr ARR, and shipped a production AI surveillance system end-to-end. I bridge technical depth and product thinking — turning fuzzy user problems into structured, shippable solutions. Currently seeking APM, Product Intern, or Product Analyst roles at high-growth startups and tech companies.";

export const heroKPIs = [
  { value: 12, suffix: "M+", label: "User Products" },
  { value: 78, prefix: "₹", suffix: " Cr", label: "ARR Modeled" },
  { value: 6, suffix: "+", label: "Case Studies" },
  { value: 9, suffix: "+", label: "Projects Shipped" },
] as const;

export const aboutMe = {
  paragraph:
    "I'm a BCA graduate from RNS Institute of Technology, Bengaluru, with a dual background in AI/ML engineering and structured PM training. Through the Airtribe AI PM Launchpad, I've built depth in product discovery, AARRR funnel analysis, RICE prioritization, and go-to-market strategy across multiple case studies. My capstone project on TM Café for TrulyMadly involved end-to-end product work across a 12M+ user base, resulting in a monetization model targeting ₹78 Cr annual revenue. I'm comfortable with Figma, Notion, Jira, SQL, and Python — enough to work closely with engineering teams. I enjoy working at the intersection of data, user empathy, and execution.",
  mission:
    "Ship products that create genuine value for users — built on empathy and grounded in data.",
  vision:
    "Grow into a product role at a high-growth company where I can keep learning from real users and real outcomes.",
} as const;

export interface Experience {
  role: string;
  company: string;
  type: string;
  location: string;
  duration: string;
  responsibilities: string[];
  achievements?: string[];
  keyTakeaways?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Analyst Trainee",
    company: "Cognizant",
    type: "Full-time Trainee",
    location: "Bengaluru, India",
    duration: "Nov 2025 – Feb 2026",
    responsibilities: [
      "Identified patterns across 50+ enterprise client escalations and surfaced systemic product gaps in access management workflows.",
      "Documented recurring issues as structured improvement proposals for product and engineering teams.",
      "Built an issue tracking taxonomy to categorize user pain points by frequency and severity, informing escalation prioritization.",
      "Collaborated cross-functionally with support and product teams within enterprise SLA workflows.",
    ],
    keyTakeaways: [
      "Developed instincts for translating user-reported friction into actionable product opportunities.",
      "Gained exposure to stakeholder communication and cross-functional prioritization in an enterprise setting.",
      "Practiced breaking down technical issues into clear, structured updates for both technical and business audiences.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Loginware Softtec Pvt. Ltd.",
    type: "Internship",
    location: "Bengaluru, India",
    duration: "Jan 2025 – Mar 2025",
    responsibilities: [
      "Owned end-to-end product lifecycle for Vigilant Eye 2.0 — defined requirements, led YOLOv8-based AI development, and shipped a production-ready surveillance system to client sites.",
      "Authored a PRD for an Inventory Management System covering product tracking, inventory management, and user authentication.",
      "Integrated AI/ML models into a desktop application and implemented database connectivity using MySQL.",
      "Conducted usability testing across multiple iteration cycles, collaborating with engineering on feature scoping.",
    ],
    achievements: [
      "Delivered face & animal detection, live camera monitoring, automated alerts, and event logging in a single shipped release.",
      "Reduced critical UI friction points through iterative testing before client delivery.",
    ],
  },
];

export interface Education {
  qualification: string;
  degree?: string;
  institution: string;
  duration: string;
  mode: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    qualification: "BCA Graduate",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "RNS Institute of Technology, Bengaluru",
    duration: "2022 – 2025",
    mode: "Full-time",
    highlights: [
      "CGPA: 7.64/10 | Coursework: Data Structures, DBMS, Software Engineering, Python, AI/ML Fundamentals, Computer Networks, OOP, Web Development",
      "Built foundations in system design and REST APIs that support cross-functional PM-engineering collaboration",
      "Shipped an applied AI project (Vigilant Eye 2.0) during internship alongside coursework",
    ],
  },
  {
    qualification: "AI Product Management Launchpad",
    institution: "Airtribe PM Fellowship",
    duration: "2026",
    mode: "Remote",
    highlights: [
      "Completed an intensive AI Product Management program covering product discovery, user research, and strategy",
      "Covered user research, AARRR analysis, RICE prioritization, OKRs, PRD writing, and GTM strategy",
      "Completed a Tech 101 & System Design module covering REST APIs, databases, and scalable architecture basics",
    ],
  },
];

export interface SubProject {
  title: string;
  description: string;
  link?: string;
  image?: string;
  pdfLink?: string;
}

export interface Project {
  title: string;
  type: string;
  duration: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
  image?: string;
  isFeatured?: boolean;
  subProjects?: SubProject[];
  kpis?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    title: "TM Café — Product Strategy & Growth Capstone",
    type: "End-to-End PM Case Study",
    duration: "2026",
    description:
      "Led end-to-end product discovery and strategy for TM Café, an emotional support feature within TrulyMadly's 12M+ user base. Conducted user interviews, Play Store review analysis, firsthand app testing, and competitor benchmarking to identify trust, discovery, and conversion barriers.",
    outcomes: [
      "Applied RICE prioritization across 15 solution ideas and selected 2 high-impact features targeting 15% paying MAU",
      "Modeled ₹78 Cr annual revenue potential with a defined path to ₹100 Cr scale via freemium trial and AI concierge routing",
      'Built a 7-screen interactive prototype with moment-based emotional triggers, gamification loops, and a "2 minutes free" trust-first conversion model',
      "Defined North Star Metric, GTM strategy, and KPIs including D14 retention, wallet recharge frequency, and expert quality scores",
    ],
    technologies: [
      "RICE Prioritization",
      "User Research",
      "Figma Prototyping",
      "Monetization Modeling",
      "GTM Strategy",
      "OKRs & KPIs",
      "AI Automation",
    ],
    links: [
      { label: "View Case Study", url: "https://tmcafe.lovable.app/" },
      { label: "View Prototype", url: "https://trulymadly.lovable.app/" },
      {
        label: "View Product Strategy",
        url: "/pdfs/tm-cafe-capstone.pdf",
      },
      {
        label: "View Capstone Presentation",
        url: "/pdfs/tm-cafe-presentation.pdf",
      },
    ],
    image: "/images/trulymadly.png",
    isFeatured: true,
    kpis: [
      { label: "Revenue Model", value: "₹78 Cr" },
      { label: "User Opportunity", value: "12M+" },
      { label: "AI Concierge", value: "Routing" },
      { label: "GTM Strategy", value: "Defined" },
      { label: "RICE Prioritization", value: "Applied" },
      { label: "North Star Metric", value: "Set" },
    ],
  },
  {
    title: "PM Fellowship — Product Case Studies",
    type: "Evaluated PM Projects",
    duration: "2026",
    description:
      "Completed multiple product case studies across quick commerce, social media, e-commerce, food delivery, and health-tech as part of the Airtribe PM Fellowship.",
    outcomes: [],
    technologies: [
      "RICE Framework",
      "AARRR Analysis",
      "JTBD",
      "PRD Writing",
      "User Research",
      "Gamification",
    ],
    subProjects: [
      {
        title: "Plan-A-Plate (MealNest)",
        description:
          'Addressed high cognitive friction and low adherence among urban professionals by mapping core user journeys and designing a personalized onboarding flow. Designed a "Pantry Match" feature concept that uses existing ingredients to reduce food waste and auto-generate shopping lists.',
        link: "https://plan-a-plate-16.lovable.app/",
        image: "/images/mealnest.png",
        pdfLink: "/pdfs/meal-planning.pdf",
      },
      {
        title: "Zomato — Transparency Architecture",
        description:
          'Addressed order batching complaints and misleading ETAs by designing a dynamic "Queue Position & Delay Explanation" engine — shifting from rigid timelines to honest, real-time context, aimed at rebuilding user trust without disrupting backend operations.',
        link: "https://zomatocasestudy.lovable.app",
        image: "/images/zomato.jpeg",
        pdfLink: "/pdfs/zomato-case-study.pdf",
      },
      {
        title: "Meesho — Scaling ARPU",
        description:
          "Used survey data to identify product quality mismatches as a key driver of early churn. Applied the RICE framework to prioritize a 'Verified Quality' badge and a user-generated media concept aimed at improving repeat purchase behavior.",
        image: "/images/meesho.png",
        pdfLink: "/pdfs/meesho-case-study.pdf",
      },
      {
        title: "Uber Reserve — Bridging the Trust Gap",
        description:
          'Applied the JTBD (Jobs-To-Be-Done) framework to analyze low adoption among Tier-1 urban professionals. Designed a "Flight-Sync & Reliability Guarantee" concept aimed at turning the feature from a calendar utility into a higher-trust assurance experience.',
        image: "/images/uberreserve.jpeg",
      },
      {
        title: "VitaFit — Vita Engage Plus",
        description:
          "Authored a Product Requirements Document (PRD) aimed at improving Weekly Active Users (WAU) and 30-day retention. Designed 'Vita Engage Plus' — a point-based gamification concept (XP, streaks, badges) with community challenges for long-term engagement.",
        link: "https://vitafit.lovable.app",
        image: "/images/vitafit.png",
        pdfLink: "/pdfs/vitafit-case-study.pdf",
      },
      {
        title: "Twitter/X — AARRR Funnel Growth",
        description:
          "Mapped the end-to-end user acquisition funnel to identify activation and retention drop-off points, particularly around unwanted sensitive media exposure. Proposed an advanced content control concept and a personalized onboarding flow to improve engagement.",
        image: "/images/twitter.png",
        pdfLink: "/pdfs/twitter-aarrr.pdf",
      },
    ],
  },
  {
    title: "Vigilant Eye 2.0 — AI Surveillance System",
    type: "Production Engineering Project",
    duration: "2025",
    description:
      "Scoped, built, and shipped an AI-powered real-time surveillance system from requirements to production, working across both engineering and product decisions.",
    outcomes: [
      "Delivered face & animal detection, live camera monitoring, automated alerts, and event logging in a single shipped release",
      "Defined product requirements and iterated on UI through multiple testing cycles to improve usability",
      "Implemented database connectivity with MySQL for reliable event storage and retrieval",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "MySQL",
      "Tkinter",
      "AI/ML",
      "Product Requirements",
    ],
  },
];

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Core PM Skills",
    skills: [
      { name: "Product Strategy & Discovery", level: 85 },
      { name: "User Research & Interviews", level: 82 },
      { name: "RICE Prioritization", level: 85 },
      { name: "PRD Writing & Roadmapping", level: 80 },
    ],
  },
  {
    name: "Analytics & Growth",
    skills: [
      { name: "AARRR Funnel Analysis", level: 82 },
      { name: "OKRs & KPI Definition", level: 80 },
      { name: "A/B Testing", level: 70 },
      { name: "Monetization Modeling", level: 78 },
    ],
  },
  {
    name: "PM Tools",
    skills: [
      { name: "Figma & Wireframing", level: 75 },
      { name: "Notion & Confluence", level: 80 },
      { name: "Jira & Agile/Scrum", level: 72 },
      { name: "Miro & Whiteboarding", level: 72 },
    ],
  },
  {
    name: "Technical Skills",
    skills: [
      { name: "Python & AI/ML", level: 80 },
      { name: "System Design & REST APIs", level: 70 },
      { name: "SQL & Databases", level: 68 },
      { name: "LLM Integration", level: 65 },
    ],
  },
  {
    name: "GTM & Strategy",
    skills: [
      { name: "GTM Planning", level: 78 },
      { name: "Competitive Analysis", level: 82 },
      { name: "Stakeholder Management", level: 75 },
      { name: "User Journey Mapping", level: 80 },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Cross-functional Collaboration", level: 82 },
      { name: "Data-driven Decision Making", level: 80 },
      { name: "Written & Verbal Communication", level: 80 },
      { name: "Problem Framing", level: 80 },
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  image?: string;
  pdfLink?: string;
}

export const certifications: Certification[] = [
  {
    title: "AI Product Management Launchpad",
    issuer: "Airtribe",
    image: "/certificates/ai-pm.png",
  },
  {
    title: "Build Powerful AI Agents Using Claude",
    issuer: "Anthropic",
    image: "/certificates/claude-agents.jpg",
  },
  {
    title: "Claude for Builders",
    issuer: "Anthropic",
    image: "/certificates/claude-builders.jpg",
  },
  {
    title: "Building Functional Prototypes Using Lovable",
    issuer: "Lovable",
    image: "/certificates/lovable.jpg",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan (Coursera)",
    image: "/certificates/python-everybody.jpeg",
    pdfLink: "/certificates/python-everybody.jpeg",
  },
  {
    title: "ASP.NET Development",
    issuer: "Microsoft",
    pdfLink: "/certificates/aspnet.pdf",
  },
];

export interface Achievement {
  category: "Professional" | "Academic" | "Leadership";
  year?: string;
  title: string;
  institution?: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    category: "Professional",
    year: "2026",
    title: "Airtribe PM Fellow",
    institution: "Airtribe AI PM Launchpad",
    description:
      "Completed an intensive AI Product Management program — building end-to-end product case studies across consumer tech, food delivery, and health-tech domains.",
  },
  {
    category: "Professional",
    year: "2026",
    title: "TM Café Capstone — ₹78 Cr Revenue Model",
    institution: "TrulyMadly Product Strategy",
    description:
      "Delivered a full end-to-end product strategy including user research, monetization modeling, AI automation design, an interactive prototype, and a GTM plan.",
  },
  {
    category: "Academic",
    year: "2025",
    title: "BCA Graduate",
    institution: "RNS Institute of Technology",
    description:
      "Completed degree with CGPA 7.64/10, building technical foundations directly applicable to PM-engineering collaboration.",
  },
  {
    category: "Professional",
    year: "2025",
    title: "Vigilant Eye 2.0 — Production AI System",
    institution: "Loginware Softtec",
    description:
      "Scoped, built, and shipped a production-ready AI surveillance system, combining product thinking with engineering execution.",
  },
  {
    category: "Leadership",
    title: "Rajyapuraskar Scout Award",
    institution: "Governor of Karnataka",
    description:
      "Highest honour in Bharat Scouts & Guides, presented by the Governor of Karnataka, recognizing leadership, discipline, and community service.",
  },
  {
    category: "Leadership",
    title: "National Service Scheme (NSS)",
    description:
      "Led community education and sanitation drives during a 7-day rural outreach camp in Kanakapura, Karnataka.",
  },
];

export const achievementStats = [
  { value: 6, label: "Certifications" },
  { value: 9, suffix: "+", label: "Projects" },
  { value: 4, label: "Awards" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;
