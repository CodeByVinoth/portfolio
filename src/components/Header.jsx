import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gradient animation
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-500 ease-in-out">
      {/* Glassmorphism container */}
      <div
        className={`relative backdrop-filter backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ${
          isScrolled ? "bg-black/20" : "bg-black/10"
        }`}
      >
        {/* Overlay reflection */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/8 via-white/4 to-transparent opacity-30"></div>

        <div className="relative px-6 py-4 flex justify-between items-center font-[Inter,sans-serif]">
          {/* Logo with animated gradient */}
          <motion.a
            href="#hero"
            className="tracking-wide relative z-10 transition-all duration-300 hover:scale-105"
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              textDecoration: "none",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                animation: "gradientShift 3s ease-in-out infinite",
              }}
            >
              Vinothkanna
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={item.href}
                  className="relative transition-all duration-300 hover:scale-105 group"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#E6F9FF",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  <span className="absolute inset-0 bg-cyan-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl transition-all duration-300 hover:bg-cyan-300/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="backdrop-filter backdrop-blur-sm bg-black/15 border border-white/20 rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/4 to-transparent opacity-30"></div>

              <ul className="relative flex flex-col py-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-4 transition-all duration-300 hover:bg-cyan-300/10 border-b border-white/10 last:border-b-0 group"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#E6F9FF",
                        textDecoration: "none",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
