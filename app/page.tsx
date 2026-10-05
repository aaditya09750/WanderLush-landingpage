import { Footer } from "@/components/layout/Footer";
import { BlogSection } from "@/components/sections/BlogSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { PanoramaSection } from "@/components/sections/PanoramaSection";
import { StaysSection } from "@/components/sections/StaysSection";
import { StorySection } from "@/components/sections/StorySection";

export default function HomePage() {
  return (
    <main className="page">
      <div className="content-curtain">
        <HeroSection />
        <JourneySection />
        <StorySection />
        <StaysSection />
        <PanoramaSection />
        <BlogSection />
      </div>
      <Footer />
    </main>
  );
}
