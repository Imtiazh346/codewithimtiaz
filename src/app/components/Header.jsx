"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-xl border-b
      ${
        scrolled
          ? "bg-black/100 border-white/10 shadow-2xl"
          : "bg-black/100 border-white/5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-[80px] flex items-center justify-between px-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          {/* Logo */}
          <span className="font-mono text-3xl text-lime-400 mt-[-6px] tracking-tighter select-none leading-none">
            {"{/}"}
          </span>

          {/* Text */}
          <div className="flex flex-col justify-center gap-1.5 leading-none">
            <p className="font-syne font-bold text-white text-sm capitalize leading-none">
              Coding
            </p>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-lime-400 leading-none">
              WITH IMTIAZ 
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-9 --font-syne">
          {["Home", "Projects", "Tutorials", "Blogs"].map((item) => (
            <button
              key={item}
              className="relative text-[12px] font-bold tracking-[0.1em] uppercase text-white/45
              hover:text-white transition
              after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0
              after:bg-lime-400 hover:after:w-full after:transition-all"
            >
              {item}
            </button>
          ))}

          {/* MORE DROPDOWN */}
          <div className="relative group">
            <span className="flex items-center gap-2 cursor-pointer text-[12px] font-bold tracking-[0.1em] uppercase text-white/45 hover:text-white">
              More
              <span className="text-[9px] text-lime-400 transition group-hover:rotate-180">
                ▲
              </span>
            </span>

            <div
              className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)]
              w-40 bg-[#0d0d14] border border-lime-400/20 rounded-lg
              opacity-0 pointer-events-none translate-y-2
              group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
              transition shadow-2xl overflow-hidden"
            >
              {["About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-4 py-3 text-[11px] tracking-[0.09em] uppercase
                  text-white/45 hover:text-lime-400 hover:bg-lime-400/10
                  transition border-b border-white/5 last:border-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 font-syne text-[12px] text-white/30 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#a3e635]" />
            Available
          </div>

          <Link
            href="#"
            className=" md:inline-block font-syne text-[12px] tracking-[0.12em]
            uppercase bg-lime-400 text-black px-5 py-2 rounded
            hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(163,230,53,0.35)]
            transition"
          >
            Hire Me
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden border border-white/20 rounded-md p-2
            text-white/60 hover:text-lime-400 hover:border-lime-400 transition"
            aria-label="Menu"
          >
            {open ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`md:hidden overflow-hidden bg-black/95 border-t border-lime-400/10
        transition-all duration-500 ${open ? "max-h-[480px]" : "max-h-0"}`}
      >
        {["Home", "Projects", "Tutorials", "Blogs"].map((item) => (
          <button
            key={item}
            className="block w-full text-left px-6 py-4
            text-[12px] font-bold tracking-[0.1em] uppercase text-white/45
            hover:text-lime-400 hover:pl-8 transition border-b border-white/5"
          >
            {item}
          </button>
        ))}

        <details className="border-b border-white/5">
          <summary
            className="px-6 py-4 cursor-pointer text-[12px] font-bold tracking-[0.1em]
            uppercase text-white/45 flex justify-between items-center"
          >
            More
            <span className="font-syne text-[10px] text-lime-400">▼</span>
          </summary>
          <div className="bg-lime-400/5">
            {["About", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="block px-9 py-3 font-syne text-[11px]
                tracking-wide text-white/30 hover:text-lime-400 transition"
              >
                → {item}
              </Link>
            ))}
          </div>
        </details>

        <div className="px-6 py-5">
          <Link
            href="#"
            className="block text-center font-syne text-[11px]
            tracking-[0.12em] uppercase bg-lime-400 text-black py-3 rounded"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
