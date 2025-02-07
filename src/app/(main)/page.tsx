import Navbar from "@/components/Navbar";
import Citation from "@/components/sections/Citation";
import HeroSection from "@/components/sections/Hero";
import WhySection from "@/components/sections/WhySection";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <WhySection />
      <Citation />
    </div>
  );
}
