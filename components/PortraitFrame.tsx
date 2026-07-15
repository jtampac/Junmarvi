"use client";

import { useEffect, useRef, useState } from "react";
import { basePath } from "@/lib/site";

/**
 * Portrait plate — the photo shown cleanly, with a single small blue neon dot
 * that runs along the outline of the hoodie in the photo (arms, shoulders, and
 * hood/collar), not the frame.
 *
 * HOODIE_PATH is traced in the photo's own pixel space (viewBox 1122×1402,
 * matching public/images/portrait.jpg). If the photo is replaced, re-trace it
 * to the new silhouette. The dot is driven along the path with
 * getPointAtLength() in a rAF loop — reliable across browsers and easy to pause
 * for reduced-motion.
 */
const HOODIE_PATH =
  "M58 1400 L75 1240 Q95 1140 120 1040 Q150 945 185 850 Q235 770 300 700 " +
  "Q365 728 430 762 Q495 792 561 815 Q627 792 692 762 Q757 728 822 700 " +
  "Q887 770 937 850 Q972 945 1002 1040 Q1027 1140 1047 1240 L1064 1400 Z";

const LOOP_MS = 9000;

export default function PortraitFrame() {
  const [missing, setMissing] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;

    const len = path.getTotalLength();
    const place = (dist: number) => {
      const p = path.getPointAtLength(dist);
      dot.setAttribute("cx", String(p.x));
      dot.setAttribute("cy", String(p.y));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      place(len * 0.16); // park the dot on a shoulder
      return;
    }

    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const progress = ((t - start) % LOOP_MS) / LOOP_MS;
      place(progress * len);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [missing]);

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
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/images/portrait.jpg`}
                alt="Junmarvi Tampac, systems and operations developer"
                onError={() => setMissing(true)}
              />
              <svg
                className="hoodie-trace"
                viewBox="0 0 1122 1402"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                <path ref={pathRef} d={HOODIE_PATH} fill="none" stroke="none" />
                <circle ref={dotRef} className="hoodie-dot" r="11" cx="185" cy="850" />
              </svg>
            </>
          )}
        </div>
      </div>

      <figcaption className="flex items-center justify-between px-1 pb-1 pt-3 font-mono text-[10px] uppercase tracking-caps text-dim">
        <span>Operations → Systems</span>
        <span className="text-mist">UAE</span>
      </figcaption>
    </figure>
  );
}
