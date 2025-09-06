"use client";

import { motion } from "framer-motion";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[70vh] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We build modern, scalable, and user-friendly solutions with passion
            and creativity.
          </p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Team work"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-muted-foreground mb-6">
            We’re a passionate team of developers, designers, and marketers
            dedicated to creating seamless digital experiences. With years of
            expertise in modern frameworks, we aim to deliver excellence in
            everything we do.
          </p>
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition">
            Learn More
          </button>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaCode className="text-4xl text-blue-600" />,
                title: "Innovation",
                desc: "Pushing boundaries with clean code and creative design.",
              },
              {
                icon: <FaUsers className="text-4xl text-purple-600" />,
                title: "Collaboration",
                desc: "Working together to build meaningful experiences.",
              },
              {
                icon: <FaRocket className="text-4xl text-pink-600" />,
                title: "Growth",
                desc: "Helping businesses scale with modern digital solutions.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl shadow-lg bg-background hover:shadow-2xl hover:-translate-y-2 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
          <p className="mb-6 text-lg">
            Be part of our story and help us shape the future of tech.
          </p>
          <button className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </motion.div>
      </section>
    </div>
  );
}
