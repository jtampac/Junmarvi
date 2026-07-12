import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Writing on AI engineering, construction technology, ERP, operations, automation, security, and business intelligence.",
};

const topics = [
  "AI Engineering",
  "Construction Technology",
  "ERP",
  "Operations",
  "Automation",
  "Security",
  "Business Intelligence",
];

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Field notes from the intersection."
        lede="Where operations, data, and AI meet — written by someone accountable for all three. No hype, no recycled thought-leadership; just what production systems teach."
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
