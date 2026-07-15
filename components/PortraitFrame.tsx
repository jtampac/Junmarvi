"use client";

import { useState } from "react";
import { basePath } from "@/lib/site";

/**
 * Portrait plate — the photo shown cleanly, with a few small blue neon dots
 * chasing each other around the frame edge. Spacing is even: N dots offset by
 * -LOOP/N via animation-delay.
 *
 * Drop a professional photo at /public/images/portrait.jpg (4:5 ratio). Until
 * the file exists, a nameplate renders instead — the site never shows a broken
 * image.
 */
const LOOP_S = 7;
const DOT_COUNT = 3;

export default function PortraitFrame() {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="panel p-2">
      <div className="portrait-frame">
        <div className="portrait-media">
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
                <p className="mt-1 text-pulse">Systems &amp; Operations Developer</p>
              </div>
            </div>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`${basePath}/images/portrait.jpg`}
              alt="Junmarvi Tampac, systems and operations developer"
              onError={() => setMissing(true)}
            />
          )}
        </div>

        {!missing &&
          Array.from({ length: DOT_COUNT }).map((_, i) => (
            <span
              key={i}
              className="edge-dot"
              aria-hidden
              style={{ animationDelay: `-${(LOOP_S / DOT_COUNT) * i}s` }}
            />
          ))}
      </div>

      <figcaption className="flex items-center justify-between px-1 pb-1 pt-3 font-mono text-[10px] uppercase tracking-caps text-dim">
        <span>Operations → Systems</span>
        <span className="text-mist">UAE</span>
      </figcaption>
    </figure>
  );
}
