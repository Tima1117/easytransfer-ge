"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/data/business";

export default function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <motion.a
      data-magnetic
      href={waLink("Hello! I'd like to book a transfer with EasyTransfer Georgia.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.book}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.04 3C9.37 3 3.96 8.41 3.96 15.08c0 2.24.61 4.33 1.67 6.14L4 29l8-1.57a12.9 12.9 0 0 0 4.04.65c6.67 0 12.08-5.41 12.08-12.08S22.71 3 16.04 3Zm0 21.9c-1.33 0-2.6-.26-3.78-.76l-.27-.11-4.75.93.95-4.64-.17-.28a9.75 9.75 0 0 1-1.53-5.26c0-5.39 4.39-9.78 9.78-9.78s9.78 4.39 9.78 9.78-4.39 9.78-9.78 9.78Zm5.36-7.32c-.29-.15-1.73-.86-2-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.29-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.15.2 2.09 3.18 5.06 4.46.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.12-.27-.2-.56-.35Z" />
      </svg>
    </motion.a>
  );
}
