"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/data/business";

// Scroll-expansion hero, after 21st.dev's "scroll-expansion-hero" as used on
// ARGO RENT: the brand name sits centred ON TOP of a small video frame; on
// scroll the two words slide apart off-screen while the frame grows to fill
// the viewport. Driven by real page scroll (no wheel hijacking).
export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [reduced, setReduced] = useState(false);

  // Narrow screens start with a bigger frame, as the original does on mobile,
  // otherwise it's a thumbnail hidden under the stacked wordmark.
  const startVw = useMotionValue(32);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 639px)");
    const sync = () => {
      setReduced(mq.matches);
      startVw.set(narrow.matches ? 72 : 32);
    };
    sync();
    mq.addEventListener("change", sync);
    narrow.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      narrow.removeEventListener("change", sync);
    };
  }, [startVw]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.35 });

  // Width only (vw interpolates cleanly) with a fixed 16:9 ratio; past 100vw
  // it keeps growing so it covers the full height too — the sticky stage
  // clips the overflow.
  const frameVw = useTransform([progress, startVw], (v) => {
    const p = v[0] as number;
    const s = v[1] as number;
    if (p <= 0.5) return s + (100 - s) * (p / 0.5);
    if (p <= 0.62) return 100 + 100 * ((p - 0.5) / 0.12);
    return 200;
  });
  const frameWidth = useTransform(frameVw, (v) => `${v}vw`);
  const radius = useTransform(progress, [0, 0.55], [22, 0]);
  const overlayOpacity = useTransform(progress, [0, 0.4, 0.62], [0.25, 0.35, 0.75]);

  // The words leave the way they do in the original: first one to the
  // left, the rest to the right, clean off the screen.
  const leftX = useTransform(progress, [0, 0.5], ["0vw", "-110vw"]);
  const rightX = useTransform(progress, [0, 0.5], ["0vw", "110vw"]);
  const glowOpacity = useTransform(progress, [0, 0.4], [1, 0]);

  const contentOpacity = useTransform(progress, [0.62, 0.8], [0, 1]);
  const contentY = useTransform(progress, [0.62, 0.85], [24, 0]);
  const hintOpacity = useTransform(progress, [0, 0.1], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltFade = useTransform(progress, [0, 0.3], [1, 0]);
  const tiltXRaw = useTransform(my, [-0.5, 0.5], [4, -4]);
  const tiltYRaw = useTransform(mx, [-0.5, 0.5], [-6, 6]);
  const tiltX = useTransform([tiltXRaw, tiltFade], (v) => (v[0] as number) * (v[1] as number));
  const tiltY = useTransform([tiltYRaw, tiltFade], (v) => (v[0] as number) * (v[1] as number));

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const wordShadow = { textShadow: "0 12px 40px rgba(0,0,0,0.45)" };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative bg-ink"
      style={{ height: reduced ? "100svh" : "240vh" }}
    >
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden"
        style={{ perspective: 1400 }}
        onMouseMove={onMove}
      >
        {/* warm glow behind the frame */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            opacity: reduced ? 1 : glowOpacity,
            background:
              "radial-gradient(55% 45% at 50% 50%, rgba(201,116,63,0.16), transparent 70%)",
          }}
        />

        {/* dashed guide line from under the frame down to the scroll hint */}
        {!reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-6 top-1/2 z-0 flex flex-col items-center gap-3"
            style={{ opacity: hintOpacity }}
          >
            <span
              className="w-px flex-1"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(201,116,63,0.55) 0 18px, transparent 18px 40px)",
              }}
            />
            <span className="text-[11px] font-semibold tracking-[0.3em] text-cream/55">
              {t.hero.scrollHint.toUpperCase()}
            </span>
            <span className="text-cream/60">↓</span>
          </motion.div>
        )}

        {/* expanding video frame */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center">
          <motion.div
            className="relative shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
            style={
              reduced
                ? { width: "100vw", height: "100svh", borderRadius: 0, overflow: "hidden" }
                : {
                    width: frameWidth,
                    aspectRatio: "16 / 9",
                    maxWidth: "none",
                    maxHeight: "none",
                    borderRadius: radius,
                    rotateX: tiltX,
                    rotateY: tiltY,
                    overflow: "hidden",
                  }
            }
          >
            <video
              className="h-full w-full object-cover"
              src="/videos/hero-road.mp4"
              poster="/images/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30"
              style={{ opacity: overlayOpacity }}
            />
          </motion.div>
        </div>

        {/* brand name, centred on top of the video */}
        <h1
          aria-label="EasyTransfer Georgia"
          className="pointer-events-none absolute inset-0 z-[3] m-0 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-[1.6vw]"
        >
          <motion.span
            aria-hidden
            style={reduced ? wordShadow : { x: leftX, ...wordShadow }}
            className="font-display select-none text-[17vw] font-extrabold uppercase leading-[0.86] tracking-[-0.035em] text-cream sm:text-[clamp(56px,8vw,170px)]"
          >
            Easy
          </motion.span>
          <motion.span
            aria-hidden
            style={reduced ? wordShadow : { x: rightX, ...wordShadow }}
            className="font-display select-none text-[17vw] font-extrabold uppercase leading-[0.86] tracking-[-0.035em] text-gold sm:text-[clamp(56px,8vw,170px)]"
          >
            Transfer
          </motion.span>
        </h1>

        {reduced && (
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink via-ink/20 to-ink/50" />
        )}

        {/* content revealed once the frame fills the screen */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-[4] flex flex-col items-center gap-5 px-6 pb-16 text-center sm:pb-20"
          style={reduced ? undefined : { opacity: contentOpacity, y: contentY }}
        >
          <h2 className="font-display max-w-3xl text-balance text-[clamp(26px,4.4vw,46px)] font-extrabold leading-[1.1] text-cream">
            {t.hero.headlineSuffix}
          </h2>
          <p className="max-w-xl text-balance text-[15px] leading-relaxed text-cream/75 sm:text-base">
            {t.hero.hook} {t.hero.stats.rating}, {t.hero.stats.hours.toLowerCase()}.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink("Hello! I'd like to book a transfer with EasyTransfer Georgia.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              {t.hero.cta}
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
