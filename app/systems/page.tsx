import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Schematic from "@/components/Schematic";
import { systems } from "@/lib/systems";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "The heart of the practice: enterprise systems in production — Control Tower, Sentinel OS, inventory platforms, analytics suites, and ERP automation.",
};

export default function SystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Systems registry"
        title="Software that carries operational weight."
        lede="Every system here exists because a real operation was bleeding time, money, or truth. Each nameplate opens a full brief: problem, architecture, impact, and what it taught me."
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
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-caps">
                  <span className="text-dim">{s.code} · {s.domain}</span>
                  <span className="flex items-center gap-2 text-kawa">
                    <span className="status-dot online" aria-hidden />
                    {s.status}
                  </span>
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
