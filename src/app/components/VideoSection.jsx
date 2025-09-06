"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: "u3dTLn-etck", // Example video ID
    title: "Shopify CLI Setup Guide",
  },
  {
    id: "iHgAg1CTWWs",
    title: "Create a Free Shopify Development Store",
  },
  {
    id: "4ODV89UOJJA",
    title: "AI vs ChatGPT vs Apps for Product Descriptions",
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-heading text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎥 Latest on <span className="text-primary">YouTube</span>
        </motion.h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => {
            const embedUrl = `https://www.youtube.com/embed/${video.id}`;

            return (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                {/* YouTube Video Embed */}
                <iframe
                  width="100%"
                  height="215"
                  src={embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl relative z-10"
                />

                {/* Overlay (does not block clicks) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                  <span className="text-white font-semibold text-lg text-center px-4">
                    {video.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
