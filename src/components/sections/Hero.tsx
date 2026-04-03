"use client";

import { motion } from "framer-motion";
import GameButton from "@/components/ui/GameButton";
import GameButton2 from "@/components/ui/GameButton2";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* PARTICLES BACKGROUND */}
      <ParticlesBackground />

      {/* WARM GLOW BLOBS */}
      <div className="pointer-events-none absolute left-[-120px] top-0 h-[400px] w-[600px]  bg-[#FFD34D]/30 blur-[500px]" />
      <div className="pointer-events-none absolute bottom-[160px] right-[-80px] h-96 w-96 rounded-full bg-orange-400/50 blur-3xl" />
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" /> */}

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-32 md:px-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl heading  drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)] "
          >
            Quantum Link
            <span className="block bg-gradient-to-r from-yellow-100 via-orange-200 to-red-200 bg-clip-text  text-transparent">
              The Future of Arcade Gaming
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl font-[var(--font-body)] text-base leading-8 text-white/90 md:text-lg"
          >
            A next-generation multi-game platform built for performance,
            engagement, and maximum revenue. Designed for operators, powered by
            cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <GameButton href="#contact" label="Request Demo" />
            <GameButton2 href="#platform" label="Explore Platform" />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto flex w-full max-w-[560px] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-yellow-200/20 via-orange-300/15 to-red-400/20 blur-2xl" />

          <div className="relative w-full overflow-hidden rounded-[32px] border border-white/20 bg-white/12 p-4 shadow-[0_0_60px_rgba(120,45,0,0.22)] backdrop-blur-xl">
            <div className="rounded-[28px] border border-white/20 bg-white/18 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-[var(--font-heading)] text-lg font-semibold text-white">
                    Quantum Link Console
                  </p>
                  <p className="font-[var(--font-body)] text-sm text-white/80">
                    Premium operator dashboard preview
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,0.8)]" />
                  <span className="h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />
                  <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-yellow-100/20 to-transparent p-4">
                  <p className="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-white/70">
                    Active Modules
                  </p>
                  <p className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-white">
                    05
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-orange-200/20 to-transparent p-4">
                  <p className="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-white/70">
                    Performance
                  </p>
                  <p className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-white">
                    99%
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/15 bg-white/[0.08] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-[var(--font-heading)] text-base text-white">
                      Engagement Signal
                    </p>
                    <p className="font-[var(--font-body)] text-xs text-yellow-100">
                      Live preview
                    </p>
                  </div>

                  <div className="flex h-28 items-end gap-3">
                    {[45, 65, 52, 84, 70, 96, 78, 88].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 10 }}
                        animate={{ height }}
                        transition={{
                          duration: 0.9,
                          delay: 0.1 * index,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 0.8,
                        }}
                        className="w-full rounded-t-xl bg-gradient-to-t from-yellow-300 via-orange-500 to-red-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
