"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.09,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
