import { useId } from "react";

/**
 * Architecture vignettes rendered as SVG "nameplates" for each system.
 * Drawn in the site's control-room language: nodes, flows, and status marks.
 * If real product screenshots are added later (public/images/systems/*),
 * they can sit alongside these — the schematic stays as the identity mark.
 */

const BLUE = "#4DA3FF";
const GREEN = "#75E44B";
const RED = "#FF5C5C";
const LINE = "rgba(148,166,204,0.30)";
const FAINT = "rgba(148,166,204,0.12)";
const TEXT = "#94A1BB";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  const gridId = useId();
  return (
    <svg
      viewBox="0 0 360 200"
      role="img"
      aria-label={label}
      className="h-auto w-full"
    >
      <defs>
        <pattern id={gridId} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke={FAINT} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="360" height="200" fill={`url(#${gridId})`} />
      {children}
    </svg>
  );
}

const Node = ({ x, y, w = 64, label, tone = LINE }: { x: number; y: number; w?: number; label: string; tone?: string }) => (
  <g>
    <rect x={x} y={y} width={w} height="26" rx="6" fill="rgba(13,20,36,0.9)" stroke={tone} strokeWidth="1" />
    <text x={x + w / 2} y={y + 17} textAnchor="middle" fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="1">
      {label}
    </text>
  </g>
);

const Wire = ({ d, tone = BLUE }: { d: string; tone?: string }) => (
  <path d={d} fill="none" stroke={tone} strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
);

const Dot = ({ cx, cy, tone = GREEN }: { cx: number; cy: number; tone?: string }) => (
  <circle cx={cx} cy={cy} r="3" fill={tone} opacity="0.9" />
);

