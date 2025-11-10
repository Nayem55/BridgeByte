// src/Components/Tally.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Tally = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      title: "Zero Tax Headache",
      desc: "Instantly generate VAT, TDS & all official tax reports. Stay 100% compliant without manual work, deadlines, or fines.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: "Know Your True Profits",
      desc: "Custom dashboards show exactly which products, customers, or branches are profitable. Make smarter decisions that grow your bottom line.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h18v18H3z"></path>
          <path d="M3 9h18"></path>
          <path d="M3 15h18"></path>
          <path d="M9 3v18"></path>
          <path d="M15 3v18"></path>
        </svg>
      ),
    },
    {
      title: "Everything Works Together",
      desc: "Tally connects directly to POS & Inventory. Every sale auto-updates books and stock — no double-entry, no errors.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      ),
    },
    {
      title: "Total Control, Anywhere",
      desc: "Access cash flow, stock, and reports from any phone or laptop. Cloud/Server deployment with 99.9% uptime.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "Professional Documents",
      desc: "Custom invoices, vouchers, and forms that match your brand and business rules. Look professional in every transaction.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
    {
      title: "Manage All Branches",
      desc: "Consolidate data from every location into one accurate dashboard. Executives get a unified view of performance.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18M7 2v4M17 2v4M7 18v4M17 18v4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tally" className="py-[clamp(3rem,8vw,6rem)] scroll-mt-[80px]" ref={ref}>
      <div className="max-w-[1300px] w-[92vw] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3rem)] font-black text-white tracking-tight"
          >
            Tally, Simplified with BridgeByte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted max-w-3xl mx-auto text-lg leading-relaxed mt-4"
          >
            Official TallyPrime partner. We don’t just sell licenses — we <em className="text-accent2 font-semibold">transform Tally into your business superpower</em>.
          </motion.p>
        </motion.div>

        {/* === PROFESSIONAL PYRAMID GRID (3-2-1) === */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8 mb-12">
          {/* Row 1: 3 Cards */}
          <div className="md:col-span-2">
            <BenefitCard benefit={benefits[0]} delay={0.3} isInView={isInView} />
          </div>
          <div className="md:col-span-2">
            <BenefitCard benefit={benefits[1]} delay={0.4} isInView={isInView} />
          </div>
          <div className="md:col-span-2">
            <BenefitCard benefit={benefits[2]} delay={0.5} isInView={isInView} />
          </div>

          {/* Row 2: 2 Cards (Centered) */}
          <div className="md:col-start-2 md:col-span-2">
            <BenefitCard benefit={benefits[3]} delay={0.6} isInView={isInView} />
          </div>
          <div className="md:col-span-2">
            <BenefitCard benefit={benefits[4]} delay={0.7} isInView={isInView} />
          </div>

          {/* Row 3: 1 Card (Centered) */}
          <div className="md:col-start-3 md:col-span-2">
            <BenefitCard benefit={benefits[5]} delay={0.8} isInView={isInView} />
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="bg-gradient-to-r from-[rgba(138,63,252,0.25)] to-[rgba(31,182,255,0.25)] border border-glass-border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl shadow-2xl"
        >
          <div className="text-left max-w-xl">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-2xl md:text-3xl font-bold text-white mb-3"
            >
              Ready to Eliminate Tax Stress & See Real Profits?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-muted text-lg"
            >
              Get a <strong className="text-white">free Tally audit + customization plan</strong> in 24 hours.
            </motion.p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            animate={{
              boxShadow: [
                "0 15px 40px rgba(31,182,255,0.3)",
                "0 20px 50px rgba(31,182,255,0.4)",
                "0 15px 40px rgba(31,182,255,0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-br from-accent1 to-accent2 text-white font-bold text-lg shadow-xl whitespace-nowrap"
          >
            Get Free Audit
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-light text-sm font-medium"
        >
          {[
            "Official Tally Solutions Partner",
            "500+ Custom Reports Delivered",
            "24-Hour Migration Planning",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
              className="flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/90">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* === Premium Benefit Card === */
const BenefitCard = ({ benefit, delay, isInView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -16,
        scale: 1.04,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="group relative h-full bg-gradient-to-b from-[#0a0615]/95 to-[#0f0b2b]/95 backdrop-blur-2xl border border-glass-border rounded-3xl p-7 md:p-8 cursor-default shadow-2xl overflow-hidden"
    >
      {/* Animated Glow Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent1/20 via-accent2/10 to-transparent blur-xl -z-10"
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 15 }}
        transition={{ duration: 0.4 }}
        className="mb-5 p-3.5 rounded-2xl bg-gradient-to-br from-accent1/25 to-accent2/25 text-accent1 shadow-lg w-fit"
      >
        {benefit.icon}
      </motion.div>

      {/* Title & Desc */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent2 transition-colors duration-300">
        {benefit.title}
      </h3>
      <p className="text-white/75 text-sm md:text-base leading-relaxed">
        {benefit.desc}
      </p>

      {/* Shine Sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default Tally;