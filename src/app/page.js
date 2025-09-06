"use client";
import AffiliateToolsSection from "./components/AffiliateToolsSection";
import CategoriesTabs from "./components/CategoriesTabs";
import FeaturedPostsModern from "./components/FeaturedPosts";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import ResourcesSection from "./components/ResourcesSection";
import VideoSection from "./components/VideoSection";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedPostsModern />
      <CategoriesTabs />
      <VideoSection />
      <AffiliateToolsSection />
      <Newsletter />
    </main>
  );
}
