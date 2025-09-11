"use client";

import { useState } from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nMessage: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
<<<<<<< HEAD
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-20">
=======
    <main className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-20">
>>>>>>> eda8d8f768b0d2927a4390edea15fe668850f387
      {/* Page Heading */}
      <section className="text-center">
        <h1 className="text-2xl sm:text-5xl font-bold text-heading ">
          Get in Touch
        </h1>
        {/* <p className="text-lg text-foreground max-w-2xl mx-auto">
          Let’s connect! Reach me on social media, drop a message, or
          subscribe for the latest updates.
        </p> */}
      </section>

      {/* Social Media */}
      <section className="flex justify-center gap-10 md:gap-20 text-5xl">
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:scale-110 transition-transform"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:scale-110 transition-transform"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
      </section>

      {/* Contact Form */}
      <section className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-6 text-heading">
          Send a Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-heading">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-heading">
              Your Message
            </label>
            <textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white p-10 rounded-2xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Stay updated with the latest tutorials, coding tips, and resources
          straight to your inbox.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Subscribed: ${email}`);
            setEmail("");
          }}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
<<<<<<< HEAD
            className="flex-1 px-4 py-3 rounded-lg border border-white text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-primary font-semibold placeholder-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
=======
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
>>>>>>> eda8d8f768b0d2927a4390edea15fe668850f387
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
