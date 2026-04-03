"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

const hardwareCards = [
  {
    title: "Touchscreen Compatibility",
    description:
      "Quantum Link is fully optimized for touchscreen-based arcade interaction, delivering responsive controls and a smooth user experience.",
    image: "/images/touch.png",
  },
  {
    title: "Arcade Machine Ready",
    description:
      "Built for modern arcade environments, Quantum Link integrates seamlessly with arcade cabinets and gaming hardware systems.",
    image: "/images/machine.png",
  },
  {
    title: "Easy Installation",
    description:
      "The platform supports straightforward installation and setup, reducing deployment time and making integration simple for operators.",
    image: "/images/install.png",
  },
  {
    title: "Optimized for Performance",
    description:
      "Quantum Link is engineered for stable, efficient, and high-performance operation across modern gaming and arcade setups.",
    image: "/images/performance.png",
  },
];

function HardwareCard({
  card,
  index,
  progress,
}: {
  card: (typeof hardwareCards)[0];
  index: number;
  progress: MotionValue<number>;
}) {
  const total = hardwareCards.length;
  const segment = 1 / total;
  const start = index * segment;
  const enterEnd = start + segment * 0.45;

  const opacity = useTransform(progress, [start, enterEnd, 1], [0, 1, 1], {
    clamp: true,
  });

  const scale = useTransform(progress, [start, enterEnd, 1], [0.92, 1, 1], {
    clamp: true,
  });

  const y = useTransform(progress, [start, enterEnd, 1], [90, 0, 0], {
    clamp: true,
  });

  const activeLift = useTransform(
    progress,
    [start, enterEnd, 1],
    [0, 0, -index * 10],
    { clamp: true },
  );

  const zIndex = useTransform(
    progress,
    [start, enterEnd, 1],
    [index, total + index + 5, total + index + 5],
    { clamp: true },
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        zIndex,
      }}
      className="absolute left-0 top-1/2 w-full max-w-[620px] -translate-y-1/2"
    >
      <motion.div
        style={{ y: activeLift }}
        className="game-media-shape bg-[#FF8A00] p-[2px] shadow-[0_0_20px_rgba(255,168,0,0.15)]"
      >
        <div className="game-media-shape group relative overflow-hidden bg-[#0b0b0f]">
          <div className="relative h-[500px] w-full md:h-[560px]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.25),rgba(0,0,0,0.82),rgba(0,0,0,0.96))]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.3)_100%)]" />

            <div className="relative z-10 flex h-full flex-col justify-end px-7 py-7 text-left md:px-10 md:py-10">
              <h3 className="max-w-[500px] font-[var(--font-heading)] text-[2.2rem] font-black uppercase leading-[0.95] text-white md:text-[4rem]">
                {card.title}
              </h3>

              <p className="mt-4 max-w-[470px] text-sm leading-7 text-white/78 md:text-[1rem]">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hardware() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.5,
  });

  return (
    <section
      id="hardware"
      ref={sectionRef}
      className="relative h-[400vh] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* background image */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 md:px-10">
          <div className="hidden md:flex relative h-[82vh] w-full max-w-7xl overflow-hidden rounded-[28px]">
            <Image
              src="/images/hardware.png"
              alt="Hardware background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
        </div>

        {/* glow accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-80px] top-[15%] h-72 w-72 rounded-full bg-[#ffa800]/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-60px] h-72 w-72 rounded-full bg-[#ffa800]/15 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* left side cards */}
          <div className="relative h-[650px] w-full order-2 lg:order-1">
            {hardwareCards.map((card, index) => (
              <HardwareCard
                key={card.title}
                card={card}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>

          {/* right side fixed content */}
          <div className="relative z-20 max-w-[520px] lg:pl-6 order-1 lg:order-2">
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
                Hardware & Compatibility
              </motion.p>
              <span className="animate-line-side delay-animation" />
            </div>

            <h2 className="heading">Build Your Ultimate Setup</h2>

            <div className="hidden md:flex mt-10 flex gap-4">
              {hardwareCards.map((_, i) => {
                const total = hardwareCards.length;
                const segment = 1 / total;
                const start = i * segment;
                const enterEnd = start + segment * 0.45;

                const activeOpacity = useTransform(
                  smoothProgress,
                  [start, enterEnd, 1],
                  [0.35, 1, 1],
                  { clamp: true },
                );

                const activeScale = useTransform(
                  smoothProgress,
                  [start, enterEnd, 1],
                  [1, 1.1, 1.1],
                  { clamp: true },
                );

                return (
                  <motion.div
                    key={i}
                    style={{ opacity: activeOpacity, scale: activeScale }}
                    className="h-16 w-4 rounded-full border border-[#ffa800] bg-white/5"
                  >
                    <motion.div
                      style={{ opacity: activeOpacity }}
                      className="mx-auto mt-6 h-3 w-3 rounded-full bg-[#ffa800]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
