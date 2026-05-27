"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#historia", label: "História" },
    { href: "#transmissao", label: "Transmissão" },
    { href: "#prevencao", label: "Prevenção" },
    { href: "#galeria", label: "Galeria" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl animate-wiggle inline-block">🦟</span>
          <span
            className={`font-[family-name:var(--font-fredoka)] text-xl font-bold transition-colors ${
              scrolled ? "text-[#FF6B35]" : "text-white"
            }`}
          >
            Mosquito Vilão
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-semibold text-sm transition-colors hover:text-[#FF6B35] ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#quiz"
              className="bg-[#FF6B35] text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-[#e55a25] transition-colors shadow-lg"
            >
              Quiz! 🧠
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-semibold py-2 hover:text-[#FF6B35] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quiz"
            onClick={() => setMenuOpen(false)}
            className="bg-[#FF6B35] text-white font-bold px-5 py-2 rounded-full text-center hover:bg-[#e55a25] transition-colors"
          >
            Quiz! 🧠
          </a>
        </div>
      )}
    </nav>
  );
}
