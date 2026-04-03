"use client";

import { motion } from "framer-motion";
import GameButton from "../ui/GameButton";

const points = [
  "High revenue potential",
  "Easy deployment",
  "Scalable infrastructure",
  "Low maintenance",
  "Business-focused design",
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden py-20 text-white"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, #0D1017 50%, #0D1017 50%, #070b14 75%, transparent 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* LEFT */}
          <div className="lg:sticky lg:top-28">
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
                Solutions for Operators
              </motion.p>
              <span className="animate-line-side delay-animation" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="max-w-[620px] font-[var(--font-heading)] text-5xl font-black uppercase leading-[0.92] text-white md:text-7xl"
            >
              Built for Gaming Businesses
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-8 max-w-[560px] text-base leading-8 text-white/75 md:text-lg"
            >
              Our platform is designed to help operators launch, scale, and
              optimize their gaming business with ease.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-10"
            >
              <GameButton href="#" label="View Details" />
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute left-[34px] top-0 hidden h-full w-px bg-[#5a5d63] md:block" />

            <div className="space-y-4 md:space-y-5">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="group relative flex items-start gap-5  px-3 py-3 transition-all duration-500"
                >
                  {/* number */}
                  <div className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ffa800]/50 bg-[#0d1322] text-sm font-black text-[#ffa800] shadow-[0_0_20px_rgba(255,168,0,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#ffa800]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1 border-b border-[#5a5d63] pb-5 transition-all duration-500 group-hover:border-[#ffa800]/50">
                    <h3 className="font-[var(--font-heading)] text-2xl font-black uppercase leading-tight text-white transition-colors duration-300 md:text-3xl">
                      {point}
                    </h3>

                    <div className="mt-4 h-[1px] w-14 bg-[#ffa800] transition-all duration-500 group-hover:w-32" />

                    {/* hidden by default, reveal on hover */}
                    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="translate-y-6 pt-0 text-sm leading-7 text-white/0 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:pt-5 group-hover:text-white/70 group-hover:opacity-100 md:text-base">
                          {index === 0 &&
                            "Built to support stronger monetization opportunities and operator growth from day one."}
                          {index === 1 &&
                            "Deploy faster with a setup flow designed to reduce friction and simplify launch."}
                          {index === 2 &&
                            "Expand smoothly as your operation grows, without rebuilding your foundation."}
                          {index === 3 &&
                            "Reduce overhead with efficient systems, stable performance, and easier management."}
                          {index === 4 &&
                            "Every feature is aligned with operator needs, business goals, and long-term usability."}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
