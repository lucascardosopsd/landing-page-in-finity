import Navbar from "@/components/Navbar";
import Citation from "@/components/sections/Citation";
import HeroSection from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import MaskSection from "@/components/sections/Mask";
import AboutSection from "@/components/sections/About";
import TeamSection from "@/components/sections/Team";
import ServicesSection from "@/components/sections/Services";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { getMembersData } from "../../../actions/getMembers";

export default async function Home() {
  console.log(await getMembersData());

  return (
    <div>
      <div className="overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-bl from-blue-100/25 via-transparent to-transparent z-50" />

        <Navbar />
        <HeroSection />
      </div>
      <Separator className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950" />
      <WhySection />
      <Citation />
      <MaskSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
