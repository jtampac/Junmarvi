import Link from "next/link";
import Reveal from "@/components/Reveal";
import TerminalCard from "@/components/TerminalCard";
import SignalRail from "@/components/TelemetryRail";
import Schematic from "@/components/Schematic";
import PortraitFrame from "@/components/PortraitFrame";
import StatusBadge from "@/components/StatusBadge";
import { site, capabilities, approach, stack } from "@/lib/site";
import { systems } from "@/lib/systems";

/** Factual, qualitative markers — no invented statistics, no zero counters. */
const markers = [
  "Hands-on operations experience",
  "Independent systems under active development",
  "Operations-led problem solving",
  "Local-first & controlled data workflows",
];

export default function Home() {
  const featured = systems.slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------ hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 480px at 70% 20%, rgba(77,163,255,0.07), transparent 62%)",
          }}
        />
        <div className="shell relative grid gap-14 pb-20 pt-40 md:grid-cols-[1.2fr,0.8fr] md:items-center md:pb-28 md:pt-52">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="status-dot dev" aria-hidden />
                {site.role} · UAE
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 font-display text-2xl text-body md:text-3xl">
                Junmarvi<span className="text-pulse">.</span>
              </p>
              <h1 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-body md:text-4xl">
                Systems, Operations, Data, Security, and Digital Solutions
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg text-mist">
                Practical digital systems built around real operational needs.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 max-w-xl leading-relaxed text-mist">
                Junmarvi develops tools and structured solutions for operations,
                reporting, data management, security, and workflow improvement.
                The work is based on hands-on operational experience and focuses
                on solving actual business problems through custom applications,
                dashboards, automation, documentation, and organized digital
                workspaces.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/systems" className="btn-primary">
                  Explore the systems <span aria-hidden>→</span>
                </Link>
                <Link href="/projects" className="btn-ghost">
                  View selected work
                </Link>
                <Link href="/about" className="btn-ghost">
                  About Junmarvi
                </Link>
              </div>
            </Reveal>
          </div>

          {/* portrait plate */}
          <Reveal delay={0.2} className="mx-auto w-full max-w-sm">
            <PortraitFrame />
          </Reveal>
        </div>
        <SignalRail />
      </section>

      {/* ------------------------------------------------ qualitative markers */}
      <section className="hairline">
        <div className="shell grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:grid-cols-4 md:py-16">
          {markers.map((m, i) => (
            <Reveal key={m} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3">
                <span className="mt-1.5 status-dot dev shrink-0" aria-hidden />
                <p className="text-sm leading-relaxed text-mist">{m}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ capability areas */}
      <section className="hairline">
        <div className="shell py-24 md:py-28">
          <Reveal>
            <p className="eyebrow">What I build</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight text-body md:text-4xl">
              Four areas of practical work
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-mist">
              These describe the kind of work the practice does — not a claim
              that each is already a commercial product at enterprise scale.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.08}>
                <div className="panel h-full p-7">
                  <h3 className="font-display text-2xl text-body">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{c.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {c.items.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-dim"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ approach */}
      <section className="hairline">
        <div className="shell grid gap-12 py-24 md:grid-cols-[0.9fr,1.1fr] md:py-28">
          <Reveal>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-body md:text-4xl">
              Problem first.
              <br />
              Technology <em className="text-pulse">second.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-mist">
              <p>{approach.lead}</p>
              <p className="border-l border-pulse/50 pl-6 text-body/90">
                {approach.principle}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ featured systems */}
      <section className="hairline">
        <div className="shell py-24 md:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Selected systems</p>
                <h2 className="mt-5 font-display text-3xl text-body md:text-4xl">
                  Independent systems in progress
                </h2>
              </div>
              <Link href="/systems" className="btn-ghost">
                All systems <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link href={`/systems/${s.slug}`} className="panel panel-hover flex h-full flex-col overflow-hidden">
                  <div className="border-b border-line bg-ink-900/50">
                    <Schematic kind={s.schematic} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-caps text-dim">
                      <span>{s.code}</span>
                      <StatusBadge status={s.status} />
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-body">{s.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{s.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ tools + focus */}
      <section className="hairline">
        <div className="shell grid gap-12 py-24 md:grid-cols-[1.1fr,0.9fr] md:py-28">
          <div>
            <Reveal>
              <p className="eyebrow">Tools & technologies</p>
              <h2 className="mt-5 font-display text-3xl text-body md:text-4xl">
                What I work with
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-mist">
                Tools used in current work — described as what I build and work
                with, not a claim of mastery in every item.
              </p>
            </Reveal>
            <div className="mt-10 space-y-8">
              {stack.map((g, i) => (
                <Reveal key={g.group} delay={i * 0.06}>
                  <div className="hairline pt-6 first:border-t-0 first:pt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-medium text-body">{g.group}</h3>
                      <p className="text-sm text-dim">{g.blurb}</p>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-mist"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="md:pt-24">
            <TerminalCard />
            <p className="mt-6 text-sm leading-relaxed text-dim">
              A short list of what is on the bench right now — the same status
              discipline my tools apply to operations, applied to my own work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="hairline">
        <div className="shell py-24 text-center md:py-28">
          <Reveal>
            <p className="eyebrow">Discuss a requirement</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight text-body md:text-4xl">
              Have an operational problem worth solving?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-mist">
              The best first message is a description of where your operation
              leaks time, money, or accuracy — not a job title.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss a requirement <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
