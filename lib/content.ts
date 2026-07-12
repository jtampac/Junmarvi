// ---------------------------------------------------------------------------
// Projects — client and brand web work
// ---------------------------------------------------------------------------

export type Project = {
  name: string;
  kind: string;
  description: string;
  accent: "pulse" | "kawa";
  initials: string;
};

export const projects: Project[] = [
  {
    name: "Black Pearl Capital",
    kind: "Investment brand platform",
    description:
      "A capital-markets brand presence built to institutional standards — restrained, credible, and fast. Designed to make a boutique firm read like an established house.",
    accent: "pulse",
    initials: "BP",
  },
  {
    name: "Solomon Pagunsan",
    kind: "Professional brand site",
    description:
      "A personal professional platform engineered around positioning: clear narrative, disciplined typography, and a structure that sells expertise rather than listing it.",
    accent: "kawa",
    initials: "SP",
  },
  {
    name: "Cylingas",
    kind: "Industrial web presence",
    description:
      "Corporate web platform for an industrial manufacturer — capability-led information architecture built for procurement teams who evaluate before they ever call.",
    accent: "pulse",
    initials: "CY",
  },
  {
    name: "RF Builders & Supply",
    kind: "Construction contractor platform",
    description:
      "Full seven-page business website for a general engineering and construction contractor in Negros Oriental — services, portfolio, and credibility, deployed and maintained in production.",
    accent: "kawa",
    initials: "RF",
  },
  {
    name: "Future enterprise projects",
    kind: "In the pipeline",
    description:
      "A GCC construction-procurement platform is in active planning: EPC-grade material control with AI document extraction and 3-way match automation. Enterprise engagements are open.",
    accent: "pulse",
    initials: "→",
  },
];

// ---------------------------------------------------------------------------
// Experience — capability timeline
// ---------------------------------------------------------------------------

export type Era = {
  period: string;
  title: string;
  arena: string;
  detail: string;
};

export const eras: Era[] = [
  {
    period: "Foundation",
    title: "Senior Material Controller",
    arena: "GTCC → ADC Energy Systems · Dubai, UAE · 2014 – present",
    detail:
      "Twelve years inside the engine room of EPC delivery — first on Oracle JD Edwards as storekeeper at Gulf Technical Construction Company (2014–2016), then at ADC Energy Systems as Senior Material Controller and Data & Reporting Specialist: MTO-to-PO-to-GRN-to-issue workflows, procurement reconciliation, warehouse control, and audit processes across UAE and GCC projects. This is where the problems worth solving were learned first-hand — not observed from a product team.",
  },
  {
    period: "Instrumentation",
    title: "Operational Analytics",
    arena: "Excel automation · Power Query · reconciliation engines",
    detail:
      "The first systems were built to survive my own workload: automated reconciliation, audit preparation, and reporting pipelines that replaced days of manual assembly with logic that runs itself.",
  },
  {
    period: "Visibility",
    title: "Enterprise Dashboard Development",
    arena: "Executive intelligence · KPI systems",
    detail:
      "Operational data became management instruments — warehouse KPI systems, diesel consumption intelligence, and executive dashboards designed for the five-minute read that precedes a decision.",
  },
  {
    period: "Leverage",
    title: "AI Engineering",
    arena: "AI-directed development · governance frameworks",
    detail:
      "Adopted AI as an engineering force multiplier — and built the governance to make it enterprise-safe: documented standards, security rules, and workflow discipline under a personal framework before agents ever touched production work.",
  },
  {
    period: "Construction",
    title: "Software Development",
    arena: "Laravel · Next.js · Supabase · full platforms",
    detail:
      "From automations to complete platforms: a live Control Tower for EPC material operations, trading and inventory systems, education platforms, and client web properties — all in production, all built solo under governed AI-directed workflows.",
  },
  {
    period: "Synthesis",
    title: "Business Intelligence",
    arena: "Operations intelligence as a discipline",
    detail:
      "The current position: architecting systems where operational expertise, data engineering, and AI converge — business first, technology second, every screen accountable to a decision it must improve.",
  },
];

// ---------------------------------------------------------------------------
// Insights — long-form articles
// ---------------------------------------------------------------------------

export type Article = {
  slug: string;
  title: string;
  topic: string;
  readingTime: string;
  excerpt: string;
  body: { h?: string; p: string }[];
};

