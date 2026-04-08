"use client";

import { motion } from "framer-motion";
import GameButton from "@/components/ui/GameButton";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 text-white">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-72 w-72 rounded-full bg-yellow-600 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2">
        {/* LEFT VISUAL SIDE - VIDEO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] bg-[#ff8a00]/10 blur-2xl" />

            {/* Main Video Frame */}
            <div
              className="relative overflow-hidden border border-[#ff8a00]/40 bg-[#0b101c]"
              style={{ clipPath: "polygon(12% 0, 100% 0, 86% 100%, 0 100%)" }}
            >
              <video
                src="/videos/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[420px] w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,138,0,0.1),transparent_35%)]" />
            </div>
          </div>

          {/* Small Side Card Overlay */}
          <div
            className="absolute left-[-100px] top-[88px] hidden w-[170px] overflow-hidden border border-white/10 bg-[#0c1220] shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:block"
            style={{ clipPath: "polygon(18% 0, 100% 0, 82% 100%, 0 100%)" }}
          >
            <img
              src="/images/arcade-1.jpg"
              alt="Overlay"
              className="h-[180px] w-full object-cover opacity-85"
            />
          </div>

          {/* Circular Accent Overlay */}
          <div className="absolute bottom-[-90px] left-[58%] hidden h-[170px] w-[170px] -translate-x-1/2 overflow-hidden rounded-full border-4 border-[#070b14] bg-[#0b101c] shadow-[0_20px_40px_rgba(0,0,0,0.45)] md:block">
            <img
              src="/images/arcade-2.jpg"
              alt="Accent"
              className="h-full w-full object-cover opacity-90"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT SIDE */}
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center  gap-4 overflow-hidden">
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
              className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.14em] text-[#ff8a00]"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                display: "inline-block",
              }}
            >
              About Quantum Link
            </motion.p>

            <span className="animate-line-side delay-animation" />
          </div>

          <h2 className="max-w-3xl heading">
            Building High-Performance Arcade and Gaming Platforms
          </h2>

          <p className="mt-8 max-w-2xl font-[var(--font-body)] text-base leading-8 text-white/70 md:text-lg">
            Quantum Link is a forward-thinking gaming company focused on
            building high-performance arcade and gaming platforms.
          </p>

          <div className="mt-10">
            <GameButton label="Explore Platform" href="/platform" />
          </div>
        </div>
      </div>
    </section>
  );
}
