"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { GALLERY } from "@/data/gallery";
import TiltCard from "@/components/fx/TiltCard";

const VIEW_LABEL = { en: "View", ru: "Смотреть", ka: "ნახვა" } as const;

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.1] text-ink">
              {t.gallery.title}
            </h2>
          </div>
          <p className="max-w-xs text-[14px] leading-relaxed text-ink/60">{t.gallery.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {GALLERY.map((g, i) => (
            <TiltCard
              key={g.id}
              max={7}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="group aspect-[4/3] overflow-hidden rounded-xl"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                data-cursor={VIEW_LABEL[lang]}
                className="absolute inset-0 text-left"
              >
                <Image
                  src={g.src}
                  alt={g.name[lang]}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="font-display text-[13px] font-bold text-cream sm:text-sm">
                    {g.name[lang]}
                  </p>
                  <p className="mt-1 hidden max-h-0 overflow-hidden text-[12px] leading-snug text-cream/75 opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:opacity-100 sm:block">
                    {g.caption[lang]}
                  </p>
                </div>
              </button>
            </TiltCard>
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
