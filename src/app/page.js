"use client";

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Newsletter from "./components/Newsletter";
import FeaturedPostsModern from "./components/FeaturedPostsModern";
import YouTubeGallery from "./components/YouTubeGallery";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <YouTubeGallery />
      <FeaturedPostsModern />
      <Newsletter />
    </main>
  );
}
