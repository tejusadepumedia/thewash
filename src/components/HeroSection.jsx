import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "/src/assets/DSC08011.jpg";

export default function HeroSection() {
  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
            <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[#7eb8d4] text-xs uppercase tracking-[0.5em] mb-6"
        >
          Professional Car Detailing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-light text-white tracking-tight"
        >
          the<span className="text-[#7eb8d4]">wash</span>
          <span className="text-[#7eb8d4]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/40 text-sm md:text-base font-light mt-6 tracking-widest uppercase"
        >
          Northern Virginia
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#7eb8d4] to-transparent mx-auto mt-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-[#7eb8d4] text-[#0a0a0a] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#9dcde3] transition-colors duration-300"
          >
            Book Now
          </button>
          <button
            onClick={scrollToServices}
            className="px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:border-[#7eb8d4]/50 transition-colors duration-300"
          >
            Our Services
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#7eb8d4] transition-colors duration-300"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}