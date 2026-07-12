"use client";

import { useState } from "react";

/**
 * Hero portrait plate.
 * Drop your professional photo at /public/images/portrait.jpg (4:5 ratio,
 * ~1200×1500px recommended). Until the file exists, an architect's
 * nameplate renders in its place — the site never shows a broken image.
 */
export default function PortraitFrame() {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="panel relative overflow-hidden p-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-ink-800">
        {missing ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-6">
            <span
              aria-hidden
              className="flex h-24 w-24 items-center justify-center rounded-2xl border border-line-strong font-display text-6xl text-body"
            >
              JT
            </span>
            <div className="text-center font-mono text-[10px] uppercase tracking-caps text-dim">
              <p>Junmarvi Tampac</p>
              <p className="mt-1 text-pulse">Solutions Architect</p>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(300px 220px at 50% 20%, rgba(77,163,255,0.10), transparent 70%)",
              }}
            />
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/images/portrait.jpg"
            alt="Junmarvi Tampac"
            className="h-full w-full object-cover"
            onError={() => setMissing(true)}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"
        />
      </div>
      <figcaption className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[10px] uppercase tracking-caps text-dim">
        <span>Operator → Architect</span>
        <span className="text-kawa">EST. GCC</span>
      </figcaption>
    </figure>
  );
}
