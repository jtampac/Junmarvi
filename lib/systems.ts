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
    slug: "adc-control-tower",
    code: "SYS-01",
    name: "ADC Control Tower",
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
    slug: "operational-analytics",
    code: "TL-04",
    name: "Operational Analytics",
    domain: "Reporting & Decision Support",
    status: "Internal Tool",
    independent: true,
    summary:
      "Refreshable operational dashboards and reports built with Excel and Power Query — turning routine operational data into a faster read for day-to-day decisions.",
    problem:
      "Operational data often arrives as monthly totals that are too aggregated to act on. I built these reports to get closer to the actual movement in the data — consumption, utilization, and trends — without waiting for a formal report to be assembled by hand.",
    users:
      "Operations and reporting staff who need refreshable numbers instead of manually rebuilt spreadsheets.",
    capabilities: [
      "Refreshable dashboards driven directly from operational data sources.",
      "Consumption and trend views built for a quick read.",
      "Comparison across periods without rebuilding the spreadsheet each time.",
    ],
    technologies: ["Excel", "Power Query", "SQL"],
    working: [
      "Refreshable reports used in real operational reporting work.",
      "Trend and comparison views from routine data.",
    ],
    roadmap: [
      "Migration of selected reports into web dashboards.",
      "Wider automation of data refresh.",
    ],
    note:
      "These are practical internal tools I built for my own operational reporting work.",
    schematic: "pulse",
  },
  {
    slug: "warehouse-reporting",
    code: "TL-05",
    name: "Warehouse Reporting",
    domain: "Inventory & Material Control",
    status: "Internal Tool",
    independent: true,
    summary:
      "Reporting for warehouse and inventory work — receiving, stock accuracy, and issue turnaround measured from transaction data instead of assembled by hand.",
    problem:
      "Warehouses generate many transactions and little insight. Receiving delays, mis-locations, and slow issue turnaround are felt on site long before they show up in a report — because the report is compiled by hand, late.",
    users:
      "Warehouse and material-control staff who need performance figures without extra manual work.",
    capabilities: [
      "Reporting on receiving, stock accuracy, and issue turnaround from transaction data.",
      "Exception lists for aging receipts and count variances.",
      "Period-over-period comparison without rebuilding spreadsheets.",
    ],
    technologies: ["Excel", "Power Query", "SQL"],
    working: [
      "Reports derived directly from warehouse transaction data.",
      "Exception views for aging and variance items.",
    ],
    roadmap: [
      "Consolidation into the ADC Control Tower reporting views.",
      "More automated data refresh.",
    ],
    note:
      "A practical internal reporting tool built for real warehouse work.",
    schematic: "stack",
  },
  {
    slug: "reconciliation-automation",
    code: "TL-06",
    name: "Reconciliation Automation",
    domain: "Procurement & Data Reconciliation",
    status: "Internal Tool",
    independent: true,
    summary:
      "Automation for extracting and reconciling procurement data — matching commitments, receipts, and invoices with documented tolerance rules instead of manual copy-paste.",
    problem:
      "The gap between what an ERP records and what operations needs to know is usually bridged by hand — export, paste, lookup, repeat. That work consumes exactly the people who should be analyzing instead of assembling.",
    users:
      "Procurement and material-control staff responsible for matching and reconciliation.",
    capabilities: [
      "Extraction of procurement data on a schedule instead of on request.",
      "Matching logic with tolerance rules drawn from real procurement practice.",
      "Reconciliation outputs as exception lists rather than raw variance dumps.",
    ],
    technologies: ["Power Query", "Excel", "SQL"],
    working: [
      "Matching and reconciliation logic used in real reconciliation work.",
      "Exception output with context attached.",
    ],
    roadmap: [
      "Reusable extraction pipelines across more data sources.",
      "Migration of the matching logic into the Control Tower.",
    ],
    note:
      "Automation here is really an act of documentation — writing the matching rules down so a tool can run them.",
    schematic: "gears",
  },
  {
    slug: "claire-motorparts",
    code: "APP-07",
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
