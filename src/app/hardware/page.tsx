"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import { Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticlesBackground2 from "@/components/ui/ParticlesBackground2";

const hardwareSteps = [
  {
    number: "01",
    title: "Touchscreen Compatible",
    text: "Quantum Link is fully optimized for touchscreen-based arcade interaction, delivering responsive controls and a smooth user experience.",
    image: "/images/touch.png",
  },
  {
    number: "02",
    title: "Arcade Machine Ready",
    text: "Built for modern arcade environments, Quantum Link integrates seamlessly with arcade cabinets and gaming hardware systems.",
    image: "/images/machine.png",
  },
  {
    number: "03",
    title: "Easy Installation",
    text: "The platform supports straightforward installation and setup, reducing deployment time and making integration simple for operators.",
    image: "/images/install.png",
  },
  {
    number: "04",
    title: "Optimized Performance",
    text: "Quantum Link is engineered for stable, efficient, and high-performance operation across modern gaming and arcade setups.",
    image: "/images/performance.png",
  },
];

export default function Hardware() {
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
              src="/images/breadcrums.png"
              alt="About Quantum Link Banner"
              fill
              priority
              className="z-0 object-cover"
            />

            <div className="absolute inset-0 z-[1] bg-black/35" />
            <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,170,0,0.22)_0%,rgba(255,138,0,0.12)_20%,transparent_55%)]" />

            <div className="absolute bottom-0 left-0 right-0 z-[3] h-[120px] pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,160,40,0.95)_0%,rgba(255,138,0,0.7)_28%,rgba(255,138,0,0.28)_52%,transparent_78%)] blur-[22px]" />
            </div>

            <div className="absolute bottom-[18px] left-[-5%] z-[4] h-[70px] w-[110%] pointer-events-none rounded-[100%] border-b-[6px] border-[#ff8a00]/80 blur-[2px]" />
            <div className="absolute bottom-[10px] left-[-5%] z-[4] h-[85px] w-[110%] pointer-events-none rounded-[100%] border-b-[10px] border-[#ffd34d]/65 blur-[8px]" />
            <div className="absolute bottom-0 left-0 right-0 z-[3] h-[90px] pointer-events-none bg-[linear-gradient(to_top,rgba(255,140,0,0.35),rgba(255,140,0,0.08),transparent)]" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center md:px-10">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-[var(--font-heading)] text-5xl font-bold tracking-tight text-white md:text-7xl"
              >
                Hardware
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
                  <span className="font-semibold text-[#ff8a00]">Hardware</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HARDWARE & COMPATIBILITY */}
        <section className="relative overflow-visible py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* heading */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
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
                  Hardware & Compatibility
                </motion.p>
                <span className="animate-line-side delay-animation" />
              </div>

              <h2 className="font-[var(--font-heading)] text-4xl font-bold text-white md:text-6xl">
                Build Your Ultimate Setup
              </h2>
            </div>

            {/* sticky overlapping cards */}
            <div className="relative">
              {hardwareSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 60 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="group sticky top-24 mb-10"
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  {/* orange border */}
                  <div className="game-media-shape relative bg-[linear-gradient(135deg,#ff8a00_0%,#ffd34d_45%,#ff8a00_100%)] p-[1.5px] shadow-[0_0_24px_rgba(255,168,0,0.14)]">
                    {/* rotating border effect */}
                    <div className="border-frame game-media-shape" />

                    {/* INNER CARD */}
                    <div className="game-media-shape relative z-[2] overflow-hidden bg-[#202228] backdrop-blur-2xl">
                      <div className="grid min-h-[520px] md:grid-cols-5">
                        <div className="relative min-h-[280px] md:col-span-3 md:min-h-[520px]">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111826]/10" />
                        </div>

                        {/* content: 40% */}
                        <div className="relative flex flex-col justify-center p-8 md:col-span-2 md:p-10 lg:p-12">
                          <div className="relative z-[2]">
                            <div className="mb-6 flex items-center gap-4">
                              <span className="text-5xl font-bold leading-none text-[#ff8a00]/60 md:text-6xl">
                                {step.number}
                              </span>
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ff8a00] to-transparent" />
                            </div>

                            <h3 className="font-[var(--font-heading)] text-3xl font-bold leading-tight text-white md:text-4xl">
                              {step.title}
                            </h3>

                            <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
