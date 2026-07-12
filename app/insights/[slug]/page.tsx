import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { articles, getArticle } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <div className="shell pb-12 pt-36 md:pt-44">
        <Reveal>
          <Link href="/insights" className="eyebrow link-quiet">← Insights</Link>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-caps text-dim">
            <span className="text-pulse">{a.topic}</span>
            <span>{a.readingTime}</span>
            <span>By Junmarvi Tampac</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] text-body md:text-6xl">
            {a.title}
          </h1>
        </Reveal>
      </div>

      <article className="shell pb-20">
        <Reveal className="prose-dark max-w-3xl">
          {a.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2>{b.h}</h2>}
              <p>{b.p}</p>
            </div>
          ))}
        </Reveal>
      </article>

      <section className="hairline">
        <div className="shell py-16">
          <p className="eyebrow">Continue reading</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/insights/${o.slug}`} className="panel panel-hover block p-6">
                <p className="font-mono text-[10px] uppercase tracking-caps text-pulse">{o.topic}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-body">{o.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
