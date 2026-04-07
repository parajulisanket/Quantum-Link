"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import { Home, Zap, Gamepad2, Layers3 } from "lucide-react";
import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticlesBackground2 from "@/components/ui/ParticlesBackground2";

const betterPoints = [
  {
    title: "One platform, multiple experiences",
    text: "Instead of managing separate systems, operators can offer multiple premium games through one powerful unified platform.",
  },
  {
    title: "Business-focused performance",
    text: "Quantum Link is designed not only to look impressive, but also to support smooth operation, easy management, and stronger revenue potential.",
  },
  {
    title: "Modern design with scalable technology",
    text: "By combining immersive game presentation with reliable architecture, 8Line and Quantum Link create a platform built for long-term growth.",
  },
];

export default function PlatformPage() {
  const imageCardRef = useRef<HTMLDivElement | null>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const glowX = useTransform(smoothRotateY, [-12, 12], ["35%", "65%"]);
  const glowY = useTransform(smoothRotateX, [-12, 12], ["35%", "65%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = imageCardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue = ((x - centerX) / centerX) * 10;
    const rotateXValue = -((y - centerY) / centerY) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

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
              alt="About Quantum Link Banner"
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
                The Platform
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
                  <span className="font-semibold text-[#ff8a00]">Platform</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* about section */}
        <section className="relative overflow-hidden py-20">
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.08fr_0.92fr] xl:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT VIDEO */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative lg:-ml-6 lg:w-[108%] xl:w-[112%]"
            >
              <div
                className="relative overflow-hidden border border-[#ff8a00] shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
                style={{
                  clipPath: "polygon(12% 0, 100% 0, 86% 100%, 0 100%)",
                }}
              >
                <video
                  src="/videos/video1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[420px] w-full object-cover md:h-[450px] xl:h-[500px]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,138,0,0.15),transparent_40%)]" />
                <div className="absolute inset-0 border border-[#ffd34d]/20 pointer-events-none" />
              </div>

              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#ff8a00]/20 blur-3xl" />
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 lg:pl-8 xl:pl-12"
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
                  About Quantum Link
                </motion.p>

                <span className="animate-line-side delay-animation" />
              </div>

              <p className="max-w-[620px] text-base leading-8 text-white/78 md:text-lg">
                Quantum Link is a forward-thinking gaming company focused on
                building high-performance arcade and gaming platforms. Inspired
                by global industry leaders, we deliver innovative solutions that
                combine immersive gameplay, advanced technology, and scalable
                systems for businesses worldwide. Visually, we support this
                experience with subtle, modern design elements that strengthen
                the gaming identity without overwhelming the content.
              </p>

              <p className="max-w-[620px] text-base leading-8 text-white/72 md:text-lg">
                Our mission is to empower operators with powerful gaming
                platforms that drive engagement and revenue while maintaining a
                premium experience for players and businesses alike. By
                combining smart technology, scalable infrastructure, and
                immersive design, Quantum Link helps transform arcade
                entertainment into a modern, high-impact platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* what is quantum link */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 pointer-events-none " />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden  rounded-[28px] border border-white/10 bg-transparent backdrop-blur-sm px-6 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-16 lg:px-14"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,0,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,211,77,0.12),transparent_32%)]" />

              <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                {/* LEFT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="order-2 lg:order-1"
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
                      className="font-[var(--font-heading)] text-sm font-black uppercase tracking-[0.14em] text-[#ff8a00]"
                    >
                      What is Quantum Link?
                    </motion.p>
                    <span className="animate-line-side delay-animation" />
                  </div>

                  <p className="mt-6 max-w-[620px] text-base leading-8 text-white/75 md:text-lg">
                    Quantum Link is a multi-game arcade platform that integrates
                    multiple high-quality games into a single powerful system.
                    Designed for modern gaming environments, it allows operators
                    to deliver a complete gaming experience through one unified
                    platform.
                  </p>

                  <p className="mt-5 max-w-[620px] text-base leading-8 text-white/70 md:text-lg">
                    Rather than treating each game as a separate experience,
                    Quantum Link creates a connected platform where premium
                    titles work together within one scalable and reliable
                    ecosystem. This makes the platform easier to manage, more
                    consistent in performance, and stronger in overall business
                    value.
                  </p>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="order-1 flex justify-center lg:order-2 lg:justify-end"
                >
                  <div className="w-full max-w-[520px] [perspective:1200px]">
                    <motion.div
                      ref={imageCardRef}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        rotateX: smoothRotateX,
                        rotateY: smoothRotateY,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <motion.div
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at center, rgba(255,138,0,0.28), transparent 26%)",
                          backgroundPositionX: glowX,
                          backgroundPositionY: glowY,
                          backgroundRepeat: "no-repeat",
                        }}
                        className="pointer-events-none absolute inset-0 rounded-[30px]"
                      />

                      <div
                        style={{ transform: "translateZ(40px)" }}
                        className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#202228]"
                      >
                        <Image
                          src="/images/QL-Logo.png"
                          alt="Quantum Link"
                          width={900}
                          height={700}
                          className="h-[320px] w-full object-contain md:h-[430px]"
                        />
                      </div>

                      <div className="pointer-events-none absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#ff8a00]/10 blur-2xl" />
                      <div className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-[#ffd34d]/10 blur-2xl" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* why quantum link and 8line are better */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 " />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
              {/* LEFT IMAGE SIDE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="relative flex justify-center lg:justify-start"
              >
                <div className="relative w-full max-w-[430px]">
                  {/* orange glow behind image */}
                  <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8a00] blur-[95px]" />
                  <div className="absolute left-1/2 top-[58%] h-[180px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd34d] blur-[80px]" />

                  {/* image area */}
                  <div className="relative z-10 flex min-h-[590px] items-center justify-center ">
                    <Image
                      src="/images/arcade.png"
                      alt="Arcade Machine"
                      width={500}
                      height={760}
                      className="h-auto max-h-[500px] w-full max-w-[460px] object-contain drop-shadow-[0_25px_55px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* RIGHT CONTENT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="relative"
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
                    className="font-[var(--font-heading)] text-sm font-black uppercase tracking-[0.14em] text-[#ff8a00]"
                  >
                    Why it is better
                  </motion.p>
                  <span className="animate-line-side delay-animation" />
                </div>

                <h2 className="max-w-[760px] font-[var(--font-heading)] text-3xl font-bold leading-tight text-white md:text-5xl">
                  Why Quantum Link and 8Line stand above
                </h2>

                <div className="mt-10 space-y-7">
                  {betterPoints.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.55, delay: index * 0.1 }}
                      className="group relative overflow-hidden  border border-[#5a5d63] bg-[#202228] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                    >
                      <div className="flex items-start gap-6">
                        {/* icon box */}
                        <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full p-4 border border-[#5a5d63] bg-[#181b20] transition-all duration-300 group-hover:border-[#ff8a00]">
                          {index === 0 && (
                            <Zap
                              size={38}
                              strokeWidth={1.5}
                              className="text-[#ff8a00]"
                            />
                          )}
                          {index === 1 && (
                            <Gamepad2
                              size={38}
                              strokeWidth={1.5}
                              className="text-[#ff8a00]"
                            />
                          )}
                          {index === 2 && (
                            <Layers3
                              size={38}
                              strokeWidth={1.5}
                              className="text-[#ff8a00]"
                            />
                          )}
                        </div>

                        {/* content */}
                        <div className="space-y-1 text-left">
                          <h3 className="font-[var(--font-heading)] text-xl font-bold leading-tight text-white ">
                            {item.title}
                          </h3>

                          <p className=" max-w-[820px] text-sm leading-[1.9] text-white/60 md:text-[1.02rem]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
