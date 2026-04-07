"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import {
  Home,
  Check,
  ArrowRight,
  Zap,
  ShieldCheck,
  Gamepad2,
  Layers3,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticlesBackground2 from "@/components/ui/ParticlesBackground2";
import GameButton from "@/components/ui/GameButton";

const operatorPoints = [
  "High revenue potential",
  "Scalable infrastructure",
  "Low maintenance",
  "Business-focused ",
];

const choose8LinePoints = [
  {
    icon: Zap,
    title: "Innovative gaming platform",
    desc: "Built with a modern approach that combines engaging gameplay, strong performance, and a future-ready platform structure.",
  },
  {
    icon: Gamepad2,
    title: "High-quality game design",
    desc: "Every experience is crafted to feel immersive, visually polished, and exciting for players in arcade environments.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable and scalable system",
    desc: "The platform is designed to run smoothly and expand easily as operator needs, locations, and game libraries grow.",
  },
  {
    icon: Layers3,
    title: "Continuous updates",
    desc: "8Line focuses on ongoing improvement through updates, refinements, and new additions that keep the platform competitive.",
  },
];

export default function Solutions() {
  return (
    <>
      <Navbar />
      <ParticlesBackground2 />

      <main className="text-white">
        {/* breadcrumbs */}
        <section className="relative z-10 overflow-hidden">
          <div
            className="relative h-[200px] w-full md:h-[280px]"
            style={{
              backgroundColor: "#151C29",
              clipPath:
                "polygon(10% 0, 100% 0, 100% 65%, 90% 100%, 0 100%, 0 35%)",
            }}
          >
            <Image
              src="/images/breadcrumbs.png"
              alt="Solutions Banner"
              fill
              priority
              className="z-0 object-cover"
            />

            <div className="absolute inset-0 z-[1] bg-black/35" />
            {/* <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,170,0,0.22)_0%,rgba(255,138,0,0.12)_20%,transparent_55%)]" /> */}

            {/* <div className="absolute bottom-0 left-0 right-0 z-[3] h-[120px] pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,160,40,0.95)_0%,rgba(255,138,0,0.7)_28%,rgba(255,138,0,0.28)_52%,transparent_78%)] blur-[22px]" />
            </div> */}

            {/* <div className="absolute bottom-[18px] left-[-5%] z-[4] h-[70px] w-[110%] pointer-events-none rounded-[100%] border-b-[6px] border-[#ff8a00]/80 blur-[2px]" /> */}
            {/* <div className="absolute bottom-[10px] left-[-5%] z-[4] h-[85px] w-[110%] pointer-events-none rounded-[100%] border-b-[10px] border-[#ffd34d]/65 blur-[8px]" /> */}
            {/* <div className="absolute bottom-0 left-0 right-0 z-[3] h-[90px] pointer-events-none bg-[linear-gradient(to_top,rgba(255,140,0,0.35),rgba(255,140,0,0.08),transparent)]" /> */}

            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center md:px-10">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-[var(--font-heading)] text-5xl font-bold tracking-tight text-white md:text-7xl"
              >
                Solutions
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-5 flex items-center gap-3 rounded-full border border-[#ffd34d]/20 bg-white/5 px-5 py-2.5 backdrop-blur-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffd34d]/40 bg-[#ff8a00]/10 text-[#ff8a00] shadow-[0_0_18px_rgba(255,138,0,0.6)]">
                  <Home size={18} />
                </span>

                <div className="flex items-center gap-2 text-base">
                  <Link
                    href="/"
                    className="text-white/85 transition hover:text-[#ffd34d]"
                  >
                    Home
                  </Link>
                  <span className="text-white/45">--</span>
                  <span className="font-semibold text-[#ff8a00]">
                    Solutions
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BUILT FOR GAMING BUSINESSES */}
        <section className="relative overflow-hidden py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* left content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
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
                    className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.14em] text-[#ff8a00]"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                      display: "inline-block",
                    }}
                  >
                    Solutions For Operators
                  </motion.p>

                  <span className="animate-line-side delay-animation" />
                </div>

                <h2 className="font-[var(--font-heading)] text-4xl font-bold leading-tight text-white md:text-6xl">
                  Built for Gaming Businesses
                </h2>

                <div className="mt-10  w-fit grid grid-cols-2 gap-4">
                  {operatorPoints.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="group relative flex items-center gap-5 overflow-hidden border border-[#5a5d63] bg-[#202228] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                    >
                      {/* icon left */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] transition-all duration-300 group-hover:border-[#ff8a00]">
                        <Check
                          size={28}
                          strokeWidth={2.5}
                          className="text-[#ff8a00]"
                        />
                      </div>

                      {/* text right */}
                      <p className="text-base font-medium text-white/85">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-10"
                >
                  <GameButton label="Become a Partner" href="/contact" />
                </motion.div>
              </motion.div>

              {/* right visual */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75 }}
                className="relative"
              >
                <div
                  className="relative overflow-hidden  shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
                  style={{
                    clipPath: "polygon(12% 0, 100% 0, 86% 100%, 0 100%)",
                  }}
                >
                  <div className="grid min-h-[560px] grid-cols-1">
                    <div className="relative h-[560px] w-full">
                      <Image
                        src="/images/solutions.png"
                        alt="Gaming business solutions"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* why choose 8line */}
        <section className="relative overflow-hidden py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
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
                  Why Choose 8Line
                </motion.p>
                <span className="animate-line-side delay-animation" />
              </div>
              <h2 className="font-[var(--font-heading)] text-3xl font-bold text-white md:text-5xl">
                Built with innovation, quality, and long-term platform strength
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">
                8Line focuses on delivering a modern gaming platform experience
                that combines premium design, dependable technology, and
                scalable performance for operators who want more than a standard
                arcade solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {choose8LinePoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative overflow-hidden border border-[#5a5d63] bg-[#202228] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,138,0,0.10),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] text-[#ffd34d]">
                        <Icon
                          size={24}
                          strokeWidth={2.1}
                          className="text-[#ff8a00]"
                        />
                      </div>

                      <div>
                        <h3 className="font-[var(--font-heading)] text-xl uppercase leading-snug font-black text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/72 md:text-[15px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
