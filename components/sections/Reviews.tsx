"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { REVIEWS } from "@/data/reviews";
import { BUSINESS } from "@/data/business";

const MONTHS_AGO: Record<"en" | "ru" | "ka", (n: number) => string> = {
  en: (n) => `${n} month${n === 1 ? "" : "s"} ago`,
  ru: (n) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    let word = "месяцев";
    if (mod10 === 1 && mod100 !== 11) word = "месяц";
    else if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) word = "месяца";
    return `${n} ${word} назад`;
  },
  ka: (n) => `${n} თვის წინ`,
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M10 1.5l2.47 5.4 5.93.66-4.46 4.06 1.2 5.88L10 14.9l-5.14 2.6 1.2-5.88L1.6 7.56l5.93-.66L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { t, lang } = useLanguage();
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-pad overflow-hidden bg-cream-dim">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.1] text-ink">
              {t.reviews.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{t.reviews.subtitle}</p>
          </div>

          <motion.a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-3"
          >
            <span className="font-display text-2xl font-extrabold text-ink">4.9</span>
            <span className="text-left text-[12px] leading-tight text-ink/60">
              <Stars />
              {t.reviews.badge}
            </span>
          </motion.a>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream-dim to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream-dim to-transparent sm:w-28" />

        <div className="marquee-track flex w-max gap-5 px-6">
          {loop.map((r, i) => (
            <div
              key={`${r.id}-${i}`}
              className="flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 sm:w-[360px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-gold">
                    {initials(r.author)}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-ink">{r.author}</p>
                    <p className="text-[11px] text-ink/45">{MONTHS_AGO[lang](r.monthsAgo)}</p>
                  </div>
                </div>
                <Stars />
              </div>
              <p className="text-[13.5px] leading-relaxed text-ink/70">{r.text[lang]}</p>
              {r.route && (
                <span className="w-fit rounded-full bg-ink/5 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-ink/50">
                  {r.route[lang]}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
