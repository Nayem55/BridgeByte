// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile drawer
  };

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
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "services", label: "Solutions" },
    { id: "tally", label: "Tally" },
    { id: "why", label: "Why Us" },
    { id: "packages", label: "Packages" },
    { label: "Get Quote", cta: true, modal: true },
  ];

  // Form state & handlers (same as before)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    const subject = encodeURIComponent("Request for Free Quote – BridgeByte");
    const body = encodeURIComponent(`
Hi BridgeByte Team,

I'd like to request a free consultation.

Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email || "Not provided"}

Message:
${message || "No additional message"}

Looking forward to your response!
Thank you.
    `.trim());

    window.open(
      `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hello@bridgebyte.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsModalOpen(false);
  };

  return (
    <>
      {/* ====== NAVBAR ====== */}
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
              <button
                key={link.label}
                onClick={() => link.modal ? setIsModalOpen(true) : link.id && scrollToSection(link.id)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 relative cursor-pointer ${
                  link.cta
                    ? "bg-gradient-to-br from-[#8A3FFC] to-[#1FB6FF] text-white shadow-[0_10px_30px_rgba(31,182,255,0.3)] hover:shadow-[0_15px_40px_rgba(31,182,255,0.4)] hover:scale-105"
                    : activeSection === link.id
                    ? "text-[#1FB6FF] bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {!link.cta && activeSection === link.id && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8A3FFC]/20 to-[#1FB6FF]/20 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ====== MOBILE DRAWER ====== */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-[#0f0b2b] via-[#1a0b3d] to-[#0f0b2b] shadow-2xl z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img src="https://i.ibb.co.com/HLBxP2Wv/Screenshot-2025-11-08-150049-removebg-preview.png" alt="BridgeByte" className="w-10 rounded-lg" />
                  <strong className="text-xl font-black text-white">BridgeByte</strong>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl bg-white/10 hover:bg-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="p-6 space-y-3">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => {
                      if (link.modal) {
                        setIsModalOpen(true);
                        setIsOpen(false);
                      } else if (link.id) {
                        scrollToSection(link.id);
                      }
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`block w-full text-left px-5 py-4 rounded-2xl font-semibold text-lg transition-all ${
                      link.cta
                        ? "bg-gradient-to-br from-[#8A3FFC] to-[#1FB6FF] text-white shadow-lg hover:shadow-xl"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ====== CONTACT MODAL (unchanged – already perfect) ====== */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-[#1a0b3d]/98 via-[#2d1b69]/95 to-[#1a0b3d]/98 backdrop-blur-3xl border border-white/15 rounded-3xl shadow-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 z-10 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                  <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
                    Get Your Free Quote
                  </h2>
                  <p className="text-white/70 text-center mb-10 max-w-2xl mx-auto text-lg">
                    Tell us what you need — Tally customization, POS setup, CRM, or full ERP. We’ll reply within hours.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-[#8A3FFC] transition-colors" />
                        <input type="tel" name="phone" placeholder="Phone / WhatsApp *" required value={formData.phone} onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-[#8A3FFC] transition-colors" />
                      </div>
                      <input type="email" name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-[#8A3FFC] transition-colors" />
                      <textarea name="message" placeholder="What do you need? e.g., Tally TDL + Multi-branch POS + GST reports" required rows={4} value={formData.message} onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-[#8A3FFC] transition-colors resize-none" />
                      <button type="submit"
                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#8A3FFC] to-[#1FB6FF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                        Send Request via Gmail
                      </button>
                    </form>

                    <div className="space-y-8 text-white">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <p className="leading-relaxed">
                          Phone: <strong>+880 1958-644062</strong> (Call / WhatsApp)<br />
                          Email: <strong>hello@bridgebyte.com</strong>
                        </p>
                        <p className="text-white/60 mt-2">Location: Mohammadpur, Dhaka, Bangladesh</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#8A3FFC]/10 to-[#1FB6FF]/10 border border-white/10">
                        <strong className="text-lg">Urgent Support?</strong>
                        <p className="text-white/80 mt-2 text-sm">
                          AMC clients get remote help within hours — even on weekends.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;