import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "From EPC material control to enterprise systems architecture — the operations-first story behind Junmarvi Tampac.",
};

const arenas = [
  { k: "Construction & EPC", v: "A decade of delivery-side reality: sites, warehouses, and the paper trail between them." },
  { k: "Enterprise workflows", v: "MTO → PO → GRN → issue. Approval chains, audit cadences, month-end closes." },
  { k: "ERP systems", v: "Living inside them daily — and bridging the gap between their records and the truth." },
  { k: "Procurement", v: "Commitments, receipts, invoices, and the discipline of the 3-way match." },
  { k: "Inventory & assets", v: "Stock accuracy, custody chains, and the cost of every uncounted item." },
  { k: "Logistics & data", v: "Movement, latency, and the telemetry an operation emits when you bother to listen." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I learned operations the honest way — by being accountable for them."
        lede="This is not a coder's story. It is an operator's story that eventually required software."
      />

      <section className="shell grid gap-14 pb-24 md:grid-cols-[1.1fr,0.9fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-mist">
            <p>
              For more than ten years I worked inside the machinery of
              construction and EPC delivery in the Gulf — as a senior material
              controller responsible for the full life of a material: from the
              engineering take-off, through the purchase order, into the
              warehouse on a goods receipt, and out to site on an issue slip.
              When the numbers did not reconcile, that was my problem. When the
              audit came, that was my desk.
            </p>
            <p>
              That accountability teaches things no bootcamp can. Where
              procurement leaks money. Why the ERP and the warehouse disagree.
              Which report an executive actually reads, and which one exists to
              be filed. How a single missing delivery note becomes a
              six-figure dispute eight months later.
            </p>
            <p>
              The software came from frustration. The tools my work needed did
              not exist, so I started building them — first automations to
              survive my own workload, then reconciliation engines, then
              dashboards, then full platforms. Each system was designed around a
              real business need I had personally carried, which is precisely
              what makes them different from software imagined in a product
              meeting.
            </p>
            <p>
              Today I architect enterprise systems and direct AI as an
              engineering force — under documented standards, security rules,
              and the same audit discipline I learned in the warehouse.{" "}
              <strong className="text-body">
                I understand the business first. The technology exists to serve
                it.
              </strong>
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-6">Where the judgement comes from</p>
          </Reveal>
          <div className="space-y-4">
            {arenas.map((a, i) => (
              <Reveal key={a.k} delay={0.1 + i * 0.05}>
                <div className="panel panel-hover p-5">
                  <h3 className="font-mono text-[11px] uppercase tracking-caps text-pulse">{a.k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{a.v}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <div className="panel p-5">
                <h3 className="font-mono text-[11px] uppercase tracking-caps text-kawa">Credentials</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mist">
                  <li>BSc in Computer Science — Negros Oriental State University</li>
                  <li>ISC2 Certified in Cybersecurity (CC)</li>
                  <li>Fortinet cybersecurity certifications</li>
                  <li>Computer Engineering Professional Diploma</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="hairline">
        <div className="shell flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-body md:text-4xl">
              The differentiator is not the stack. It is a decade of knowing
              exactly <em className="text-pulse">which problems are worth solving.</em>
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
