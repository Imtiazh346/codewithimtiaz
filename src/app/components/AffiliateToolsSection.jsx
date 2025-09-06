"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, ShoppingBagIcon, GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const tools = [
  {
    name: "Shopify",
    description: "Build your online store with the most powerful eCommerce platform.",
    link: "https://www.shopify.com",
    icon: ShoppingBagIcon,
  },
  {
    name: "Hostinger",
    description: "Affordable hosting with amazing speed and WordPress support.",
    link: "https://www.hostinger.com",
    icon: GlobeAltIcon,
  },
  {
    name: "VS Code",
    description: "Lightweight code editor with powerful extensions for developers.",
    link: "https://code.visualstudio.com",
    icon: CodeBracketIcon,
  },
];

export default function AffiliateToolsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-heading">Resources & Tools</h2>
        <p className="mt-2 text-foreground">
          These are the tools I personally use and recommend for developers & creators.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <motion.a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-start hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Icon */}
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
              <tool.icon className="w-6 h-6" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {tool.name}
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition" />
            </h3>

            {/* Description */}
            <p className="text-foreground mb-4">{tool.description}</p>

            {/* Button */}
            <span className="text-primary font-medium group-hover:underline">
              Explore Now →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
