import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical writing from direct work — operations systems, inventory and material control, reporting, data governance, system design, security controls, and AI-assisted development.",
};

const topics = [
  "Operations",
  "Procurement",
  "Reporting",
  "Data Governance",
  "System Design",
  "Security",
  "AI-assisted Development",
];

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Practical notes from the actual work."
        lede="Writing on operations, material control, reporting, system design, security controls, and AI-assisted development — drawn from building independent systems, not from recycled thought-leadership."
      />

      <div className="shell pb-12">
        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <li key={t} className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-dim">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <section className="shell space-y-6 pb-24">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.06}>
            <Link href={`/insights/${a.slug}`} className="panel panel-hover block p-7 md:p-9">
              <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-caps text-dim">
                <span className="text-pulse">{a.topic}</span>
                <span>{a.readingTime}</span>
              </div>
              <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-body md:text-4xl">
                {a.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-mist">{a.excerpt}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-caps text-pulse">
                Read article <span aria-hidden>→</span>
              </p>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
