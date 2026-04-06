"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const games = [
  {
    title: "Growling Lion",
    image: "/images/lion.png",
  },
  {
    title: "Roaring Tiger",
    image: "/images/tiger.png",
  },
  {
    title: "Running Buffalo",
    image: "/images/bison.png",
  },
  {
    title: "Jin Yu Man Tang",
    image: "/images/four.png",
  },
  {
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

          <h2 className="heading max-w-3xl">The Quantum Link Vault</h2>
        </motion.div>

        {/* carousel */}
        <div className="relative">
          <div
            ref={sliderRef}
            onWheel={handleWheel}
            className="no-scrollbar flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ touchAction: "pan-y" }}
          >
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                data-game-card="true"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group min-w-[260px] shrink-0 snap-start sm:min-w-[320px] lg:min-w-[420px] "
              >
                {/* card + title wrapper */}
                <div className="cursor-pointer">
                  {/* CARD */}
                  <div
                    className="game-card-shape relative overflow-hidden p-[2px] "
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
                      <div className="game-media-shape relative h-[360px] overflow-hidden sm:h-[400px] lg:h-[430px] p-2">
                        {game.image ? (
                          <img
                            src={game.image}
                            alt={game.title}
                            className="h-full w-full object-cover  "
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-[#111827] text-white/50">
                            Image not found
                          </div>
                        )}

                        {/* default dark overlay  becomes lighter on hover */}
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

                  {/* CLEAN TITLE BELOW CARD */}
                  <div className="mt-5 px-1">
                    <h3 className="font-[var(--font-heading)] text-[28px] font-extrabold leading-none text-white transition-colors duration-300 group-hover:text-[#FFD34D] sm:text-[34px]">
                      {game.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* bottom controls */}
          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="h-[2px] flex-1 overflow-hidden bg-white/20">
              <div
                className="h-full bg-[#FF8A00] transition-all duration-500"
                style={{ width: progressWidth }}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollLeft}
                className="relative flex  items-center justify-center  text-white cursor-pointer"
                style={{
                  clipPath:
                    "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 80%)",
                }}
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={scrollRight}
                className="relative flex  items-center justify-center  text-white cursor-pointer"
                style={{
                  clipPath:
                    "polygon(0% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 0% 100%)",
                }}
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
