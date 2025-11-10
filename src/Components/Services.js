// src/components/ServicesCardElite.tsx
import React from "react";

/* === SVG Icons === */
const SvgCode = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const SvgPOS = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const SvgInventory = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3h18v18H3z"></path>
    <path d="M3 9h18"></path>
    <path d="M3 15h18"></path>
    <path d="M9 3v18"></path>
    <path d="M15 3v18"></path>
  </svg>
);

const SvgHandshake = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
    <path d="M9 12l-2 2 2 2"></path>
    <path d="M11 14l2-2-2-2"></path>
    <path d="M7 11h1a3 3 0 0 0 0-6H7"></path>
  </svg>
);

const SvgCCTV = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="10" r="3"></circle>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const SvgServer = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const SvgBridge = () => (
  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h18M3 6h18M3 18h18M7 2v4M17 2v4M7 18v4M17 18v4" />
  </svg>
);

/* === Reusable Service Item === */
const ServiceItem = ({ Icon, title, desc, accent }: { Icon: React.FC; title: string; desc: string; accent: "left" | "right" }) => {
  const isLeft = accent === "left";
  return (
    <div className="group flex items-start gap-5 transform transition-all duration-300 hover:translate-y-[-4px]">
      <div className={`shrink-0 mt-1 ${isLeft ? "text-[#8A3FFC]" : "text-[#1FB6FF]"}`}>
        <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform">
          <Icon />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-xl mb-1.5 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default function ServicesCardElite() {
  const services = [
    // LEFT COLUMN
    [
      { Icon: SvgCode, title: "Custom Software Development", desc: "Web/desktop apps that mirror your processes. APIs, dashboards, automations." },
      { Icon: SvgInventory, title: "Inventory Management", desc: "Real-time stock, batches, serials, reorder alerts, purchase-to-sales flow." },
      { Icon: SvgCCTV, title: "CCTV & Hardware Support", desc: "Surveillance setup, AMC, network design, on-site hardware repairs." },
    ],
    // RIGHT COLUMN
    [
      { Icon: SvgPOS, title: "POS & Billing", desc: "Barcode-ready POS with fast billing, role-based access, and tax-ready reports." },
      { Icon: SvgHandshake, title: "CRM / SRM", desc: "Customer & supplier portals, lead tracking, follow-ups, contract management." },
      { Icon: SvgServer, title: "Windows Server & Deployment", desc: "AD, file shares, backup, virtualization, VPN, and domain hardening." },
    ],
  ];

  return (
    <section className="relative overflow-hidden py-[clamp(3rem,8vw,6rem)]">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_160%_80%_at_50%_-20%,#1a0b3d_0%,#110827_40%,#0b0718_70%,#0a0615_100%)]" />

      <div className="relative max-w-[1150px] w-[92vw] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-black text-[clamp(2.2rem,5vw,3.5rem)] tracking-tighter leading-none">
            OUR SERVICES
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto font-light">
            Pick what you need today, add more tomorrow. Everything integrates seamlessly.
          </p>
        </div>

        {/* === MASTER CARD === */}
        <div className="relative group">
          {/* Outer Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8A3FFC]/20 via-[#1FB6FF]/20 to-[#8A3FFC]/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          {/* Main Card */}
          <div className="relative rounded-[40px] p-10 md:p-14 bg-gradient-to-br from-[#1a0b3d]/95 via-[#2d1b69]/90 to-[#1a0b3d]/95 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Animated Orbs */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute top-0 -left-32 w-96 h-96 bg-gradient-conic from-[#8A3FFC]/40 via-[#1FB6FF]/30 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 -right-32 w-96 h-96 bg-gradient-conic from-[#1FB6FF]/40 via-[#8A3FFC]/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Dynamic Wave System */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 700" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveG1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8A3FFC" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1FB6FF" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="waveG2" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#1FB6FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8A3FFC" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d="M0,180 Q300,80 600,180 T1200,180 L1200,700 L0,700 Z" fill="url(#waveG1)" className="animate-wave1" />
              <path d="M0,300 Q300,200 600,300 T1200,300 L1200,700 L0,700 Z" fill="url(#waveG2)" className="animate-wave2" />
              <path d="M0,450 Q300,350 600,450 T1200,450 L1200,700 L0,700 Z" fill="url(#waveG1)" className="animate-wave3" opacity="0.6" />
            </svg>

            {/* Content Grid */}
            <div className="relative grid md:grid-cols-2 gap-12">
              {/* LEFT COLUMN */}
              <div className="space-y-11">
                {services[0].map((item, i) => (
                  <ServiceItem key={i} Icon={item.Icon} title={item.title} desc={item.desc} accent="left" />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-11">
                {services[1].map((item, i) => (
                  <ServiceItem key={i} Icon={item.Icon} title={item.title} desc={item.desc} accent="right" />
                ))}
              </div>
            </div>

            {/* Diamond Accent */}
            <div className="absolute right-8 bottom-8 w-6 h-6 rotate-45 bg-gradient-to-br from-white/80 to-white/30 rounded-sm shadow-lg blur-[0.5px]" />
          </div>
        </div>
      </div>

      {/* === CSS Animations === */}
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
        .animate-wave1 { animation: wave1 8s ease-in-out infinite; }
        .animate-wave2 { animation: wave2 10s ease-in-out infinite reverse; }
        .animate-wave3 { animation: wave3 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}