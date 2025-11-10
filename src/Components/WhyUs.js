// src/components/WhyUs.tsx
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const WhyUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reasons = [
    {
      title: "Fast & Flexible",
      desc: "Modular architecture ships in days, not weeks. Scale features as your business grows — no lock-in.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Security-First",
      desc: "Bank-grade encryption, zero-trust architecture, and proactive threat monitoring. Your data stays yours.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33A1.65 1.65 0 0 0 14 21v.09A2 2 0 0 1 12 23a2 2 0 0 1-2-1.91V21a1.65 1.65 0 0 0-1-1.51A1.65 1.65 0 0 0 7.18 20l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      title: "Reporting That Matters",
      desc: "Real-time dashboards, AI-powered insights, and exportable CFO-grade reports — all in one click.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h3l2-7 4 12 2-7h3" />
          <path d="M3 18h18" />
        </svg>
      ),
    },
    {
      title: "Dedicated Support",
      desc: "24/7 priority support, dedicated account manager, and 99.9% uptime SLA. You’re never alone.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-[clamp(3rem,7vw,5rem)] scroll-mt-[80px] overflow-hidden bg-gradient-to-b from-[#0F0B2B] via-[#1C1750] to-[#0F0B2B]">
      {/* ---- Background ---- */}
      {!isMobile && (
        <Parallax speed={-6} className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A3FFC" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#1FB6FF" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#8A3FFC" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path
              d="M0,250 Q300,150 600,250 T1200,250 L1200,600 L0,600 Z"
              fill="url(#orbGrad)"
              className="animate-pulse"
            />
            <path
              d="M0,320 Q300,230 600,320 T1200,320 L1200,600 L0,600 Z"
              fill="url(#orbGrad)"
              opacity="0.6"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </Parallax>
      )}

      <div className="relative max-w-[1100px] w-[92vw] mx-auto">
        {/* Header */}
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black text-white tracking-tight">
              Why BridgeByte
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Clear scope, rapid delivery, and long-term partnership. We build
              systems that grow with you.
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-14">
            <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-black text-white tracking-tight">
              Why BridgeByte
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Clear scope, rapid delivery, and long-term partnership. We build
              systems that grow with you.
            </p>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) =>
            isMobile ? (
              <div key={idx} className="h-full">
                <div
                  className="relative h-full p-7 rounded-2xl bg-white/6 backdrop-blur-2xl border border-white/12 shadow-2xl overflow-hidden transition-all duration-400"
                >
                  <div className="relative z-10 mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent1 to-accent2 text-white shadow-lg">
                      {reason.icon}
                    </div>
                  </div>
                  <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="relative z-10 text-gray-300 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ) : (
              <Parallax key={idx} speed={idx % 2 === 0 ? 4 : -4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ y: -10, scale: 1.04 }}
                  className="group h-full"
                >
                  <div
                    className="relative h-full p-7 rounded-2xl bg-white/6 backdrop-blur-2xl border border-white/12 shadow-2xl overflow-hidden transition-all duration-400 group-hover:border-accent1/40 group-hover:shadow-[0_0_30px_rgba(138,63,252,0.25)]"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent1/20 via-transparent to-accent2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 mb-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent1 to-accent2 text-white shadow-lg">
                        {reason.icon}
                      </div>
                    </div>
                    <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="relative z-10 text-gray-300 text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                  </div>
                </motion.div>
              </Parallax>
            )
          )}
        </div>

        {/* CTA */}
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-14 text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent1 to-accent2 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Project
            </a>
          </motion.div>
        ) : (
          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent1 to-accent2 text-white font-bold text-base shadow-xl"
            >
              Start Your Project
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyUs;
