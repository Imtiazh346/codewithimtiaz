"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skills = {
  CMS: ["Shopify", "WordPress", "Webflow"],
  Frontend: ["React/Next.js", "HTML5/CSS3", "Tailwind CSS", "JavaScript"],
  DevTools: ["Git", "Figma", "Photoshop", "Canva"],
  MarketingAnalytics: [
    "GA4",
    "GTM",
    "Search Console",
    "Google Ads",
    "Meta Ads",
    "Pixel",
  ],
  SEOCRO: [
    "On-Page SEO",
    "Technical SEO",
    "Conversion Rate Optimization",
    "Speed Optimization",
  ],
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="bg-gray-50 min-h-screen md:min-h-[35rem] xl:min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center lg:justify-end lg:w-1/2"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gray-200 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/images/imtiaz.png"
              alt="Imtiaz Hussain"
              width={320}
              height={320}
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </motion.div>
        {/* Text & Tabs Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col text-center lg:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Hi, I’m Imtiaz Hussain
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
            Expert in Shopify & WordPress with hands-on experience in React and
            Next.js. Skilled in SEO, CRO, Google tools, and speed optimization
            to build fast, conversion-focused websites.
          </p>

          {/* Tabs */}
          <div className="relative mb-6 flex flex-wrap justify-center lg:justify-start gap-4 border-b border-gray-200">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 text-lg font-medium transition-colors ${
                  activeTab === tab
                    ? "text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-indigo-600 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Skills List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {skills[activeTab].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-100 transition"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
