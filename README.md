# Junmarvi R. Tampac — Personal Brand Website

A handcrafted, multi-page executive website positioning Junmarvi R. Tampac as an
**Operations Analytics Specialist** — combining construction operations, ERP systems,
reporting, analytics, automation, and practical AI solutions.

Built with pure **HTML, CSS, and JavaScript**. No frameworks, no build step, no
dependencies. Designed to stay premium and timeless for years.

---

## Design

- **Identity:** "The Control Sheet" — a precision engineering / operations-document
  aesthetic (drafting grids, registration ticks, dashboard motifs, mono data labels).
- **Palette:** Navy `#0F2B46` · Brass `#C69C4D` · Paper `#F8F8F6` · Slate `#556B7A` · Ink `#1F2933`
- **Type:** Playfair Display (headings) · Inter (body) · IBM Plex Mono (data/labels), via Google Fonts.

## Pages

```
index.html        Home          resume.html       Resume
about.html        About         insights.html     Insights
expertise.html    Expertise     contact.html      Contact
projects.html     Projects
projects/         9 project case-study pages
assets/css        styles.css
assets/js         main.js
assets/images     your images (placeholders used until added)
assets/Junmarvi_Tampac_CV.pdf   downloadable CV
```

## Add your own images

The site ships with clean CSS/SVG placeholders so nothing looks broken. To use real
photos, drop files into `assets/images/` (see `assets/images/README.txt`) and replace
the placeholder blocks where noted in the HTML (search for `portrait` and
`Dashboard preview placeholder`).

## Deploy to GitHub Pages

1. Create a repository (e.g. `junmarvitampac.github.io` for a user site, or any name
   for a project site).
2. Commit all files at the repository root:
   ```bash
   git init
   git add .
   git commit -m "Launch personal brand website"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → `main` / root**.
4. Your site goes live at `https://<you>.github.io/<repo>/`.

> The included `.nojekyll` file tells GitHub Pages to serve files as-is.
> After deploying, update the URL in `sitemap.xml`, `robots.txt`, and the canonical /
> Open Graph tags (search the HTML for `junmarvitampac.github.io`).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

---

© Junmarvi R. Tampac · Dubai, United Arab Emirates
