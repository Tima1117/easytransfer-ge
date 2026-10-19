"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const ICONS = [
  // airport
  (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path
        d="M10.5 3.5 7 10l-4.5 1.3c-.5.14-.5.86 0 1l4.5 1.3 2 5.5c.14.4.68.47.9.1l1.1-1.9-1-5 6-1.8c1.3-.4 1.3-2.3 0-2.7l-6-1.8 1-5c-.22-.37-.76-.3-.9.1l-.6 1.4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // city transfer
  (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M3 17h18M5 17v-4l2-5h10l2 5v4M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="10.3" r=".6" fill="currentColor" />
      <circle cx="16" cy="10.3" r=".6" fill="currentColor" />
    </svg>
  ),
  // VIP chauffeur
  (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="7" r="3.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8.5 5.5 12 3.5l3.5 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // excursions
  (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 3 3 20h18L12 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 20 13 11l3 9" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="12" cy="7.5" r="1.1" fill="currentColor" />
    </svg>
  ),
];

function ServiceCard({
  title,
  desc,
  tag,
  Icon,
  index,
}: {
  title: string;
  desc: string;
  tag: string;
  Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white/60 p-7"
      style={
        {
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--x) var(--y), rgba(202,164,85,0.16), transparent 65%)",
        }}
      />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display relative mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="relative mt-2 text-[14px] leading-relaxed text-ink/65">{desc}</p>
      <span className="relative mt-5 inline-block rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/55">
        {tag}
      </span>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">
            {t.services.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.1] text-ink">
            {t.services.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{t.services.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              desc={item.desc}
              tag={item.tag}
              Icon={ICONS[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
