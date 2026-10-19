"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/data/business";
import { ROUTES, type RouteCategory } from "@/data/routes";

type Tab = "all" | RouteCategory;

export default function Services() {
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState<Tab>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (tab === "all" ? ROUTES : ROUTES.filter((r) => r.category === tab)),
    [tab],
  );

  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: t.services.tabs.all },
    { key: "transfer", label: t.services.tabs.transfer },
    { key: "excursion", label: t.services.tabs.excursion },
  ];

  return (
    <section id="services" className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.1] text-ink">
              {t.services.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{t.services.subtitle}</p>
          </div>

          <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-ink/10 bg-white p-1.5">
            {tabs.map((tb) => (
              <button
                key={tb.key}
                type="button"
                onClick={() => setTab(tb.key)}
                className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  tab === tb.key ? "bg-ink text-gold" : "text-ink/55 hover:text-ink"
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((route, i) => {
            const open = openId === route.id;
            const message = `EasyTransfer Georgia — ${route.title[lang]}\n${t.contact.form.date}: \n${t.contact.form.name}: \n${t.contact.form.phone}: `;
            return (
              <motion.div
                key={route.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={route.image}
                    alt={route.title[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
                    {route.duration}
                  </span>
                  {route.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-ink">
                      {route.badge[lang]}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[17px] font-bold text-ink">{route.title[lang]}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/60">{route.desc[lang]}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mb-1.5 mt-3 text-[10.5px] font-semibold uppercase tracking-wide text-ink/40">
                      {t.services.includes}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {route.stops[lang].map((s) => (
                        <li key={s} className="flex items-start gap-1.5 text-[13px] text-ink/65">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <div className="mt-4 flex items-baseline justify-between">
                    <p className="text-[15px] font-bold text-ink">
                      <span className="text-[12px] font-medium text-ink/50">{t.services.priceFrom} </span>
                      ${route.priceFrom}
                      <span className="text-[12px] font-medium text-ink/50"> {route.priceUnit[lang]}</span>
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={waLink(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-whatsapp px-4 py-2.5 text-[12.5px] font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                      {t.services.bookCta}
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : route.id)}
                      className="inline-flex items-center justify-center rounded-full border border-ink/15 px-4 py-2.5 text-[12.5px] font-semibold text-ink/70 transition-colors hover:border-ink/30 hover:text-ink"
                    >
                      {open ? t.services.hideCta : t.services.detailsCta}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[12px] text-ink/40">
          {t.contact.note}
        </p>
      </div>
    </section>
  );
}
