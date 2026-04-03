"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GameButton({ label = "BUY NOW", href = "#" }) {
  return (
    <Link href={href} className="inline-block group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-9 py-3 overflow-hidden transition-colors duration-500"
        style={{
          backgroundColor: "#ffd34d",
          clipPath: "polygon(10% 0, 100% 0, 100% 65%, 90% 100%, 0 100%, 0 35%)",
        }}
      >
        {/* Hover Background Layer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: "#ff8a00" }}
        />

        {/* Animated Shimmer Line */}
        <motion.div
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-white/40 to-transparent w-1/2 -skew-x-12"
        />

        {/* Button Text */}
        <span
          className="relative z-20 text-black font-black italic tracking-widest text-md uppercase group-hover:text-white"
          style={{ fontFamily: "var(--font-heading), sans-serif" }}
        >
          {label}
        </span>
      </motion.button>
    </Link>
  );
}
