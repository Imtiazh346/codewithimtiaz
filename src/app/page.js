"use client";

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import VideoSection from "./components/VideoSection";
import CategoriesTabs from "./components/CategoriesTabs";
import Newsletter from "./components/Newsletter";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <VideoSection />
      <CategoriesTabs />
      <Newsletter />
    </main>
  );
}
