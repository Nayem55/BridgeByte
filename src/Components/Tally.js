// src/Components/Tally.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Tally = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "TallyPrime Licensing",
      desc: "Official Gold & Silver licenses with 1-year support. Multi-user, GST-ready, auto-updates, and Tally’s latest features out-of-the-box.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
    },
    {
      title: "Custom Reports & Vouchers",
      desc: "Tailored dashboards: profitability by product, stock aging, party-wise analysis, custom invoices, barcode labels, email/SMS automation.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      title: "Tally on Cloud / Server",
      desc: "Access from anywhere — laptop, tablet, phone. Auto-backup, multi-branch sync, role-based access, 99.9% uptime, secure remote access.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
  ];

  return (
    <section id="tally" className="py-[clamp(2.5rem,6vw,4rem)] scroll-mt-[80px]" ref={ref}>
      <div className="max-w-[1100px] w-[92vw] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white mb-3"
          >
            Tally Licenses & Customization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted max-w-3xl mx-auto leading-relaxed"
          >
            Official TallyPrime partner. From fresh licensing to advanced customizations — we make Tally{' '}
            <em className="text-accent2">fit your business perfectly</em>.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative bg-[#090513] backdrop-blur-xl border border-glass-border rounded-2xl p-6 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-lg bg-gradient-to-br from-accent1/20 to-accent2/20 text-accent1"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-[#312FF3]">{service.title}</h3>
              </div>
              <p className="text-white text-sm leading-relaxed">{service.desc}</p>

              {/* Hover Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent1/10 to-accent2/10 blur-xl -z-10"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-r from-[rgba(138,63,252,0.25)] to-[rgba(31,182,255,0.25)] border border-glass-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl"
        >
          <div className="text-left">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl md:text-2xl font-bold text-white mb-2"
            >
              Migrating to TallyPrime? Need smarter reports?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-muted"
            >
              Get a <strong>free data audit + migration plan</strong> in 24 hours. No strings attached.
            </motion.p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(31,182,255,0.25)",
                "0 15px 40px rgba(31,182,255,0.35)",
                "0 10px 30px rgba(31,182,255,0.25)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-accent1 to-accent2 text-white font-bold shadow-[0_10px_30px_rgba(31,182,255,0.25)] whitespace-nowrap"
          >
            Talk to Tally Expert
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-6 text-muted-light text-sm"
        >
          {[
            "Official Tally Solutions Partner",
            "500+ Custom Reports Delivered",
            "24-Hour Migration Planning",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tally;