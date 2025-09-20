"use client";

import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "10 Shopify Speed Optimization Tips",
    description: "Boost your Shopify store speed with these proven tips.",
    category: "Shopify",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 2,
    title: "Next.js SEO Best Practices",
    description: "Learn how to optimize your Next.js blog for search engines.",
    category: "Next.js",
    image: "/images/nextjs-seo.jpg",
  },
  {
    id: 3,
    title: "WordPress Security Checklist",
    description: "Essential steps to keep your WordPress website secure.",
    category: "WordPress",
    image: "/images/wordpress-security.jpg",
  },
  {
    id: 4,
    title: "HTML & CSS Tricks You Must Know",
    description: "Level up your front-end skills with these cool tricks.",
    category: "HTML/CSS",
    image: "/images/html-css.jpg",
  },
  {
    id: 5,
    title: "Improve Core Web Vitals",
    description: "Steps to get a better PageSpeed score.",
    category: "Speed Optimization",
    image: "/images/core-web-vitals.jpg",
  },
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function LatestPosts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-3xl font-bold text-heading mb-10 text-center">
        ✨ Latest Posts
      </h2>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-6"
        columnClassName="masonry-column"
      >
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl overflow-hidden"
          >
            <div className="relative w-full h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-primary font-medium">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-heading">
                {post.title}
              </h3>
              <p className="text-foreground text-sm mb-3">{post.description}</p>
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </section>
  );
}
