import type { Metadata } from "next";
import { Oxanium, Barlow } from "next/font/google";
import "./globals.css";
import PageTransitionLoader from "@/components/PageTransitionLoader";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum Link",
  description: "The Future of Arcade Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oxanium.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b1220]">
        <PageTransitionLoader>{children}</PageTransitionLoader>
      </body>
    </html>
  );
}