export const articles: Article[] = [
  {
    slug: "three-way-match-is-broken",
    title: "Why 3-Way Matching Is Still Broken in Construction Procurement",
    topic: "ERP · Operations",
    readingTime: "6 min read",
    excerpt:
      "Every ERP claims to do 3-way matching. Every construction procurement team still reconciles by hand. The gap is not a software problem — it is a data-reality problem.",
    body: [
      {
        p: "Ask any ERP vendor and 3-way matching is a solved problem: the purchase order, the goods receipt, and the invoice meet in the system, quantities and prices agree, and payment releases. Ask anyone who has actually closed a month on a construction project and you will hear a different story — one involving exports, spreadsheets, and a very long weekend.",
      },
      {
        h: "The theory meets the site",
        p: "Construction breaks the clean model in predictable ways. Deliveries arrive partial, early, or consolidated across POs. Delivery notes reference supplier part numbers that do not match the PO line description. Site urgency means material is issued before the GRN is posted. Unit-of-measure conversions — tons ordered, pieces received, meters issued — quietly corrupt every automatic comparison.",
      },
      {
        p: "None of these are exceptions in the statistical sense. On a live EPC project they are the normal texture of the data. An ERP configured for the happy path routes the majority of real transactions into a manual review queue — which is a polite way of saying the matching is manual after all.",
      },
      {
        h: "Where the real logic lives",
        p: "The matching logic that actually works lives in the heads of experienced material controllers: which suppliers habitually short-ship, which tolerance is commercial noise versus a genuine claim, which mismatch means a typo and which means a missing delivery. That judgement is real intellectual property, and almost nowhere is it written down.",
      },
      {
        p: "The systems I build start by extracting that judgement into explicit rules — tolerance bands per material class, alias tables for supplier references, sequencing logic that tolerates issue-before-receipt and reconciles it later. The machine executes the rules; the controller owns the exceptions. That division of labor is the whole trick.",
      },
      {
        h: "What good looks like",
        p: "A working 3-way match in construction is continuous, not monthly. It matches on tolerances a procurement professional would defend in an audit, not on exact equality. It produces exception lists with owners and context, not variance dumps. And it treats the delivery note — the ugliest, most manual document in the chain — as a first-class citizen, because that is where the truth usually is.",
      },
      {
        p: "The technology to do this is not exotic. What is rare is the combination: someone who has argued with a supplier over a short shipment and can also write the code. That intersection is where the broken parts of procurement actually get fixed.",
      },
    ],
  },
  {
    slug: "ai-directed-engineering",
    title: "AI-Directed Engineering: Shipping Enterprise Software Without a Dev Team",
    topic: "AI Engineering",
    readingTime: "7 min read",
    excerpt:
      "One person with domain expertise, governed AI tooling, and engineering discipline can now ship what used to require a team. Here is the operating model that makes it safe.",
    body: [
      {
        p: "The systems on this site — a production Control Tower for EPC material operations, inventory platforms, analytics suites — were built by one person. Not because one person wrote every line, but because one person directed AI tooling that did, under rules strict enough that the output can be audited, maintained, and trusted.",
      },
      {
        h: "Direction is not delegation",
        p: "The failure mode of AI-assisted development is treating the model as a contractor: describe the feature, accept the code, move on. That produces software fast and technical debt faster. AI-directed engineering inverts the relationship — the human owns the architecture, the standards, and every accepted decision; the AI supplies velocity inside those constraints.",
      },
      {
        p: "In practice this means standards exist before projects do. My environment runs on a documented framework: engineering conventions, an AI workflow standard, and security rules that define what tooling may touch, where secrets live, and how decisions are recorded. Every project inherits a thin router configuration pointing to a single documentation source of truth, so the AI works from the same context I do — on any machine, in any session.",
      },
      {
        h: "The domain expert advantage",
        p: "AI collapses the cost of writing software; it does nothing to collapse the cost of knowing what to build. That is why the leverage accrues disproportionately to domain experts. A decade of material control means I can specify a reconciliation engine down to its tolerance rules without a discovery phase, then verify the output against scenarios no generic developer would think to test.",
      },
      {
        p: "The result is a new economic unit: the domain expert who ships. Requirements, build, and acceptance testing converge in one head, and the traditional loss between 'what operations needs' and 'what IT delivered' simply disappears.",
      },
      {
        h: "What discipline buys",
        p: "Governance sounds like overhead until the first time it saves you. Documented standards mean the codebase reads consistently even though a model wrote most of it. Security rules mean AI never sees production credentials. Versioned decision records mean that six months later, 'why does the matching tolerate 2% on bulk materials?' has a written answer.",
      },
      {
        p: "Enterprises are right to distrust ungoverned AI output. The answer is not less AI — it is the same engineering discipline enterprises already respect, applied to a faster way of building. That is the entire thesis of how I work.",
      },
    ],
  },
  {
    slug: "control-tower-pattern",
    title: "The Control Tower Pattern: One Screen for the Whole Supply Chain",
    topic: "Construction Technology · BI",
    readingTime: "5 min read",
    excerpt:
      "Operations leaders do not need more reports. They need one continuously true view of commitments, receipts, and exposure — and a control tower is how you build it.",
    body: [
      {
        p: "Every operations meeting begins the same way: fifteen minutes of establishing what is actually true. Whose spreadsheet is current, which export is stale, whether the warehouse number or the ERP number is right. A control tower exists to delete those fifteen minutes.",
      },
      {
        h: "What a control tower actually is",
        p: "Strip the buzzword and a control tower is three commitments. First, a single data spine: every material movement — MTO, PO, GRN, issue — lands in one reconciled model, continuously, not at month-end. Second, exception-first presentation: the screen leads with what is wrong or aging, because averages do not need management attention and outliers do. Third, drill-down to the document: every number on the screen can be traced to the PO line or delivery note behind it, or the tower loses the only currency that matters — trust.",
      },
      {
        h: "Why construction needs it most",
        p: "Construction supply chains are uniquely hostile to visibility: long lead times, site-level urgency that bypasses process, materials that change custody four times before installation. Precisely because the data is messy, the industry has accepted blindness as normal. It is not. The mess is systematic, and systematic mess can be modeled.",
      },
      {
        p: "The Control Tower I run in production reconciles the full MTO-to-issue chain and surfaces open exposure by project. The most telling change was cultural: managers stopped commissioning ad-hoc reports, because interrogating the tower became faster than asking a person.",
      },
      {
        h: "Build guidance",
        p: "Start with the reconciliation, not the dashboard — a beautiful screen on unreconciled data is a liability with good typography. Ship the exception queues before the trend charts. And put a domain owner, not a developer, in charge of the matching rules; the tower encodes judgement, and the judgement must come from someone who has lived the disputes.",
      },
    ],
  },
  {
    slug: "guardrails-before-agents",
    title: "Guardrails Before Agents: An AI Governance Framework That Holds",
    topic: "Security · Automation",
    readingTime: "6 min read",
    excerpt:
      "Most AI governance is written after the first incident. Building the rulebook first is cheaper, faster, and the only way an enterprise workflow earns trust.",
    body: [
      {
        p: "There is a moment in every organization's AI adoption where enthusiasm meets an incident: a credential in a prompt, generated code pushed without review, an agent acting outside its lane. Policy is then written in the incident's shadow — restrictive, reactive, and resented. The alternative is boring and effective: write the guardrails before the agents arrive.",
      },
      {
        h: "The rulebook",
        p: "My own framework — the governance layer every one of my projects inherits — is a small set of documents with absolute authority. An engineering standard defines structure and conventions so AI output is consistent and reviewable. An AI workflow standard defines how tasks are specified, what must be human-verified, and how decisions are recorded. A security rulebook defines the hard lines: where secrets live, what environments AI tooling can touch, and what is off-limits regardless of convenience.",
      },
      {
        p: "The critical property is that these documents are the source of truth for the AI itself. Tooling is configured to read the standards before doing work, so compliance is the default path rather than a review-time correction.",
      },
      {
        h: "Separation of environments",
        p: "Working across an employer's environment and personal ventures makes one rule non-negotiable: absolute separation. Office work, office machines, office data; personal projects, personal infrastructure. Alongside the technical boundary sits the legal one — employment IP clauses reviewed and proper licensing in place before any commercial line is crossed. Governance that ignores the legal layer is theater.",
      },
      {
        h: "Why this scales down",
        p: "Frameworks like this sound like enterprise ceremony, but they matter most for small operators. A large company survives sloppy AI usage through redundancy; a one-person engineering operation has no such buffer. Discipline is what lets a single domain expert credibly ship systems that enterprises run their operations on — and it is a competitive moat precisely because it is tedious to build.",
      },
      {
        p: "Agents are coming to every operational workflow. The organizations that benefit will not be the ones that adopted them first, but the ones whose rules were already strong enough to let the agents run.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
