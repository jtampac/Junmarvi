import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { employment, independentWork, type Role } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional operations and material-control employment, kept clearly separate from independent systems, tools, and web development work.",
};

const advantages = [
  "Field & warehouse operations",
  "Material control",
  "Inventory",
  "Procurement coordination",
  "Assets & manpower records",
  "Reporting",
  "Reconciliation",
  "System-building",
];

function Timeline({ roles, tone }: { roles: Role[]; tone: "dev" | "proto" }) {
  return (
    <ol className="relative ml-3 border-l border-line md:ml-6">
      {roles.map((e, i) => (
        <li key={e.title + e.period} className="relative pb-12 pl-8 last:pb-0 md:pl-14">
          <span
            aria-hidden
            className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border bg-ink-950 ${
              tone === "dev" ? "border-pulse" : "border-line-strong"
            }`}
          />
          <Reveal delay={0.05 * i}>
            <div className="panel panel-hover p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-caps text-pulse">
                  {e.period}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-caps text-dim">
                  {e.org}
                </p>
              </div>
              <h3 className="mt-4 font-display text-2xl text-body md:text-3xl">{e.title}</h3>
              <p className="mt-4 max-w-3xl leading-relaxed text-mist">{e.detail}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Operations first — systems built on top of it."
        lede="My advantage is not purely software development. It is the combination of ground-level operations experience and the ability to build tools around it. Professional employment and independent work are kept clearly separate below."
      />

      {/* the combination */}
      <section className="shell pb-16">
        <Reveal>
          <div className="panel p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-caps text-mist">
              The combination
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {advantages.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-dim"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* professional employment */}
      <section className="shell pb-16">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="status-dot dev" aria-hidden />
            <h2 className="font-display text-3xl text-body md:text-4xl">Professional employment</h2>
          </div>
          <p className="mb-8 max-w-2xl leading-relaxed text-mist">
            My formal operations and material-control experience. Titles here are
            my actual roles — not restyled into technology-executive titles.
          </p>
        </Reveal>
        <Timeline roles={employment} tone="dev" />
      </section>

      {/* independent systems work */}
      <section className="hairline">
        <div className="shell py-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="status-dot proto" aria-hidden />
              <h2 className="font-display text-3xl text-body md:text-4xl">Independent systems work</h2>
            </div>
            <p className="mb-8 max-w-2xl leading-relaxed text-mist">
              Systems, tools, websites, research, and development work completed
              independently — on my own time and infrastructure.
            </p>
          </Reveal>
          <Timeline roles={independentWork} tone="proto" />
        </div>
      </section>
    </>
  );
}
