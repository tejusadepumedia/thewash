import Navigation from "/src/components/Navigation";
import HeroSection from "/src/components/HeroSection";
import ServicesSection from "/src/components/ServicesSection";
import PricingSection from "/src/components/PricingSection";
import AddonsSection from "/src/components/Addonssection";
import BookingSection from "/src/components/BookingSection";
import TestimonialsSection from "/src/components/TestimonialsSection";
import CarsDetailedSection from "/src/components/CarsDetailedSection";
import AboutSection from "/src/components/AboutSection";
import Footer from "/src/components/Footer";
import { SALE, useSaleActive } from "/src/sale";

export default function Home() {
  const saleActive = useSaleActive();

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <section
        aria-labelledby="mobile-announcement"
        className="border-b border-[#7eb8d4]/20 bg-[#101c23] px-6 pb-12 pt-36 text-center md:pb-16 md:pt-40"
      >
        <div className="mx-auto max-w-3xl">
          {saleActive && (
            <div className="mb-10 border border-[#7eb8d4]/40 bg-[#0d1a22] px-6 py-5">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7eb8d4]">{SALE.name}</p>
              <p className="mt-2 text-2xl font-light text-white md:text-3xl">
                {SALE.percentOff}% off all services
              </p>
              <p className="mt-2 text-sm font-light text-white/50">
                Ends Sunday, Nov 29 at midnight. Prices below already reflect the discount.
              </p>
            </div>
          )}
          <h2
            id="mobile-announcement"
            className="text-3xl font-light tracking-wide text-[#7eb8d4] md:text-5xl"
          >
            WE ARE NOW MOBILE!
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            well... almost. It's semi-mobile detailing: we bring the stuff to you, but we still need access to water and electricity.
          </p>
        </div>
      </section>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <AddonsSection />
      <TestimonialsSection />
      <CarsDetailedSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
