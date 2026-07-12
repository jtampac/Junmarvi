# Junmarvi Tampac — Digital Headquarters

Premium personal brand website for an Enterprise Systems Architect and
AI-Directed Engineer. Next.js 16 (App Router) · React 19 · TypeScript ·
TailwindCSS · Framer Motion.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # native production build (Vercel / localhost `npm start`)
npm run build:pages  # static export for GitHub Pages → out/ (base path /Junmarvi)
npm start            # serve the `npm run build` output
```

## Before going live — 5-minute checklist

1. **Portrait** — drop your professional photo at
   `public/images/portrait.jpg` (4:5 ratio, ~1200×1500px). Until then, an
   architect's nameplate renders in its place (never a broken image).
2. **`lib/site.ts`** — update `url`, `email`, and `linkedin` to your real
   production domain and handles. Everything else on the site reads from
   this one file.
3. **System screenshots (optional)** — each system currently ships with a
   custom SVG schematic as its identity mark. To add real product
   screenshots, place them in `public/images/systems/` and extend the
   system brief page (`app/systems/[slug]/page.tsx`) with a gallery block.
4. **Deploy** — Vercel is the primary host: import the repo (zero config,
   native build) and set `NEXT_PUBLIC_SITE_URL` to the production domain so
   canonical/OG metadata resolve correctly. GitHub Pages is the backup:
   every push to `main` triggers `.github/workflows/deploy-pages.yml`,
   which publishes the static export to https://jtampac.github.io/Junmarvi/
   (repo setting: Settings → Pages → Source → GitHub Actions). Self-host:
   `npm run build && npm start` behind a reverse proxy.

## Structure

```
app/
  page.tsx               Home — hero, thesis, counters, systems, stack, focus
  about/                 Operations-first story
  systems/               Systems registry + per-system briefs ([slug])
  experience/            Capability timeline
  projects/              Client & brand web work
  insights/              Articles index + article pages ([slug])
  contact/               Channels, availability, location
components/              Nav, Footer, Reveal, Counter, TelemetryRail,
                         TerminalCard, Schematic, PortraitFrame, PageHeader
lib/
  site.ts                Identity, telemetry, stack, current focus  ← edit me
  systems.ts             All seven system case studies              ← edit me
  content.ts             Projects, experience eras, articles        ← edit me
```

## Design system

- **Palette** — near-black navy inks (`ink-950…700`), semi-neon blue
  `pulse #4DA3FF`, Kawasaki green `kawa #75E44B`, red `alert #FF5C5C`
  reserved for security/system flags only.
- **Type** — Instrument Serif (display) · Instrument Sans (body) ·
  IBM Plex Mono (telemetry, labels, terminal).
- **Signature** — the operations telemetry rail: live-feel status ticker
  speaking real material-control language (MTO → PO → GRN → issue,
  3-way match, weekly audit).
- Reduced-motion is respected globally; keyboard focus is always visible.
