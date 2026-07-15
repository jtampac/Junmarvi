/** "/Junmarvi" when building for GitHub Pages, "" otherwise — prefix for raw /public asset URLs (next/link handles it automatically). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  /** Brand mark. */
  brand: "Junmarvi",
  /** Full name of the person behind the practice. */
  person: "Junmarvi Tampac",
  tagline: "Systems, Operations, Data, Security, and Digital Solutions",
  /** Primary professional positioning — deliberately grounded. */
  role: "Systems and Operations Solutions Developer",
  supporting:
    "I design and develop practical digital systems based on real operational requirements.",
  title:
    "Junmarvi — Systems, Operations, Data, Security, and Digital Solutions",
  description:
    "Junmarvi is the independent systems practice of Junmarvi Tampac, a Systems and Operations Solutions Developer. Practical digital systems for operations, reporting, data, security, and workflow improvement — built on hands-on material-control and operations experience.",
  // Injected by next.config.mjs: NEXT_PUBLIC_SITE_URL > Pages URL > Vercel fallback.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://junmarvi.vercel.app",
  location: "United Arab Emirates",
  email: "jtampac@proton.me",
  emailAlt: "jtampac@yahoo.com",
  // Kept out of the public repo — set NEXT_PUBLIC_CONTACT_PHONE in .env.local (inlined at build time).
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  github: "https://github.com/jtampac",
  linkedin: "https://www.linkedin.com/in/junmarvitampac",
  availability:
    "Open to discussing operations systems, data and reporting, workflow automation, security and governance tooling, business websites, and internal tools.",
};

/** Optional supporting descriptors — never stack more than two beside the name. */
export const descriptors = [
  "Operations Systems",
  "Data & Reporting",
  "Workflow Automation",
  "Security & Governance",
  "Digital Solutions",
];

/**
 * Homepage capability areas. These describe the kind of work the practice does —
 * not a claim that each is already a commercial product at enterprise scale.
 */
export const capabilities: { title: string; blurb: string; items: string[] }[] = [
  {
    title: "Operations Systems",
    blurb:
      "Tools for inventory, procurement, assets, manpower, project monitoring, reconciliation, and operational reporting.",
    items: ["Inventory", "Procurement", "Assets", "Manpower", "Reconciliation", "Reporting"],
  },
  {
    title: "Data & Reporting",
    blurb:
      "Structured data, databases, dashboards, reconciliation tools, refreshable reports, and decision-support information.",
    items: ["Databases", "Dashboards", "Refreshable reports", "Reconciliation", "Decision support"],
  },
  {
    title: "Security & Governance",
    blurb:
      "Practical controls for repository scanning, documentation, access management, system standards, audit trails, and development governance.",
    items: ["Repo scanning", "Standards", "Access controls", "Audit trails", "Governance"],
  },
  {
    title: "Digital Solutions",
    blurb:
      "Business websites, internal tools, workflow automation, system prototypes, integrations, and customized applications.",
    items: ["Websites", "Internal tools", "Automation", "Prototypes", "Integrations"],
  },
];

/** Approach — problem first, technology second. */
export const approach = {
  lead:
    "I begin with the actual operational problem before selecting the technology. Solutions are designed around the organization's existing workflow, available resources, data, priorities, and users.",
  principle:
    "Not every problem requires a large or complicated system. The objective is to build something practical, understandable, maintainable, and useful to the people doing the work.",
};

/**
 * Practice signals shown in the header rail — the practice's working domains and
 * principles, stated as capabilities, not as live production telemetry.
 */
export const signals = [
  "Operations Systems",
  "Data & Reporting",
  "Security & Governance",
  "Digital Solutions",
  "Inventory & Material Control",
  "Workflow Automation",
  "Local-first & Controlled Data",
  "AI-assisted Development",
] as const;

/**
 * Tools and technologies used in current work. Framed as what is worked with —
 * not a claim of mastery in every item.
 */
export const stack: { group: string; blurb: string; items: string[] }[] = [
  {
    group: "Application development",
    blurb: "Web applications and internal tools for operations work.",
    items: ["PHP", "Laravel", "Next.js", "React", "TypeScript", "JavaScript"],
  },
  {
    group: "Data & reporting",
    blurb: "Structured data, reconciliation, and refreshable reports.",
    items: ["PostgreSQL", "SQL", "Excel", "Power Query"],
  },
  {
    group: "Delivery & governance",
    blurb: "Version control, containers where appropriate, and documented standards.",
    items: ["Git", "GitHub", "Docker", "Documented standards"],
  },
  {
    group: "AI-assisted workflows",
    blurb: "AI supports the development process; it is not the product claim.",
    items: ["AI-assisted coding", "Documentation workflows", "Review discipline"],
  },
];

/** Current areas of focus — grounded, defensible descriptions of active work. */
export const currentFocus = [
  "Operations systems",
  "Data & reporting",
  "Workflow automation",
  "Security & governance",
  "Business applications",
];
