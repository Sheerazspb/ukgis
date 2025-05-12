import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { OurServices } from "@/sections/OurServices";
import { Testimonials } from "@/sections/Testimonials";
import { Faqs } from "@/sections/Faqs";
import { Contacts } from "@/sections/Contacts";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <OurServices />
      <Testimonials />
      <Contacts />
      <Faqs />
      <Footer />
    </>
  );
}
