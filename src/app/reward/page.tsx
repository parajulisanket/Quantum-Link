"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import { Home, Sparkles, Play, Gift, Zap, Target } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GameButton from "@/components/ui/GameButton";
import GameButton2 from "@/components/ui/GameButton2";
import ParticlesBackground2 from "@/components/ui/ParticlesBackground2";

const rewardFeatures = [
  {
    icon: Sparkles,
    title: "Progressive Jackpot Moments",
  },
  {
    icon: Gift,
    title: "Reward-Driven Gameplay",
  },
  {
    icon: Zap,
    title: "Fast Bonus Excitement",
  },
  {
    icon: Target,
    title: "Operator Control",
  },
];

const videoClips = [
  {
    title: "2X-2X-2X Jackpot Trigger ",
    subtitle: "Big win arcade moment",
    video: "/videos/jackpot1.mov",
  },
  {
    title: "Multiplier Win ",
    subtitle: "Fast-paced reward sequence",
    video: "/videos/jackpot3.mp4",
  },
  {
    title: "4X-4X-4X Reward Counter ",
    subtitle: "Coins and bonus stacking",
    video: "/videos/jackpot2.mov",
  },
];

export default function RewardsPage() {
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
              alt="Jackpot and Reward Banner"
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
                Jackpot & Reward System
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
                  <span className="font-semibold text-[#ff8a00]">Rewards</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* clips section */}
        <section className="relative overflow-hidden  py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10 space-y-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {videoClips.map((clip, index) => (
                <motion.div
                  key={clip.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="group relative"
                >
                  <div className="game-card-shape relative overflow-hidden bg-[#101724] p-[2px] backdrop-blur-sm">
                    <div className="border-frame"></div>

                    <div className="game-card-shape relative aspect-[4/5] overflow-hidden bg-[#101724]">
                      <video
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={clip.video} type="video/mp4" />
                      </video>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                      {/* <div className="absolute left-4 bottom-22 flex h-11 w-11 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] transition-all duration-300 group-hover:border-[#ff8a00]">
                        <Play
                          size={16}
                          strokeWidth={1.1}
                          className="text-[#ff8a00]  fill-current"
                        />
                      </div> */}

                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold text-white">
                          {clip.title}
                        </h3>
                        <p className="mt-2 text-lg text-white/65">
                          {clip.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="">
              <h2 className="heading">clips that show the reward energy</h2>
            </div>
          </div>
        </section>
        {/* full width featured video */}
        <section className="relative h-[60vh] min-h-[680px] w-full overflow-hidden bg-[#0a0f18]">
          {/* background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/jackpot.jpg"
          >
            <source src="/videos/jackpot.mp4" type="video/mp4" />
          </video>

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* bottom fade */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,15,24,0.88)_0%,rgba(10,15,24,0.36)_30%,rgba(10,15,24,0.1)_55%,rgba(10,15,24,0.35)_100%)]" />

          {/* content */}
          <div className="relative z-10 flex h-full items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <h2 className="heading">
                  Experience the thrill of jackpot wins in motion
                </h2>
              </motion.div>
            </div>
          </div>
        </section>

        {/* content section */}
        <section className="relative overflow-hidden py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            {/* BIG GLASS CONTAINER */}
            <div className="rounded-[28px] border border-white/10 bg-transparent backdrop-blur-sm px-6 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-16 lg:px-14">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                {/* LEFT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="flex flex-col justify-center"
                >
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
                      className="font-[var(--font-heading)] text-sm font-black uppercase tracking-[0.14em] text-[#ff8a00]"
                    >
                      System Flow
                    </motion.p>
                    <span className="animate-line-side delay-animation" />
                  </div>

                  <h2 className="font-[var(--font-heading)] text-4xl font-bold leading-tight text-white md:text-5xl">
                    Show players how rewards are earned, stacked, and unlocked.
                  </h2>
                </motion.div>

                {/* RIGHT SIDE */}
                <div className="grid gap-5 md:grid-cols-2">
                  {/* CARD 1 — cut top left */}
                  <div
                    className="group relative p-[1px] transition-all duration-300 hover:-translate-y-1 
             hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                    style={{
                      clipPath:
                        "polygon(32px 0,100% 0,100% 100%,0 100%,0 32px)",
                      background: "#5a5d63",
                    }}
                  >
                    {/* hover border layer */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 "
                      style={{
                        clipPath:
                          "polygon(32px 0,100% 0,100% 100%,0 100%,0 32px)",
                        background: "#ff8a00",
                      }}
                    />

                    <div
                      className="relative h-full w-full bg-[#1f2228] p-6"
                      style={{
                        clipPath:
                          "polygon(32px 0,100% 0,100% 100%,0 100%,0 32px)",
                      }}
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] group-hover:border-[#ff8a00]">
                        <Sparkles size={22} className="text-[#ff8a00]" />
                      </div>

                      <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white">
                        Progressive Jackpot Moments
                      </h3>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="group relative overflow-hidden border border-[#5a5d63] bg-[#1f2228] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] group-hover:border-[#ff8a00]">
                      <Gift size={22} className="text-[#ff8a00]" />
                    </div>

                    <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white">
                      Reward-Driven Gameplay
                    </h3>
                  </div>

                  {/* CARD 3 */}
                  <div className="group relative overflow-hidden border border-[#5a5d63] bg-[#1f2228] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] group-hover:border-[#ff8a00]">
                      <Zap size={22} className="text-[#ff8a00]" />
                    </div>

                    <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white">
                      Fast Bonus Excitement
                    </h3>
                  </div>

                  {/* CARD 4 — cut bottom right */}
                  <div
                    className="group relative p-[1px] transition-all duration-300 hover:-translate-y-1 
             hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                    style={{
                      clipPath:
                        "polygon(0 0,100% 0,100% calc(100% - 32px),calc(100% - 32px) 100%,0 100%)",
                      background: "#5a5d63",
                    }}
                  >
                    {/* hover border layer */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        clipPath:
                          "polygon(0 0,100% 0,100% calc(100% - 32px),calc(100% - 32px) 100%,0 100%)",
                        background: "#ff8a00",
                      }}
                    />

                    <div
                      className="relative h-full w-full bg-[#1f2228] p-6"
                      style={{
                        clipPath:
                          "polygon(0 0,100% 0,100% calc(100% - 32px),calc(100% - 32px) 100%,0 100%)",
                      }}
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#5a5d63] bg-[#181b20] group-hover:border-[#ff8a00]">
                        <Target size={22} className="text-[#ff8a00]" />
                      </div>

                      <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white">
                        Operator Control
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* bottom cta */}
        <section className="relative overflow-hidden  py-20">
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
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
                  Reward Showcase
                </motion.p>
                <span className="animate-line-side delay-animation" />
              </div>

              <h2 className="heading max-w-6xl">More excitement. More wins.</h2>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <GameButton label="Request Demo" href="/contact" />

                <GameButton2 label="Explore Games" href="/games" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
