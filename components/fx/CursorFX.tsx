"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Site-wide cursor layer, mouse/trackpad only:
//  - a ring that trails the pointer and swells over anything clickable,
//    with a short label over elements marked data-cursor="…";
//  - a soft light that follows the pointer across the whole page;
//  - --x/--y written onto the hovered `.spot` element so its CSS glow and
//    border light up exactly under the pointer;
//  - [data-magnetic] elements lean toward the pointer while it's over them.
export default function CursorFX() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState<"none" | "link" | "label">("none");
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.5 });
  const glowX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });

  const magnetRef = useRef<HTMLElement | null>(null);
  const spotRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(fine.matches);
    sync();
    fine.addEventListener("change", sync);
    return () => fine.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("cursor-fx");

    const releaseMagnet = () => {
      if (magnetRef.current) magnetRef.current.style.translate = "";
      magnetRef.current = null;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);

      const target = e.target as HTMLElement | null;
      if (!target) return;
      // The map iframe draws its own cursor and swallows our events.
      if (target.tagName === "IFRAME") {
        setHidden(true);
        return;
      }

      const spot = target.closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--x", `${e.clientX - r.left}px`);
        spot.style.setProperty("--y", `${e.clientY - r.top}px`);
      }
      spotRef.current = spot;

      const labelled = target.closest<HTMLElement>("[data-cursor]");
      const clickable = target.closest("a, button, select, label, [role='button']");
      if (labelled) {
        setHover("label");
        setLabel(labelled.dataset.cursor ?? "");
      } else if (clickable) {
        setHover("link");
      } else {
        setHover("none");
      }

      if (reduced) return;
      const magnet = target.closest<HTMLElement>("[data-magnetic]");
      if (magnet !== magnetRef.current) releaseMagnet();
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        magnet.style.translate = `${dx * 0.28}px ${dy * 0.38}px`;
        magnetRef.current = magnet;
      }
    };

    const onLeave = () => {
      setHidden(true);
      releaseMagnet();
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("blur", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", onLeave);
      document.documentElement.classList.remove("cursor-fx");
      releaseMagnet();
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = hover === "label" ? 84 : hover === "link" ? 56 : 30;

  return (
    <>
      {/* light that follows the pointer across the page */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[45] h-[640px] w-[640px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
          background: "radial-gradient(closest-side, rgba(228,163,113,0.12), rgba(228,163,113,0.04) 55%, transparent)",
          mixBlendMode: "screen",
          transition: "opacity 0.3s",
        }}
      />

      {/* trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] flex items-center justify-center rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          opacity: hidden ? 0 : 1,
          scale: pressed ? 0.85 : 1,
          border: hover === "none" ? "1.5px solid rgba(201,116,63,0.7)" : "1.5px solid rgba(228,163,113,0.95)",
          background:
            hover === "label"
              ? "rgba(201,116,63,0.92)"
              : hover === "link"
                ? "rgba(201,116,63,0.16)"
                : "transparent",
          transition:
            "width 0.25s cubic-bezier(.2,.8,.2,1), height 0.25s cubic-bezier(.2,.8,.2,1), background 0.25s, border-color 0.25s, opacity 0.3s, scale 0.15s",
        }}
      >
        {hover === "label" && (
          <span className="text-[11px] font-semibold tracking-wide text-ink">{label}</span>
        )}
      </motion.div>

      {/* exact-position dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[81] h-1.5 w-1.5 rounded-full bg-gold"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden || hover === "label" ? 0 : 1,
        }}
      />
    </>
  );
}
