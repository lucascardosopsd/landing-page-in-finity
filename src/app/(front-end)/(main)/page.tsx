import Navbar from "@/components/Navbar";
import Citation from "@/components/sections/Citation";
import HeroSection from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import MaskSection from "@/components/sections/Mask";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { getLandingPage } from "@/actions/getLandingPage";
import TeamSection from "@/components/sections/Team";
import ServicesSection from "@/components/sections/Services";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const data = await getLandingPage();
  revalidatePath("/");

  return (
    <div>
      <div className="overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-bl from-blue-100/25 via-transparent to-transparent z-50" />

        <Navbar news={data.news} />
        <HeroSection />
      </div>
      <Separator className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950" />
      <WhySection data={data.whyMarketing} />
      <Citation />
      <MaskSection />
      <AboutSection textData={data.history} />
      <TeamSection members={data.members} />
      <ServicesSection services={data.services} />
      <ContactSection />
      <Footer />
    </div>
  );
}
