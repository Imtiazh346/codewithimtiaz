"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Shopify Speed Optimization",
    category: "Shopify",
    description: "Learn how to make your Shopify store faster with these tips.",
    image: "/assets/images/blogs/shopify/Speed-Optimization.webp",
    href: "/blog/shopify-speed-optimization-how-to-make-your-store-faster",
  },
  {
    id: 2,
    title: "Next.js + Sanity Full Setup Guide",
    category: "Next.js",
    description: "A comprehensive guide to setting up a blog with Next.js and Sanity.",
    image: "assets/images/blogs/nextjs/sanity.png",
    href: "/blog/next-js-sanity-full-setup-guide-from-zero-to-working-blog",
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
    <section id="blogs" className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 bg-white scroll-mt-[60px]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-600 text-center mb-14"
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
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
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
      <a href="/blog"
      className="relative block text-center text-white font-medium mt-10 bg-black px-4 py-2 rounded-lg w-max mx-auto transform transition-transform duration-300 hover:scale-105">
       View All</a>
      </div>
    </section>
  );
}
