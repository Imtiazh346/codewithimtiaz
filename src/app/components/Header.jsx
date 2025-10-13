"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "Tutorials", href: "/#tutorials" },
    { name: "Blogs", href: "/#blogs" },
    {
      name: "More",
      href: "#",
      children: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const handleAnchorClick = (href) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const closeMobileMenu = () => setMobileOpen(false);

  return (
<header className="sticky top-0 z-50 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 shadow-xl border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        <Link href="/" className="flex items-center transition-all duration-300 hover:scale-105 hover:opacity-90">
          <Image
            src="/assets/logo.png"
            alt="Code with Imtiaz Logo"
            width={240}
            height={120}
            priority
            className="h-10 w-auto object-contain rounded-full shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="ml-2 hidden font-sans text-xl font-bold text-white drop-shadow-sm">
            Code with Imtiaz
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {navItems.map((item, idx) =>
            item.children ? (
              <div key={idx} className="group relative">
                <span className="cursor-pointer text-white font-semibold hover:text-white/90 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">
                  {item.name}
                </span>
                <div className="absolute left-0 top-full mt-2 bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 shadow-2xl rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible w-48 border border-white/20 overflow-hidden transition-all duration-300 z-20 backdrop-blur-md">
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="block px-4 py-3 text-white font-medium hover:bg-white/10 hover:text-white/90 transition-all duration-200"
                      onClick={closeMobileMenu}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.href.startsWith("#") ? (
              <button
                key={idx}
                onClick={() => handleAnchorClick(item.href)}
                className="text-white font-semibold hover:text-white/90 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="text-white font-semibold px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white/90 transition-all duration-300 backdrop-blur-sm"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6 text-white drop-shadow-sm" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white drop-shadow-sm" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 shadow-2xl border-t border-white/20 overflow-hidden backdrop-blur-md">
          <div className="max-h-96 overflow-y-auto">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-white/20 last:border-b-0">
                {item.children ? (
                  <details className="open:bg-white/5">
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-white hover:text-white/90 hover:bg-white/10 transition-all duration-200 list-none">
                      {item.name}
                      <span className="float-right transition-transform duration-300 rotate-0 open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <div className="pl-2 pb-2 bg-white/5">
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          href={child.href}
                          className="block px-4 py-3 text-white/90 font-medium hover:text-white hover:bg-white/10 transition-all duration-200"
                          onClick={closeMobileMenu}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : item.href.startsWith("#") ? (
                  <button
                    onClick={() => handleAnchorClick(item.href)}
                    className="block w-full text-left px-6 py-4 text-white font-semibold hover:text-white/90 hover:bg-white/10 transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-4 text-white font-semibold hover:text-white/90 hover:bg-white/10 transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
