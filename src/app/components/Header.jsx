"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="font-sans text-2xl font-bold text-primary">
          Code with Imtiaz
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center text-base">
          {navItems.map((item, idx) =>
            item.children ? (
              <div key={idx} className="group relative">
                <span className="cursor-pointer text-[#170101] font-semibold text-base">
                  {item.name}
                </span>
                <div className="cursor-pointer font-semibold absolute left-0 top-full bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible w-48">
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.href.startsWith("#") ? (
              <button
                key={idx}
                onClick={() => {
                  document
                    .getElementByd(item.href.substring(1))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[#170101] font-semibold hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="text-[#170101] font-semibold px-2 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6 text-foreground" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-gray-200"
            >
              {item.children ? (
                <details>
                  <summary className="px-6 py-3 cursor-pointer font-semibold text-[#170101]">
                    {item.name}
                  </summary>
                  <div className="pl-4 pb-2">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        href={child.href}
                        className="block px-2 py-2 text-foreground hover:text-primary"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={item.href}
                  className="block px-6 py-3 text-[#170101] font-semibold hover:text-primary"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
