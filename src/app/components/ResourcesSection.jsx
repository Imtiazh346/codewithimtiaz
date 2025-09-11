"use client";

import { motion } from "framer-motion";
import { FaShopify, FaWordpress, FaReact, FaGoogle } from "react-icons/fa";

const resources = [
  {
    name: "Shopify Dev Tools",
    description: "Best apps and extensions for Shopify developers.",
    icon: <FaShopify className="text-green-500 text-4xl" />,
    link: "#",
  },
  {
    name: "WordPress Plugins",
    description: "Essential plugins to supercharge your WordPress sites.",
    icon: <FaWordpress className="text-blue-500 text-4xl" />,
    link: "#",
  },
  {
    name: "React Libraries",
    description: "My favorite React UI & animation libraries.",
    icon: <FaReact className="text-sky-500 text-4xl" />,
    link: "#",
  },
  {
    name: "SEO Tools",
    description: "Top tools for keyword research and optimization.",
    icon: <FaGoogle className="text-red-500 text-4xl" />,
    link: "#",
  },
];

export default function ResourcesSection() {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recommended Resources & Tools
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          These are my handpicked tools and resources that I use and recommend
          for Shopify, WordPress, React, and SEO.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
