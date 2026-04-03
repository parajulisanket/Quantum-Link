"use client";

import { motion } from "framer-motion";
import { DollarSign, Layers3, Zap, Gamepad2 } from "lucide-react";

const features = [
  { title: "Multi-Game Integration", icon: Layers3 },
  { title: "Seamless Performance", icon: Zap },
  { title: "Engaging Gameplay", icon: Gamepad2 },
  { title: "Revenue Focused", icon: DollarSign },
];

export default function AboutProduct() {
  return (
    <section
      id="product"
      className="relative overflow-hidden py-20  text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] border border-white/10 bg-transparent backdrop-blur-sm px-6 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-16 lg:px-14"
        >
          {/* Top Heading */}
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-4 overflow-hidden">
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
                Main Product
              </motion.p>
              <span className="animate-line-side delay-animation" />
            </div>
            <h2 className="mx-auto max-w-3xl   heading">
              What is Quantum Link?
            </h2>
          </div>

          {/* Feature Boxes Grid */}
          {/* Added items-start to prevent vertical stretching */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {/* STATIC BOX 1 */}
            <div
              className=" bg-[#FF8A00] overflow-hidden aspect-square"
              style={{
                clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%, 0 22%)",
                // clipPath: "polygon(0 0, 100% 0, 100% 78%, 78% 100%, 0 100%)",
              }}
            >
              <img
                src="/images/joy-orange.png"
                alt="Feature Visual 1"
                className="h-full w-full object-cover"
              />
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative overflow-hidden  border border-[#5a5d63] bg-[#1f2228] px-8 py-16 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                  // style={{
                  //   clipPath:
                  //     "polygon(0 0, 100% 0, 100% 78%, 78% 100%, 0 100%)",
                  // }}
                >
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] transition-all duration-300 group-hover:border-[#ff8a00]">
                    <Icon
                      size={38}
                      strokeWidth={2.1}
                      className="text-[#ff8a00]"
                    />
                  </div>

                  <h3 className="mt-8 font-[var(--font-heading)] text-2xl font-black uppercase leading-snug text-white md:text-[2rem]">
                    {feature.title}
                  </h3>
                </motion.div>
              );
            })}

            {/* STATIC BOX 2 */}
            <div
              className=" bg-[#FF8A00] overflow-hidden aspect-square"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 78%, 78% 100%, 0 100%)",
              }}
            >
              <img
                src="/images/arcade-char.png"
                alt="Feature Visual 2"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
