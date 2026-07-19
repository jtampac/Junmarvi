// ---------------------------------------------------------------------------
// Projects — independent web and brand work
// ---------------------------------------------------------------------------

export type ProjectStatus =
  | "Completed Website"
  | "Active Development"
  | "Independent Project"
  | "Internal Tool"
  | "Prototype";

export type Project = {
  name: string;
  type: string;
  role: string;
  status: ProjectStatus;
  contribution: string;
  tech: string[];
  /** What can be shown as proof. No fabricated links. */
  evidence: string;
  accent: "pulse" | "kawa";
  initials: string;
};

export const projects: Project[] = [
  {
    name: "Black Pearl Capital",
    type: "Brand website",
    role: "Sole designer and developer",
    status: "Independent Project",
    contribution:
      "A restrained, credible brand presence for a capital-markets firm — information architecture and front-end build focused on clarity and speed.",
    tech: ["Next.js", "HTML/CSS"],
    evidence: "Available on request.",
    accent: "pulse",
    initials: "BP",
  },
  {
    name: "Solomon Pagunsan",
    type: "Professional profile website",
    role: "Sole designer and developer",
    status: "Independent Project",
    contribution:
      "A personal professional website built around clear positioning and disciplined typography.",
    tech: ["Next.js", "HTML/CSS"],
    evidence: "Available on request.",
    accent: "kawa",
    initials: "SP",
  },
];

// ---------------------------------------------------------------------------
// Experience — professional employment vs independent systems work
// ---------------------------------------------------------------------------

export type Role = {
  period: string;
  title: string;
  org: string;
  detail: string;
};

/** Formal operations and material-control employment. Titles are not inflated. */
export const employment: Role[] = [
  {
    period: "2016 – present",
    title: "Senior Material Controller · Data & Reporting",
    org: "ADC Energy Systems · UAE",
    detail:
      "Responsible for the full life of a material — from take-off, through purchase order, into the warehouse on a goods receipt, and out to site on an issue. Day-to-day work covers procurement coordination, warehouse and inventory control, data reconciliation, operational reporting, and audit preparation across EPC and construction projects. This is where the ground-level reality of material control was learned first-hand.",
  },
];

/** Independent systems, tools, websites, and development work — done on my own. */
export const independentWork: Role[] = [
  {
    period: "Ongoing",
    title: "Operations & reporting tools",
    org: "Excel · Power Query · SQL",
    detail:
      "Automated reconciliation, audit preparation, and refreshable reporting — first built to survive my own workload, then refined into reusable internal tools.",
  },
  {
    period: "Ongoing",
    title: "Independent systems development",
    org: "Laravel · Next.js · PostgreSQL",
    detail:
      "Independently developed systems — a Materials Control Tower for EPC material work, a security and repository-assessment tool (Sentinel OS), a privacy-conscious education concept, and inventory prototypes — organized under a shared development and governance workspace.",
  },
  {
    period: "Ongoing",
    title: "Web and brand development",
    org: "Next.js · HTML/CSS · JavaScript",
    detail:
      "Design and front-end build of business and professional websites, delivered independently for small businesses and individuals.",
  },
  {
    period: "Ongoing",
    title: "AI-assisted development practice",
    org: "Documented standards · Git · GitHub",
    detail:
      "Building with AI-assisted workflows under documented engineering and security standards — AI as part of the development process, with the architecture, review, and decisions kept in my own hands.",
  },
];

