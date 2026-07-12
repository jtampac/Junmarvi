// Two build modes:
//   GITHUB_PAGES=true → static export to out/ for https://jtampac.github.io/Junmarvi/  (npm run build)
//   otherwise         → server build for `next start` on localhost                     (npm run build:local)
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/Junmarvi" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: isPages ? { unoptimized: true } : { formats: ["image/avif", "image/webp"] },
  ...(isPages && {
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath,
  }),
};
export default nextConfig;
