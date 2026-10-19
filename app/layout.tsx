import type { Metadata } from "next";
import { Inter_Tight, Manrope, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-georgian",
  subsets: ["georgian"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: "EasyTransfer Georgia — Трансферы и туры по Грузии",
  description:
    "Премиальные трансферы и экскурсии по Грузии: аэропорты Батуми, Тбилиси, Кутаиси, поездки между городами, туры с водителем-гидом. Lexus RX, Mercedes V-Class, Sprinter. 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${manrope.variable} ${notoGeorgian.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
