import { motion } from "framer-motion";

const reviews = [
  {
    text: "Folks...I just used this young man's services. I have to say that his work is impeccable! I went with the full service and the truck (Silverado 1500) looks like it was just delivered by the showroom. You won't be disappointed.",
    car: "2024 Chevy Silverado 1500",
  },
  {
    text: "Awesome work on the car. Kid did a fantastic job. Car looks slightly better than new 😊",
    car: "Satisfied Customer",
  },
  {
    text: "Tejus did an excellent detailing job with my minivan. Would recommend for your detailing needs.",
    car: "Minivan Owner",
  },
  {
    text: "Thanks for all the recommendation, I got my car detailing done from Tejus yesterday and it's looking like a brand new car. Awesome job done by him and amazed by this idea of his new venture and his efforts and determination. Highly recommend him 💕🫶",
    car: "Satisfied Customer",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#0f0f0f] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">Reviews</p>
          <h2 className="text-3xl md:text-5xl font-light text-white">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-white/10 p-8 hover:border-[#7eb8d4]/20 transition-colors duration-500"
            >
              <p className="text-[#7eb8d4] text-3xl font-light leading-none mb-4">"</p>
              <p className="text-white/70 text-sm leading-relaxed mb-6">{r.text}</p>
              <p className="text-white/30 text-xs uppercase tracking-widest">— {r.car}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}