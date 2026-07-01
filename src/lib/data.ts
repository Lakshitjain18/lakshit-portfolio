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
  linkedin: "https://www.linkedin.com/in/lakshit-jain",
  resumeUrl: "/Lakshit_Jain_Resume.pdf",
  tagline: "Building products with empathy, data, and velocity.",
} as const;

export const heroIntro =
  "Results-driven aspiring Product Manager with hands-on AI/ML engineering experience and certified PM training across product discovery, user research, agile execution, roadmapping, and data-driven decision-making. I've worked across 12M+ user products, built revenue models targeting ₹78 Cr ARR, and completed the Airtribe AI PM Fellowship — building 6+ in-depth case studies spanning quick commerce, social media, e-commerce, food delivery, and health-tech. I bridge the gap between technical depth and product strategy — turning fuzzy user problems into crisp, shippable solutions. Currently seeking APM, Product Intern, or Product Analyst roles at high-growth startups and global tech companies. Let's build something meaningful together.";

export const heroKPIs = [
  { value: 12, suffix: "M+", label: "User Products" },
  { value: 78, prefix: "₹", suffix: " Cr", label: "ARR Modeled" },
  { value: 6, suffix: "+", label: "Case Studies" },
  { value: 9, suffix: "+", label: "Projects Shipped" },
] as const;

