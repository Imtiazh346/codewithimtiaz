"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Tutorials", href: "#tutorials"},
    { name: "Blogs", href: "#blogs"},
    { name: "More",
      href: "#",
      children:[
        {name: "About", href:"/about"},
        {name: "Contact", href:"/contact"}
      ]
    }

  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          CodeWithImtiaz
        </Link>

        {/* Desktop Nav */}
<nav className="hidden md:flex space-x-6 items-center">
  {navItems.map((item, idx) =>
    item.children ? (
      <div key={idx} className="group relative">
        <span className="cursor-pointer text-heading font-semibold">
          {item.name}
        </span>
        <div className="absolute left-0 top-full bg-white dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible w-48">
          {item.children.map((child, i) => (
            <Link
              key={i}
              href={child.href}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
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
            .getElementById(item.href.substring(1))
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="text-heading font-semibold hover:text-primary transition-colors"
      >
        {item.name}
      </button>
    ) : (
      <Link
        key={idx}
        href={item.href}
        className="text-heading font-semibold hover:text-primary transition-colors"
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
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 dark:border-gray-700">
              {item.children ? (
                <details>
                  <summary className="px-6 py-3 cursor-pointer font-semibold text-heading">
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
                  className="block px-6 py-3 text-heading font-semibold hover:text-primary"
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
