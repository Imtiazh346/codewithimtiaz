"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "How to Connect Sanity CMS with Next.js",
    category: "Next.js",
    description: "Learn how to connect Sanity CMS with Next.js for a seamless content experience.",
    image: "https://source.unsplash.com/600x400/?nextjs,content",
    href: "/blog/sanity-nextjs",
  },
  {
    id: 2,
    title: "Master Next.js 14 Features",
    category: "Next.js",
    description: "Explore the latest Next.js features and boost performance.",
    image: "https://source.unsplash.com/600x400/?nextjs,developer",
    href: "/blog/nextjs-14",
  },
  {
    id: 3,
    title: "WordPress SEO Tips 2025",
    category: "WordPress",
    description: "Boost your WordPress rankings with proven SEO hacks.",
    image: "https://source.unsplash.com/600x400/?wordpress,seo",
    href: "/blog/wordpress-seo",
  },
];

export default function FeaturedPostsModern() {
  return (
    <section className="py-10 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-heading text-center mb-14"
        >
          ✨ Featured Posts
        </motion.h2>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium w-max">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-heading group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground text-sm line-clamp-2">
                  {post.description}
                </p>
                <Link
                  href={post.href}
                  className="text-primary font-medium hover:underline mt-2"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
