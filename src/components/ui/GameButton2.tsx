"use client";
import { motion } from "framer-motion";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";

export default function GameButton2({ label = "BUY NOW", href = "#" }) {
  return (
    <Link href={href} className="inline-block group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block p-[2px] "
        style={{
          backgroundColor: "white",
          clipPath: "polygon(10% 0, 100% 0, 100% 65%, 90% 100%, 0 100%, 0 35%)",
        }}
      >
        <button
          className="relative overflow-hidden px-9 py-3 transition-colors duration-500 cursor-pointer"
          style={{
            backgroundColor: "#151C29",
            clipPath:
              "polygon(10% 0, 100% 0, 100% 65%, 90% 100%, 0 100%, 0 35%)",
          }}
        >
          {/* Hover Background Layer */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500  group-hover:opacity-100"
            style={{ backgroundColor: "white" }}
          />

          {/* Animated Shimmer Line */}
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="absolute inset-0 z-10 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent"
          />

          {/* Button Text */}
          <span
            className="relative z-20 text-md font-black italic uppercase tracking-widest text-white transition-colors duration-300 group-hover:text-black"
            style={{ fontFamily: "var(--font-heading), sans-serif" }}
          >
            {label}
          </span>
        </button>
      </motion.div>
    </Link>
  );
}
