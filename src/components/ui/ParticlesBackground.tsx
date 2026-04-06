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
    <div className="fixed inset-0 -z-10 bg-[#0D1117] overflow-hidden">
      {/* 1. Static Grid Lines (Increased Spacing) */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fb923c 1px, transparent 1px),
            linear-gradient(to bottom, #fb923c 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* 2. Moving Dots on Lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-transparent"
            style={{ top: `${i * 90}px` }}
          >
            <div
              className="h-0.5 w-3 rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 animate-move-dot"
              style={{
                boxShadow:
                  "0 0 6px rgba(251,146,60,0.9), 0 0 12px rgba(251,146,60,0.7), 0 0 20px rgba(251,146,60,0.5)",
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + (i % 3)}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* 3. Global CSS for the animation (Add to globals.css or use a <style> tag) */}

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
