// Two build modes:
//   GITHUB_PAGES=true → static export to out/ for https://jtampac.github.io/Junmarvi/  (npm run build:pages)
//   otherwise         → native production build for Vercel / `next start` on localhost (npm run build)
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/Junmarvi" : "";

// Canonical origin for metadata: explicit env var > Pages URL > localhost.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isPages ? "https://jtampac.github.io/Junmarvi" : "http://localhost:3000");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: isPages ? { unoptimized: true } : { formats: ["image/avif", "image/webp"] },
  ...(isPages && {
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath,
  }),
};
export default nextConfig;
