"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import { Home, Mail, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticlesBackground2 from "@/components/ui/ParticlesBackground2";
import GameButton from "@/components/ui/GameButton";

export default function contact() {
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
                Contact
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
                  <span className="font-semibold text-[#ff8a00]">Contact</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* contact / cta */}
        <section className="relative overflow-hidden py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* big wrapper div */}
            <div className="rounded-[28px] border border-white/10 bg-transparent backdrop-blur-sm p-6 sm:p-8 lg:p-10 ">
              <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="max-w-[520px]"
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
                      Drop us a line
                    </motion.p>
                    <span className="animate-line-side delay-animation" />
                  </div>

                  <h2 className="heading">
                    Begin with
                    <br />
                    Quantum Link
                  </h2>

                  <p className="mt-8 max-w-[500px] text-[17px] leading-[1.9] text-white/70">
                    Ready to take your gaming business to the next level? Get in
                    touch with us to explore how Quantum Link can power your
                    platform. Request a demo, contact sales, or send us a
                    message through the form.
                  </p>

                  <div className="mt-10 space-y-6">
                    {/* phone */}
                    <div className="group flex items-center gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#4f5560] bg-[#151922] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-300 group-hover:border-[#ff8a00]">
                        <Phone
                          size={32}
                          strokeWidth={1.7}
                          className="text-[#ff8a00]"
                        />
                      </div>

                      <a
                        href="tel:+1234567890"
                        className="font-[var(--font-heading)] text-xl leading-none tracking-[0.02em] text-white transition duration-300 hover:text-[#ff8a00] "
                      >
                        (+01) 236 - 635 - 865
                      </a>
                    </div>

                    {/* email */}
                    <div className="group flex items-center gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#4f5560] bg-[#151922] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-300 group-hover:border-[#ff8a00]">
                        <Mail
                          size={32}
                          strokeWidth={1.7}
                          className="text-[#ff8a00]"
                        />
                      </div>

                      <a
                        href="tel:+1234567890"
                        className="font-[var(--font-heading)] text-xl leading-none tracking-[0.02em] text-white transition duration-300 hover:text-[#ff8a00] "
                      >
                        infor@quantumlink@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* right side */}
                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Name *"
                        className="h-[70px] w-full bg-transparent backdrop-blur-sm border border-[#FFD34D]/50  px-4 py-2 outline-none text-white placeholder:text-white/80 focus:border-[#FF6A1F] transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Phone *"
                        className="h-[70px] w-full bg-transparent backdrop-blur-sm border border-[#FFD34D]/50  px-4 py-2 outline-none text-white placeholder:text-white/80 focus:border-[#FF6A1F] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <input
                        type="email"
                        placeholder="Email *"
                        className="h-[70px] w-full bg-transparent backdrop-blur-sm border border-[#FFD34D]/50  px-4 py-2 outline-none text-white placeholder:text-white/80 focus:border-[#FF6A1F] transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        className="h-[70px] w-full bg-transparent backdrop-blur-sm border border-[#FFD34D]/50  px-4 py-2 outline-none text-white placeholder:text-white/80 focus:border-[#FF6A1F] transition-colors"
                      />
                    </div>

                    <textarea
                      placeholder="Your message..."
                      rows={8}
                      className="min-h-[250px] w-full resize-none  bg-transparent backdrop-blur-sm border border-[#FFD34D]/50  px-4 py-2 outline-none text-white placeholder:text-white/80 focus:border-[#FF6A1F] transition-colors"
                    />

                    <GameButton label="send message" />
                  </form>
                </motion.div>
              </div>
            </div>

            {/*  map */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-transparent backdrop-blur-sm shadow-[0_0_40px_rgba(255,138,0,0.06)]"
            >
              <div className="h-[320px] w-full md:h-[420px]">
                <iframe
                  title="USA Location Map"
                  src="https://www.google.com/maps?q=United%20States&z=4&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale invert-[0.05] contrast-[1.1]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
