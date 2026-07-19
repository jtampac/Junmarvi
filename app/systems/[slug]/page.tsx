import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Schematic from "@/components/Schematic";
import StatusBadge from "@/components/StatusBadge";
import { getSystem, systems } from "@/lib/systems";

export function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSystem(slug);
  if (!s) return {};
  return { title: s.name, description: s.summary };
}

export default async function SystemBrief({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSystem(slug);
  if (!s) notFound();

  const idx = systems.findIndex((x) => x.slug === s.slug);
  const next = systems[(idx + 1) % systems.length];

  return (
    <>
      <div className="shell pb-14 pt-36 md:pt-44">
        <Reveal>
          <Link href="/systems" className="eyebrow link-quiet">
            ← Systems
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-caps">
            <span className="rounded-full border border-line px-3 py-1 text-dim">{s.code}</span>
            <span className="text-dim">{s.domain}</span>
            <StatusBadge status={s.status} />
            {s.independent && (
              <span className="text-dim">Independent project</span>
            )}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-3xl leading-tight text-body md:text-4xl">
            {s.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">{s.summary}</p>
        </Reveal>
      </div>

      <Reveal className="shell pb-16">
        <div className="panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-6 py-3 font-mono text-[10px] uppercase tracking-caps text-dim">
            <span>System schematic</span>
            <span>Illustrative</span>
          </div>
          <div className="bg-ink-900/50 p-4 md:p-8">
            <Schematic kind={s.schematic} />
          </div>
        </div>
      </Reveal>

      <section className="shell grid gap-14 pb-20 md:grid-cols-[0.9fr,1.1fr]">
        <Reveal>
          <h2 className="eyebrow">Problem addressed</h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">{s.problem}</p>

          <h2 className="eyebrow mt-12">Intended users</h2>
          <p className="mt-5 leading-relaxed text-mist">{s.users}</p>

          <h2 className="eyebrow mt-12">Technologies</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {s.technologies.map((t) => (
              <li key={t} className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-mist">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="eyebrow">Key capabilities</h2>
          <ul className="mt-5 space-y-4">
            {s.capabilities.map((a, i) => (
              <li key={i} className="panel p-5">
                <div className="flex gap-4">
                  <span className="font-mono text-[11px] text-pulse">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-mist">{a}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="hairline">
        <div className="shell grid gap-14 py-20 md:grid-cols-2">
          <Reveal>
            <h2 className="eyebrow flex items-center gap-2">
              <span className="status-dot dev" aria-hidden /> Currently working
            </h2>
            <ul className="mt-5 space-y-4">
              {s.working.map((im, i) => (
                <li key={i} className="flex gap-4">
                  <span className="status-dot dev mt-2 shrink-0" aria-hidden />
                  <p className="leading-relaxed text-mist">{im}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="eyebrow flex items-center gap-2">
              <span className="status-dot proto" aria-hidden /> Under development
            </h2>
            <ul className="mt-5 space-y-4">
              {s.roadmap.map((im, i) => (
                <li key={i} className="flex gap-4">
                  <span className="status-dot proto mt-2 shrink-0" aria-hidden />
                  <p className="leading-relaxed text-mist">{im}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {s.note && (
        <section className="hairline">
          <div className="shell py-16">
            <Reveal>
              <h2 className="eyebrow">Honest note</h2>
              <blockquote className="mt-5 max-w-3xl border-l border-line-strong pl-6 text-lg leading-relaxed text-mist">
                {s.note}
              </blockquote>
            </Reveal>
          </div>
        </section>
      )}

      <section className="hairline">
        <div className="shell flex flex-wrap items-center justify-between gap-6 py-14">
          <p className="eyebrow">Next system</p>
          <Link href={`/systems/${next.slug}`} className="btn-ghost">
            {next.name} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
