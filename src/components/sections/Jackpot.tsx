"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Coins,
  Repeat,
  SlidersHorizontal,
  ArrowUpRight,
} from "lucide-react";
import GameButton from "@/components/ui/GameButton";
import GameButton2 from "@/components/ui/GameButton2";

const jackpotItems = [
  {
    title: "Progressive Jackpot System",
    description:
      "Quantum Link includes a powerful built-in jackpot and reward system designed to increase player engagement and maximize operator revenue.",
    icon: Trophy,
  },
  {
    title: "Multiplier Rewards",
    description:
      "Quantum Link includes a powerful built-in jackpot and reward system designed to increase player engagement and maximize operator revenue.",
    icon: Coins,
  },
  {
    title: "Player Retention Mechanics",
    description:
      "Quantum Link includes a powerful built-in jackpot and reward system designed to increase player engagement and maximize operator revenue.",
    icon: Repeat,
  },
  {
    title: "Configurable Reward Structure",
    description:
      "Quantum Link includes a powerful built-in jackpot and reward system designed to increase player engagement and maximize operator revenue.",
    icon: SlidersHorizontal,
  },
];

export default function JackpotRewardSystem() {
  return (
    <section id="jackpot" className="relative overflow-hidden py-20 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute left-[-120px] top-[10%] h-[280px] w-[280px] rounded-full bg-[#ff5c00]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-100px] bottom-[5%] h-[260px] w-[260px] rounded-full bg-[#ff7a00]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
              Jackpot & Reward System
            </motion.p>
            <span className="animate-line-side delay-animation" />
          </div>

          <h2 className="mx-auto max-w-3xl   heading">
            Ultimate Jackpot & Rewards Hub
          </h2>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {jackpotItems.map((item, index) => {
            const Icon = item.icon;
            const isFirstOrange = index === 1;
            const isSecondOrange = index === 2;
            const isOrangeCard = isFirstOrange || isSecondOrange;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <div
                  style={
                    isFirstOrange
                      ? {
                          clipPath:
                            "polygon(0 0, 78% 0, 100% 22%, 100% 100%, 0 100%)",
                        }
                      : isSecondOrange
                        ? {
                            clipPath:
                              "polygon(0 0, 100% 0, 100% 100%, 22% 100%, 0 78%)",
                          }
                        : {}
                  }
                  className={`relative flex h-full flex-col items-center justify-center overflow-hidden border px-8 py-16 text-center transition-all duration-300 hover:-translate-y-1 ${
                    isOrangeCard
                      ? "border-[#FF8A00] bg-[#FF8A00] hover:shadow-[0_0_0_1px_#FF8A00,0_14px_35px_rgba(255,138,0,0.28)]"
                      : "border-[#5a5d63] bg-[#1f2228] hover:border-[#ff8a00] hover:shadow-[0_0_0_1px_#ff8a00,0_14px_35px_rgba(255,138,0,0.18)]"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 ${
                      isOrangeCard
                        ? "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_35%)]"
                        : "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_35%)]"
                    }`}
                  />
                  {/* icon */}
                  <div
                    className={`mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ${
                      isOrangeCard
                        ? "border-[#1a1d24]/20 bg-[#161922]"
                        : "border-[#5a5d63] bg-[#181b20] group-hover:border-[#ff8a00]"
                    }`}
                  >
                    <Icon
                      size={32}
                      strokeWidth={2.3}
                      className={isOrangeCard ? "text-white" : "text-[#ff8a00]"}
                    />
                  </div>
                  {/* title */}
                  <h3
                    className={`mb-5 font-[var(--font-heading)] text-[1.6rem] md:text-[1.8rem] font-black leading-tight tracking-[-0.02em] ${
                      isOrangeCard ? "text-black" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {/* description */}
                  <p
                    className={`mx-auto max-w-[420px] text-[1.1rem] leading-[1.8] ${
                      isOrangeCard ? "text-black/80" : "text-white/80"
                    }`}
                  >
                    {item.description}
                  </p>
                  {/* button */}
                  <div className="mt-12 flex justify-center transition-transform duration-300 group-hover:-translate-y-1">
                    {isOrangeCard ? (
                      <GameButton2 href="/reward" label="View Details" />
                    ) : (
                      <GameButton href="/reward" label="View Details" />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
