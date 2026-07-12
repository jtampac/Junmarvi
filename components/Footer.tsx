import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="hairline mt-28">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-body">Junmarvi Tampac</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-dim">
            Enterprise systems architecture and operations intelligence — built
            from a decade inside the work, delivered with AI-directed engineering.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-caps">
          <a href={site.github} className="link-quiet" target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.linkedin} className="link-quiet" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${site.email}`} className="link-quiet">Email</a>
          <Link href="/contact" className="link-quiet">Contact</Link>
        </div>
      </div>
      <div className="hairline">
        <div className="shell flex flex-col gap-2 py-5 font-mono text-[10px] uppercase tracking-caps text-dim sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Junmarvi Tampac · {`Dubai, UAE`}</span>
          <span className="flex items-center gap-2">
            <span className="status-dot online" aria-hidden />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
