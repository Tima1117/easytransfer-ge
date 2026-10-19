"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { BUSINESS, directionsLink, osmEmbedSrc, waLink } from "@/data/business";
import { ROUTES } from "@/data/routes";

function PinIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 21s7-6.3 7-11.5a7 7 0 1 0-14 0C5 14.7 12 21 12 21Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function PhoneIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path
        d="M4 5c0-.6.4-1 1-1h3l2 4-2 1.5a10 10 0 0 0 5.5 5.5L15 13l4 2v3c0 .6-.4 1-1 1C10.5 19 4 12.5 4 5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ClockIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowUpRight(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contact() {
  const { t, lang } = useLanguage();

  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `EasyTransfer Georgia — ${t.contact.title}`,
      name && `${t.contact.form.name}: ${name}`,
      route && route,
      date && `${t.contact.form.date}: ${date}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const infoRows = [
    { Icon: PinIcon, label: t.contact.addressLabel, value: BUSINESS.address },
    { Icon: PhoneIcon, label: t.contact.phoneLabel, value: BUSINESS.phoneDisplay },
    { Icon: ClockIcon, label: t.contact.hoursLabel, value: t.contact.hoursValue },
  ];

  return (
    <section id="contact" className="section-pad bg-ink text-cream">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.1]">
              {t.contact.title}
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cream/70">{t.contact.subtitle}</p>

            <div className="mt-8 flex flex-col gap-2">
              {infoRows.map((row) => (
                <div
                  key={row.label}
                  className="spot group -mx-3 flex items-center gap-4 rounded-2xl border border-transparent px-3 py-2.5 transition-colors duration-300 hover:border-cream/10 hover:bg-cream/[0.03]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-[background-color,color,scale] duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                    <row.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-cream/45">{row.label}</p>
                    <p className="text-[15px] text-cream">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                data-magnetic
                href={waLink("Hello! I'd like to book a transfer with EasyTransfer Georgia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                WhatsApp
              </a>
              <a
                data-magnetic
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-[13px] font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {t.contact.callCta}
              </a>
              <a
                data-magnetic
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/25 px-5 py-2.5 text-[13px] font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {t.contact.routeCta}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <div className="relative mt-8 h-[220px] w-full overflow-hidden rounded-2xl border border-cream/12">
              <iframe
                title="EasyTransfer Georgia — map"
                src={osmEmbedSrc}
                className="h-full w-full"
                loading="lazy"
                data-lenis-prevent
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={onSubmit}
            className="spot h-fit rounded-2xl bg-cream p-6 text-ink sm:p-7"
          >
            <h3 className="font-display text-xl font-bold">{t.contact.title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/60">{t.contact.subtitle}</p>

            <div className="mt-6">
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                  {t.contact.form.name}
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-[14px] text-ink outline-none transition-[border-color,box-shadow] duration-200 hover:border-ink/30 focus:border-gold focus:ring-4 focus:ring-gold/15"
                />
              </label>
            </div>

            <div className="mt-4">
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                  {t.contact.form.service}
                </span>
                <select
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-[14px] text-ink outline-none transition-[border-color,box-shadow] duration-200 hover:border-ink/30 focus:border-gold focus:ring-4 focus:ring-gold/15"
                >
                  <option value="">{t.contact.form.selectPlaceholder}</option>
                  {ROUTES.map((r) => (
                    <option key={r.id} value={r.title[lang]}>
                      {r.title[lang]}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-4">
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                  {t.contact.form.date}
                </span>
                <input
                  type="datetime-local"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-[14px] text-ink outline-none transition-[border-color,box-shadow] duration-200 hover:border-ink/30 focus:border-gold focus:ring-4 focus:ring-gold/15"
                />
              </label>
            </div>

            <button
              data-magnetic
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.01]"
            >
              {t.contact.form.submit}
            </button>
            <p className="mt-3 text-[12px] leading-relaxed text-ink/45">{t.contact.note}</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
