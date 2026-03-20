// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// const packages = [
//   {
//     name: "Standard",
//     tagline: "Easy maintenance.",
//     time: "~3 hrs",
//     accent: false,
//     prices: { full: { orig: 90, sale: 70 }, exterior: { orig: 40, sale: 32 }, interior: { orig: 45, sale: 36 } },
//     exterior: [
//       "Simple wheel clean",
//       "Foam contact wash",
//       "Door jambs cleaned",
//     ],
//     interior: [
//       "Spray & wipe cleaning",
//       "(dash, screens, wheel, windows, seats, doors, cupholders, mats, carpets, mirrors, etc.)",
//       "Vacuuming",
//     ],
//   },
//   {
//     name: "Plus",
//     tagline: "All in one.",
//     time: "~4.5 hrs",
//     accent: true,
//     prices: { full: { orig: 130, sale: 104 }, exterior: { orig: 60, sale: 48 }, interior: { orig: 80, sale: 64 } },
//     exterior: [
//       "Everything in Standard",
//       "Foam cannon pre-wash then contact wash",
//       "Headlights, trim, grille & rims shined",
//       "Deep wheel clean",
//     ],
//     interior: [
//       "Everything in Standard",
//       "Power-brush interior carpets",
//       "Brush mats with cleaner",
//     ],
//   },
//   {
//     name: "Premium",
//     tagline: "The ultimate detail.",
//     time: "~6 hrs",
//     accent: false,
//     prices: { full: { orig: 200, sale: 160 }, exterior: { orig: 100, sale: 80 }, interior: { orig: 125, sale: 100 } },
//     exterior: [
//       "Everything in Plus",
//       "Full ceramic prep (iron decon + clay mitt)",
//       "Ceramic coat",
//       "Tires & trim shined",
//       "Deep wheel clean w/ iron decon",
//     ],
//     interior: [
//       "Everything in Plus",
//       "Spraying & brushing of detail solution",
//     ],
//   },
// ];

// export default function PricingSection() {
//   const [selected, setSelected] = useState("full");

//   return (
//     <section id="pricing" className="bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">Packages</p>
//           <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Pricing</h2>
//           <p className="text-white/40 text-sm">All packages currently <span className="text-[#7eb8d4]">20% off</span> — limited time.</p>
//         </div>

//         {/* Toggle */}
//         <div className="flex justify-center gap-2 mb-14">
//           {["full", "exterior", "interior"].map((type) => (
//             <button
//               key={type}
//               onClick={() => setSelected(type)}
//               className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
//                 selected === type
//                   ? "bg-[#7eb8d4] text-[#0a0a0a] font-medium"
//                   : "border border-white/10 text-white/50 hover:border-[#7eb8d4]/40"
//               }`}
//             >
//               {type === "full" ? "Full Detail" : type}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {packages.map((pkg, i) => (
//             <motion.div
//               key={pkg.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className={`relative border p-8 flex flex-col ${
//                 pkg.accent
//                   ? "border-[#7eb8d4]/50 bg-[#0d1a22]"
//                   : "border-white/10 bg-[#0f0f0f]"
//               }`}
//             >
//               {pkg.accent && (
//                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7eb8d4] text-[#0a0a0a] text-xs uppercase tracking-widest px-4 py-1 font-medium">
//                   Most Popular
//                 </div>
//               )}

//               <div className="mb-6">
//                 <h3 className="text-2xl font-light text-white mb-1">{pkg.name}<span className="text-[#7eb8d4]">.</span></h3>
//                 <p className="text-white/40 text-xs uppercase tracking-wider">{pkg.tagline}</p>
//                 <p className="text-white/30 text-xs mt-1">{pkg.time}</p>
//               </div>

//               <div className="mb-8">
//                 <p className="text-white/30 text-xs line-through">${pkg.prices[selected].orig}</p>
//                 <p className="text-4xl font-light text-white mt-1">
//                   ${pkg.prices[selected].sale}
//                   <span className="text-[#7eb8d4] text-sm ml-1">/ {selected === "full" ? "full" : selected}</span>
//                 </p>
//               </div>

