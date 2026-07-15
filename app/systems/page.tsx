import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Schematic from "@/components/Schematic";
import StatusBadge from "@/components/StatusBadge";
import { systems } from "@/lib/systems";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Independently developed systems and tools — the Junmarvi Systems Workspace, ADC Control Tower, Sentinel OS, Education Intelligence, and operational reporting tools. Each classified honestly by maturity.",
};

export default function SystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Systems"
        title="Independently developed systems and tools."
        lede="Each entry is an independent project, prototype, or internal tool — classified honestly by its current stage. Open any nameplate for the problem, intended users, status, what works now, and what is still under development."
      />

      <section className="shell grid gap-6 pb-24 md:grid-cols-2">
        {systems.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 2) * 0.08}>
            <Link
              href={`/systems/${s.slug}`}
              className="panel panel-hover flex h-full flex-col overflow-hidden"
            >
              <div className="border-b border-line bg-ink-900/50">
                <Schematic kind={s.schematic} />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-caps">
                  <span className="text-dim">{s.code} · {s.domain}</span>
                  <StatusBadge status={s.status} />
                </div>
                <h2 className="mt-4 font-display text-3xl text-body">{s.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{s.summary}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-caps text-pulse">
                  Open system brief <span aria-hidden>→</span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
