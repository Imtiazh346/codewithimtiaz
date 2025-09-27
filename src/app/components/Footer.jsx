"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const Footer = () => {
  const [activeTab, setActiveTab] = useState('about');

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  useEffect(() => {
    // Set first tab as active on mobile by default
    setActiveTab('about');
  }, []);

  const services = [
    { name: "Shopify Development", href: "/services/shopify" },
    { name: "WordPress Development", href: "/services/wordpress" },
    { name: "Next.js Development", href: "/services/nextjs" },
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "CRO Consulting", href: "/services/cro" },
    { name: "Website Maintenance", href: "/services/maintenance" },
  ];

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Tutorials", href: "/#tutorials" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const latestPosts = [
    { title: "How to Optimize Shopify Store Speed", href: "/blog/shopify-speed-optimization-how-to-make-your-store-faster" },
    { title: "Next.js + Sanity Full Setup Guide", href: "/blog/next-js-sanity-full-setup-guide-from-zero-to-working-blog" },
    { title: "SEO Best Practices for 2024", href: "/blog" },
    { title: "Increasing Conversion Rates with CRO", href: "/blog" },
  ];

  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-16 py-12">
      {/* Desktop View */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Full-stack developer specializing in creating high-converting websites 
                with Shopify, WordPress, and Next.js. Transforming ideas into digital 
                experiences that drive results.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300 block py-1"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Latest Posts */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
              <ul className="space-y-3">
                {latestPosts.map((post, index) => (
                  <li key={index}>
                    <Link 
                      href={post.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300 block py-1 leading-tight"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Accordion Tabs */}
      <div className="md:hidden">
        <div className="px-4 py-6">
          {/* About Tab - Active by default */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleTab('about')}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="font-semibold">About</span>
              {activeTab === 'about' ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
            </button>
            {activeTab === 'about' && (
              <div className="pb-4 animate-fadeIn">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Full-stack developer specializing in creating high-converting websites 
                  with Shopify, WordPress, and Next.js.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Services Tab */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleTab('services')}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="font-semibold">Services</span>
              {activeTab === 'services' ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
            </button>
            {activeTab === 'services' && (
              <div className="pb-4 animate-fadeIn">
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-300 block py-1"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quick Links Tab */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleTab('links')}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="font-semibold">Quick Links</span>
              {activeTab === 'links' ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
            </button>
            {activeTab === 'links' && (
              <div className="pb-4 animate-fadeIn">
                <ul className="space-y-2">
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-300 block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Latest Posts Tab */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleTab('posts')}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="font-semibold">Latest Posts</span>
              {activeTab === 'posts' ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
            </button>
            {activeTab === 'posts' && (
              <div className="pb-4 animate-fadeIn">
                <ul className="space-y-2">
                  {latestPosts.map((post, index) => (
                    <li key={index}>
                      <Link 
                        href={post.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-300 block py-1 leading-tight"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Imtiaz Hussain. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Code with ❤️ by Imtiaz Hussain
            </p>
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;