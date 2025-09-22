import Image from "next/image";
import React from "react";

const videos = [
  {
    id: "u3dTLn-etck",
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

const YouTubeGallery = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Latest Videos
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Explore our tutorials, tips, and behind-the-scenes content.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105"
          >
            <Image
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              width={1280}
              height={720}
              layout="responsive" // make it responsive
              className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Play button */}
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white rounded-full p-5 shadow-lg animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 22V2l18 10-18 10z" />
                </svg>
              </div>
            </a>

            {/* Video title */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 text-left">
              <h3 className="font-semibold text-lg">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTubeGallery;
