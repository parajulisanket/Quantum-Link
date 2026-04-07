"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import { Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticlesBackground2 from "@/components/ui/ParticlesBackground2";

const features = [
  {
    number: "01",
    title: "Multi-game integration in one system",
    description:
      "Multiple premium games brought together into one unified platform.",
    image: "/images/feature1.png",
  },
  {
    number: "02",
    title: "High-performance engine",
    description:
      "Built for stable speed, smooth response, and dependable gameplay.",
    image: "/images/feature2.png",
  },
  {
    number: "03",
    title: "Smooth animations and transitions",
    description:
      "Fluid movement and polished transitions for a more immersive feel.",
    image: "/images/feature3.png",
  },
  {
    number: "04",
    title: "Advanced graphics and textures",
    description:
      "Visually rich detail designed to create a premium gaming experience.",
    image: "/images/feature4.png",
  },
  {
    number: "05",
    title: "Scalable architecture",
    description:
      "Structured to grow efficiently across systems, content, and demand.",
    image: "/images/feature5.png",
  },
  {
    number: "06",
    title: "Easy system management",
    description:
      "Simple platform control for smoother updates and easier operation.",
    image: "/images/feature6.png",
  },
];

export default function FeaturesPage() {
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
              alt="Platform Features Banner"
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
                Platform Features
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
                  <span className="text-white/45">:</span>
                  <span className="font-semibold text-[#ff8a00]">Features</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* timeline section */}
        <section className="relative overflow-hidden py-20">
          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            {/* center line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/70 lg:block" />

            <div className="space-y-20 md:space-y-24">
              {features.map((feature, index) => {
                const isOdd = (index + 1) % 2 !== 0;

                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65 }}
                    className="relative"
                  >
                    {/* center node */}
                    <div className="absolute left-1/2 top-1/2 z-20 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,138,0,0.65)] lg:block" />

                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                      {/* left side */}
                      <div className="lg:pr-16">
                        {isOdd ? (
                          <div className="group relative overflow-hidden border border-[#5a5d63] bg-[#1f2228] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]">
                            <div className="font-[var(--font-heading)] text-6xl font-bold leading-none text-[#ff8a00] md:text-7xl">
                              {feature.number}
                            </div>

                            <h3 className="mt-5 max-w-[460px] font-[var(--font-heading)] text-2xl font-bold leading-snug text-white md:text-3xl">
                              {feature.title}
                            </h3>

                            <p className="mt-4 max-w-[500px] text-base leading-8 text-white/70 md:text-lg">
                              {feature.description}
                            </p>
                          </div>
                        ) : (
                          <div
                            className="group relative overflow-hidden"
                            style={{
                              clipPath:
                                "polygon(12% 0, 100% 0, 86% 100%, 0 100%)",
                            }}
                          >
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,138,0,0.10),transparent_40%)] opacity-80" />
                            <div className="relative h-[260px] w-full md:h-[320px]">
                              <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1018]/70 via-transparent to-transparent" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* right side */}
                      <div className="lg:pl-16">
                        {isOdd ? (
                          <div className="group relative overflow-hidden  p-6 transition-all duration-300 hover:-translate-y-1 ">
                            <div className="absolute inset-0 " />
                            <div
                              className="relative h-[260px] w-full md:h-[320px]"
                              style={{
                                clipPath:
                                  "polygon(12% 0, 100% 0, 86% 100%, 0 100%)",
                              }}
                            >
                              <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1018]/70 via-transparent to-transparent" />
                            </div>
                          </div>
                        ) : (
                          <div className="group relative overflow-hidden border border-[#5a5d63] bg-[#1f2228] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]">
                            <div className="font-[var(--font-heading)] text-6xl font-bold leading-none text-[#ff8a00] md:text-7xl">
                              {feature.number}
                            </div>

                            <h3 className="mt-5 max-w-[460px] font-[var(--font-heading)] text-2xl font-bold leading-snug text-white md:text-3xl">
                              {feature.title}
                            </h3>

                            <p className="mt-4 max-w-[500px] text-base leading-8 text-white/70 md:text-lg">
                              {feature.description}
                            </p>
                          </div>
                        )}
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
