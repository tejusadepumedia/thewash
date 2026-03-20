import Navigation from "/src/components/Navigation";
import HeroSection from "/src/components/HeroSection";
import ServicesSection from "/src/components/ServicesSection";
import PricingSection from "/src/components/PricingSection";
import BookingSection from "/src/components/BookingSection";
import TestimonialsSection from "/src/components/TestimonialsSection";
import CarsDetailedSection from "/src/components/CarsDetailedSection";
import AboutSection from "/src/components/AboutSection";
import Footer from "/src/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CarsDetailedSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </div>
  );
}