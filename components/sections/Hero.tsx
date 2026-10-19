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

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [reduced, setReduced] = useState(false);
  const [wordIx, setWordIx] = useState(0);
  const [wordOut, setWordOut] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let outTimer: number;
    const interval = window.setInterval(() => {
      setWordOut(true);
      outTimer = window.setTimeout(() => {
        setWordIx((i) => (i + 1) % t.hero.words.length);
        setWordOut(false);
      }, 380);
    }, 2600);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(outTimer);
    };
  }, [reduced, t.hero.words.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // Frame grows on one axis only (vw, so it interpolates cleanly); a fixed
  // aspect-ratio keeps it a landscape rectangle at any viewport shape. It
  // starts narrow — just the stage for the road — so the wordmark reads at
  // full size either side of it, then bursts past 100vw so it always covers
  // 100% of the viewport height too; the sticky stage's overflow-hidden
  // clips the rest.
  const frameVw = useTransform(progress, [0, 0.45, 0.6], [32, 90, 260]);
  const frameWidth = useTransform(frameVw, (v) => `${v}vw`);
  const radius = useTransform(progress, [0, 0.6], [22, 0]);
  const overlayOpacity = useTransform(progress, [0, 0.35, 0.6], [0.3, 0.45, 0.78]);

  // A small drift, just enough to feel alive — the wordmark's own size does
  // the work, not a dramatic journey across the screen.
  const leftX = useTransform(progress, [0, 0.45], ["0vw", "-2.5vw"]);
  const rightX = useTransform(progress, [0, 0.45], ["0vw", "2.5vw"]);
  const wordmarkOpacity = useTransform(progress, [0, 0.3, 0.48], [1, 1, 0]);

  const contentOpacity = useTransform(progress, [0.5, 0.7], [0, 1]);
  const contentY = useTransform(progress, [0.5, 0.76], [22, 0]);
  const hintOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltFade = useTransform(progress, [0, 0.35], [1, 0]);
  const tiltXRaw = useTransform(my, [-0.5, 0.5], [3, -3]);
  const tiltYRaw = useTransform(mx, [-0.5, 0.5], [-4, 4]);
  const tiltX = useTransform([tiltXRaw, tiltFade], (v) => (v[0] as number) * (v[1] as number));
  const tiltY = useTransform([tiltYRaw, tiltFade], (v) => (v[0] as number) * (v[1] as number));

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative bg-ink"
      style={{ height: reduced ? "100svh" : "230vh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* split brand wordmark, full size, either side of the frame — fades
            as the frame grows over it. Hidden on narrow screens, where
            there's no room for it to read at this size. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-between px-[3vw] sm:flex"
          style={{ opacity: reduced ? 1 : wordmarkOpacity }}
        >
          <motion.span
            style={reduced ? undefined : { x: leftX }}
            className="font-display select-none text-[clamp(44px,8vw,150px)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em] text-cream/90"
          >
            Easy
          </motion.span>
          <motion.span
            style={reduced ? undefined : { x: rightX }}
            className="font-display select-none text-[clamp(36px,6.6vw,124px)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em] text-gold"
          >
            Transfer
          </motion.span>
        </motion.div>

        {/* cycling destination line */}
        <motion.p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[14%] z-[2] text-center text-[15px] text-cream/70 sm:text-base"
          style={{ opacity: reduced ? 0 : wordmarkOpacity }}
        >
          {t.hero.headlinePrefix}{" "}
          <span
            key={wordIx}
            className={`font-display font-bold text-gold transition-all duration-300 ${wordOut ? "opacity-0 blur-sm" : "opacity-100 blur-0"}`}
          >
            {t.hero.words[wordIx]}
          </span>
        </motion.p>

        {/* expanding video frame */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center" onMouseMove={onMove}>
          <motion.div
            className="relative shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            style={
              reduced
                ? { width: "100vw", height: "100svh", borderRadius: 0, overflow: "hidden" }
                : {
                    width: frameWidth,
                    aspectRatio: "16 / 10",
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
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/35"
              style={{ opacity: overlayOpacity }}
            />
          </motion.div>
        </div>

        {reduced && (
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink via-ink/20 to-ink/50" />
        )}

        {/* content revealed once the frame fills the screen */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-[2] flex flex-col items-center gap-5 px-6 pb-16 text-center sm:pb-20"
          style={reduced ? undefined : { opacity: contentOpacity, y: contentY }}
        >
          <h1 className="font-display max-w-3xl text-balance text-[clamp(26px,4.4vw,46px)] font-extrabold leading-[1.1] text-cream">
            {t.hero.headlineSuffix}
          </h1>
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

        {!reduced && (
          <motion.div
            className="absolute inset-x-0 bottom-6 z-[2] flex flex-col items-center gap-2 text-cream/50"
            style={{ opacity: hintOpacity }}
          >
            <span className="h-8 w-[1px] bg-gradient-to-b from-cream/60 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
