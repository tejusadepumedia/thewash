import { motion } from "framer-motion";

const services = [
  {
    name: "Interior",
    tag: "Premium",
    description:
      "We bring your car's cabin back to a like-new state using advanced interior detailing products.",
    steps: [
      "Powerful vacuuming of all fabric and carpeted areas",
      "Interior detail spray on all surfaces for a residue-free finish",
      "Detailing brushes for tight corners and deep grime removal",
      "Streak-free window cleaning",
      "Drill + brush attachment on rubber and carpet mats",
      "Hybrid ceramic protectant on plastics, vinyl & rubber (UV protection + medium shine)",
    ],
  },
  {
    name: "Exterior",
    tag: "Premium",
    description:
      "Advanced washing techniques and high-quality products to remove dirt, grime, and brake dust — leaving a ceramic-coated shine.",
    steps: [
      "Dedicated tire cleaner + brake dust dissolving rim treatment",
      "Surface rinse followed by thick snow foam pre-wash",
      "Hand wash with pH-neutral shampoo",
      "Iron decon + clay mitt prep to remove mineral deposits",
      "Ceramic-infused snow foam for gloss and protection",
      "Towel dry, door jambs cleaned, two layers of tire shine",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0f0f0f] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-light text-white">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border border-white/10 p-8 hover:border-[#7eb8d4]/30 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-light text-white">{s.name}<span className="text-[#7eb8d4]">.</span></h3>
                <span className="text-[#7eb8d4] text-xs uppercase tracking-widest border border-[#7eb8d4]/30 px-2 py-1">{s.tag}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="text-[#7eb8d4] mt-0.5 shrink-0">–</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}