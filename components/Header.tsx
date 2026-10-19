"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { LANGS } from "@/data/content";
import { BUSINESS, waLink } from "@/data/business";

const SECTIONS: { id: string; key: "services" | "about" | "reviews" | "gallery" | "contact" }[] = [
  { id: "services", key: "services" },
  { id: "about", key: "about" },
  { id: "reviews", key: "reviews" },
  { id: "gallery", key: "gallery" },
  { id: "contact", key: "contact" },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-[0_1px_0_rgba(202,164,85,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-[72px] items-center justify-between">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-cream">
          Easy<span className="text-gold">Transfer</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[13px] font-medium uppercase tracking-[0.08em] text-cream/75 transition-colors hover:text-gold"
            >
              {t.nav[s.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 rounded-full border border-cream/20 p-1 sm:flex">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`rounded-full px-2.5 py-1 text-[12px] font-semibold transition-colors ${
                  lang === l.code ? "bg-gold text-ink" : "text-cream/70 hover:text-cream"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={waLink("Hello! I'd like to book a transfer with EasyTransfer Georgia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            {t.nav.book}
          </a>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-[1.5px] w-6 bg-cream transition-transform duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[1.5px] w-6 bg-cream transition-transform duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className="fixed inset-0 z-40 bg-ink lg:hidden"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-7">
          {SECTIONS.map((s, i) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              initial={false}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: open ? 0.08 + i * 0.05 : 0, duration: 0.3 }}
              className="font-display text-3xl font-bold text-cream"
            >
              {t.nav[s.key]}
            </motion.a>
          ))}

          <div className="mt-4 flex items-center gap-2 rounded-full border border-cream/20 p-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  lang === l.code ? "bg-gold text-ink" : "text-cream/70"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={waLink("Hello! I'd like to book a transfer with EasyTransfer Georgia.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white"
          >
            {t.nav.book}
          </a>

          <a href={`tel:${BUSINESS.phoneTel}`} className="text-sm text-cream/60">
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
