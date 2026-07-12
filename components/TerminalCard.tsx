"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { currentFocus } from "@/lib/site";

export default function TerminalCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setShown(currentFocus.length);
      return;
    }
    if (shown >= currentFocus.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 500 : 330);
    return () => clearTimeout(t);
  }, [inView, shown, reduce]);

  return (
    <div ref={ref} className="panel overflow-hidden font-mono text-[13px]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="text-[11px] uppercase tracking-caps text-mist">
          current-focus · sentinel
        </span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full border border-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full border border-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full border border-line-strong" />
        </span>
      </div>
      <div className="space-y-2.5 px-5 py-6">
        <p className="text-dim">
          <span className="text-kawa">junmarvi@hq</span>
          <span className="text-dim">:~$</span>{" "}
          <span className="text-body">focus --list --active</span>
        </p>
        <ul className="space-y-2 pt-1">
          {currentFocus.map((f, i) => (
            <li
              key={f}
              className={`flex items-center gap-3 transition-opacity duration-500 ${
                i < shown ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-pulse">▸</span>
              <span className="text-body/90">{f}</span>
              <span className="ml-auto text-[10px] uppercase tracking-caps text-kawa">
                active
              </span>
            </li>
          ))}
        </ul>
        <p className="pt-2 text-dim">
          <span className="text-kawa">junmarvi@hq</span>
          <span className="text-dim">:~$</span> <span className="caret text-body">▍</span>
        </p>
      </div>
    </div>
  );
}
