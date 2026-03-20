import { motion } from "framer-motion";

const cars = [
  "2018-25 Volvo XC-60", "2020 Mazda CX-5 Grand Touring", "2010 Camaro RS Bumblebee Edition",
  "2021-23 BMW 530i", "2011-17 Toyota Sienna", "2014-17 Honda Odyssey",
  "2023 Tesla Model Y", "2016 Subaru Forester", "2021 Chrysler Pacifica",
  "2019-24 Volkswagen Jetta", "2015 Honda CR-V", "2022-24 Hyundai Tucson",
  "2019 Tesla Model 3 Standard", "2017 Acura RDX", "2015 Subaru Forester",
  "2012 Audi A4 S-Line", "2009 Honda CRV AWD", "2022 BMW X7 xDrive 40i",
  "2024 Chevy Silverado 1500 High Country", "2017 VW Tiguan", "2022 Tesla Model 3",
  "2024 Cadillac XT-6", "2024 Lexus RX 350h", "2023 Tesla Model Y",
  "2015 Toyota Sienna XLE", "2020 Chevy Silverado Z71", "Tesla Model Y",
  "2022 Mustang Mach-E4X GT", "2022 Lexus RX 350h", "2022 Hyundai Tucson",
  "2018 Toyota RAV4", "2015 Toyota Prius", "2022 Acura MDX",
  "2019 Audi Q7", "2017 Mercedes-Benz GLE 350", "Tesla Model X 100D",
  "2013-18 Acura RDX", "1999 C5 Corvette LS1", "2018 Lexus IS300 F Sport",
  "2025 Lamborghini Revuelto",
];

export default function CarsDetailedSection() {
  return (
    <section id="carsdetailed" className="bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">History</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Cars Detailed</h2>
          <p className="text-white/30 text-sm">Listed in chronological order</p>
          <div className="mt-4 inline-block">
            <p className="text-4xl font-light text-white">
              {cars.length}<span className="text-[#7eb8d4]">+</span>
            </p>
            <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Vehicles & Counting</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cars.map((car, i) => (
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
        </div>
      </div>
    </section>
  );
}