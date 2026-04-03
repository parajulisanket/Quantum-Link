"use client";

import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GameButton from "../ui/GameButton";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const leftNav = [
  { label: "About", href: "#about" },
  { label: "Product", href: "#product" },
  { label: "Games", href: "#games" },
  { label: "Features", href: "#features" },
];

const rightNav = [
  { label: "Jackpot", href: "#jackpot" },
  { label: "Hardware", href: "#hardware" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

const mobileNav = [...leftNav, ...rightNav];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      style={{ fontFamily: "var(--font-heading), sans-serif" }}
      className="group relative inline-flex items-center justify-center px-3 py-2 font-[var(--font-heading)] text-[14px]  font-semibold uppercase tracking-[0.06em] text-white transition duration-300 hover:text-[#ff8a00] "
    >
      {label}
      <svg
        className="absolute bottom-px left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-[70%] w-0 h-1"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d5bff" />
            <stop offset="50%" stopColor="#ffd34d" />
            <stop offset="100%" stopColor="#ff5a1f" />
          </linearGradient>
        </defs>
        <path d="M0 1 Q 50 2, 100 1 Q 50 0, 0 1 Z" fill="url(#grad)" />
      </svg>
    </a>
  );
}

function MobileNavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-4 py-3 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-[#ff8a00]/30 hover:bg-white/[0.06] hover:text-[#ff8a00]"
    >
      <span>{label}</span>
      <span className="h-2 w-2 rounded-full bg-[#ffd34d] transition duration-300 group-hover:bg-[#ff8a00]" />
    </a>
  );
}

function SocialBox({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-[#ffd34d] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:border-[#ff8a00]/40 hover:bg-white/10 hover:text-[#ff8a00]"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [hideTopBar, setHideTopBar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* DESKTOP TOP UTILITY ROW */}
      <div
        className={`hidden w-full overflow-hidden bg-[#151c29] transition-all duration-300 ease-in-out lg:block ${
          hideTopBar
            ? "max-h-0 opacity-0 border-b-0"
            : "max-h-[64px] opacity-100 border-b border-[#292F40]"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2.5 md:px-10">
          <div className="flex items-center gap-3">
            {/* <span className="font-[var(--font-heading)] text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Follow
            </span> */}

            <div className="flex items-center gap-2.5">
              <SocialBox href="#">
                <FaTwitter size={14} />
              </SocialBox>
              <SocialBox href="#">
                <FaFacebook size={14} />
              </SocialBox>
              <SocialBox href="#">
                <FaInstagram size={14} />
              </SocialBox>
              <SocialBox href="#">
                <FaYoutube size={14} />
              </SocialBox>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <GameButton href="#contact" label="Request Demo" />
          </div>
        </div>
      </div>

      {/* DESKTOP MAIN NAVBAR - unchanged layout */}
      <div className="relative hidden w-full bg-[#151c29] border-b border-[#FFD34D] shadow-[0_6px_24px_rgba(0,0,0,0.35)] lg:block ">
        <div className="absolute inset-x-0 top-0 h-1px bg-[#292F40]" />

        <div className="pointer-events-none absolute bottom-[0px] left-0 h-[20px] w-[260px] bg-[#FFD34D] [clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]" />
        <div className="pointer-events-none absolute bottom-[0px] right-0 h-[20px] w-[260px] bg-[#FFD34D] [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />

        <div className="mx-auto grid min-h-[72px] w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10">
          <nav className="flex items-center justify-start gap-3 md:gap-5">
            {leftNav.map((item) => (
              <NavLink key={item.label} label={item.label} href={item.href} />
            ))}
          </nav>

          <div className="relative flex justify-center px-4">
            <span className="pointer-events-none absolute left-0 top-1/2 h-[56px] w-[6px] -translate-y-1/2 bg-[#ffd34d] [clip-path:polygon(100%_0,0_50%,100%_100%,100%_70%,40%_50%,100%_30%)]" />
            <span className="pointer-events-none absolute right-0 top-1/2 h-[56px] w-[6px] -translate-y-1/2 bg-[#ffd34d] [clip-path:polygon(0_0,100%_50%,0_100%,0_70%,60%_50%,0_30%)]" />

            <Link
              href="/#Hero"
              className="relative flex h-[96px] w-[200px] items-center justify-center bg-[linear-gradient(180deg,#232a38_0%,#1a2130_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]"
            >
              <div className="absolute inset-[1px] bg-[linear-gradient(180deg,#2a3142_0%,#1a2130_100%)] [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]" />

              <div className="relative z-10 px-3">
                <Image
                  src="/images/QL-Logo.png"
                  alt="Quantum Link Logo"
                  width={180}
                  height={80}
                  priority
                  className="h-auto w-[135px] md:w-[150px]"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3 md:gap-5">
            <nav className="flex items-center gap-3 md:gap-5 font-[var(--font-heading)]">
              {rightNav.map((item) => (
                <NavLink key={item.label} label={item.label} href={item.href} />
              ))}
            </nav>

            {/* <a
              href="#"
              aria-label="Search"
              className="ml-2 inline-flex h-[46px] w-[46px] items-center justify-center rounded-sm border border-white/10 bg-[#202736] text-[#ffd34d] transition duration-300 hover:border-[#ff8a00]/40 hover:bg-[#252d3d] hover:text-[#ff8a00]"
            >
              <Search size={18} />
            </a> */}
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET NAVBAR */}
      <div className="relative w-full bg-[#151c29] shadow-[0_6px_20px_rgba(0,0,0,0.35)] lg:hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-[#292F40]" />

        <div className="mx-auto flex min-h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* LEFT: MENU */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-[#202736] text-[#ffd34d] transition duration-300 hover:border-[#ff8a00]/40 hover:bg-[#252d3d] hover:text-[#ff8a00]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* CENTER: LOGO */}
          <Link href="/" className="flex items-center justify-center px-2">
            <Image
              src="/images/QL-Logo.png"
              alt="Quantum Link Logo"
              width={150}
              height={64}
              priority
              className="h-auto w-[108px] xs:w-[118px] sm:w-[126px]"
            />
          </Link>

          {/* RIGHT: SEARCH */}
          <a
            href="#"
            aria-label="Search"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-[#202736] text-[#ffd34d] transition duration-300 hover:border-[#ff8a00]/40 hover:bg-[#252d3d] hover:text-[#ff8a00]"
          >
            <Search size={18} />
          </a>
        </div>

        {/* MOBILE MENU PANEL */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-[#121925]/95 transition-all duration-300 ${
            mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-3">
              {mobileNav.map((item) => (
                <MobileNavLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>

            <div className="mt-5">
              <GameButton href="#contact" label="Request Demo" />
            </div>

            <div className="mt-5 flex items-center justify-between gap-2 border-t border-white/10 pt-4">
              <span className="font-[var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Follow
              </span>

              <div className="flex items-center gap-2.5">
                <SocialBox href="#">
                  <FaTwitter size={14} />
                </SocialBox>
                <SocialBox href="#">
                  <FaFacebook size={14} />
                </SocialBox>
                <SocialBox href="#">
                  <FaInstagram size={14} />
                </SocialBox>
                <SocialBox href="#">
                  <FaYoutube size={14} />
                </SocialBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
