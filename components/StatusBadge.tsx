import { statusTone, type SystemStatus } from "@/lib/systems";

/**
 * Neutral maturity badge for systems and projects.
 * Never implies a live / in-production state — the dot tone only signals
 * development stage, not operational status.
 */
export default function StatusBadge({
  status,
  tone,
}: {
  status: string;
  tone?: "dev" | "proto" | "concept" | "neutral";
}) {
  const dot = tone ?? statusTone[status as SystemStatus] ?? "neutral";
  return (
    <span className="badge">
      <span className={`status-dot ${dot}`} aria-hidden />
      {status}
    </span>
  );
}
