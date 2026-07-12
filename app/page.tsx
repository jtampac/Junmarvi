import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TerminalCard from "@/components/TerminalCard";
import TelemetryRail from "@/components/TelemetryRail";
import Schematic from "@/components/Schematic";
import PortraitFrame from "@/components/PortraitFrame";
import { roles, stack } from "@/lib/site";
import { systems } from "@/lib/systems";

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
              "radial-gradient(900px 480px at 70% 20%, rgba(77,163,255,0.10), transparent 62%), radial-gradient(700px 400px at 20% 80%, rgba(117,228,75,0.05), transparent 60%)",
          }}
        />
        <div className="shell relative grid gap-14 pb-20 pt-40 md:grid-cols-[1.2fr,0.8fr] md:items-center md:pb-28 md:pt-52">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="status-dot online" aria-hidden />
                Enterprise systems · Dubai, UAE
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-6xl leading-[0.98] text-body md:text-8xl">
                Junmarvi
                <br />
                Tampac
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <ul className="mt-8 space-y-1.5">
                {roles.map((r) => (
                  <li key={r} className="font-mono text-[12px] uppercase tracking-caps text-mist">
                    <span className="text-pulse">/</span> {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
                I spent a decade inside enterprise operations — procurement,
                warehouses, EPC material control — before I ever shipped software.
                Now I transform complex operations into intelligent systems:
                platforms that reconcile, monitor, and decide the way an
                experienced operator would, at machine speed.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/systems" className="btn-primary">
                  Explore systems <span aria-hidden>→</span>
                </Link>
                <Link href="/experience" className="btn-ghost">
                  View experience
                </Link>
              </div>
            </Reveal>
          </div>

          {/* portrait plate */}
          <Reveal delay={0.2} className="mx-auto w-full max-w-sm">
            <PortraitFrame />
          </Reveal>
        </div>
        <TelemetryRail />
      </section>

      {/* ------------------------------------------------ thesis */}
      <section className="shell grid gap-12 py-24 md:grid-cols-[0.9fr,1.1fr] md:py-32">
        <Reveal>
          <p className="eyebrow">Operating thesis</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-body md:text-5xl">
            Business first.
            <br />
            Technology <em className="text-pulse">second.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-mist">
            <p>
              Most enterprise software is built by people who have never closed a
              month-end, chased a missing delivery note, or defended a
              reconciliation in an audit. It shows.
            </p>
            <p>
              Every system I architect starts from the operational problem — the
              leakage, the blindness, the manual grind — and works backward to
              the technology. AI, dashboards, and databases are instruments. The
              music is the operation itself.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------ counters */}
      <section className="hairline">
        <div className="shell grid grid-cols-2 gap-10 py-16 md:grid-cols-4 md:py-20">
          <Reveal><Counter value={10} suffix="+" label="Years in operations" /></Reveal>
          <Reveal delay={0.08}><Counter value={7} label="Systems in production" /></Reveal>
          <Reveal delay={0.16}><Counter value={3} label="Industries served" /></Reveal>
          <Reveal delay={0.24}><Counter value={1} label="Accountable architect" /></Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ featured systems */}
      <section className="hairline">
        <div className="shell py-24 md:py-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Selected systems</p>
                <h2 className="mt-5 font-display text-4xl text-body md:text-5xl">
                  Built for the control room
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
                <Link href={`/systems/${s.slug}`} className="panel panel-hover block h-full overflow-hidden">
                  <div className="border-b border-line bg-ink-900/50">
                    <Schematic kind={s.schematic} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-caps text-dim">
                      <span>{s.code}</span>
                      <span className="flex items-center gap-2 text-kawa">
                        <span className="status-dot online" aria-hidden />
                        {s.status}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-body">{s.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{s.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ stack + focus */}
      <section className="hairline">
        <div className="shell grid gap-12 py-24 md:grid-cols-[1.1fr,0.9fr] md:py-32">
          <div>
            <Reveal>
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-5 font-display text-4xl text-body md:text-5xl">
                An enterprise stack,
                <br />
                operated by one architect
              </h2>
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
              A live register of what is on the bench right now — the same
              status discipline my systems apply to warehouses, applied to my
              own work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="hairline">
        <div className="shell py-24 text-center md:py-32">
          <Reveal>
            <p className="eyebrow">Engagement</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight text-body md:text-6xl">
              If your operation runs on exports and instinct,
              <br className="hidden md:block" /> it can run on{" "}
              <em className="text-pulse">systems.</em>
            </h2>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start a conversation <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