// ---------------------------------------------------------------------------
// Insights — practical writing from direct work
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
    title: "Why 3-Way Matching Is Still Hard in Construction Procurement",
    topic: "Operations · Procurement",
    readingTime: "6 min read",
    excerpt:
      "Every ERP claims to do 3-way matching. Every construction procurement team still reconciles by hand. The gap is not really a software problem — it is a data-reality problem.",
    body: [
      {
        p: "Ask any ERP vendor and 3-way matching is a solved problem: the purchase order, the goods receipt, and the invoice meet in the system, quantities and prices agree, and payment releases. Ask anyone who has actually closed a month on a construction project and you will hear a different story — one involving exports, spreadsheets, and a very long weekend.",
      },
      {
        h: "The theory meets the site",
        p: "Construction breaks the clean model in predictable ways. Deliveries arrive partial, early, or consolidated across POs. Delivery notes reference supplier part numbers that do not match the PO line description. Site urgency means material is issued before the GRN is posted. Unit-of-measure conversions — tons ordered, pieces received, meters issued — quietly corrupt automatic comparison.",
      },
      {
        p: "None of these are exceptions in the statistical sense. On a live project they are the normal texture of the data. An ERP configured for the happy path routes many real transactions into a manual review queue — which is a polite way of saying the matching is manual after all.",
      },
      {
        h: "Where the real logic lives",
        p: "The matching logic that actually works lives in the heads of experienced material controllers: which suppliers habitually short-ship, which tolerance is commercial noise versus a genuine claim, which mismatch means a typo and which means a missing delivery. That judgement is real, and almost nowhere is it written down.",
      },
      {
        p: "The tools I build start by trying to write that judgement down as explicit rules — tolerance bands per material class, alias tables for supplier references, sequencing logic that tolerates issue-before-receipt and reconciles it later. The tool executes the rules; the controller owns the exceptions. That division of labour is the whole point.",
      },
      {
        h: "What good looks like",
        p: "A working 3-way match in construction is continuous, not monthly. It matches on tolerances a procurement professional would defend in an audit, not on exact equality. It produces exception lists with owners and context, not variance dumps. And it treats the delivery note — the ugliest, most manual document in the chain — as a first-class citizen, because that is where the truth usually is.",
      },
      {
        p: "The technology to do this is not exotic. What is rarer is the combination: someone who has argued with a supplier over a short shipment and can also build the tool. That intersection is where the broken parts of procurement actually start to get fixed.",
      },
    ],
  },
  {
    slug: "ai-assisted-solo-development",
    title: "AI-Assisted Development: Shipping Real Software as a Solo Developer",
    topic: "AI-assisted Development",
    readingTime: "6 min read",
    excerpt:
      "One person with domain knowledge, AI-assisted tooling, and a bit of discipline can build more than they used to. Here is the operating model I use to keep it honest.",
    body: [
      {
        p: "The systems on this site — an operations Control Tower for EPC material work, a repository-assessment tool, reporting tools, an inventory prototype — are built by one person. Not because one person writes every line, but because one person directs AI-assisted tooling under rules strict enough that the output can be read, maintained, and defended.",
      },
      {
        h: "Direction, not delegation",
        p: "The failure mode of AI-assisted development is treating the model as a contractor: describe the feature, accept the code, move on. That produces software fast and technical debt faster. The approach I use inverts it — I own the architecture, the standards, and every accepted decision; the AI supplies speed inside those constraints.",
      },
      {
        p: "In practice this means standards exist before projects do. My work runs on a documented foundation: engineering conventions, an AI workflow standard, and security rules that define what tooling may touch and where secrets live. Every project inherits the same context, so the AI works from the same rules I do.",
      },
      {
        h: "The domain advantage",
        p: "AI lowers the cost of writing software; it does nothing to lower the cost of knowing what to build. That is why the leverage goes to people with real domain knowledge. Years of material control mean I can specify a reconciliation tool down to its tolerance rules, then check the output against scenarios a generic developer would not think to test.",
      },
      {
        p: "The honest claim is modest: requirements, build, and testing converge in one head, and the usual loss between 'what operations needs' and 'what was delivered' gets smaller. It does not make one person a team, and it does not make a prototype a production system.",
      },
      {
        h: "What discipline buys",
        p: "Documented standards mean a codebase reads consistently even though a model wrote much of it. Security rules mean AI tooling never sees production credentials. Written decision records mean that six months later, 'why does the matching tolerate 2% on bulk materials?' has an answer. That is the difference between using AI and directing it.",
      },
      {
        p: "AI is part of how I build. It is not the thing I am selling. What I am accountable for is the same thing any developer is accountable for: software that does what it says, and that I can explain.",
      },
    ],
  },
  {
    slug: "control-tower-pattern",
    title: "The Control Tower Pattern: One View for the Whole Supply Chain",
    topic: "Operations · Reporting",
    readingTime: "5 min read",
    excerpt:
      "Operations teams do not need more reports. They need one continuously true view of commitments, receipts, and exposure — and a control tower is how you try to build it.",
    body: [
      {
        p: "Many operations meetings begin the same way: fifteen minutes of establishing what is actually true. Whose spreadsheet is current, which export is stale, whether the warehouse number or the ERP number is right. A control tower exists to remove those fifteen minutes.",
      },
      {
        h: "What a control tower actually is",
        p: "Strip the buzzword and a control tower is three commitments. First, a single data spine: every material movement — take-off, PO, GRN, issue — lands in one reconciled model, continuously, not at month-end. Second, exception-first presentation: the screen leads with what is wrong or aging, because averages do not need attention and outliers do. Third, drill-down to the document: every number can be traced to the PO line or delivery note behind it, or the view loses the only currency that matters — trust.",
      },
      {
        h: "Why construction needs it",
        p: "Construction supply chains are hostile to visibility: long lead times, site-level urgency that bypasses process, materials that change custody several times before installation. Because the data is messy, the industry has often accepted blindness as normal. But the mess is systematic, and systematic mess can be modelled.",
      },
      {
        p: "The Control Tower I am building reconciles the take-off-to-issue chain and surfaces open exposure by project. The goal is simple: make interrogating the view faster than asking a person. That is the bar it has to clear before it is worth anyone's trust.",
      },
      {
        h: "Build guidance",
        p: "Start with the reconciliation, not the dashboard — a beautiful screen on unreconciled data is a liability with good typography. Ship the exception queues before the trend charts. And put a domain owner, not just a developer, in charge of the matching rules; the view encodes judgement, and the judgement has to come from someone who has lived the disputes.",
      },
    ],
  },
  {
    slug: "guardrails-before-agents",
    title: "Guardrails Before Agents: A Practical AI Governance Baseline",
    topic: "Security · Governance",
    readingTime: "5 min read",
    excerpt:
      "Most AI governance is written after the first incident. Writing a small, practical rulebook first is cheaper — and it is how a solo developer keeps AI-assisted work trustworthy.",
    body: [
      {
        p: "There is a moment in AI adoption where enthusiasm meets an incident: a credential in a prompt, generated code committed without review, tooling acting outside its lane. Policy then gets written in the incident's shadow — restrictive and reactive. The alternative is boring and effective: write a small set of guardrails first.",
      },
      {
        h: "The rulebook",
        p: "My own baseline — the governance layer every one of my projects inherits — is a small set of documents. An engineering standard defines structure and conventions so AI output is consistent and reviewable. An AI workflow standard defines how tasks are specified, what must be human-verified, and how decisions are recorded. A security rulebook defines the hard lines: where secrets live, what environments tooling can touch, and what is off-limits regardless of convenience.",
      },
      {
        p: "The important property is that these documents are the source of truth for the tooling itself, so following them is the default path rather than a review-time correction.",
      },
      {
        h: "Separation of environments",
        p: "Working across an employer's environment and personal projects makes one rule non-negotiable: separation. Office work, office machines, office data; personal projects, personal infrastructure. Alongside the technical boundary sits the practical one — respecting employment terms and keeping independent work clearly independent.",
      },
      {
        h: "Why it matters most when you are small",
        p: "Guardrails sound like ceremony, but they matter most for a solo operator. A large company can absorb sloppy AI usage through redundancy; one person has no such buffer. Discipline is what lets a single developer credibly build systems worth trusting — and it is exactly the part that is tedious enough that most people skip it.",
      },
      {
        p: "AI tooling is coming to every operational workflow. The people who benefit will not be the ones who adopted it first, but the ones whose rules were strong enough to let it run safely.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
