// src/components/Tally.tsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Tally = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tally" className="py-[clamp(4rem,10vw,8rem)] scroll-mt-[100px] relative overflow-hidden" ref={ref}>
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_160%_80%_at_50%_-20%,#1a0b3d_0%,#110827_40%,#0b0718_70%,#0a0615_100%)]" />

      <div className="max-w-[1400px] w-[92vw] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-black text-[clamp(2.5rem,6vw,4.5rem)] tracking-tighter leading-none">
            Every Business Runs Differently
          </h2>
          <p className="mt-6 text-white/80 text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed">
            Your workflows, approvals, invoicing style, reporting structure, and compliance needs are <span className="text-[#8A3FFC] font-bold">unique</span>. That’s where <span className="text-[#1FB6FF]">Tally TDL</span> (Tally Definition Language) comes in.
          </p>
          <p className="mt-8 text-white text-lg md:text-xl font-light italic max-w-4xl mx-auto">
            TDL allows us to <strong className="text-[#8A3FFC]">extend, enhance, and completely tailor</strong> Tally so it works <em>exactly the way your business operates</em>.
          </p>
          <p className="mt-10 text-2xl md:text-3xl font-bold text-white">
            At BridgeByte, we offer end-to-end TDL customization designed to transform standard Tally into a <span className="text-[#1FB6FF]">fully personalized business tool</span>.
          </p>
        </motion.div>

        {/* What We Offer - Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {[
            {
              title: "Custom Tally Modules",
              desc: "We build features aligned with your business model — no unnecessary extras, only what adds real value.",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1 -10 10a10 10 0 0 1 -10 -10a10 10 0 0 1 10 -10z" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              ),
            },
            {
              title: "Invoice & Voucher Customization",
              desc: "Branded layouts, custom fields, automated calculations, workflow approvals, and more.",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              ),
            },
            {
              title: "Advanced Reports",
              desc: "Department-wise, branch-wise, product-wise, aging reports, dashboards or any data view your team needs.",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3z" />
                  <path d="M3 9h18M9 3v18" />
                  <path d="M12 12l3 3l-3 3" />
                </svg>
              ),
            },
            {
              title: "Automation & Efficiency Tools",
              desc: "Auto-posting, auto email/SMS, bulk import/export, smart notifications, recurring entries, and reduced manual work.",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              ),
            },
            {
              title: "Integration Support",
              desc: "Connect Tally with POS systems, CRM tools, e-commerce, or third-party apps to streamline your operations.",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2s4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              ),
            },
            {
              title: "Compliance & Industry-Specific Add-Ons",
              desc: "Customized GST/VAT reports, audit tools, stock control modules, serial/batch management, and other domain-specific solutions.",
              icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-gradient-to-b from-[#1a0b3d]/90 via-[#2d1b69]/80 to-[#1a0b3d]/90 backdrop-blur-3xl border border-white/15 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A3FFC]/20 via-[#1FB6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

              <div className="relative z-10">
                <div className="p-4 w-fit rounded-2xl bg-gradient-to-br from-[#8A3FFC]/30 to-[#1FB6FF]/30 text-white mb-6 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8A3FFC] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/75 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#8A3FFC]/20 via-[#1FB6FF]/20 to-[#8A3FFC]/20 border border-white/20 rounded-3xl p-10 md:p-16 backdrop-blur-3xl shadow-3xl text-center"
        >
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
            Stop Forcing Your Business Into Standard Tally
          </h3>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto">
            Let us build a Tally that <span className="text-[#1FB6FF]">fits your processes perfectly</span> — not the other way around.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-[#8A3FFC] to-[#1FB6FF] text-white font-bold text-xl shadow-2xl hover:shadow-[#1FB6FF]/50 transition-all duration-300"
          >
            Get Your Free TDL Consultation Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tally;