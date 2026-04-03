"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Users, Gamepad2 } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "High-Quality Games",
    value: "500+",
    icon: Gamepad2,
    color: "#ff8a00",
  },
  {
    id: 2,
    label: "Advanced Engine",
    value: "V8 CORE",
    icon: Cpu,
    color: "#FFD34D",
  },
  {
    id: 3,
    label: "Operator Trust",
    value: "GLOBAL",
    icon: Users,
    color: "#43D0C9",
  },
  {
    id: 4,
    label: "Scalability",
    value: "UNLIMITED",
    icon: Globe,
    color: "#E82F09",
  },
];

export default function TrustStats() {
  return (
    <section
      id="trust-stats"
      className="relative overflow-hidden  py-20 text-white "
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   h-52 w-[800px] rounded-full bg-[#ff8a00]/50 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,138,0,0.02),transparent_20%,transparent_80%,rgba(255,138,0,0.02))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* HEADER */}
        <div className="mb-14 md:mb-16">
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
              Performance Metrics
            </motion.p>
            <span className="h-px w-12 bg-[#ff8a00] animate-line-side delay-animation" />
          </div>

          <h2 className="heading">The Network of Power</h2>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative overflow-hidden border border-white/10 bg-[#202228] p-6 transition-all duration-500 hover:-translate-y-1 md:p-6"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* dynamic hover border */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 0 1px ${stat.color}, 0 18px 45px rgba(0,0,0,0.35)`,
                  }}
                />

                {/* subtle grid overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
                  <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:30px_30px]" />
                </div>

                {/* glow corner */}
                <div
                  className="pointer-events-none absolute right-[-20px] top-[-20px] h-28 w-28 rounded-full blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: stat.color }}
                />

                {/* scan line */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full -translate-x-full transition-transform duration-1000 ease-linear group-hover:translate-x-full"
                  style={{
                    background: `linear-gradient(to right, transparent, ${stat.color}, transparent)`,
                  }}
                />

                <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between">
                  {/* top */}
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full border bg-white/5 transition-all duration-300 group-hover:scale-105"
                      style={{
                        borderColor: stat.color,
                        color: stat.color,
                        boxShadow: `0 0 12px ${stat.color}30`,
                      }}
                    >
                      <Icon size={24} strokeWidth={2.1} />
                    </div>
                  </div>

                  {/* middle */}
                  <div className="mt-10">
                    <motion.span
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12 + index * 0.05,
                      }}
                      className="block font-[var(--font-heading)] text-[2.4rem] font-black uppercase leading-none md:text-[3rem]"
                      style={{
                        color: stat.color,
                        textShadow: `0 0 20px ${stat.color}40`,
                      }}
                    >
                      {stat.value}
                    </motion.span>

                    <h3 className="mt-4 font-[var(--font-heading)] text-xl font-black uppercase leading-tight text-white md:text-2xl">
                      {stat.label}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
