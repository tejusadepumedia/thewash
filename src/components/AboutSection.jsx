import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0f0f0f] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[#7eb8d4] text-xs uppercase tracking-[0.4em] mb-4">About</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-12">
            About <span className="italic font-extralight">Us</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-white/60 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto"
        >
          <p>
            Right now, it's just me - Tejus - running this business. I started washing cars in my
            neighborhood during the summer of 2024, and since then I've been working hard to improve
            everything I do: from the website to the products I use to the techniques I follow.
          </p>
          <p>
            I've always loved cars and how they work, and detailing gives me a way to be around them —
            especially exotics. I get to notice all the little features that make each car unique, and
            in return, I make sure it leaves looking fresh, clean, and cared for.
          </p>
          <p>
            I'm only 15 right now, but I'm planning to go fully mobile as soon as I get my license.
            This is just the beginning. 
          </p>
          <p>  
            I also do car photography & videography on the side, FOR FREE, which you can check out {" "}
                <a
                  href="https://tejusadepumedia.github.io/carmedia/"
                  target = "_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4a853] hover:underline"
                >
                  here
                </a>{""}.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-16 h-[1px] bg-[#7eb8d4] mt-12 mx-auto origin-center"
        />

        <div className="mt-12 flex justify-center gap-16">
          <div className="text-center">
            <p className="text-3xl font-light text-white">40<span className="text-[#7eb8d4]">+</span></p>
            <p className="text-xs uppercase tracking-wider text-white/30 mt-1">Cars Detailed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-light text-white">2024</p>
            <p className="text-xs uppercase tracking-wider text-white/30 mt-1">Est.</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-light text-white">N<span className="text-[#7eb8d4]">.</span>VA</p>
            <p className="text-xs uppercase tracking-wider text-white/30 mt-1">Location</p>
          </div>
        </div>
      </div>
    </section>
  );
}