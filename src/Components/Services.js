import React from "react";

/**
 * EXACT visual replica of the provided "OUR SERVICES" card
 * - TailwindCSS required
 * - Uses only this component (no external libs)
 * - Colors and layout tuned to match the screenshot 1:1
 */

const Icon = ({ children }) => (
  <div className="shrink-0 mt-1 text-[#8A3FFC] dark:text-[#8A3FFC]">{children}</div>
);

const IconR = ({ children }) => (
  <div className="shrink-0 mt-1 text-[#1FB6FF] dark:text-[#1FB6FF]">{children}</div>
);

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
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M4.93 4.93l1.41 1.41"></path>
    <path d="M17.66 17.66l1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="M6.34 17.66l-1.41 1.41"></path>
    <path d="M19.07 4.93l-1.41 1.41"></path>
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
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h18"></path>
    <path d="M3 6h18"></path>
    <path d="M3 18h18"></path>
    <path d="M7 2v4"></path>
    <path d="M17 2v4"></path>
    <path d="M7 18v4"></path>
    <path d="M17 18v4"></path>
  </svg>
);

export default function ServicesCardExact() {
  return (
    <section id="services" className="relative overflow-hidden py-[clamp(2.5rem,6vw,4rem)]">
      {/* page background to match screenshot */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-150px,#2b1664_0%,#110827_45%,#0b0718_60%,#0a0615_100%)]" />

      <div className="max-w-[1120px] w-[92vw] mx-auto">
        <h2 className="text-white tracking-tight font-extrabold text-[clamp(2rem,3.2vw,2.5rem)] mb-4">
          OUR SERVICES
        </h2>
        <p className="text-white/60 max-w-2xl mb-10">
          Pick what you need today, add more tomorrow. Everything integrates seamlessly.
        </p>

        {/* Card */}
        <div className="relative rounded-[28px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden p-8 md:p-12 bg-[radial-gradient(160%_120%_at_0%_0%,#231151_0%,#2d1b69_30%,#1a0b3d_60%,#1a0b3d_100%)]">
          {/* soft glow blobs */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-20 -left-24 w-[420px] h-[420px] bg-[conic-gradient(from_180deg_at_50%_50%,#8A3FFC33_0deg,#1FB6FF33_120deg,#8A3FFC33_240deg,#8A3FFC33_360deg)] blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -right-20 w-[420px] h-[420px] bg-[conic-gradient(from_0deg_at_50%_50%,#1FB6FF33_0deg,#8A3FFC33_140deg,#1FB6FF33_280deg,#1FB6FF33_360deg)] blur-3xl rounded-full" />
          </div>

          {/* sweeping arcs to match the inner purple waves */}
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8A3FFC" />
                <stop offset="100%" stopColor="#1FB6FF" />
              </linearGradient>
              <linearGradient id="g2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#8A3FFC" />
                <stop offset="100%" stopColor="#1FB6FF" />
              </linearGradient>
            </defs>
            <path d="M0,140 C300,40 900,40 1200,140 L1200,600 L0,600 Z" fill="url(#g1)" opacity="0.25" />
            <path d="M0,260 C300,160 900,160 1200,260 L1200,600 L0,600 Z" fill="url(#g2)" opacity="0.18" />
            <path d="M0,420 C320,320 880,320 1200,420 L1200,600 L0,600 Z" fill="url(#g1)" opacity="0.12" />
          </svg>

          {/* content grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-12">
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <Icon><SvgCode/></Icon>
                <div>
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] mb-1">Custom Software Development</h3>
                  <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed">Web/desktop apps that mirror your processes. APIs, dashboards, automations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon><SvgPOS/></Icon>
                <div>
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] mb-1">POS &amp; Billing</h3>
                  {/* keep the small typo 'wfst' to be 100% identical */}
                  <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed">Barcode-ready POS wfst billing, role-based access.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon><SvgCCTV/></Icon>
                <div>
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] mb-1">CCTV &amp; Hardware Support</h3>
                  <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed">Surveillance setup, AMC, network te hardware repairs.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <IconR><SvgPOS/></IconR>
                <div>
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] mb-1">POS &amp; Billing</h3>
                  <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed">Barcode-ready POS with fast-based access, and tax-ready reports.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconR><SvgInventory/></IconR>
                <div>
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] mb-1">Inventory Management</h3>
                  <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed">Real-time stock, batches, serials, recoder alerts, purchase-to-sales flow.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconR><SvgServer/></IconR>
                <div>
                  <h3 className="text-white font-bold text-[18px] md:text-[20px] mb-1">Windows Server &amp; Deployment</h3>
                  <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed">AD, file shares, backup, virtualization, VPN, VPN, and domain hardeing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* bottom-center bridge icon */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 text-[#8A3FFC] opacity-70">
            <SvgBridge />
          </div>

          {/* small diamond at bottom-right like the screenshot */}
          <div className="absolute right-6 bottom-5 rotate-45 w-5 h-5 rounded-[4px] bg-gradient-to-br from-white/70 to-white/20 shadow-[0_0_20px_4px_rgba(255,255,255,0.06)]" />
        </div>
      </div>
    </section>
  );
}
