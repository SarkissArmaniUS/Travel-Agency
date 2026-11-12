import Camp from "@/components/Camp";
import Contact from "@/components/Contact";
import Destinations from "@/components/Destinations";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <Destinations />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <GetApp />
    </>
  );
}
