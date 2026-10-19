"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { CITY_OPTIONS } from "@/data/content";
import { BUSINESS, directionsLink, osmEmbedSrc, waLink } from "@/data/business";

export default function Contact() {
  const { t, lang } = useLanguage();
  const cities = CITY_OPTIONS[lang];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `EasyTransfer Georgia — ${t.contact.title}`,
      from && `${t.contact.form.from}: ${from}`,
      to && `${t.contact.form.to}: ${to}`,
      date && `${t.contact.form.date}: ${date}`,
      name && `${t.contact.form.name}: ${name}`,
      phone && `${t.contact.form.phone}: ${phone}`,
      comment && `${t.contact.form.comment}: ${comment}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-pad bg-ink text-cream">
      <div className="container-px mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.1]">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-cream/70">{t.contact.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-cream/12 bg-cream/[0.04] p-6 sm:p-7"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={t.contact.form.from}>
                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-cream/20 bg-ink px-3 py-2.5 text-[14px] text-cream outline-none focus:border-gold"
                >
                  <option value="">{t.contact.form.selectPlaceholder}</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t.contact.form.to}>
                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-cream/20 bg-ink px-3 py-2.5 text-[14px] text-cream outline-none focus:border-gold"
                >
                  <option value="">{t.contact.form.selectPlaceholder}</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label={t.contact.form.date}>
                <input
                  type="datetime-local"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-cream/20 bg-ink px-3 py-2.5 text-[14px] text-cream outline-none focus:border-gold [color-scheme:dark]"
                />
              </Field>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={t.contact.form.name}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-cream/20 bg-ink px-3 py-2.5 text-[14px] text-cream outline-none focus:border-gold"
                />
              </Field>
              <Field label={t.contact.form.phone}>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full min-w-0 rounded-lg border border-cream/20 bg-ink px-3 py-2.5 text-[14px] text-cream outline-none focus:border-gold"
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label={t.contact.form.comment}>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={t.contact.form.commentPlaceholder}
                  rows={2}
                  className="w-full min-w-0 resize-none rounded-lg border border-cream/20 bg-ink px-3 py-2.5 text-[14px] text-cream placeholder:text-cream/30 outline-none focus:border-gold"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.01] sm:w-auto"
            >
              {t.contact.form.submit}
            </button>
            <p className="mt-3 text-[12px] leading-relaxed text-cream/45">{t.contact.note}</p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <InfoRow label={t.contact.addressLabel} value={BUSINESS.address} />
              <InfoRow label={t.contact.hoursLabel} value={t.contact.hoursValue} />
              <InfoRow label={t.contact.phoneLabel} value={BUSINESS.phoneDisplay} />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={waLink("Hello! I'd like to book a transfer with EasyTransfer Georgia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-[13px] font-semibold text-white"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-[13px] font-semibold text-cream"
              >
                {t.contact.callCta}
              </a>
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-[13px] font-semibold text-cream"
              >
                {t.contact.routeCta}
              </a>
            </div>

            <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-2xl border border-cream/12">
              <iframe
                title="EasyTransfer Georgia — map"
                src={osmEmbedSrc}
                className="h-full min-h-[260px] w-full"
                loading="lazy"
                data-lenis-prevent
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-cream/45">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-cream/12 bg-cream/[0.04] p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-cream/45">{label}</p>
      <p className="mt-1 text-[14px] text-cream">{value}</p>
    </div>
  );
}
