"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GameButton from "@/components/ui/GameButton";
import GameButton2 from "@/components/ui/GameButton2";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* PARTICLES BACKGROUND */}
      <ParticlesBackground />

      {/* WARM GLOW BLOBS */}
      <div className="pointer-events-none absolute left-[-120px] top-0 h-[400px] w-[600px]  bg-[#FFD34D]/30 blur-[500px]" />
      {/* <div className="pointer-events-none absolute bottom-[160px] right-[-80px] h-96 w-96 rounded-full bg-orange-400/50 blur-3xl" /> */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" /> */}

      {/* MAIN CONTENT */}
      <div
        className="relative z-10 mx-auto grid min-h-[calc(100vh-68px)] lg:min-h-[calc(100vh-136px)] max-w-7xl 
    grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 
    lg:grid-cols-12"
      >
        {/* LEFT SIDE */}
        <div className="lg:col-span-6">
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
            <GameButton href="/contact" label="Request Demo" />
            <GameButton2 href="/platform" label="Explore Platform" />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto flex  w-full h-full min-h-[400px] lg:min-h-[600px] lg:col-span-6 items-center justify-center"
        >
          {/* <div className="absolute -inset-10  bg-gradient-to-r from-yellow-200/20 via-orange-300/20 to-red-400/20 blur-3xl" /> */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/arcade-base2.png"
              alt="Quantum Link Arcade"
              fill
              className=" object-contain "
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
