import { signals } from "@/lib/site";

/**
 * A quiet capability rail. It lists the practice's working domains and
 * principles — stated as capabilities, not as live production telemetry.
 * The wording is deliberately factual: no "ONLINE", "STREAMING", or
 * "PASSED" status claims that would imply live enterprise systems.
 */
export default function SignalRail() {
  const items = [...signals, ...signals]; // duplicated for a seamless loop
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink-900/60"
      aria-label="Practice focus areas"
    >
      <ul className="ticker-track flex w-max items-center gap-8 whitespace-nowrap py-2.5 pl-8">
        {items.map((t, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-caps text-mist"
          >
            <span className="status-dot dev" aria-hidden />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
