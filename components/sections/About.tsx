"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

function StatCounter({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const leadingMatch = value.match(/^\d+(?:\.\d+)?/);
  const suffix = leadingMatch ? value.slice(leadingMatch[0].length) : value;
  const hasNumber = Boolean(leadingMatch) && !/\d/.test(suffix);
  const numeric = leadingMatch ? parseFloat(leadingMatch[0]) : NaN;

  const [display, setDisplay] = useState(hasNumber ? "0" : value);

  useEffect(() => {
    if (!inView || !hasNumber) return;
    const controls = animate(0, numeric, {
      duration: 1.1,
      delay,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate(v) {
        const isInt = Number.isInteger(numeric);
        setDisplay(isInt ? String(Math.round(v)) : v.toFixed(1));
      },
    });
    return () => controls.stop();
  }, [inView, hasNumber, numeric, delay, value]);

  return (
    <div className="text-center sm:text-left">
      <span ref={ref} className="font-display block text-[clamp(26px,3vw,34px)] font-extrabold text-gold">
        {display}
        {hasNumber ? suffix : ""}
      </span>
      <span className="mt-1 block text-[12px] uppercase tracking-wide text-cream/60">{label}</span>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad bg-ink text-cream">
      <div className="container-px mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">
            {t.about.eyebrow}
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-display mt-3 text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.12]"
          >
            {t.about.title}
          </motion.h2>
          <p className="mt-5 text-[15px] leading-relaxed text-cream/70">{t.about.body}</p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {t.about.stats.map((s, i) => (
            <StatCounter key={i} value={s.value} label={s.label} delay={i * 0.08} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/50">
              {t.about.languagesLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.about.languages.map((l, i) => (
                <span
                  key={i}
                  className="rounded-full border border-cream/20 px-3.5 py-1.5 text-[13px] text-cream/80"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/50">
              {t.about.routesLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.about.routes.map((r, i) => (
                <span
                  key={i}
                  className="rounded-full bg-cream/5 px-3.5 py-1.5 text-[13px] text-gold/90"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/50">
            {t.about.fleetLabel}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {t.about.fleet.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-cream/12 bg-cream/[0.04]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-display text-base font-bold text-cream">{f.name}</p>
                    <p className="mt-0.5 text-[12px] uppercase tracking-wide text-gold/80">{f.cls}</p>
                  </div>
                  <div className="text-right text-[12px] leading-snug text-cream/60">
                    <p>{f.seats}</p>
                    <p>{f.bags}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
