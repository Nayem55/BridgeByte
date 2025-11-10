// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const sections = ["services", "tally", "why", "packages", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Solutions" },
    { href: "#tally", label: "Tally" },
    { href: "#why", label: "Why Us" },
    { href: "#packages", label: "Packages" }, // NEW
    { href: "#contact", label: "Get Quote", cta: true },
  ];

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-saturate-[180%] backdrop-blur-[12px] bg-gradient-to-b from-[rgba(15,11,43,0.95)] to-[rgba(15,11,43,0.65)] border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-[1200px] w-[92vw] mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="https://i.ibb.co.com/HLBxP2Wv/Screenshot-2025-11-08-150049-removebg-preview.png"
              alt="BridgeByte logo"
              className="w-11 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <strong className="tracking-[0.3px] font-black text-[1.1rem] bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              BridgeByte
            </strong>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 relative ${
                  link.cta
                    ? "bg-gradient-to-br from-accent1 to-accent2 text-white shadow-[0_10px_30px_rgba(31,182,255,0.3)] hover:shadow-[0_15px_40px_rgba(31,182,255,0.4)] hover:scale-105"
                    : activeSection === link.href.slice(1)
                    ? "text-accent2 bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {/* Active Indicator */}
                {!link.cta && activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent1/20 to-accent2/20 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* === SIDE DRAWER (MOBILE) === */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-[#0f0b2b] via-[#1a0b3d] to-[#0f0b2b] shadow-2xl z-50 md:hidden overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co.com/HLBxP2Wv/Screenshot-2025-11-08-150049-removebg-preview.png"
                    alt="BridgeByte"
                    className="w-10 rounded-lg"
                  />
                  <strong className="text-xl font-black text-white">BridgeByte</strong>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="p-6 space-y-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeDrawer}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`block w-full px-5 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      link.cta
                        ? "bg-gradient-to-br from-accent1 to-accent2 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        : activeSection === link.href.slice(1)
                        ? "text-accent2 bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Footer Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;