import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about enterprise systems, operations intelligence, or AI platform engagements. Based in Dubai, working across the GCC.",
};

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
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "Direct line. Gulf Standard Time (GMT+4).",
    external: false,
  },
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
        title="Bring me the operational problem. I will bring the system."
        lede="The best first message is not a job title — it is a description of where your operation leaks time, money, or truth."
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
                <span>Availability</span>
                <span className="flex items-center gap-2 text-kawa">
                  <span className="status-dot online" aria-hidden />
                  Open
                </span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-mist">
                {site.availability}
              </p>
              <ul className="mt-7 space-y-3 font-mono text-[11px] uppercase tracking-caps text-mist">
                <li className="flex items-center gap-3">
                  <span className="text-pulse">▸</span> Enterprise systems architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pulse">▸</span> Operations & procurement intelligence
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pulse">▸</span> AI platform engineering
                </li>
              </ul>
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
                On the ground in the GCC. Remote engagements worldwide;
                Gulf Standard Time (GMT+4).
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="font-mono text-[10px] uppercase tracking-caps text-dim">
              Response protocol · Inbound briefs acknowledged within one
              business day.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
