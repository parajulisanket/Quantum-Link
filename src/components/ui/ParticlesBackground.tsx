"use client";

export default function GridBackground() {
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
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* 3. Global CSS for the animation (Add to globals.css or use a <style> tag) */}
      <style jsx global>{`
        @keyframes move-dot {
          0% {
            transform: translateX(-10px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        .animate-move-dot {
          animation: move-dot ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
