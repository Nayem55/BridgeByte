// src/Components/Tally.js
import React from 'react';

const Tally = () => {
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
    <section id="tally" className="py-[clamp(2.5rem,6vw,4rem)] scroll-mt-[80px]">
      <div className="max-w-[1100px] w-[92vw] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white mb-3">
            Tally Licenses & Customization
          </h2>
          <p className="text-muted max-w-3xl mx-auto leading-relaxed">
            Official TallyPrime partner. From fresh licensing to advanced customizations — we make Tally <em className="text-accent2">fit your business perfectly</em>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-glass to-glass/50 backdrop-blur-xl border border-glass-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-accent1/20 to-accent2/20 text-accent1 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-muted-light text-sm leading-relaxed">{service.desc}</p>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent1/10 to-accent2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[rgba(138,63,252,0.25)] to-[rgba(31,182,255,0.25)] border border-glass-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Migrating to TallyPrime? Need smarter reports?
            </h3>
            <p className="text-muted">
              Get a <strong>free data audit + migration plan</strong> in 24 hours. No strings attached.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-accent1 to-accent2 text-white font-bold shadow-[0_10px_30px_rgba(31,182,255,0.25)] hover:shadow-[0_15px_40px_rgba(31,182,255,0.35)] transition-all duration-300 whitespace-nowrap"
          >
            Talk to Tally Expert
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-muted-light text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Official Tally Solutions Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>500+ Custom Reports Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24-Hour Migration Planning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tally;