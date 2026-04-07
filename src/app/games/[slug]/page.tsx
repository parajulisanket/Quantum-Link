import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { Home } from "lucide-react";
import { LoadingLink as Link } from "@/components/PageTransitionLoader";
import { notFound } from "next/navigation";
import GameButton from "@/components/ui/GameButton";
import GameButton2 from "@/components/ui/GameButton2";

const games = [
  {
    slug: "growling-lion",
    title: "Growling Lion",
    image: "/images/lion.png",
    shortDescription:
      "A powerful lion-themed slot experience with bold visuals.",
    description:
      "Growling Lion delivers a premium gaming experience with strong visual design, immersive presentation, and smooth gameplay interaction.",
  },
  {
    slug: "roaring-tiger",
    title: "Roaring Tiger",
    image: "/images/tiger.png",
    shortDescription: "A fierce tiger-themed game with energetic presentation.",
    description:
      "Roaring Tiger is designed to create excitement through dynamic visuals, strong visual effects, and engaging game interaction.",
  },
  {
    slug: "running-buffalo",
    title: "Running Buffalo",
    image: "/images/bison.png",
    shortDescription:
      "A bold wildlife-inspired game with a rugged premium feel.",
    description:
      "Running Buffalo combines strong character, detailed artwork, and smooth visual presentation to create a rich casino-style experience.",
  },
  {
    slug: "jin-yu-man-tang",
    title: "Jin Yu Man Tang",
    image: "/images/four.png",
    shortDescription:
      "An elegant game title with luxurious visual presentation.",
    description:
      "Jin Yu Man Tang offers a refined and polished experience built with elegant styling, immersive visuals, and smooth interaction.",
  },
  {
    slug: "zhao-cai-jin-bao",
    title: "Zhao Cai Jin Bao",
    image: "/images/five.png",
    shortDescription: "A rich premium game with engaging themed presentation.",
    description:
      "Zhao Cai Jin Bao is built for a modern gaming platform with high-end presentation, responsive layout, and engaging visual quality.",
  },
];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cleanSlug = decodeURIComponent(slug).trim().toLowerCase();

  const game = games.find(
    (item) => item.slug.trim().toLowerCase() === cleanSlug,
  );

  if (!game) {
    notFound();
  }

  return (
    <>
      <Navbar />

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
            alt={`${game.title} Banner`}
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
            <h1 className="font-[var(--font-heading)] text-5xl font-bold tracking-tight text-white md:text-7xl">
              {game.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#ffd34d]/20 bg-white/5 px-5 py-2.5 backdrop-blur-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffd34d]/40 bg-[#ff8a00]/10 text-[#ff8a00] shadow-[0_0_18px_rgba(255,138,0,0.6)]">
                <Home size={18} />
              </span>

              <div className="flex flex-wrap items-center gap-2 text-base">
                <Link
                  href="/"
                  className="text-white/85 transition hover:text-[#ffd34d]"
                >
                  Home
                </Link>

                <span className="text-white/45">--</span>

                <Link
                  href="/games"
                  className="text-white/85 transition hover:text-[#ffd34d]"
                >
                  Games
                </Link>

                <span className="text-white/45">--</span>

                <span className="font-semibold text-[#ff8a00]">
                  {game.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-20 text-white"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #0D1017 25%, #0D1017 50%, #070b14 75%, transparent 100%)",
        }}
      >
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b111b] p-2">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={game.image}
                alt={game.title}
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>
          </div>

          <div>
            <h2 className="font-[var(--font-heading)] text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {game.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/75">
              {game.shortDescription}
            </p>

            <p className="mt-6 text-base leading-8 text-white/70">
              {game.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <GameButton href="/contact" label="request demo" />
              <GameButton2 href="/games" label="Back" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
