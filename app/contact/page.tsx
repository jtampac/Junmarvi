import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss operations systems, data and reporting, workflow automation, security and governance tooling, business websites, and internal tools. Based in the United Arab Emirates.",
};

const categories = [
  "Operations Systems",
  "Data and Reporting",
  "Workflow Automation",
  "Security and Governance",
  "Business Websites",
  "Internal Tools",
  "System Prototypes",
];

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Fastest route. Briefs, questions, and introductions all welcome.",
    external: false,
  },
  {
    label: "Email · Alternate",
    value: site.emailAlt,
    href: `mailto:${site.emailAlt}`,
    note: "Also monitored.",
    external: false,
  },
  ...(site.phone
    ? [
        {
          label: "Phone",
          value: site.phone,
          href: `tel:${site.phone.replace(/\s/g, "")}`,
          note: "Direct line. Gulf Standard Time (GMT+4).",
          external: false,
        },
      ]
    : []),
  {
    label: "LinkedIn",
    value: "in/junmarvitampac",
    href: site.linkedin,
    note: "Professional profile and network.",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/jtampac",
    href: site.github,
    note: "Selected public work and engineering standards.",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Describe the operational problem — that is the best place to start."
        lede="A useful first message describes where your operation loses time, money, or accuracy. I will be honest about what is realistic to build and where the practical limits are."
      />

      <section className="shell grid gap-14 pb-24 md:grid-cols-[1.05fr,0.95fr]">
        {/* channels */}
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Channels</p>
          </Reveal>
          <div className="hairline">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.05 * i}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-7 transition-colors hover:border-pulse/40"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-caps text-dim transition-colors group-hover:text-pulse">
                      {c.label}
                    </p>
                    <p className="mt-2 font-display text-2xl text-body md:text-3xl">
                      {c.value}
                    </p>
                    <p className="mt-2 text-sm text-dim">{c.note}</p>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-mist transition-transform group-hover:translate-x-1 group-hover:text-body"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* availability plate */}
        <div className="space-y-6 md:pt-12">
          <Reveal delay={0.1}>
            <div className="panel p-7 md:p-9">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-caps text-dim">
                <span>Open to discuss</span>
                <span className="flex items-center gap-2 text-mist">
                  <span className="status-dot dev" aria-hidden />
                  Available
                </span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-mist">
                {site.availability}
              </p>
              <ul className="mt-7 grid grid-cols-1 gap-3 font-mono text-[11px] uppercase tracking-caps text-mist sm:grid-cols-2">
                {categories.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span className="text-pulse">▸</span> {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-dim">
                These are areas of work, not a guarantee of a specific outcome or
                enterprise-scale delivery. Scope is agreed honestly per requirement.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="panel p-7">
              <p className="font-mono text-[10px] uppercase tracking-caps text-dim">
                Location
              </p>
              <p className="mt-3 font-display text-2xl text-body">
                {site.location}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                Based in the UAE; open to remote work. Gulf Standard Time (GMT+4).
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="font-mono text-[10px] uppercase tracking-caps text-dim">
              Messages are usually answered within a couple of business days.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
