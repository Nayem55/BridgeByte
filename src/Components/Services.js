// src/components/ServicesCardElite.tsx
import React from "react";

/* === SVG Icons (kept the most relevant ones + added missing) === */
const SvgTally = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 8h18M3 12h18M3 16h18" />
  </svg>
);

const SvgCode = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const SvgPOS = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SvgInventory = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const SvgCRM = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SvgCCTV = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 9L12 15 6 9" />
    <rect x="4" y="4" width="16" height="12" rx="2" />
  </svg>
);

const SvgServer = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="6" y="8" width="12" height="8" rx="1" />
    <circle cx="8" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="16" cy="12" r="1" />
  </svg>
);

/* === Reusable Service Item === */
const ServiceItem = ({
  Icon,
  title,
  items,
  accent,
}: {
  Icon: React.FC;
  title: string;
  items: string[];
  accent: "left" | "right";
}) => {
  const isLeft = accent === "left";
  return (
    <div className="group flex items-start gap-5 transform transition-all duration-300 hover:translate-y-[-6px] hover:shadow-2xl sm:p-4">
      <div className={`shrink-0 mt-1 ${isLeft ? "text-[#8A3FFC]" : "text-[#1FB6FF]"}`}>
        <div className="p-3 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 group-hover:scale-115 group-hover:shadow-xl transition-all duration-300">
          <Icon />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-xl md:text-2xl mb-4 group-hover:text-accent2 transition-colors duration-300">
          {title}
        </h3>
        <ul className="space-y-2 text-white/75 text-base md:text-lg leading-relaxed">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 group-hover:text-white/95 transition-colors duration-300">
              <span className="text-[#8A3FFC] mt-1.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function ServicesCardElite() {
  const services = [
    // LEFT COLUMN
    [
      {
        Icon: SvgTally,
        title: "Tally Solutions",
        items: [
          "Tally setup & customization",
          "VAT/Tax configuration",
          "Data sync, maintenance & support",
        ],
      },
      {
        Icon: SvgCode,
        title: "Custom Software Development",
        items: [
          "Web & desktop applications",
          "APIs, dashboards, workflow automation",
        ],
      },
      {
        Icon: SvgPOS,
        title: "POS & Billing Systems",
        items: [
          "Barcode-ready POS",
          "Fast billing & role-based access",
          "Tax-ready reports",
        ],
      },
      {
        Icon: SvgInventory,
        title: "Inventory Management",
        items: [
          "Real-time stock, batches & serial tracking",
          "Full purchase-to-sales flow",
        ],
      },
    ],
    // RIGHT COLUMN
    [
      {
        Icon: SvgCRM,
        title: "CRM / SRM Solutions",
        items: [
          "Leads, quotes, tasks & service tickets",
          "WhatsApp / email follow-ups",
        ],
      },
      {
        Icon: SvgCCTV,
        title: "CCTV & IT Hardware Support",
        items: [
          "Surveillance setup",
          "AMC & troubleshooting",
          "Network design",
        ],
      },
      {
        Icon: SvgServer,
        title: "Windows Server & Deployment",
        items: [
          "Active Directory, file sharing",
          "Backups, virtualization, VPN",
          "Domain hardening",
        ],
      },
    ],
  ];

  return (
    <section id="services" className="relative overflow-hidden py-[clamp(3rem,8vw,6rem)]">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_160%_80%_at_50%_-20%,#1a0b3d_0%,#110827_40%,#0b0718_70%,#0a0615_100%)]" />

      <div className="relative max-w-[1400px] w-[92vw] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white font-black text-[clamp(2.5rem,5vw,4rem)] tracking-tighter leading-none">
            OUR SERVICES
          </h2>
          {/* <p className="mt-4 text-white/80 text-xl md:text-2xl font-semibold">
            (Concise & Professional)
          </p> */}
        </div>

        {/* MASTER ELITE CARD */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#8A3FFC]/25 via-[#1FB6FF]/25 to-[#8A3FFC]/25 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative rounded-[48px] p-8 md:p-16 bg-gradient-to-br from-[#1a0b3d]/98 via-[#2d1b69]/95 to-[#1a0b3d]/98 backdrop-blur-3xl border border-white/15 shadow-3xl overflow-hidden">
            {/* Animated Orbs */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-conic from-[#8A3FFC]/50 via-[#1FB6FF]/40 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-conic from-[#1FB6FF]/50 via-[#8A3FFC]/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Dynamic Waves */}
            <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 1200 700" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveG1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8A3FFC" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#1FB6FF" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="waveG2" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#1FB6FF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8A3FFC" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              <path d="M0,180 Q300,80 600,180 T1200,180 L1200,700 L0,700 Z" fill="url(#waveG1)" className="animate-wave1" />
              <path d="M0,300 Q300,200 600,300 T1200,300 L1200,700 L0,700 Z" fill="url(#waveG2)" className="animate-wave2" />
              <path d="M0,450 Q300,350 600,450 T1200,450 L1200,700 L0,700 Z" fill="url(#waveG1)" className="animate-wave3" opacity="0.6" />
            </svg>

            {/* Content Grid */}
            <div className="relative grid md:grid-cols-2 gap-12 md:gap-20">
              {/* LEFT COLUMN */}
              <div className="space-y-12">
                {services[0].map((service, i) => (
                  <ServiceItem key={i} {...service} accent="left" />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-12">
                {services[1].map((service, i) => (
                  <ServiceItem key={i} {...service} accent="right" />
                ))}
              </div>
            </div>

            <div className="sm:absolute right-10 bottom-10 w-8 h-8 rotate-45 bg-gradient-to-br from-white/90 to-white/40 rounded-sm shadow-2xl blur-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes wave1 {
          0%, 100% { d: path("M0,180 Q300,80 600,180 T1200,180 L1200,700 L0,700 Z"); }
          50% { d: path("M0,160 Q300,60 600,160 T1200,160 L1200,700 L0,700 Z"); }
        }
        @keyframes wave2 {
          0%, 100% { d: path("M0,300 Q300,200 600,300 T1200,300 L1200,700 L0,700 Z"); }
          50% { d: path("M0,280 Q300,180 600,280 T1200,280 L1200,700 L0,700 Z"); }
        }
        @keyframes wave3 {
          0%, 100% { d: path("M0,450 Q300,350 600,450 T1200,450 L1200,700 L0,700 Z"); }
          50% { d: path("M0,430 Q300,330 600,430 T1200,430 L1200,700 L0,700 Z"); }
        }
        .animate-wave1 { animation: wave1 9s ease-in-out infinite; }
        .animate-wave2 { animation: wave2 11s ease-in-out infinite reverse; }
        .animate-wave3 { animation: wave3 13s ease-in-out infinite; }
      `}</style>
    </section>
  );
}