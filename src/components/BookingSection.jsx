import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const socials = [
  { name: "Main Instagram", icon: FaInstagram, url: "https://instagram.com/tejus.adepu", handle: "@tejus.adepu" },
  { name: "Detailing Instagram", icon: FaInstagram, url: "https://instagram.com/thewashdmv", handle: "@thewashdmv" },
  { name: "Facebook", icon: FaFacebook, url: "https://www.facebook.com/tejus.adepu", handle: "@tejus.adepu" },
  { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@tejus.cars", handle: "@tejus.cars" },
];

export default function BookingSection() {
  return (
    <section id="book" className="bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">Book</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Book an Appointment</h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Text me at <a href="sms:571-752-2785" className="text-[#7eb8d4] hover:underline">571-752-2785</a> with your name, the year, make and model of your car, the package you want, any add-ons, and your preferred dates.
          </p>

          {/* Example */}
          <div className="border border-white/10 p-6 text-left mb-10 bg-[#0f0f0f]">
            <p className="text-[#7eb8d4] text-xs uppercase tracking-widest mb-3">Example Message</p>
            <p className="text-white/50 text-sm leading-relaxed italic">
              "Hey, my name is Tejus, and I would like a premium full detail on my 2016 Honda Civic Sport,
              and maybe throw in the engine bay degreasing. I would preferably have it done Friday the 20th."
            </p>
          </div>

          {/* Policies */}
          <div className="border border-[#7eb8d4]/20 p-6 mb-14 bg-[#0d1a22]">
            <p className="text-[#7eb8d4] text-xs uppercase tracking-widest mb-4">Important Policies</p>
            <div className="space-y-2 text-sm text-white/50">
              <p>⚠️ Please remove all personal belongings from your car (bags, shoes, apparel, etc.)</p>
              <p>⏱ <span className="text-white/70">30-min late policy</span> — if you don't arrive within 30 minutes of your booking time, the appointment will be cancelled for that day.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="sms:571-752-2785"
              className="px-8 py-3 bg-[#7eb8d4] text-[#0a0a0a] text-xs uppercase tracking-widest font-medium hover:bg-[#9dcde3] transition-colors duration-300"
            >
              Text to Book
            </a>
            <a
              href="mailto:TejAdepu1@outlook.com"
              className="px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:border-[#7eb8d4]/50 transition-colors duration-300"
            >
              Email Us
            </a>
          </div>

          {/* Socials */}
          <p className="text-white/30 text-xs uppercase tracking-widest mb-6">Follow Along</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-[#7eb8d4]/40 transition-all duration-300"
              >
                <s.icon className="w-4 h-4 text-white/50 group-hover:text-[#7eb8d4] transition-colors" />
                <div className="text-left">
                  <p className="text-white text-xs font-light">{s.name}</p>
                  <p className="text-white/30 text-xs">{s.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}