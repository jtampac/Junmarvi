# Junmarvi — Systems, Operations, Data, Security, and Digital Solutions

The website of Junmarvi Tampac, a **Systems and Operations Solutions Developer**.
An independent systems practice — practical digital systems built around real
operational needs. Next.js 16 (App Router) · React 19 · TypeScript ·
TailwindCSS · Framer Motion.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # native production build (Vercel / localhost `npm start`)
npm run build:pages  # static export for GitHub Pages → out/ (base path /Junmarvi)
npm start            # serve the `npm run build` output
npm run typecheck    # tsc --noEmit
```

## Configuration

- **Site URL / canonical + OG metadata** — driven by `NEXT_PUBLIC_SITE_URL`.
  - Default (Vercel / local) fallback: `https://junmarvi.com`
  - GitHub Pages: `https://jtampac.github.io/Junmarvi`
  - Set `NEXT_PUBLIC_SITE_URL=https://junmarvi.com` on the host once the custom
    domain is live. `app/sitemap.ts` and `app/robots.ts` follow it automatically.
- **Phone (private)** — never committed. Set `NEXT_PUBLIC_CONTACT_PHONE` in
  `.env.local` (gitignored, inlined at build time). If it is unset, the phone
  contact option is hidden entirely.
- **Portrait** — drop a professional photo at `public/images/portrait.jpg`
  (4:5 ratio, ~1200×1500px). Until then a nameplate renders in its place — the
  site never shows a broken image.

## Content is centralized

All copy lives in three files. Edit these, not the pages.

```
lib/
  site.ts      Brand, positioning, capabilities, approach, signals, stack, focus
  systems.ts   Independent systems — each with status, users, capabilities,
               what works now, and what remains under development
  content.ts   Projects, experience (employment + independent work), articles
```

## Structure

```
app/
  page.tsx               Home — hero, markers, capability areas, approach, systems, tools
  about/                 Background, focus, development approach, education
  systems/               Systems list + per-system briefs ([slug])
  experience/            Professional employment vs independent systems work
  projects/              Selected independent web & brand work
  insights/              Articles index + article pages ([slug])
  contact/               Channels, discussion areas, location
  sitemap.ts robots.ts   SEO metadata routes (follow NEXT_PUBLIC_SITE_URL)
components/              Nav, Footer, Reveal, SignalRail (TelemetryRail),
                         TerminalCard, Schematic, PortraitFrame, PageHeader,
                         StatusBadge
```

## Content standard

Every statement on the site is meant to be defensible in a real conversation,
interview, or client meeting. Systems are labelled by honest maturity (Active
Development, Working Prototype, Internal Tool, Operational Concept, Private
Workspace) rather than claimed as in-production company products. No invented
statistics, credentials, or evidence links.

## Deploy

- **Vercel (primary)** — import the repo (zero config, native build). Set
  `NEXT_PUBLIC_SITE_URL` to the production domain and
  `NEXT_PUBLIC_CONTACT_PHONE` if the phone option is wanted.
- **GitHub Pages (backup)** — every push to `main` runs
  `.github/workflows/deploy-pages.yml`, publishing the static export to
  `https://jtampac.github.io/Junmarvi/` (Settings → Pages → Source → GitHub
  Actions).
- **Self-host** — `npm run build && npm start` behind a reverse proxy.

## Design system

- **Palette** — near-black navy inks (`ink-950…700`), restrained blue
  `pulse #4DA3FF`, green `kawa #75E44B`, red `alert #FF5C5C` reserved for
  security/system flags. Status dots use neutral tones and no glow.
- **Type** — Sora (display) · Inter (body) · JetBrains Mono (labels,
  terminal).
- Reduced-motion is respected globally; keyboard focus is always visible.
