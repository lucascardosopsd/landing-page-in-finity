import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="bg-blue-950">
      <Navbar />
      <HeroSection />
      <Separator />
      <WhySection />
    </div>
  );
}
