"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { Home } from "lucide-react";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import ParticlesBackground2 from "@/components/ui/ParticlesBackground2";

const games = [
  { slug: "growling-lion", title: "Growling Lion", image: "/images/lion.png" },
  { slug: "roaring-tiger", title: "Roaring Tiger", image: "/images/tiger.png" },
  {
    slug: "running-buffalo",
    title: "Running Buffalo",
    image: "/images/bison.png",
  },
  {
    slug: "jin-yu-man-tang",
    title: "Jin Yu Man Tang",
    image: "/images/four.png",
  },
  {
    slug: "zhao-cai-jin-bao",
    title: "Zhao Cai Jin Bao",
    image: "/images/five.png",
  },
];

export default function Games() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const progressWidth = useMemo(() => {
    return `${((activeIndex + 1) / games.length) * 100}%`;
  }, [activeIndex]);

  const getCardWidth = () => {
    if (!sliderRef.current) return 444;

    const firstCard = sliderRef.current.querySelector(
      "[data-game-card='true']",
    ) as HTMLDivElement | null;

    if (!firstCard) return 444;

    const gap = 24;
    return firstCard.offsetWidth + gap;
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;

    const cardWidth = getCardWidth();

    sliderRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = activeIndex === 0 ? games.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = activeIndex === games.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(newIndex);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const isHorizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY);

    if (!isHorizontalIntent) return;

    e.preventDefault();
    slider.scrollLeft += e.deltaX;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cardWidth = getCardWidth();
      const index = Math.round(slider.scrollLeft / cardWidth);
      const safeIndex = Math.max(0, Math.min(index, games.length - 1));
      setActiveIndex(safeIndex);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev === games.length - 1 ? 0 : prev + 1;

        if (sliderRef.current) {
          const cardWidth = getCardWidth();
          sliderRef.current.scrollTo({
            left: cardWidth * nextIndex,
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, 3000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <ParticlesBackground2 />

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
              Games
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
                <span className="font-semibold text-[#ff8a00]">Games</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* games */}
      <section
        id="games"
        className="relative overflow-hidden py-20 text-white"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #0D1017 25%, #0D1017 50%, #070b14 75%, transparent 100%)",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          {/* heading */}
          {/* <motion.div
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
                className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.14em] text-[#ff8a00]"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  display: "inline-block",
                }}
              >
                Game Collection
              </motion.p>

              <span className="animate-line-side delay-animation" />
            </div>

            <h2 className="heading mx-auto max-w-3xl">
              The Quantum Link Vault
            </h2>
          </motion.div> */}

          {/* grid cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <Link
                  href={`/games/${game.slug}`}
                  className="block cursor-pointer"
                >
                  {/* CARD */}
                  <div
                    className="game-card-shape relative overflow-hidden p-[2px]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,138,0,0.16), rgba(255,211,77,0.14))",
                      boxShadow:
                        "0 0 25px rgba(255,138,0,0.14), 0 0 60px rgba(255,211,77,0.08)",
                    }}
                  >
                    {/* moving border layer */}
                    <div className="border-frame game-card-shape" />

                    {/* inner card */}
                    <div
                      className="game-card-shape relative overflow-hidden bg-[#070b14]"
                      style={{
                        boxShadow:
                          "inset 0 0 40px rgba(255,138,0,0.06), inset 0 0 80px rgba(255,211,77,0.04)",
                      }}
                    >
                      <div className="game-media-shape relative h-[360px] overflow-hidden p-2 sm:h-[400px] lg:h-[430px]">
                        {game.image ? (
                          <img
                            src={game.image}
                            alt={game.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-[#111827] text-white/50">
                            Image not found
                          </div>
                        )}

                        {/* default dark overlay becomes lighter on hover */}
                        <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/10" />

                        {/* subtle glow overlay */}
                        <div
                          className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(circle at bottom, rgba(255,138,0,0.10), transparent 35%), radial-gradient(circle at top right, rgba(255,211,77,0.08), transparent 28%)",
                          }}
                        />

                        {/* light sweep */}
                        <div className="absolute inset-y-0 left-[-130%] z-10 w-[42%] rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[125%]" />
                      </div>
                    </div>
                  </div>

                  {/* title below card */}
                  <div className="mt-5 px-1">
                    <h3 className="font-[var(--font-heading)] text-[28px] font-extrabold leading-none text-white transition-colors duration-300 group-hover:text-[#FFD34D] sm:text-[34px]">
                      {game.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
