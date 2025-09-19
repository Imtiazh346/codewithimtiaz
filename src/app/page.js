"use client";
import CategoriesTabs from "./components/CategoriesTabs";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import ProjectsSection from "./components/ProjectsSection";
import VideoSection from "./components/VideoSection";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <VideoSection />
      <CategoriesTabs />
      <Newsletter />
    </main>
  );
}
