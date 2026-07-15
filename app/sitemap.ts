import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { systems } from "@/lib/systems";
import { articles } from "@/lib/content";

// Required for `output: export` (GitHub Pages build).
export const dynamic = "force-static";

/**
 * site.url already includes the "/Junmarvi" segment on GitHub Pages, so the
 * absolute URLs resolve correctly on both hosts. Update NEXT_PUBLIC_SITE_URL
 * to https://junmarvi.com once the custom domain is live.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = ["", "/about", "/systems", "/experience", "/projects", "/insights", "/contact"];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r || "/"}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));

  const systemEntries: MetadataRoute.Sitemap = systems.map((s) => ({
    url: `${base}/systems/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...systemEntries, ...articleEntries];
}
