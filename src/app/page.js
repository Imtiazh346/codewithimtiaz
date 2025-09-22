"use client";

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import VideoSection from "./components/VideoSection";
import Newsletter from "./components/Newsletter";
import FeaturedPostsModern from "./components/FeaturedPosts";
import YouTubeGallery from "./components/YouTubeGallery";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      {/* <VideoSection /> */}
      <YouTubeGallery />
      <FeaturedPostsModern />/
      <Newsletter />
    </main>
  );
}
