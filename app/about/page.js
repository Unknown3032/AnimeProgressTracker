import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Journey from "@/components/about/Journey";
import CommunityStats from "@/components/about/CommunityStats";
import Values from "@/components/about/Values";

export const metadata = {
  title: "About Us - Our Story",
  description:
    "From Instagram motivation to a thriving community built for growth.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000000" }}>
      <AboutHero />
      <OurStory />
      <Journey />
      <CommunityStats />
      <Values />
    </main>
  );
}
