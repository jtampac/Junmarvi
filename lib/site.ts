/** "/Junmarvi" when building for GitHub Pages, "" otherwise — prefix for raw /public asset URLs (next/link handles it automatically). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Junmarvi Tampac",
  title: "Junmarvi Tampac — Enterprise Solutions Architect & AI-Directed Engineer",
  description:
    "Enterprise Solutions Architect, AI-Directed Software Engineer, and ERP & Operations Intelligence Specialist. A decade inside EPC and construction operations, now building the AI-powered platforms that solve those exact problems.",
  url: "https://jtampac.github.io/Junmarvi",
  location: "Dubai, United Arab Emirates",
  email: "jtampac@proton.me",
  emailAlt: "jtampac@yahoo.com",
  // Kept out of the public repo — set NEXT_PUBLIC_CONTACT_PHONE in .env.local (inlined at build time).
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  github: "https://github.com/jtampac",
  linkedin: "https://www.linkedin.com/in/junmarvitampac",
  availability:
    "Open to enterprise systems consulting, operations-intelligence builds, and AI platform engagements across the GCC.",
};

export const roles = [
  "Enterprise Solutions Architect",
  "AI-Directed Software Engineer",
  "ERP & Operations Intelligence Specialist",
];

/** Live-feel operations telemetry shown in the signature status rail. */
export const telemetry = [
  { label: "RECONCILIATION ENGINE", value: "ONLINE", state: "online" },
  { label: "3-WAY MATCH", value: "PO · GRN · INVOICE", state: "online" },
  { label: "MTO → PO → GRN → ISSUE", value: "TRACED", state: "online" },
  { label: "WEEKLY AUDIT", value: "PASSED", state: "online" },
  { label: "WAREHOUSE KPI FEED", value: "STREAMING", state: "online" },
  { label: "SENTINEL OS", value: "GUARDRAILS ACTIVE", state: "online" },
  { label: "ANOMALY WATCH", value: "1 FLAG UNDER REVIEW", state: "alert" },
  { label: "CONTROL TOWER", value: "ALL PROJECTS VISIBLE", state: "online" },
] as const;

export const stack: { group: string; blurb: string; items: string[] }[] = [
  {
    group: "Application platforms",
    blurb: "Production web platforms built for operations teams, not demos.",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Laravel", "PHP"],
  },
  {
    group: "Data & intelligence",
    blurb: "Single sources of truth, reconciliation, and executive reporting.",
    items: ["PostgreSQL", "SQL Server", "Supabase", "Power BI", "Power Query", "ePROMIS ERP", "JD Edwards"],
  },
  {
    group: "AI engineering",
    blurb: "AI-directed development with governance, standards, and audit trails.",
    items: ["Claude Code", "OpenAI", "AI Agents", "Knowledge Systems"],
  },
  {
    group: "Delivery & security",
    blurb: "Shipping, versioning, and protecting enterprise workloads.",
    items: ["Docker", "GitHub", "Security Engineering", "IIS / Windows Server"],
  },
];

export const currentFocus = [
  "Enterprise AI",
  "Operational Intelligence",
  "Security Operations",
  "Automation",
  "Knowledge Systems",
  "Large Language Models",
];
