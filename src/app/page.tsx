import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Product from "@/components/sections/Product";
import Games from "@/components/sections/Games";
import Features from "@/components/sections/Features";
import Jackpot from "@/components/sections/Jackpot";
import Hardware from "@/components/sections/Hardware";
import Solutions from "@/components/sections/Solutions";
import WhyChoose from "@/components/sections/WhyChoose";
import Stats from "@/components/sections/Stats";
import News from "@/components/sections/News";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        <Games />
        <Features />
        <Jackpot />
        <Hardware />
        <Solutions />
        <WhyChoose />
        <Stats />
        {/* <News /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
