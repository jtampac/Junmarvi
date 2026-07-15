// Two build modes:
//   GITHUB_PAGES=true → static export to out/ for https://jtampac.github.io/Junmarvi/  (npm run build:pages)
//   otherwise         → native production build for Vercel / `next start` on localhost (npm run build)
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/Junmarvi" : "";

// Canonical origin for metadata: explicit env var > Pages URL > production domain.
// NEXT_PUBLIC_SITE_URL still overrides this if set on the host.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isPages ? "https://jtampac.github.io/Junmarvi" : "https://junmarvi.com");

// Security response headers for the SERVER build (Vercel / `next start`). A static
// export (GitHub Pages) cannot emit response headers from Next, so these are set
// by the host there — the runbook documents that: for Pages, mirror these via the
// hosting/CDN config; on a custom domain/CDN, add the same set. HSTS is included
// only in the server build (HTTPS-terminated by the host).
const securityHeaders = [
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: isPages ? { unoptimized: true } : { formats: ["image/avif", "image/webp"] },
  ...(isPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
      }
    : {
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        },
      }),
};
export default nextConfig;
