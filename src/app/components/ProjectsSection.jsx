"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "Musysic.com",
    description: "USA-based store for musical instruments.",
    image: "/assets/images/projects/musysic.png",
    href: "https://www.musysic.com/",
  },
  {
    title: "Reana.pk",
    description: "Pakistani store for cosmetics & wellness.",
    image: "/assets/images/projects/reanapk.png",
    href: "https://reana.pk/",
  },
  {
    title: "Firmenity.com",
    description: "Premium men's luxury shirts and polos.",
    image: "/assets/images/projects/firmenity.png",
    href: "https://firmenity.com/",
  },
  {
    title: "Alnasser.pk",
    description: "Pakistani store for shoes & apparel.",
    image: "/assets/images/projects/alnasser.png",
    href: "https://alnasser.pk/",
  },
  {
    title: "Daytodayhealthcare.com",
    description: "Pakistani store for healthcare products.",
    image: "/assets/images/projects/daytodayhealthcare.png",
    href: "https://daytodayhealthcare.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
            <p className="text-gray-600 mt-2 max-w-xl">
             Some of my favorite projects I’ve had the pleasure to work on.
            </p>
          </motion.div>

          <motion.a
            href="/projects"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
          >
            View All
          </motion.a>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12" // padding-bottom creates space for dots
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <motion.a
                href={p.href}
                className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-56 md:h-48 lg:h-56">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-end">
                    <div className="p-4 w-full opacity-0 hover:opacity-100 transition-opacity">
                      <span className="inline-block bg-white/90 text-sm px-3 py-1 rounded-full text-black font-medium">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global styles for pagination */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
          text-align: center;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #111827;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
