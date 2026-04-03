"use client";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import GameButton from "../ui/GameButton";

export default function Footer() {
  return (
    <footer className="relative bg-[#151C29] pt-20 pb-0 overflow-hidden">
      {/* Background Video / Image slot */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0B0E13_100%)] bg-black/10 pointer-events-none" />

      {/* Decorative shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#FF6A1F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FF6A1F]/5 rounded-full blur-2xl pointer-events-none" />
      {/* Diagonal accent line at bottom of the footer */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden opacity-70">
        <div
          className="w-full h-full animate-glow-flow"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #FFA800 20%, #FFD34D 50%, #FFA800 80%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="max-w-lg">
              <h2 className="heading mb-4">Stay Up To Date</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have questions or feedback? We'd love to hear from you. Reach
                out to our team or use our contact form.
              </p>
            </div>
            <div className="w-full lg:w-auto flex-1 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent backdrop-blur-sm border border-[#FFD34D]/50  px-4 py-2 outline-none text-white placeholder:text-[#818898] focus:border-[#FF6A1F] transition-colors"
                />
                <GameButton label="Subscribe" />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#FFD34D]" />
                <p className="text-sm text-[#818898]">
                  I agree with{" "}
                  <span className="text-[#ff8a00] cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-[#ff8a00] cursor-pointer">
                    Terms & Conditions
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#818898] mb-16" />

        {/* Main Links Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative z-10">
          {/* Logo & Socials */}
          <FooterColumn>
            <div className="space-y-6">
              <img
                src="/images/QL-Logo.png"
                alt="Quantum Link Logo"
                className="h-auto w-[108px] xs:w-[118px] sm:w-[226px]"
              />
              <div className="mt-8 flex items-center gap-2.5">
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
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn>
            <h4 className="text-2xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/80">
              <FooterLink label="Product" />
              <FooterLink label="Games" />
              <FooterLink label="Features" />
              <FooterLink label="Jackpot" />
            </ul>
          </FooterColumn>

          {/* Explore */}
          <FooterColumn>
            <h4 className="text-2xl font-bold mb-8">Explore</h4>
            <ul className="space-y-4 text-white/80">
              <FooterLink label="Hardware" />
              <FooterLink label="Solution" />
              <FooterLink label="Contact" />
            </ul>
          </FooterColumn>

          {/* Follow Us */}
          <FooterColumn>
            <h4 className="text-2xl font-bold mb-8">Follow Us</h4>
            <ul className="space-y-4 text-white/80 ">
              <FooterLink label="Twitter" />
              <FooterLink label="Facebook" />
              <FooterLink label="Instagram" />
              <FooterLink label="YouTube" />
            </ul>
          </FooterColumn>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#818898] grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-sm text-white/80 pb-6">
          <p>
            Copyright © 2026{" "}
            <span className="text-white font-black">Quantum Link</span>
          </p>
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="md:text-right">
            Designed by{" "}
            <span className="text-[#ff8a00] font-black">Kantipur InfoTech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-8 transition-all duration-500 min-h-[250px] group overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#593D26]/40 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom pointer-events-none ${
          hovered ? "scale-y-100" : "scale-y-0"
        }`}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          hovered ? "opacity-60" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle at 50% 50%, #593D26 0%, transparent 80%)`,
        }}
      />

      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] bg-gradient-to-b from-transparent via-[#ff8a00] to-transparent transition-all duration-500 ease-in-out ${
          hovered ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
      />

      <div
        className={`relative z-10 transition-transform duration-500 ease-out ${
          hovered ? "-translate-y-1" : "translate-y-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function SocialBox({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
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

function FooterLink({ label }: { label: string }) {
  return (
    <li className="list-none">
      <a
        href="#"
        className="group relative flex items-center py-1 text-gray-400 transition-all duration-300 ease-out hover:text-white"
      >
        <span className="relative flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:mr-3"></span>

        <span className="relative transition-transform duration-300 ease-out group-hover:translate-x-1">
          {label}
        </span>

        <span className="absolute bottom-0 left-7 h-[1px] w-0 bg-gradient-to-r from-[#ff8a00] to-transparent transition-all duration-500 group-hover:w-1/2" />
      </a>
    </li>
  );
}