export default function Schematic({ kind }: { kind: string }) {
  switch (kind) {
    case "flow":
      return (
        <Frame label="Material flow schematic: MTO to PO to GRN to issue, reconciled">
          <Node x={20} y={40} label="MTO" />
          <Node x={110} y={40} label="PO" />
          <Node x={200} y={40} label="GRN" />
          <Node x={290} y={40} w={50} label="ISSUE" />
          <Wire d="M84 53 H110" /><Wire d="M174 53 H200" /><Wire d="M264 53 H290" />
          <Node x={130} y={130} w={110} label="RECON ENGINE" tone={BLUE} />
          <Wire d="M52 66 V143 H130" tone={LINE} />
          <Wire d="M142 66 V130" tone={LINE} />
          <Wire d="M232 66 V130" tone={LINE} />
          <Wire d="M315 66 V143 H240" tone={LINE} />
          <Dot cx={330} cy={143} />
          <text x={20} y={185} fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="2">CONTROL TOWER · SCHEMATIC</text>
          <Dot cx={175} cy={181} tone={BLUE} />
        </Frame>
      );
    case "shield":
      return (
        <Frame label="Governance schematic: standards guarding AI workflow">
          <path d="M180 30 L230 48 V95 C230 130 205 152 180 162 C155 152 130 130 130 95 V48 Z" fill="rgba(13,20,36,0.9)" stroke={BLUE} strokeWidth="1" />
          <text x={180} y={92} textAnchor="middle" fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="1">STANDARDS</text>
          <text x={180} y={108} textAnchor="middle" fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="1">SECURITY</text>
          <Node x={20} y={80} w={70} label="AI AGENT" />
          <Node x={270} y={80} w={70} label="PRODUCTION" />
          <Wire d="M90 93 H130" /><Wire d="M230 93 H270" tone={GREEN} />
          <Dot cx={180} cy={40} tone={GREEN} />
          <Dot cx={60} cy={130} tone={RED} />
          <text x={72} y={134} fontSize="8" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="1">UNGOVERNED — BLOCKED</text>
        </Frame>
      );
    case "ledger":
      return (
        <Frame label="Inventory ledger schematic: receipts, sales, adjustments reconciled to stock">
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={24} y={36 + i * 30} width={210} height={20} rx="4" fill="rgba(13,20,36,0.9)" stroke={LINE} />
              <rect x={30} y={42 + i * 30} width={60 + i * 18} height={8} rx="2" fill={i === 2 ? BLUE : FAINT} />
              <Dot cx={222} cy={46 + i * 30} tone={i === 3 ? RED : GREEN} />
            </g>
          ))}
          <Node x={262} y={72} w={80} label="STOCK TRUTH" tone={BLUE} />
          <Wire d="M234 85 H262" />
          <text x={24} y={180} fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="2">EVERY COUNT RECONCILES</text>
        </Frame>
      );
    case "grid":
      return (
        <Frame label="Cohort grid schematic: learner progress telemetry">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const x = 28 + (i % 4) * 80;
            const y = 40 + Math.floor(i / 4) * 60;
            const tone = i === 5 ? RED : i % 3 === 0 ? BLUE : LINE;
            return (
              <g key={i}>
                <rect x={x} y={y} width={60} height={40} rx="6" fill="rgba(13,20,36,0.9)" stroke={tone} />
                <rect x={x + 8} y={y + 26} width={(i + 2) * 5} height={5} rx="2" fill={i === 5 ? RED : GREEN} opacity="0.85" />
              </g>
            );
          })}
          <text x={28} y={172} fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="2">EXCEPTIONS FIRST · AVERAGES SECOND</text>
        </Frame>
      );
    case "pulse":
      return (
        <Frame label="Consumption analytics schematic: baseline and deviation flag">
          <polyline
            points="20,140 60,132 100,138 140,120 180,126 220,96 260,110 300,70 340,84"
            fill="none" stroke={BLUE} strokeWidth="1.5"
          />
          <polyline
            points="20,150 340,118"
            fill="none" stroke={LINE} strokeWidth="1" strokeDasharray="4 5"
          />
          <Dot cx={300} cy={70} tone={RED} />
          <text x={252} y={56} fontSize="8" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="1">DEVIATION FLAG</text>
          <text x={20} y={182} fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="2">BASELINE VS ACTUAL BURN</text>
          <Dot cx={140} cy={120} /><Dot cx={220} cy={96} />
        </Frame>
      );
    case "stack":
      return (
        <Frame label="Warehouse KPI schematic: transaction layers producing metrics">
          {[0, 1, 2].map((i) => (
            <rect key={i} x={40 + i * 10} y={110 - i * 26} width={180} height={22} rx="5" fill="rgba(13,20,36,0.9)" stroke={i === 2 ? BLUE : LINE} />
          ))}
          <text x={130} y={72} fontSize="8" fontFamily="IBM Plex Mono, monospace" fill={TEXT} textAnchor="middle" letterSpacing="1">TRANSACTIONS</text>
          <Node x={272} y={58} w={68} label="KPI" tone={GREEN} />
          <Wire d="M240 72 H272" tone={GREEN} />
          {["GRN LATENCY", "STOCK ACCURACY", "ISSUE TURNAROUND"].map((t, i) => (
            <text key={t} x={40} y={158 + i * 14} fontSize="8" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="1">
              ▸ {t}
            </text>
          ))}
          <Dot cx={330} cy={155} /><Dot cx={330} cy={169} /><Dot cx={330} cy={183} tone={RED} />
        </Frame>
      );
    case "gears":
    default:
      return (
        <Frame label="Automation schematic: scheduled extraction, matching, exceptions">
          <Node x={20} y={50} w={70} label="ERP" />
          <Node x={145} y={50} w={80} label="EXTRACT" tone={BLUE} />
          <Node x={270} y={50} w={70} label="MATCH" tone={BLUE} />
          <Wire d="M90 63 H145" /><Wire d="M225 63 H270" />
          <Node x={145} y={130} w={80} label="EXCEPTIONS" />
          <Wire d="M305 76 V143 H225" tone={GREEN} />
          <circle cx={110} cy={143} r="14" fill="none" stroke={LINE} />
          <text x={110} y={147} textAnchor="middle" fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT}>⟳</text>
          <text x={20} y={186} fontSize="9" fontFamily="IBM Plex Mono, monospace" fill={TEXT} letterSpacing="2">RUNS UNATTENDED · ON SCHEDULE</text>
          <Dot cx={330} cy={182} />
        </Frame>
      );
  }
}
