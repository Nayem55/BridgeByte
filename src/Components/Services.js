// src/components/ServicesCardElite.tsx
import React from "react";

/* === SVG Icons === */
const SvgERP = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);

const SvgInventory = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);

const SvgPOS = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SvgFactory = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const SvgCRM = () => (
  <svg
    className="w-7 h-7"
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
);

const SvgApp = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

/* === Reusable Service Item === */
const ServiceItem = ({
  Icon,
  title,
  desc,
  accent,
}: {
  Icon: React.FC,
  title: string,
  desc: string,
  accent: "left" | "right",
}) => {
  const isLeft = accent === "left";
  return (
    <div className="group flex items-start gap-5 transform transition-all duration-300 hover:translate-y-[-6px] hover:shadow-2xl p-4">
      <div
        className={`shrink-0 mt-1 ${
          isLeft ? "text-[#8A3FFC]" : "text-[#1FB6FF]"
        }`}
      >
        <div className="p-3 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 group-hover:scale-115 group-hover:shadow-xl transition-all duration-300">
          <Icon />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-xl md:text-2xl mb-2 group-hover:text-accent2 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/75 text-base md:text-lg leading-relaxed group-hover:text-white/95 transition-colors duration-300">
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
      {
        Icon: SvgERP,
        title: "ERP (The Ultimate Business System)",
        desc: "Stop the Chaos: Run your entire company (HR, Finance, Inventory, Sales) from one simple platform. Get rid of messy spreadsheets and ensure every department works with the exact same, accurate information.",
      },
      {
        Icon: SvgFactory,
        title: "Manufacturing & Production",
        desc: "Control Your Factory Floor: Easily track raw materials, monitor exactly what is being built right now, and calculate your production costs accurately. You gain the power to optimize your entire assembly line and stop wasting money.",
      },
      {
        Icon: SvgPOS,
        title: "POS (Point-of-Sale) & Billing",
        desc: "Super-Fast, Secure Checkout: Get a fast, reliable billing system built exactly for your shop's rules. This makes checkout quick and easy for your staff and gives management total control over pricing and access.",
      },
    ],
    // RIGHT COLUMN
    [
      {
        Icon: SvgInventory,
        title: "Inventory & Warehouse Management",
        desc: "Never Lose Track of Stock: Get real-time visibility into everything you own, in every warehouse. Our system automatically tells you what to reorder, helping you eliminate stockouts and wasted inventory.",
      },
      {
        Icon: SvgCRM,
        title: "CRM (Customer/Sales Management)",
        desc: "Never Miss a Customer: Manage all your sales leads, customer quotes, and service requests from one central hub. We add automatic follow-ups (via WhatsApp or Email) to ensure you always serve and retain your clients.",
      },
      {
        Icon: SvgApp,
        title: "Specialized Apps (Simple Tools)",
        desc: "Solve Your Unique Problem: If you have a strange or unique task (like tracking staff schedules, field service teams, or specific safety checks), we build a simple, dedicated app for it so you don't have to change your process.",
      },
    ],
  ];

  return (
    <section className="relative overflow-hidden py-[clamp(3rem,8vw,6rem)]">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_160%_80%_at_50%_-20%,#1a0b3d_0%,#110827_40%,#0b0718_70%,#0a0615_100%)]" />

      <div className="relative max-w-[1300px] w-[92vw] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white font-black text-[clamp(2.2rem,5vw,3.5rem)] tracking-tighter leading-none">
            OUR SERVICES
          </h2>
          <p className="mt-5 text-white/70 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Why You Should Buy Our Custom Solution
          </p>
        </div>

        {/* === MASTER ELITE CARD === */}
        <div className="relative group">
          {/* Outer Glow Ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#8A3FFC]/25 via-[#1FB6FF]/25 to-[#8A3FFC]/25 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          {/* Main Card */}
          <div className="relative rounded-[48px] p-10 md:p-16 bg-gradient-to-br from-[#1a0b3d]/98 via-[#2d1b69]/95 to-[#1a0b3d]/98 backdrop-blur-3xl border border-white/15 shadow-3xl overflow-hidden">
            {/* Animated Orbs */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-conic from-[#8A3FFC]/50 via-[#1FB6FF]/40 to-transparent rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-conic from-[#1FB6FF]/50 via-[#8A3FFC]/40 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />
            </div>

            {/* Dynamic Wave System */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 1200 700"
              preserveAspectRatio="none"
            >
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
              <path
                d="M0,180 Q300,80 600,180 T1200,180 L1200,700 L0,700 Z"
                fill="url(#waveG1)"
                className="animate-wave1"
              />
              <path
                d="M0,300 Q300,200 600,300 T1200,300 L1200,700 L0,700 Z"
                fill="url(#waveG2)"
                className="animate-wave2"
              />
              <path
                d="M0,450 Q300,350 600,450 T1200,450 L1200,700 L0,700 Z"
                fill="url(#waveG1)"
                className="animate-wave3"
                opacity="0.6"
              />
            </svg>

            {/* Content Grid */}
            <div className="relative grid md:grid-cols-2 gap-14 md:gap-20">
              {/* LEFT COLUMN */}
              <div className="space-y-14">
                {services[0].map((item, i) => (
                  <ServiceItem
                    key={i}
                    Icon={item.Icon}
                    title={item.title}
                    desc={item.desc}
                    accent="left"
                  />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-14">
                {services[1].map((item, i) => (
                  <ServiceItem
                    key={i}
                    Icon={item.Icon}
                    title={item.title}
                    desc={item.desc}
                    accent="right"
                  />
                ))}
              </div>
            </div>

            {/* Diamond Accent */}
            <div className="absolute right-10 bottom-10 w-8 h-8 rotate-45 bg-gradient-to-br from-white/90 to-white/40 rounded-sm shadow-2xl blur-[0.5px]" />
          </div>
        </div>
      </div>

      {/* === CSS Animations === */}
      <style jsx>{`
        @keyframes wave1 {
          0%,
          100% {
            d: path("M0,180 Q300,80 600,180 T1200,180 L1200,700 L0,700 Z");
          }
          50% {
            d: path("M0,160 Q300,60 600,160 T1200,160 L1200,700 L0,700 Z");
          }
        }
        @keyframes wave2 {
          0%,
          100% {
            d: path("M0,300 Q300,200 600,300 T1200,300 L1200,700 L0,700 Z");
          }
          50% {
            d: path("M0,280 Q300,180 600,280 T1200,280 L1200,700 L0,700 Z");
          }
        }
        @keyframes wave3 {
          0%,
          100% {
            d: path("M0,450 Q300,350 600,450 T1200,450 L1200,700 L0,700 Z");
          }
          50% {
            d: path("M0,430 Q300,330 600,430 T1200,430 L1200,700 L0,700 Z");
          }
        }
        .animate-wave1 {
          animation: wave1 9s ease-in-out infinite;
        }
        .animate-wave2 {
          animation: wave2 11s ease-in-out infinite reverse;
        }
        .animate-wave3 {
          animation: wave3 13s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
