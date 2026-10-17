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

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <section
        aria-labelledby="mobile-announcement"
        className="border-b border-[#7eb8d4]/20 bg-[#101c23] px-6 pb-12 pt-36 text-center md:pb-16 md:pt-40"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="mobile-announcement"
            className="text-3xl font-light tracking-wide text-[#7eb8d4] md:text-5xl"
          >
            WE ARE NOW MOBILE!
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            well... almost. Its hybrid mobile detailing, we bring the stuff to you but we still need access to water and electricity.
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
