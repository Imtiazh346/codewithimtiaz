import Image from "next/image";
import React from "react";

const videos = [
  {
    id: "u3dTLn-etck",
    title: "Shopify CLI Complete Setup | Connect GitHub & Edit in VS Code",
    duration: "12:34",
    views: "24K",
  },
  {
    id: "A0tjCe-4wX4",
    title: "Bulk Update Shopify Products with CSV – Easy Import & Edit Guide",
    duration: "8:45",
    views: "18K",
  },
  {
    id: "N8Y7bCaAy1k",
    title:
      "How to Edit Robots.txt in Shopify | Default + Custom Rules Explained",
    duration: "15:22",
    views: "32K",
  },
];

const YouTubeGallery = () => {
  return (
    <section
      id="tutorials"
      className="bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Video Tutorials
          </h2>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Duration Badge */}
                {/* <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {video.duration}
                </div> */}

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl">
                      <svg
                        className="h-8 w-8 text-red-600 transform group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Ring */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 rounded-2xl transition-all duration-300" />
              </div>

              {/* Video Info */}
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg hover:shadow-lg"
              >
                <div className="text-sm text-gray-500">
                  <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-300 text-base sm:text-sm">
                    Watch now
                    <svg
                      className="w-4 h-4 ml-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@thecodewithimtiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Visit YouTube Channel
          </a>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-red-100 to-pink-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>
    </section>
  );
};

export default YouTubeGallery;
