import { LanguageProvider } from "@/lib/language-context";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CursorFX from "@/components/fx/CursorFX";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CursorFX />
    </LanguageProvider>
  );
}
