"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg", // replace with your images
    heading: "Innovating the Future",
    description: "Discover the latest in tech, gadgets, and software.",
    button: { text: "Read More", link: "/blog" },
    position: "left", // left | center | right
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    heading: "Learn & Grow",
    description: "Step-by-step tutorials to master React, Shopify, and more.",
    button: { text: "Explore", link: "/tutorials" },
    position: "center",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    heading: "Stay Updated",
    description: "Latest news and trends in web development.",
    button: { text: "Subscribe", link: "/newsletter" },
    position: "right",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[70vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[70vh] flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Slide Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative z-10 max-w-2xl text-white text-${slide.position} px-6`}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <a
                  href={slide.button.link}
                  className="px-6 py-3 bg-primary rounded-xl text-white font-medium hover:bg-primary/80 transition"
                >
                  {slide.button.text}
                </a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
