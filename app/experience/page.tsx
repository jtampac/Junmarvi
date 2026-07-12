import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { eras } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A capability timeline: from senior material control in EPC operations to AI engineering and business intelligence.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="One trajectory, six capabilities."
        lede="Not a list of jobs — a compounding sequence. Each stage was built on top of the last, and none of it has been retired."
      />

      <section className="shell pb-24">
        <ol className="relative ml-3 border-l border-line md:ml-6">
          {eras.map((e, i) => (
            <li key={e.title} className="relative pb-14 pl-8 last:pb-0 md:pl-14">
              <span
                aria-hidden
                className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border border-pulse bg-ink-950"
                style={{ boxShadow: "0 0 10px rgba(77,163,255,0.55)" }}
              />
              <Reveal delay={0.05 * i}>
                <div className="panel panel-hover p-7 md:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-caps text-pulse">
                      Stage {String(i + 1).padStart(2, "0")} · {e.period}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-caps text-dim">
                      {e.arena}
                    </p>
                  </div>
                  <h2 className="mt-4 font-display text-3xl text-body md:text-4xl">{e.title}</h2>
                  <p className="mt-4 max-w-3xl leading-relaxed text-mist">{e.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
