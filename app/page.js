
import FeaturesSection from "@/components/HomeSection/Features";
import HeroSection from "@/components/HomeSection/HeroSection";
import MotivationalSection from "@/components/HomeSection/MotivationalSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <FeaturesSection />
      <MotivationalSection />
    </main>
  );
}
