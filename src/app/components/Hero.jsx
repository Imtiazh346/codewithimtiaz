"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiNextdotjs, SiShopify, SiWordpress, SiReact } from "react-icons/si";

const skills = [
  { category: "CMS", items: ["Shopify", "WordPress", "Webflow"] },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind", "HTML/CSS", "JavaScript"],
  },
  { category: "DevTools", items: ["Git", "Figma", "Photoshop", "Canva"] },
  {
    category: "Marketing & Analytics",
    items: ["GA4", "GTM", "Search Console", "Google Ads", "Clarity", "Pixel"],
  },
  {
    category: "SEO & CRO",
    items: ["On-Page SEO", "Technical SEO", "CRO", "Site Speed"],
  },
];

// Four icons for the circular path
const orbitingIcons = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
  { name: "Shopify", icon: SiShopify, color: "text-red-500" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
];

export default function Hero() {
  const [currentSkillSet, setCurrentSkillSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillSet((prev) => (prev + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white min-h-[80vh] lg:min-h-[90vh] flex items-center px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Subtle background wave for depth */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent"></div>
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-slate-100"
          fill="currentColor"
          viewBox="0 0 1440 320"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Secondary CTA */}
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="mt-6 mb-2 text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-purple-600"
>
  Trusted by <span className="font-bold">50+ clients</span> | <span className="font-bold">3 years</span> experience
</motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text & CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-none "
            >
              Hi, I&apos;m{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-purple-700">
                Imtiaz Hussain
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Transforming ideas into high-converting websites with expertise in
              Shopify, WordPress, React, Next.js, SEO, and CRO. Let&apos;s
              create digital experiences that drive results.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-6 py-3 bg-black text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 -z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image & Circular Orbiting Icons Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-70 h-70 lg:w-80 lg:h-80 flex items-center justify-center">
              {/* Circular Line */}
              <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-gray-300/50"></div>

              {/* Orbiting Icons Container */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {orbitingIcons.map((skill, index) => {
                  const angle = (index / orbitingIcons.length) * 360;
                  // Position icons exactly on the border line (radius = half of container width minus icon offset)
                  const radius = 200; // Adjust this value to move icons closer to or further from the border
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute z-50" 
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                      whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <skill.icon
                        className={`${skill.color} hidden lg:block lg:w-12 lg:h-12 opacity-80 hover:opacity-100 transition-opacity duration-300`}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Profile Image - Centered */}
              <div className="relative z-0 w-80 h-80 lg:w-full lg:h-full lg:rounded-3xl overflow-hidden lg:shadow-2xl">
                <Image
                  src="/assets/Imtiaz-removebg-preview.png"
                  alt="Imtiaz Hussain - Full-Stack Developer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
