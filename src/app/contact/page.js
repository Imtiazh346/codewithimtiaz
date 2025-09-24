"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Social Media Links */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Connect with me</h2>
          <p className="text-gray-600 hidden lg:block">
            Follow me on social media and stay updated:
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/@thecodewithimtiaz"
              target="_blank"
              className="text-[#FF0000] hover:[#CC0000] transition text-2xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/people/Code-with-Imtiaz/61578384899968/"
              target="_blank"
              className="text-[#1877F2] hover:text-[#145DBF] transition text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-[#1DA1F2] hover:text-blue-600 transition text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-imtiaz/"
              target="_blank"
              className="text-[#0A66C2] hover:text-blue-900 transition text-2xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/codewithimtiaz/"
              target="_blank"
              className="text-[#E1306C] hover:text-[#C1275B] transition text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && <p className="text-gray-700 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
