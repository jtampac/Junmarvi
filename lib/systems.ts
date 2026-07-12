export type System = {
  slug: string;
  code: string; // nameplate code, like plant equipment tags
  name: string;
  domain: string;
  status: "In production" | "Active build" | "Client delivery";
  summary: string;
  problem: string;
  architecture: string[];
  technologies: string[];
  impact: string[];
  lessons: string;
  schematic: "flow" | "grid" | "shield" | "ledger" | "pulse" | "stack" | "gears";
};

export const systems: System[] = [
  {
    slug: "adc-enterprise-intelligence",
    code: "SYS-01",
    name: "ADC Enterprise Intelligence Platform",
    domain: "EPC Material Control · Dubai",
    status: "In production",
    summary:
      "A Control Tower for EPC material operations — every MTO, PO, GRN, and material issue visible on one screen, reconciled continuously instead of at audit time.",
    problem:
      "On large EPC projects, material truth lives in fragments: MTOs in engineering files, POs in the ERP, GRNs in the warehouse, and issues in site records. Reconciling them manually consumes days every month, and discrepancies surface only when an audit forces them to. Management sees the supply chain in the rear-view mirror.",
    architecture: [
      "Control Tower web application giving management a single live view across projects — commitments, receipts, issues, and open exposure.",
      "Reconciliation engine that continuously matches MTO quantities to PO commitments, PO lines to GRN receipts, and receipts to site issues.",
      "Weekly Audit System that converts month-end fire drills into a standing cadence: exceptions are raised, owned, and closed inside the week they occur.",
      "Warehouse KPI layer feeding receiving performance, stock accuracy, and issue turnaround into executive dashboards.",
    ],
    technologies: ["Laravel", "Next.js", "Supabase", "PostgreSQL", "Power Query", "IIS / Windows Server"],
    impact: [
      "Month-end reconciliation collapsed from a multi-day manual exercise into a continuously current ledger.",
      "Discrepancies are caught in the week they happen, while the delivery note is still findable and the supplier still answers the phone.",
      "Management stopped asking 'what is our real material position?' — the Control Tower answers it before the question is asked.",
    ],
    lessons:
      "The hardest part was not the software — it was encoding ten years of material-control judgement into rules a machine can execute. Every matching tolerance and exception path in the engine came from a real dispute I had personally untangled.",
    schematic: "flow",
  },
  {
    slug: "sentinel-os",
    code: "SYS-02",
    name: "Sentinel OS",
    domain: "AI Governance & Security Operations",
    status: "In production",
    summary:
      "A personal enterprise operating system for AI-directed engineering — documented standards, security rules, and workflow governance that make AI output auditable instead of improvised.",
    problem:
      "AI can write code faster than any team, but speed without governance produces systems nobody can trust in an enterprise. Working across an office environment and personal projects, I needed AI assistance that followed the same discipline an enterprise expects of its engineers: standards, security boundaries, and traceable decisions.",
    architecture: [
      "A documented standards layer — engineering conventions, AI workflow rules, and security policies — that every project inherits before a line of code is written.",
      "A thin router configuration that points AI tooling to a single source of truth in versioned documentation, so context never drifts between machines or sessions.",
      "Security rulebook governing secrets, data boundaries, and what AI tooling may and may not touch across office and personal environments.",
      "A knowledge-processing framework that turns raw research and project history into structured, reusable engineering knowledge.",
    ],
    technologies: ["Claude Code", "GitHub", "Markdown standards", "Security Engineering", "Knowledge Systems"],
    impact: [
      "Every system on this page was built under the same governed workflow — consistent structure, consistent security posture, consistent documentation.",
      "New projects start with the discipline already installed rather than reinvented.",
      "AI output became reviewable and repeatable — the difference between using AI and directing it.",
    ],
    lessons:
      "Guardrails have to exist before the agents do. Writing the rules after the first incident is how enterprises end up distrusting AI; writing them first is how you earn the right to move fast.",
    schematic: "shield",
  },
  {
    slug: "claire-motorparts",
    code: "SYS-03",
    name: "Claire Motorparts",
    domain: "Trading & Inventory Operations",
    status: "Client delivery",
    summary:
      "An inventory and sales operations platform for a motorparts trading business — stock truth, movement history, and margin visibility for a company that ran on notebooks.",
    problem:
      "A parts trading business lives or dies on knowing what is on the shelf, what it cost, and what it sells for. Paper records meant stock counts disagreed with reality, fast-moving items ran out silently, and margin per line was a feeling rather than a number.",
    architecture: [
      "Central parts catalog with supplier references, cost history, and selling prices as the single record of truth.",
      "Stock movement ledger — every receipt, sale, and adjustment logged against the part, so counts reconcile to transactions.",
      "Reorder intelligence that watches velocity per item and flags stockouts before they happen.",
      "Owner dashboard translating daily transactions into margin, dead stock, and cash-in-inventory views.",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Next.js"],
    impact: [
      "Physical counts now reconcile against a transaction trail instead of memory.",
      "Fast movers stopped running out unnoticed; dead stock became visible enough to act on.",
      "Pricing decisions moved from instinct to per-line margin data.",
    ],
    lessons:
      "Small businesses do not need smaller software — they need the same material-control discipline as an EPC contractor, delivered without the ERP overhead.",
    schematic: "ledger",
  },
  {
    slug: "seip-education-platform",
    code: "SYS-04",
    name: "SEIP Education Platform",
    domain: "Education Operations",
    status: "Active build",
    summary:
      "A structured learning platform that treats education delivery as an operations problem — enrollment, progress, and content managed with the same rigor as a supply chain.",
    problem:
      "Education programs fail operationally before they fail academically: enrollment tracked in spreadsheets, learner progress invisible between assessments, and content scattered across drives. Administrators spend their time reconstructing state instead of teaching.",
    architecture: [
      "Enrollment and cohort management as a first-class workflow, not a spreadsheet export.",
      "Progress telemetry per learner and per module, surfacing who is stalled while intervention is still cheap.",
      "Versioned content library so material updates propagate without breaking running cohorts.",
      "Administrator dashboard modeled on operations control rooms — exceptions first, averages second.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    impact: [
      "Program state is answerable in one screen instead of a weekend of spreadsheet archaeology.",
      "Stalled learners surface as exceptions in-week rather than as surprises at assessment time.",
      "Content updates ship centrally instead of by email attachment.",
    ],
    lessons:
      "Control-room thinking transfers cleanly outside industry: any domain where people ask 'where do we actually stand?' is a candidate for a control tower.",
    schematic: "grid",
  },
  {
    slug: "operational-analytics-suite",
    code: "SYS-05",
    name: "Operational Analytics Suite",
    domain: "Executive Intelligence · Construction",
    status: "In production",
    summary:
      "CEO-grade analytics built on real operational data — including a diesel consumption intelligence platform that turned fuel from a line-item expense into a managed asset.",
    problem:
      "Construction executives receive reports, not intelligence. Fleet fuel, equipment utilization, and consumption trends arrive as monthly totals — too aggregated to act on, too late to matter. The data exists; the decisions it should drive do not.",
    architecture: [
      "Strictly data-driven executive dashboards — every figure traceable to source records, nothing decorative.",
      "Consumption baselines per asset class, with deviation flags when a machine or site drifts from its expected burn.",
      "Trend and comparison views built for a five-minute executive read: exceptions, direction, and exposure.",
      "Lightweight delivery — fast-loading web dashboards that run anywhere, no BI license per viewer.",
    ],
    technologies: ["JavaScript", "HTML/CSS", "Power BI", "Power Query", "Excel automation"],
    impact: [
      "Diesel consumption anomalies became visible per asset instead of buried in fleet totals.",
      "Executive review moved from reading monthly PDFs to interrogating live trends.",
      "The dashboard became the meeting agenda — discussion starts at the exceptions.",
    ],
    lessons:
      "Executives do not want more data; they want fewer, harder numbers. The discipline is in what you leave off the screen.",
    schematic: "pulse",
  },
  {
    slug: "warehouse-intelligence",
    code: "SYS-06",
    name: "Warehouse Intelligence",
    domain: "Logistics & Inventory Control",
    status: "In production",
    summary:
      "KPI instrumentation for warehouse operations — receiving performance, stock accuracy, and issue turnaround measured continuously and reported without manual effort.",
    problem:
      "Warehouses generate thousands of transactions and almost no insight. Receiving delays, mis-locations, and slow issue turnaround are felt on site long before they appear in any report — because the report is compiled by hand, monthly, by someone with a day job.",
    architecture: [
      "KPI engine computing receiving cycle time, GRN latency, stock accuracy, and issue turnaround directly from transaction data.",
      "Exception queues for aging receipts, un-issued reservations, and count variances — worked as lists, not discovered in audits.",
      "Trend dashboards per warehouse and per project, comparable across periods without re-building spreadsheets.",
      "Zero-touch reporting: the numbers exist because the transactions exist.",
    ],
    technologies: ["Power Query", "Power BI", "Excel automation", "Supabase"],
    impact: [
      "Warehouse performance conversations now start from shared numbers instead of competing anecdotes.",
      "Aging receipts and stuck issues surface daily rather than at month-end.",
      "Report compilation time went to zero — the KPI layer is a byproduct of normal work.",
    ],
    lessons:
      "The best KPI system is invisible to the people it measures. If the warehouse team has to feed the dashboard, the dashboard is already wrong.",
    schematic: "stack",
  },
  {
    slug: "erp-automation",
    code: "SYS-07",
    name: "ERP Automation",
    domain: "Process Automation · Procurement",
    status: "In production",
    summary:
      "The connective tissue between ERP records and operational reality — automated extraction, matching, and reconciliation that removes the human middleware from procurement workflows.",
    problem:
      "Every ERP promises integration and every operations team still runs on exports. The gap between what the ERP records and what the business needs to know is bridged manually — copy, paste, VLOOKUP, repeat — by exactly the people who should be analyzing instead of assembling.",
    architecture: [
      "Automated extraction pipelines pulling PO, GRN, and invoice data on schedule instead of on request.",
      "Matching logic implementing 3-way match discipline — commitments to receipts to invoices — with tolerance rules from real procurement practice.",
      "Reconciliation outputs that land as exception lists with owners, not as raw variance dumps.",
      "Python and Power Query engines that survive personnel changes because the logic is documented, versioned, and readable.",
    ],
    technologies: ["Python", "Power Query", "Excel automation", "PostgreSQL"],
    impact: [
      "Recurring reconciliation work that consumed skilled hours weekly now runs unattended.",
      "3-way match exceptions reach the right owner with context attached, cutting resolution loops.",
      "Institutional logic moved out of one person's head and into versioned, documented code.",
    ],
    lessons:
      "Automation is an act of documentation. The moment the matching rules were written down for a machine, the whole team finally agreed on what the rules actually were.",
    schematic: "gears",
  },
];

export function getSystem(slug: string) {
  return systems.find((s) => s.slug === slug);
}
