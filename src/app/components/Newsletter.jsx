"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative bg-gradient-to-r from-purple-50 to-purple-100 py-8 text-[#374151] overflow-hidden mt-5 sm:mt-10">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📬 Join Our Newsletter
        </motion.h2>
        <motion.p
          className="text-lg mb-8 text-[#374151]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get the latest tutorials, tips, and updates directly in your inbox.
        </motion.p>

        {/* Form */}
        <motion.form
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("✅ Thanks for subscribing!");
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg border text-black flex-1 min-w-[250px] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-heading hover:text-white transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Disclaimer */}
        <motion.p
          className="text-sm mt-4 text-black/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          No spam. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
