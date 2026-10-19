"use client";

import { useLanguage } from "@/lib/language-context";
import { BUSINESS } from "@/data/business";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink/10 bg-cream py-10">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-extrabold text-ink">
            Easy<span className="text-gold">Transfer</span>
          </p>
          <p className="mt-1 max-w-xs text-[13px] text-ink/55">{t.footer.tagline}</p>
        </div>

        <a
          href={BUSINESS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-ink/60 transition-colors hover:text-gold"
        >
          Instagram @easytransfer.georgia
        </a>
      </div>

      <div className="container-px mx-auto mt-8 max-w-6xl border-t border-ink/10 pt-6 text-[11.5px] leading-relaxed text-ink/40">
        <p>{t.footer.rights}</p>
        <p className="mt-1">{t.footer.credits}</p>
      </div>
    </footer>
  );
}
