"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = {
  Shopify: [
    { title: "10 Best Shopify Apps in 2025", description: "Boost your store with these apps.", image: "/images/shopify1.jpg" },
    { title: "How to Speed Up Shopify Theme", description: "Performance tips for developers.", image: "/images/shopify2.jpg" },
    { title: "Ultimate Shopify SEO Guide", description: "Rank your store higher in search.", image: "/images/shopify3.jpg" },
  ],
  WordPress: [
    { title: "Top 5 WordPress SEO Plugins", description: "Rank higher with these tools.", image: "/images/wp1.jpg" },
    { title: "Creating Custom Themes", description: "Step-by-step developer guide.", image: "/images/wp2.jpg" },
    { title: "Optimizing WordPress Speed", description: "Best practices for 2025.", image: "/images/wp3.jpg" },
  ],
  React: [
    { title: "React 19 New Features", description: "Everything you need to know.", image: "/images/react1.jpg" },
    { title: "Building Dashboards", description: "With charts and animations.", image: "/images/react2.jpg" },
  ],
  AI: [
    { title: "Best AI Tools for Developers", description: "Save time with automation.", image: "/images/ai1.jpg" },
    { title: "How ChatGPT Changed Coding", description: "Exploring the future of AI.", image: "/images/ai2.jpg" },
  ],
};

export default function CategoriesTabs() {
  const [activeTab, setActiveTab] = useState("Shopify");

  return (
    <section className="py-10 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore by Category</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-foreground hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories[activeTab].slice(0, 3).map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-xl overflow-hidden shadow-lg bg-card hover:shadow-2xl cursor-pointer"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show All Button */}
        <div className="mt-10">
          <Link href={`/category/${activeTab.toLowerCase()}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition"
            >
             All {activeTab} Posts →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
