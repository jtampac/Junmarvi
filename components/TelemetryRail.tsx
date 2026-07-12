import { telemetry } from "@/lib/site";

/**
 * Signature element: a live-feel operations telemetry rail.
 * The vocabulary is real material-control language (MTO, PO, GRN, 3-way match) —
 * it encodes what the systems on this site actually do.
 */
export default function TelemetryRail() {
  const items = [...telemetry, ...telemetry]; // duplicated for seamless loop
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink-900/60"
      aria-label="Operations telemetry"
    >
      <div className="ticker-track flex w-max items-center gap-10 whitespace-nowrap py-2.5 pl-10">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-caps">
            <span className={`status-dot ${t.state}`} aria-hidden />
            <span className="text-dim">{t.label}</span>
            <span className={t.state === "alert" ? "text-alert" : "text-mist"}>{t.value}</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
