import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import StatusBadge from "@/components/StatusBadge";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Independent web and brand development — business and professional websites built and delivered solo. Each entry lists role, status, contribution, and available evidence.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Independent web and brand development."
        lede="Alongside the systems work, I design and build websites for small businesses and individuals. Each entry states my role, its status, and what can be shown as evidence — no invented links or screenshots."
      />

      <section className="shell grid gap-6 pb-24 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <article className="panel flex h-full flex-col overflow-hidden">
              <div
                className="relative flex h-40 items-end justify-between border-b border-line p-6"
                style={{
                  background:
                    p.accent === "pulse"
                      ? "radial-gradient(420px 200px at 20% 0%, rgba(77,163,255,0.12), transparent 70%), #0A101D"
                      : "radial-gradient(420px 200px at 20% 0%, rgba(117,228,75,0.09), transparent 70%), #0A101D",
                }}
              >
                <span
                  className={`font-display text-6xl leading-none ${
                    p.accent === "pulse" ? "text-pulse/70" : "text-kawa/70"
                  }`}
                  aria-hidden
                >
                  {p.initials}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-caps text-dim">
                  {p.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-2xl text-body">{p.name}</h2>
                  <StatusBadge status={p.status} tone="neutral" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{p.contribution}</p>

                <dl className="mt-5 space-y-2.5 border-t border-line pt-5 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-caps text-dim">Role</dt>
                    <dd className="text-mist">{p.role}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-caps text-dim">Built with</dt>
                    <dd className="text-mist">{p.tech.join(" · ")}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-caps text-dim">Evidence</dt>
                    <dd className="text-mist">{p.evidence}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
