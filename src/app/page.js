"use client";

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import VideoSection from "./components/VideoSection";
import CategoriesTabs from "./components/CategoriesTabs";
import Newsletter from "./components/Newsletter";
import FeaturedPostsModern from "./components/FeaturedPosts";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <VideoSection />
      <FeaturedPostsModern />
      <Newsletter />
    </main>
  );
}
