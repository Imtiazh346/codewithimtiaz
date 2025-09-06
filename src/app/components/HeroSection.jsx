"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 text-white py-24 overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Learn, Build & Grow with{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">
            CodeWithImtiaz
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl"
        >
          Master <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">Shopify</span>,{" "}
          <span className="font-semibold">WordPress</span>, and more.  
          Practical tutorials, tips, and strategies to help you shine as a developer.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/blogs"
            className="px-7 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow-xl hover:scale-105 hover:bg-yellow-300 transition-transform"
          >
            🚀 Explore Blogs
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 bg-white text-indigo-700 rounded-xl font-semibold shadow-xl hover:scale-105 hover:bg-gray-100 transition-transform"
          >
            📩 Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