export const aboutMe = {
  paragraph:
    "I'm a BCA graduate from RNS Institute of Technology, Bengaluru, with a rare combination of hands-on AI/ML engineering and rigorous PM training. Through the Airtribe AI PM Launchpad, I completed multiple in-depth case studies and developed depth in product discovery, AARRR funnel analysis, OKR frameworks, and go-to-market strategy. My capstone project on TM Café for TrulyMadly involved end-to-end product work across a 12M+ user base, resulting in a monetization model targeting ₹78 Cr annual revenue. I'm proficient in Figma, Notion, Jira, SQL, Python, and system design — enough to speak engineering fluently. I thrive at the intersection of data, empathy, and execution.",
  mission:
    "Ship products that create genuine emotional and practical value for users — built on deep empathy and rigorous data.",
  vision:
    "Build frameworks and products at high-growth companies that redefine how people connect, decide, and grow.",
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
      "Analyzed patterns across recurring client escalations to identify systemic product and workflow gaps, surfacing insights that informed engineering priorities.",
      "Created structured documentation of root causes and resolution paths, enabling engineering teams to address upstream issues and reduce repeat incidents.",
      "Collaborated cross-functionally with product and engineering stakeholders to translate ambiguous user-reported issues into clearly scoped problem statements.",
      "Drove process improvements by mapping end-to-end issue resolution workflows and identifying bottlenecks that impacted user experience and SLA adherence.",
    ],
    keyTakeaways: [
      "Developed a product-oriented lens for diagnosing user pain points — learning to look beyond surface symptoms to find systemic root causes.",
      "Built strong cross-functional communication skills, bridging the gap between business stakeholders and engineering teams through structured problem framing.",
      "Gained hands-on experience in prioritization, stakeholder alignment, and driving measurable process outcomes in a fast-paced enterprise environment.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Loginware Softtec Pvt. Ltd.",
    type: "Internship",
    location: "Bengaluru, India",
    duration: "Jan 2025 – Mar 2025",
    responsibilities: [
      "Scoped, built, and shipped Vigilant Eye 2.0 — an AI-powered real-time surveillance system using YOLOv8, Python, Tkinter, and MySQL.",
      "Defined product requirements and feature scope for an Inventory Management System covering product management, inventory tracking, and user authentication.",
      "Integrated AI/ML models into desktop applications and implemented REST-style database connectivity.",
      "Applied agile debugging cycles and collaborated on UI iteration to ship production-ready features.",
    ],
    achievements: [
      "Delivered face & animal detection, live camera monitoring, automated alerts, and event logging in a single cohesive product release.",
      "Improved usability through iterative UI testing, reducing user error rate during internal QA cycles.",
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
      "CGPA: 7.64/10 | Coursework: Databases, Software Engineering, Data Structures, AI Fundamentals",
      "Built strong foundations in system design, REST APIs, and microservices for cross-functional PM-engineering collaboration",
      "Shipped multiple applied AI projects including an AI-powered surveillance system during internship",
    ],
  },
  {
    qualification: "AI Product Management Launchpad",
    institution: "Airtribe PM Fellowship",
    duration: "2026",
    mode: "Remote",
    highlights: [
      "Intensive fellowship covering end-to-end product management across discovery, strategy, execution, and growth",
      "Covered user research, AARRR analysis, RICE prioritization, OKRs, PRD writing, and GTM strategy",
      "Completed Tech 101 & System Design module with working knowledge of REST APIs, databases, and scalable architecture",
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
      "Led end-to-end product discovery and strategy for TM Café, an emotional support marketplace within TrulyMadly's 12M+ user base. Conducted user interviews, Play Store review analysis, app testing, and competitor benchmarking to identify trust, discovery, and conversion barriers.",
    outcomes: [
      "Applied RICE prioritization to rank solutions and defined a scalable monetization strategy targeting 15% paying MAU",
      'Modeled ₹78 Cr annual revenue with a defined path to ₹100 Cr scale via freemium trial and AI concierge routing',
      'Built interactive prototype with moment-based emotional triggers, gamification loops, and "2 minutes free" trust-first conversion model',
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
    title: "PM Fellowship — 6 Product Case Studies",
    type: "Evaluated PM Projects",
    duration: "2026",
    description:
      "Completed rigorous product case studies across quick commerce, social media, e-commerce, food delivery, and health-tech. Every project was evaluated and scored, achieving top rank in cohort of 50+.",
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
          'Solved high cognitive friction and low adherence among urban professionals by mapping core user journeys and designing a personalized 5-step onboarding wizard. Engineered a "Pantry Match" tool that leverages existing ingredients to reduce food waste and instantly generate automated shopping lists.',
        link: "https://plan-a-plate-16.lovable.app/",
        image: "/images/mealnest.png",
        pdfLink: "/pdfs/meal-planning.pdf",
      },
      {
        title: "Zomato — Transparency Architecture",
        description:
          'Addressed order batching complaints and misleading ETAs by shifting from rigid timelines to a dynamic "Queue Position & Delay Explanation" engine. This transparency architecture successfully managed user expectations and recovered trust without breaking non-negotiable back-end operational efficiency constraints.',
        link: "https://zomatocasestudy.lovable.app",
        image: "/images/zomato.jpeg",
        pdfLink: "/pdfs/zomato-case-study.pdf",
      },
      {
        title: "Meesho — Scaling ARPU",
        description:
          'Synthesized survey data to discover that 83.3% of users faced product quality mismatches, driving a massive 61.5% churn rate due to early trust deficits. Applied the RICE framework (scoring 81) to engineer a high-signal "Verified Quality" badge and an authentic user-generated media ecosystem designed to accelerate repeat purchase loops.',
        image: "/images/meesho.png",
        pdfLink: "/pdfs/meesho-case-study.pdf",
      },
      {
        title: "Uber Reserve — Bridging the Trust Gap",
        description:
          'Applied First-Principles thinking and the JTBD (Jobs-To-Be-Done) framework to analyze low adoption among Tier-1 urban professionals. Designed a "Flight-Sync & Airtight Guarantee" operational contract that transformed the feature from a basic calendar utility into a high-reliability assurance engine.',
        image: "/images/uberreserve.jpeg",
      },
      {
        title: "VitaFit — Gamification & Social Accountability",
        description:
          'Authored a comprehensive Product Requirements Document (PRD) to directly reverse declining Weekly Active Users (WAU) and 30-day retention curves. Devised the "Vita Engage +" ecosystem, integrating point-based gamification loops (XP, streaks, badges) and community squad challenges for long-term social accountability.',
        link: "https://vitafit.lovable.app",
        image: "/images/vitafit.png",
        pdfLink: "/pdfs/vitafit-case-study.pdf",
      },
      {
        title: "Twitter/X — AARRR Funnel Growth",
        description:
          'Mapped the end-to-end user acquisition funnel to identify core retention bottlenecks, particularly surrounding unwanted sensitive media exposure. Proposed and prioritized an "Advanced Content Control System" and a personalized onboarding flow to drive deeper D30 platform engagement.',
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
      "Scoped, built, and shipped a full AI-powered real-time surveillance system from requirements to production, acting as both engineer and de facto PM.",
    outcomes: [
      "Delivered face & animal detection, live camera monitoring, automated alerts, and event logging in a single release",
      "Defined product requirements and iterated on UI through multiple testing cycles to improve usability",
      "Implemented REST-style database connectivity with MySQL for reliable event storage and retrieval",
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
      { name: "Product Strategy & Discovery", level: 92 },
      { name: "User Research & Interviews", level: 88 },
      { name: "RICE Prioritization", level: 90 },
      { name: "PRD Writing & Roadmapping", level: 85 },
    ],
  },
  {
    name: "Analytics & Growth",
    skills: [
      { name: "AARRR Funnel Analysis", level: 90 },
      { name: "OKRs & KPI Definition", level: 88 },
      { name: "A/B Testing", level: 80 },
      { name: "Monetization Modeling", level: 85 },
    ],
  },
  {
    name: "PM Tools",
    skills: [
      { name: "Figma & Wireframing", level: 82 },
      { name: "Notion & Confluence", level: 88 },
      { name: "Jira & Agile/Scrum", level: 80 },
      { name: "Miro & Whiteboarding", level: 78 },
    ],
  },
  {
    name: "Technical Skills",
    skills: [
      { name: "Python & AI/ML", level: 85 },
      { name: "System Design & REST APIs", level: 78 },
      { name: "SQL & Databases", level: 75 },
      { name: "LLMs & RAG Architecture", level: 72 },
    ],
  },
  {
    name: "GTM & Strategy",
    skills: [
      { name: "GTM Planning", level: 85 },
      { name: "Competitive Analysis", level: 88 },
      { name: "Stakeholder Management", level: 80 },
      { name: "User Journey Mapping", level: 87 },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Cross-functional Collaboration", level: 90 },
      { name: "Data-driven Decision Making", level: 88 },
      { name: "Written & Verbal Communication", level: 85 },
      { name: "Problem Framing", level: 87 },
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
    title: "Top-Ranked PM Fellow",
    institution: "Airtribe AI PM Launchpad",
    description:
      "Completed 6+ evaluated case studies spanning quick commerce, social media, e-commerce, food delivery, and health-tech — building depth in user research, RICE prioritization, PRDs, and GTM strategy.",
  },
  {
    category: "Professional",
    year: "2026",
    title: "TM Café Capstone — ₹78 Cr Revenue Model",
    institution: "TrulyMadly Product Strategy",
    description:
      "Delivered full end-to-end product strategy including user research, monetization modeling, AI automation design, interactive prototype, and GTM plan.",
  },
  {
    category: "Academic",
    year: "2025",
    title: "BCA Graduate",
    institution: "RNS Institute of Technology",
    description:
      "Completed degree with CGPA 7.64/10 building technical foundations directly applicable to PM-engineering collaboration.",
  },
  {
    category: "Professional",
    year: "2025",
    title: "Vigilant Eye 2.0 — Production AI System",
    institution: "Loginware Softtec",
    description:
      "Independently scoped, built, and shipped a production-ready AI surveillance system combining PM thinking with engineering execution.",
  },
  {
    category: "Leadership",
    title: "Rajyapuraskar Scout Award",
    institution: "Governor of Karnataka",
    description:
      "State-level recognition for leadership, teamwork, discipline, and community service.",
  },
  {
    category: "Leadership",
    title: "National Service Scheme (NSS)",
    description:
      "Active participation in community service and social impact initiatives.",
  },
];

export const achievementStats = [
  { value: 6, label: "Certifications" },
  { value: 9, suffix: "+", label: "Projects" },
  { value: 4, label: "Awards" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;
