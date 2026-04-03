"use client";

import { motion } from "framer-motion";

const features = [
  "Multi-game integration in one system",
  "High-performance engine",
  "Smooth animations and transitions",
  "Advanced graphics and textures",
  "Scalable architecture",
  "Easy system management",
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-20 text-white"
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* ONE BIG CARD */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-transparent backdrop-blur-sm px-6 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-16 lg:px-14">
          {/* card glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,138,0,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,211,77,0.08),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-12">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div className="mb-5 flex items-center gap-4 overflow-hidden">
                <span className="animate-line-side" />
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
                  Platform Feature
                </motion.p>
                <span className="animate-line-side delay-animation" />
              </div>

              <h2 className="heading max-w-xl">
                Built for Performance
                <br />
                and Experience
              </h2>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden  border border-[#5a5d63] bg-[#1f2228] p-6 transition-all duration-300 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                >
                  <div className="mb-4 h-3 w-3 rounded-full bg-gradient-to-r from-[#ff8a00] to-[#FFD34D]" />

                  <p className="text-base font-medium leading-7 text-white/90 transition-all duration-300 group-hover:text-white md:text-lg">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
