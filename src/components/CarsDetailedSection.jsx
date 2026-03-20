import { useState } from "react";
import { motion } from "framer-motion";

const cars = [
  "2025 Lamborghini Revuelto",
  "2018 Lexus IS300 F Sport",
  "1999 C5 Corvette LS1",
  "2013-18 Acura RDX",
  "Tesla Model X 100D",
  "2017 Mercedes-Benz GLE 350",
  "2019 Audi Q7",
  "2022 Acura MDX",
  "2015 Toyota Prius",
  "2018 Toyota RAV4",
  "2022 Hyundai Tucson",
  "2022 Lexus RX 350h",
  "2022 Mustang Mach-E4X GT",
  "Tesla Model Y",
  "2020 Chevy Silverado Z71",
  "2015 Toyota Sienna XLE",
  "2023 Tesla Model Y",
  "2024 Lexus RX 350h",
  "2024 Cadillac XT-6",
  "2022 Tesla Model 3",
  "2017 VW Tiguan",
  "2024 Chevy Silverado 1500 High Country",
  "2022 BMW X7 xDrive 40i",
  "2009 Honda CRV AWD",
  "2012 Audi A4 S-Line",
  "2015 Subaru Forester",
  "2017 Acura RDX",
  "2019 Tesla Model 3 Standard",
  "2022-24 Hyundai Tucson",
  "2015 Honda CR-V",
  "2019-24 Volkswagen Jetta",
  "2021 Chrysler Pacifica",
  "2016 Subaru Forester",
  "2023 Tesla Model Y",
  "2014-17 Honda Odyssey",
  "2011-17 Toyota Sienna",
  "2021-23 BMW 530i",
  "2010 Camaro RS Bumblebee Edition",
  "2020 Mazda CX-5 Grand Touring",
  "2018-25 Volvo XC-60",
];

const INITIAL_SHOW = 3;

export default function CarsDetailedSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? cars : cars.slice(0, INITIAL_SHOW);

  return (
    <section id="carsdetailed" className="bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">History</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Cars Detailed</h2>
          <p className="text-white/30 text-sm">Most recent first</p>
          <div className="mt-4 inline-block">
            <p className="text-4xl font-light text-white">
              {cars.length}<span className="text-[#7eb8d4]">+</span>
            </p>
            <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Vehicles & Counting</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {displayed.map((car, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 12) * 0.04 }}
              className="border border-white/5 px-4 py-3 hover:border-[#7eb8d4]/20 transition-colors duration-300"
            >
              <p className="text-white/50 text-xs uppercase tracking-wider leading-relaxed">{car}</p>
            </motion.div>
          ))}

          {/* See More / See Less button as a grid cell */}
          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setShowAll(true)}
              className="border border-[#7eb8d4]/20 px-4 py-3 flex items-center justify-center cursor-pointer hover:border-[#7eb8d4]/50 hover:bg-[#7eb8d4]/5 transition-all duration-300"
            >
              <p className="text-[#7eb8d4] text-xs uppercase tracking-widest">
                +{cars.length - INITIAL_SHOW} more
              </p>
            </motion.div>
          )}
        </div>

        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="border border-white/10 text-white/40 text-xs uppercase tracking-widest px-8 py-3 hover:border-[#7eb8d4]/40 hover:text-white/70 transition-all duration-300"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}