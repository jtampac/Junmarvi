import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client and brand web work: Black Pearl Capital, Solomon Pagunsan, Cylingas, RF Builders, and future enterprise projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Web properties, built to institutional standards."
        lede="Alongside enterprise systems, I design and ship brand platforms — sites whose job is credibility, and whose craft is invisible until you compare them to everything else."
      />

      <section className="shell grid gap-6 pb-24 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <article className="panel panel-hover flex h-full flex-col overflow-hidden">
              <div
                className="relative flex h-44 items-end justify-between border-b border-line p-6"
                style={{
                  background:
                    p.accent === "pulse"
                      ? "radial-gradient(420px 200px at 20% 0%, rgba(77,163,255,0.16), transparent 70%), #0A101D"
                      : "radial-gradient(420px 200px at 20% 0%, rgba(117,228,75,0.12), transparent 70%), #0A101D",
                }}
              >
                <span
                  className={`font-display text-6xl leading-none ${
                    p.accent === "pulse" ? "text-pulse/80" : "text-kawa/80"
                  }`}
                  aria-hidden
                >
                  {p.initials}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-caps text-dim">
                  {p.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-2xl text-body">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
