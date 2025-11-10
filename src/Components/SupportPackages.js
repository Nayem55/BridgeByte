// src/Components/SupportPackages.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SupportPackages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const packages = [
    {
      name: "On-Demand",
      color: "from-purple-600/20 to-blue-600/10",
      border: "border-purple-500/30",
      features: {
        "Remote Support (Business Hours)": "check",
        "Priority Response SLA": "cross",
        "Scheduled On-site Visits": "cross",
        "24/7 Emergency Support": "cross",
        "Dedicated Account Manager": "cross",
        "Proactive Network Monitoring": "cross",
        "Server & Backup Management": "cross",
        "CCTV & Hardware Maintenance": "cross",
        "Tally & POS Support": "check",
        "Custom Software Warranty": "cross",
      },
    },
    {
      name: "Business AMC",
      color: "from-blue-600/25 to-purple-600/15",
      border: "border-blue-500/40",
      highlight: true,
      features: {
        "Remote Support (Business Hours)": "unlimited",
        "Priority Response SLA": "check",
        "Scheduled On-site Visits": "check",
        "24/7 Emergency Support": "add-on",
        "Dedicated Account Manager": "cross",
        "Proactive Network Monitoring": "check",
        "Server & Backup Management": "check",
        "CCTV & Hardware Maintenance": "check",
        "Tally & POS Support": "check",
        "Custom Software Warranty": "cross",
      },
    },
    {
      name: "Enterprise Managed",
      color: "from-purple-600/30 to-blue-600/20",
      border: "border-purple-400/50",
      features: {
        "Remote Support (Business Hours)": "unlimited",
        "Priority Response SLA": "check",
        "Scheduled On-site Visits": "check",
        "24/7 Emergency Support": "check",
        "Dedicated Account Manager": "check",
        "Proactive Network Monitoring": "check",
        "Server & Backup Management": "check",
        "CCTV & Hardware Maintenance": "check",
        "Tally & POS Support": "check",
        "Custom Software Warranty": "check",
      },
    },
  ];

  const features = Object.keys(packages[0].features);

  return (
    <section id="packages" className="py-[clamp(3rem,8vw,6rem)] scroll-mt-[80px]" ref={ref}>
      <div className="max-w-[1200px] w-[92vw] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white mb-4">
            Support Packages
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Choose the level of care your business needs. Scale anytime.
          </p>
        </motion.div>

        {/* Unified Card Layout: Mobile = col, Desktop = row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl p-6 bg-gradient-to-b ${pkg.color} backdrop-blur-xl border ${pkg.border} overflow-hidden group shadow-xl`}
            >
              {/* Highlight Bar */}
              {pkg.highlight && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent1 to-accent2" />
              )}

              {/* Package Name */}
              <h3 className="text-xl font-bold text-white mb-5 text-center">{pkg.name}</h3>

              {/* Features */}
              <div className="space-y-3.5">
                {features.map((feature, j) => {
                  const value = pkg.features[feature];
                  return (
                    <div key={j} className="flex items-center justify-between">
                      <span className="text-white/80 text-sm leading-tight">{feature}</span>
                      <div className="flex-shrink-0">
                        {value === "check" && (
                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {value === "cross" && (
                          <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        {value === "unlimited" && (
                          <span className="text-accent2 font-bold text-xs">Unlimited</span>
                        )}
                        {value === "add-on" && (
                          <span className="text-yellow-400 text-xs font-medium">(Add-on)</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full block text-center py-3 rounded-xl bg-gradient-to-br from-accent1 to-accent2 text-white font-bold shadow-lg"
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-4">Not sure which plan fits?</p>
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
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-br from-accent1 to-accent2 text-white font-bold shadow-lg"
          >
            Talk to an Expert
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportPackages;