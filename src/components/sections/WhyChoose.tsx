"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Innovative gaming platform",
    desc: "Next-gen tech stack built for modern players.",
  },
  {
    id: "02",
    title: "High-quality game design",
    desc: "Pixel-perfect aesthetics and immersive UX.",
  },
  {
    id: "03",
    title: "Reliable and scalable system",
    desc: "Zero-lag infrastructure that grows with your user base.",
  },
  {
    id: "04",
    title: "Continuous updates",
    desc: "Fresh features and security patches delivered weekly.",
  },
  {
    id: "05",
    title: "Dedicated support",
    desc: "Expert technical assistance available 24/7.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden py-20 text-white "
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[200px] left-[-80px]  h-72 w-72 rounded-full bg-[#ffd34d]/30 blur-[120px]" />
        <div className="absolute bottom-[200px] right-[-80px] h-64 w-64 rounded-full bg-orange-400/50 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] border border-white/10 bg-transparent backdrop-blur-sm px-6 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-16 lg:px-14"
        >
          {/* Header */}
          <div className="mb-5 flex items-center gap-4 overflow-hidden">
            <span className="h-px w-12 bg-[#ff8a00] animate-line-side" />
            <motion.p
              initial={{ rotateX: -1800, opacity: 0, scale: 0.5 }}
              whileInView={{ rotateX: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                opacity: { duration: 0.3 },
              }}
              className="font-[var(--font-heading)] text-sm font-black uppercase tracking-[0.14em] text-[#ff8a00]"
            >
              About 8Line
            </motion.p>
            <span className="h-px w-12 bg-[#ff8a00] animate-line-side delay-animation" />
          </div>

          <h2 className="heading">Why Choose 8Line</h2>

          {/* Feature list */}
          <div className="mt-14 border-t border-white/10">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="group relative border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                {/* left orange accent */}
                <div className="absolute left-0 top-0 h-full w-0 bg-[#ff8a00] transition-all duration-500 group-hover:w-[3px]" />

                <div className="grid grid-cols-1 gap-6 px-4 py-7 md:grid-cols-[1.1fr_0.75fr_auto] md:items-center md:px-6 lg:px-8">
                  {/* Left main content */}
                  <div className="flex items-start gap-5 md:items-center md:gap-8">
                    <span className="mt-1 min-w-[44px] font-[var(--font-heading)] text-xl font-black text-[#ff8a00]/55 transition-all duration-300 group-hover:text-[#ff8a00] md:mt-0 md:text-2xl">
                      {item.id}
                    </span>

                    <div>
                      <h3 className="font-[var(--font-heading)] text-2xl font-black uppercase leading-tight text-white transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
                        {item.title}
                      </h3>

                      <div className="mt-4 h-px w-12 bg-[#ff8a00]/80 transition-all duration-500 group-hover:w-24" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="overflow-hidden">
                    <p className="max-w-[340px] translate-y-0 text-sm font-medium leading-7 text-white/50 opacity-80 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-white/75 group-hover:opacity-100 md:text-[0.95rem]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden justify-self-end pr-2 md:block">
                    <div className="translate-x-[-10px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ff8a00"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
