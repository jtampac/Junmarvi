import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="hairline mt-28">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-body">Junmarvi</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-caps text-dim">
            Systems, Operations, Data, Security &amp; Digital Solutions
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-dim">
            An independent systems practice — practical digital systems built
            around real operational needs, drawing on hands-on operations and
            material-control experience.
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
          <span>© {new Date().getFullYear()} Junmarvi · United Arab Emirates</span>
          <span>Independent systems practice</span>
        </div>
      </div>
    </footer>
  );
}
