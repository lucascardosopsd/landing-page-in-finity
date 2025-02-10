import Navbar from "@/components/Navbar";
import Citation from "@/components/sections/Citation";
import HeroSection from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import MaskSection from "@/components/sections/Mask";
import AboutSection from "@/components/sections/About";
import TeamSection from "@/components/sections/Team";
import ServicesSection from "@/components/sections/Services";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <WhySection />
      <Citation />
      <MaskSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
