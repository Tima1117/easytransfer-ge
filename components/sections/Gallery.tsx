"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { GALLERY } from "@/data/gallery";

// Domino-topple formulas adapted from a saved 21st.dev "domino-gallery" component:
// gravity-accelerated fall with a small bounce past flat, staggered per card.
const OVERLAP = 0.45;
const STAND_ANGLE = 86;

function topple(t: number) {
  if (t < 0.72) {
    const u = t / 0.72;
    return u * u;
  }
  const u = (t - 0.72) / 0.28;
  return 1 + 0.06 * Math.sin(u * Math.PI) * (1 - u);
}

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function cardWindow(progress: number, index: number, count: number) {
  const win = 1 / (1 + OVERLAP * (count - 1));
  const start = index * win * OVERLAP;
  return clamp01((progress - start) / win);
}

function DominoCard({
  item,
  index,
  count,
  progress,
  reduced,
  onOpen,
}: {
  item: (typeof GALLERY)[number];
  index: number;
  count: number;
  progress: ReturnType<typeof useSpring>;
  reduced: boolean;
  onOpen: () => void;
}) {
  const { lang } = useLanguage();
  const fall = useTransform(progress, (p) => topple(cardWindow(p, index, count)));
  const rotateX = useTransform(fall, (f) => STAND_ANGLE * (1 - f));
  const liftY = useTransform(fall, (f) => (1 - f) * 18);
  const glow = useTransform(fall, [0, 1], [0.15, 1]);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className="group relative shrink-0 overflow-hidden rounded-xl text-left"
      style={{
        width: "clamp(150px, 20vw, 230px)",
        aspectRatio: "3 / 4",
        transformOrigin: "50% -35%",
        transformStyle: "preserve-3d",
        rotateX: reduced ? 0 : rotateX,
        y: reduced ? 0 : liftY,
        opacity: reduced ? 1 : glow,
      }}
    >
      <Image
        src={item.src}
        alt={item.name[lang]}
        fill
        sizes="230px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="font-display text-[13px] font-bold text-cream">{item.name[lang]}</p>
      </div>
    </motion.button>
  );
}

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });
  const sceneProgress = useTransform(progress, [0.18, 0.82], [0, 1]);

  return (
    <section id="gallery" ref={sectionRef} className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.1] text-ink">
            {t.gallery.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{t.gallery.subtitle}</p>
        </div>

        <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto pb-6 sm:gap-5" style={{ perspective: 1400 }}>
          {GALLERY.map((g, i) => (
            <DominoCard
              key={g.id}
              item={g}
              index={i}
              count={GALLERY.length}
              progress={sceneProgress}
              reduced={reduced}
              onOpen={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-ink"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                <Image
                  src={GALLERY[active].src}
                  alt={GALLERY[active].name[lang]}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="font-display text-lg font-bold text-cream">
                    {GALLERY[active].name[lang]}
                  </p>
                  <p className="mt-1 text-[13px] text-cream/65">{GALLERY[active].caption[lang]}</p>
                  <p className="mt-2 text-[11px] text-cream/35">{GALLERY[active].credit}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:text-gold"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
