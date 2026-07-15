"use client";

import { useEffect, useRef, useState } from "react";
import { basePath } from "@/lib/site";

/**
 * Developer-terminal portrait.
 * The photo sits inside a terminal window with a technical duotone treatment,
 * a scanline sweep, animated corner brackets, and a subtle cursor-driven tilt.
 * Hovering reveals the full-colour photo. This reframes a formal photo as a
 * developer's without needing a new source image.
 *
 * Drop a professional photo at /public/images/portrait.jpg (4:5 ratio,
 * ~1200×1500px). Until the file exists, a nameplate renders instead — the site
 * never shows a broken image.
 */
export default function PortraitFrame() {
  const [missing, setMissing] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const el = stageRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--tiltX", `${(-py * 5).toFixed(2)}deg`);
      el.style.setProperty("--tiltY", `${(px * 5).toFixed(2)}deg`);
    };
    const onLeave = () => {
      el.style.setProperty("--tiltX", "0deg");
      el.style.setProperty("--tiltY", "0deg");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <figure className="dev-portrait panel">
      <div className="dev-portrait-bar">
        <span className="dev-portrait-dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className="dev-portrait-file">portrait.render</span>
        <span className="dev-portrait-flag" aria-hidden>
          ● dev
        </span>
      </div>

      <div ref={stageRef} className="dev-portrait-stage" data-cursor="lock">
        <div className="dev-portrait-inner">
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
              className="dev-portrait-img"
              onError={() => setMissing(true)}
            />
          )}

          {!missing && (
            <>
              <div className="dev-portrait-duo" aria-hidden />
              <div className="dev-portrait-grid" aria-hidden />
              <div className="dev-portrait-scan" aria-hidden />
              <div className="dev-portrait-vignette" aria-hidden />
            </>
          )}

          <span className="pbracket pbracket-tl" aria-hidden />
          <span className="pbracket pbracket-tr" aria-hidden />
          <span className="pbracket pbracket-bl" aria-hidden />
          <span className="pbracket pbracket-br" aria-hidden />

          <div className="dev-portrait-caption" aria-hidden>
            <span className="text-kawa">~/junmarvi</span>
            <span className="text-dim"> $ </span>
            <span className="text-body">whoami</span>
            <span className="dev-portrait-out">developer · systems &amp; operations</span>
          </div>
        </div>
      </div>

      <figcaption className="flex items-center justify-between px-1 pb-1 pt-3 font-mono text-[10px] uppercase tracking-caps text-dim">
        <span>Operations → Systems</span>
        <span className="text-mist">UAE</span>
      </figcaption>
    </figure>
  );
}
