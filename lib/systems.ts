export type SystemStatus =
  | "Active Development"
  | "Working Prototype"
  | "Internal Tool"
  | "Research & Development"
  | "Operational Concept"
  | "Private Workspace"
  | "Independently Developed";

export type System = {
  slug: string;
  code: string; // nameplate code
  name: string;
  domain: string;
  status: SystemStatus;
  /** True when this is an independent / personal project, not a deployed company product. */
  independent: boolean;
  summary: string;
  problem: string;
  /** Intended users. */
  users: string;
  /** Key capabilities. */
  capabilities: string[];
  technologies: string[];
  /** What is currently working. */
  working: string[];
  /** What remains under development. */
  roadmap: string[];
  /** Honest context / lessons. */
  note?: string;
  schematic: "flow" | "grid" | "shield" | "ledger" | "pulse" | "stack" | "gears";
};

/** Badge tone per status — kept neutral, never implying live production. */
export const statusTone: Record<SystemStatus, "dev" | "proto" | "concept" | "neutral"> = {
  "Active Development": "dev",
  "Working Prototype": "proto",
  "Internal Tool": "neutral",
  "Research & Development": "concept",
  "Operational Concept": "concept",
  "Private Workspace": "neutral",
  "Independently Developed": "neutral",
};

export const systems: System[] = [
  {
    slug: "junmarvi-systems-workspace",
    code: "WS-00",
    name: "Junmarvi Systems Workspace",
    domain: "Development & Governance Foundation",
    status: "Private Workspace",
    independent: true,
    summary:
      "A structured development and governance workspace used to organize multiple systems, shared standards, security controls, documentation, reusable components, and development workflows. The Workspace is the foundation; individual applications are solutions built on top of it.",
    problem:
      "Building several independent systems at once creates drift: inconsistent structure, scattered documentation, and security decisions made ad hoc. Without a shared foundation, every new project reinvents conventions and quietly accumulates risk.",
    users:
      "Myself as the developer — and any future collaborator who needs a consistent, documented starting point.",
    capabilities: [
      "Shared engineering conventions and documentation standards that new projects inherit.",
      "A single source of truth for standards, referenced by AI-assisted development workflows so context stays consistent between machines and sessions.",
      "Security and data-boundary rules that define where secrets live and what tooling may touch.",
      "Reusable components and patterns carried across the systems built on top of the Workspace.",
    ],
    technologies: ["Git", "GitHub", "Markdown standards", "Documentation workflows"],
    working: [
      "Documented engineering and security standards in active use across current projects.",
      "A consistent project structure and workflow reused when starting new systems.",
    ],
    roadmap: [
      "Broader library of reusable components and templates.",
      "Tighter, more automated checks that a project follows the documented standards.",
    ],
    note:
      "This is an internal foundation, not a commercial platform. It exists to keep independent work organized, consistent, and defensible.",
    schematic: "stack",
  },
  {
    slug: "materials-control-tower",
    code: "SYS-01",
    name: "Materials Control Tower",
    domain: "Operations Intelligence & Reporting",
    status: "Active Development",
    independent: true,
    summary:
      "An independently developed operations intelligence and reporting system, developed from real operational reporting and control requirements in EPC and construction operations.",
    problem:
      "On large EPC projects, material and operational data lives in fragments — take-offs, purchase orders, receipts, and site issues sit in separate places. Reconciling them by hand is slow, and discrepancies usually surface late. The intent of this system is to bring that information into one organized, reportable view.",
    users:
      "Material controllers, procurement coordinators, and operations staff who need a clearer view of commitments, receipts, and open items.",
    capabilities: [
      "Structured views across inventory, procurement, assets, manpower, and project monitoring.",
      "Data reconciliation logic that compares committed, received, and issued quantities.",
      "Operational reporting designed for a quick read of exceptions and open exposure.",
      "Report structures based on real material-control practice rather than a generic template.",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Next.js", "Power Query"],
    working: [
      "Core data model and reconciliation logic for the material-control workflow.",
      "Reporting views built from real operational reporting requirements.",
    ],
    roadmap: [
      "Broader coverage across assets and manpower modules.",
      "More automated data ingestion and validation.",
      "Hardening and testing before any organizational rollout.",
    ],
    note:
      "This is an independent project developed from practical requirements. It is not presented as an officially deployed, company-wide system.",
    schematic: "flow",
  },
  {
    slug: "sentinel-os",
    code: "SYS-02",
    name: "Sentinel OS",
    domain: "Security Operations & Repository Assessment",
    status: "Active Development",
    independent: true,
    summary:
      "An independently developed security operations and repository assessment system focused on practical source-code scanning, secrets detection, configuration checks, governance, controlled scan modes, and centralized findings.",
    problem:
      "AI-assisted development moves quickly, and it is easy for secrets, weak configuration, or ungoverned changes to slip into a repository. I wanted a practical, controlled way to scan my own repositories and keep findings in one place — with clear operator control over what a scan is allowed to do.",
    users:
      "Myself as the operator, scanning my own repositories; the design is intended to generalize to small teams that want repository-level checks.",
    capabilities: [
      "Repository scanning with secrets detection and basic static analysis.",
      "Configuration and dependency checks.",
      "Controlled scan modes — SAFE, VALIDATE, and ACTIVE — with explicit scan authorization.",
      "Scan history and a centralized findings dashboard.",
      "Local operator controls, with GitHub workflow integration as a design goal.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "GitHub workflows"],
    working: [
      "Repository scanning, secrets detection, and a findings view in a working prototype state.",
      "Scan-mode structure (SAFE / VALIDATE / ACTIVE) and scan authorization.",
    ],
    roadmap: [
      "Deeper static analysis and dependency checks.",
      "More complete scan history and reporting.",
      "GitHub workflow integration beyond local operation.",
    ],
    note:
      "Sentinel OS is a practical, independently developed security tool — not a commercial SOC platform. Completed, prototype, and planned capabilities are distinguished above.",
    schematic: "shield",
  },
  {
    slug: "education-intelligence",
    code: "SYS-03",
    name: "Education Intelligence (SEIP)",
    domain: "Privacy-conscious Education Tooling",
    status: "Operational Concept",
    independent: true,
    summary:
      "A privacy-conscious, teacher-controlled education system concept — designed around teacher ownership, local-first workflows, deterministic processing before any AI, and controlled review of student information.",
    problem:
      "Education tools often move student data into systems teachers do not control, with AI applied to raw records. The intent here is the opposite: keep the teacher in control, process deterministically first, and treat student privacy as a design constraint rather than an afterthought.",
    users:
      "Teachers who need to manage records and reporting while retaining ownership of their students' data.",
    capabilities: [
      "Teacher ownership of data and workflow, with local-first processing.",
      "Deterministic processing before any AI step.",
      "Optional AI assistance, applied only after masking and with teacher approval.",
      "Masking and controlled review of student information.",
    ],
    technologies: ["Next.js", "TypeScript", "Local-first data"],
    working: [
      "The concept, data-handling principles, and workflow design.",
      "Early prototyping of deterministic processing and masking.",
    ],
    roadmap: [
      "A working teacher-facing prototype.",
      "Optional, masked AI assistance behind explicit approval.",
    ],
    note:
      "This is an ongoing concept and prototype. It is not deployed at any school, district, or national level.",
    schematic: "grid",
  },
  {
    slug: "operations-reporting-toolkit",
    code: "TL-04",
    name: "Operations Reporting Toolkit",
    domain: "Reporting · Reconciliation · Warehouse Data",
    status: "Internal Tool",
    independent: true,
    summary:
      "A set of practical Excel, Power Query, and SQL tools built for my own operational work — refreshable reports, warehouse and inventory measures, and procurement reconciliation with documented matching rules.",
    problem:
      "Operational data usually arrives too aggregated to act on, and the gap between what a system records and what the work needs is bridged by hand — export, paste, lookup, repeat. These tools were built to replace that manual assembly in my own day-to-day reporting and reconciliation work.",
    users:
      "Operations, warehouse, and procurement staff who need refreshable numbers and exception lists instead of manually rebuilt spreadsheets.",
    capabilities: [
      "Refreshable reports and trend views driven directly from operational data sources.",
      "Warehouse measures — receiving, stock accuracy, and issue turnaround — from transaction data.",
      "Procurement matching with tolerance rules drawn from real practice, output as exception lists with context.",
      "Period-over-period comparison without rebuilding spreadsheets.",
    ],
    technologies: ["Excel", "Power Query", "SQL"],
    working: [
      "Refreshable reporting, warehouse measures, and reconciliation logic used in real operational work.",
      "Exception views for aging receipts, count variances, and matching mismatches.",
    ],
    roadmap: [
      "Migration of selected reports and matching logic into the Materials Control Tower.",
      "Wider automation of data refresh.",
    ],
    note:
      "These are working internal tools, not products. They exist because my own workload demanded them — which is also why they work.",
    schematic: "gears",
  },
  {
    slug: "claire-motorparts",
    code: "APP-05",
    name: "Claire Motorparts",
    domain: "Trading & Inventory",
    status: "Working Prototype",
    independent: true,
    summary:
      "An inventory and sales prototype for a motorparts trading business — stock truth, movement history, and margin visibility for a business that ran on notebooks.",
    problem:
      "A parts trading business lives or dies on knowing what is on the shelf, what it cost, and what it sells for. Paper records mean counts disagree with reality, fast movers run out silently, and margin per line is a feeling rather than a number.",
    users:
      "A small parts trading business — owner and counter staff.",
    capabilities: [
      "Central parts catalog with supplier references, cost history, and selling prices.",
      "Stock movement ledger so counts reconcile to transactions.",
      "Reorder signals based on movement velocity.",
      "An owner view of margin and dead stock.",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Next.js"],
    working: [
      "Catalog and stock-movement model in a working prototype.",
      "Basic margin and reorder views.",
    ],
    roadmap: [
      "Hardening and real-data testing before day-to-day business use.",
      "Reporting and backup workflows.",
    ],
    note:
      "An independently developed prototype. It is not presented as a completed commercial deployment.",
    schematic: "ledger",
  },
];

export function getSystem(slug: string) {
  return systems.find((s) => s.slug === slug);
}
