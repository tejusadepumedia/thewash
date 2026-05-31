import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const addons = [
  {
    name: "Engine Bay Degreasing",
    description: "Full degreasing and rinse of the engine bay for a clean, factory-fresh look under the hood.",
    price: 30,
  },
  {
    name: "Trunk Detail",
    description: "Vacuum and wipe-down of the trunk area, including carpet and side panels.",
    price: 20,
  },
];

export default function AddonsSection() {
  return (
    <section className="bg-[#0a0a0a] pb-24 md:pb-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">Extras</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Add-Ons</h2>
          <p className="text-white/40 text-sm">Pair any add-on with your chosen package.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-white/10 bg-[#0f0f0f] p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-light text-white leading-snug">
                  {addon.name}<span className="text-[#7eb8d4]">.</span>
                </h3>
                <p className="text-2xl font-light text-white shrink-0">
                  +<span className="text-[#7eb8d4]">${addon.price}</span>
                </p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed flex-1">{addon.description}</p>
              <button
                onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 w-full py-3 text-xs uppercase tracking-widest border border-white/20 text-white hover:border-[#7eb8d4]/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Plus className="w-3.5 h-3.5" />
                Add to Booking
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}