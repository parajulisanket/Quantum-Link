"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // KEEP YOUR CURRENT MOUSE MOVEMENT CODE EXACTLY SAME HERE
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    const trail = trailRef.current;

    if (!cursor || !glow || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    let trailX = mouseX;
    let trailY = mouseY;

    let rafId = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;

      trailX += (mouseX - trailX) * 0.055;
      trailY += (mouseY - trailY) * 0.055;

      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0f14]">
      {/* center big orange/yellow glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at center,
              rgba(255,210,90,0.22) 0%,
              rgba(255,168,0,0.16) 18%,
              rgba(255,168,0,0.10) 30%,
              rgba(255,168,0,0.05) 42%,
              rgba(255,168,0,0.02) 52%,
              transparent 68%
            )
          `,
          filter: "blur(10px)",
        }}
      />

      {/* secondary center glow for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at center,
              rgba(255,230,140,0.12) 0%,
              rgba(255,190,60,0.08) 20%,
              transparent 40%
            )
          `,
          filter: "blur(26px)",
        }}
      />

      {/* grid lines */}
      <div
        className="absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,168,0,0.55) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,220,120,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          boxShadow: "inset 0 0 80px rgba(0,0,0,0.35)",
        }}
      />

      {/* small square / particle dots like reference */}
      <div
        className="absolute inset-0 opacity-[0.9]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,220,130,0.95) 1.2px, transparent 1.8px),
            radial-gradient(circle, rgba(255,168,0,0.85) 1px, transparent 1.6px),
            radial-gradient(circle, rgba(255,240,180,0.65) 0.8px, transparent 1.3px)
          `,
          backgroundSize: "260px 260px, 190px 190px, 140px 140px",
          backgroundPosition: "28px 36px, 90px 120px, 12px 72px",
          mixBlendMode: "screen",
        }}
      />

      {/* extra tiny scattered particles */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,220,130,0.7) 0.7px, transparent 1.2px)",
          backgroundSize: "92px 92px",
          backgroundPosition: "18px 30px",
        }}
      />

      {/* dark vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 38%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.42) 100%)",
        }}
      />

      {/* YOUR EXISTING MOUSE TRAIL - DO NOT CHANGE */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed z-[9999] left-0 top-0 h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,191,73,0.12) 0%, rgba(255,140,0,0.08) 35%, rgba(255,140,0,0.03) 58%, transparent 76%)",
          filter: "blur(12px)",
          mixBlendMode: "screen",
        }}
      />

      {/* YOUR EXISTING MOUSE GLOW - DO NOT CHANGE */}
      <div
        ref={glowRef}
        className="pointer-events-none  z-[9999] fixed left-0 top-0 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,235,160,0.95) 0%, rgba(255,196,70,0.78) 22%, rgba(255,140,0,0.45) 46%, rgba(255,140,0,0.10) 68%, transparent 80%)",
          filter: "blur(5px)",
          boxShadow:
            "0 0 18px rgba(255,180,60,0.38), 0 0 32px rgba(255,140,0,0.22), 0 0 56px rgba(255,140,0,0.12)",
          mixBlendMode: "screen",
        }}
      />

      {/* YOUR EXISTING CURSOR - DO NOT CHANGE */}
      <div
        ref={cursorRef}
        className="pointer-events-none z-[9999] fixed left-0 top-0 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,235,170,0.95) 0%, rgba(255,185,70,0.85) 25%, rgba(255,140,0,0.55) 55%, rgba(255,120,0,0.18) 75%, transparent 100%)",
          filter: "blur(0.6px)",
          boxShadow: `
            0 0 8px rgba(255,200,90,0.9),
            0 0 18px rgba(255,150,40,0.7),
            0 0 32px rgba(255,120,0,0.45),
            inset 0 0 6px rgba(255,255,255,0.25)
          `,
          opacity: 0.95,
        }}
      />
    </div>
  );
}