//               <div className="space-y-2 flex-1">
//                 <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
//                   {selected === "interior" ? "Interior includes" : selected === "exterior" ? "Exterior includes" : "Includes"}
//                 </p>
//                 {(selected === "interior" ? pkg.interior : selected === "exterior" ? pkg.exterior : [...pkg.exterior, ...pkg.interior]).map((item, j) => (
//                   <div key={j} className="flex items-start gap-2 text-sm text-white/60">
//                     <Check className="w-3.5 h-3.5 text-[#7eb8d4] mt-0.5 shrink-0" />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
//                 className={`mt-8 w-full py-3 text-xs uppercase tracking-widest transition-all duration-300 ${
//                   pkg.accent
//                     ? "bg-[#7eb8d4] text-[#0a0a0a] hover:bg-[#9dcde3]"
//                     : "border border-white/20 text-white hover:border-[#7eb8d4]/50"
//                 }`}
//               >
//                 Book This Package
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Standard",
    tagline: "Easy maintenance.",
    time: "~3 hrs",
    accent: false,
    prices: { full: 90, exterior: 40, interior: 45 },
    exterior: [
      "Simple wheel clean",
      "Foam contact wash",
      "Door jambs cleaned",
    ],
    interior: [
      "Spray & wipe cleaning",
      "(dash, screens, wheel, windows, seats, doors, cupholders, mats, carpets, mirrors, etc.)",
      "Vacuuming",
    ],
  },
  {
    name: "Plus",
    tagline: "All in one.",
    time: "~4.5 hrs",
    accent: true,
    prices: { full: 130, exterior: 60, interior: 80 },
    exterior: [
      "Everything in Standard",
      "Foam cannon pre-wash then contact wash",
      "Headlights, trim, grille & rims shined",
      "Deep wheel clean",
    ],
    interior: [
      "Everything in Standard",
      "Power-brush interior carpets",
      "Brush mats with cleaner",
    ],
  },
  {
    name: "Premium",
    tagline: "The ultimate detail.",
    time: "~6 hrs",
    accent: false,
    prices: { full: 200, exterior: 100, interior: 125 },
    exterior: [
      "Everything in Plus",
      "Full ceramic prep (iron decon + clay mitt)",
      "Ceramic coat",
      "Tires & trim shined",
      "Deep wheel clean w/ iron decon",
    ],
    interior: [
      "Everything in Plus",
      "Spraying & brushing of detail solution",
    ],
  },
];

export default function PricingSection() {
  const [selected, setSelected] = useState("full");

  return (
    <section id="pricing" className="bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">Packages</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Pricing</h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center gap-2 mb-14">
          {["full", "exterior", "interior"].map((type) => (
            <button
              key={type}
              onClick={() => setSelected(type)}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                selected === type
                  ? "bg-[#7eb8d4] text-[#0a0a0a] font-medium"
                  : "border border-white/10 text-white/50 hover:border-[#7eb8d4]/40"
              }`}
            >
              {type === "full" ? "Full Detail" : type}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative border p-8 flex flex-col ${
                pkg.accent
                  ? "border-[#7eb8d4]/50 bg-[#0d1a22]"
                  : "border-white/10 bg-[#0f0f0f]"
              }`}
            >
              {pkg.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7eb8d4] text-[#0a0a0a] text-xs uppercase tracking-widest px-4 py-1 font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-light text-white mb-1">{pkg.name}<span className="text-[#7eb8d4]">.</span></h3>
                <p className="text-white/40 text-xs uppercase tracking-wider">{pkg.tagline}</p>
                <p className="text-white/30 text-xs mt-1">{pkg.time}</p>
              </div>

              <div className="mb-8">
                <p className="text-4xl font-light text-white">
                  ${pkg.prices[selected]}
                  <span className="text-[#7eb8d4] text-sm ml-1">/ {selected === "full" ? "full" : selected}</span>
                </p>
              </div>

              <div className="space-y-2 flex-1">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
                  {selected === "interior" ? "Interior includes" : selected === "exterior" ? "Exterior includes" : "Includes"}
                </p>
                {(selected === "interior" ? pkg.interior : selected === "exterior" ? pkg.exterior : [...pkg.exterior, ...pkg.interior]).map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-white/60">
                    <Check className="w-3.5 h-3.5 text-[#7eb8d4] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
                className={`mt-8 w-full py-3 text-xs uppercase tracking-widest transition-all duration-300 ${
                  pkg.accent
                    ? "bg-[#7eb8d4] text-[#0a0a0a] hover:bg-[#9dcde3]"
                    : "border border-white/20 text-white hover:border-[#7eb8d4]/50"
                }`}
              >
                Book This Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}