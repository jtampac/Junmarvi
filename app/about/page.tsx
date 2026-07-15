import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { descriptors } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Junmarvi Tampac is a Systems and Operations Solutions Developer. From hands-on material control and operations to building practical systems, data, and workflow tools.",
};

const focusAreas = [
  "Operations systems",
  "Data and reporting",
  "Workflow automation",
  "System governance",
  "Practical security controls",
  "Business applications",
  "Independent digital products",
];

const devApproach = [
  { k: "PHP & Laravel", v: "Building application back-ends and internal tools." },
  { k: "PostgreSQL & SQL", v: "Structured data, queries, and reconciliation logic." },
  { k: "Next.js & web", v: "Front-ends, dashboards, and websites." },
  { k: "Excel & Power Query", v: "Refreshable operational data and reporting." },
  { k: "Git & GitHub", v: "Version control and documented workflows." },
  { k: "Docker", v: "Used where appropriate for consistent environments." },
  { k: "AI-assisted workflows", v: "Practical experience directing AI within documented standards." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An operator who learned to build the systems the work needed."
        lede="This is an operations story that eventually required software — not a software story looking for a problem."
      />

      {/* name + title */}
      <section className="shell pb-12">
        <Reveal>
          <div className="panel flex flex-wrap items-center justify-between gap-4 p-6 md:p-7">
            <div>
              <p className="font-display text-3xl text-body">Junmarvi Tampac</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-caps text-pulse">
                Systems and Operations Solutions Developer
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {descriptors.slice(0, 5).map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-dim"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* background + transition */}
      <section className="shell grid gap-14 pb-8 md:grid-cols-[1.1fr,0.9fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-mist">
            <h2 className="eyebrow">Background</h2>
            <p>
              My work started from direct involvement in operations. For years I
              have been responsible for material control, inventory, procurement
              coordination, assets, manpower records, operational reporting, and
              the practical requirements of project sites — as a senior material
              controller handling data and reporting. When numbers did not
              reconcile, that was my problem. When an audit came, that was my desk.
            </p>
            <h2 className="eyebrow pt-4">How the systems started</h2>
            <p>
              The software came from repeated operational issues. The tools the
              work needed did not exist in a usable form, so I started building
              them — first structured reports and automations to survive my own
              workload, then databases, dashboards, and reconciliation tools, and
              eventually custom systems designed around real workflows I had
              personally carried.
            </p>
            <p>
              That grounding is the point. Each system is designed around a real
              business need rather than an imagined one, which is what makes the
              work practical instead of decorative.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <h2 className="eyebrow mb-6">Current focus</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="panel p-6">
              <ul className="space-y-3">
                {focusAreas.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm leading-relaxed text-mist">
                    <span className="status-dot dev shrink-0" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="panel mt-6 p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-caps text-mist">
                Education & training
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mist">
                <li>BSc in Computer Science — Negros Oriental State University</li>
                <li>ISC2 Certified in Cybersecurity (CC)</li>
                <li>Fortinet cybersecurity training</li>
                <li>Computer Engineering professional diploma</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* development approach */}
      <section className="hairline">
        <div className="shell py-20">
          <Reveal>
            <h2 className="eyebrow">Development approach</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
              I build with a combination of tools, chosen for the job rather than
              for a résumé. These are technologies I work with and currently
              develop in — not areas I claim mastery over.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devApproach.map((d, i) => (
              <Reveal key={d.k} delay={(i % 3) * 0.06}>
                <div className="panel h-full p-5">
                  <h3 className="font-mono text-[11px] uppercase tracking-caps text-pulse">{d.k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{d.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline">
        <div className="shell flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-body md:text-4xl">
              The advantage is knowing, first-hand,{" "}
              <em className="text-pulse">which problems are worth solving.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/systems" className="btn-primary shrink-0">
              See the systems <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
