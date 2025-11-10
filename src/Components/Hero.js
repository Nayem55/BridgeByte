import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <header className="pt-[clamp(3rem,7vw,6rem)] pb-[2rem]">
      <div className="max-w-[1100px] w-[92vw] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[2rem] items-center">
        <div>
          <h1 className="text-[clamp(2rem,3.7vw,3.2rem)] leading-[1.05] mb-[1rem]">Build a <span className="bg-gradient-to-br from-accent1 to-accent2 bg-clip-text text-transparent">smarter business stack</span> with BridgeByte</h1>
          <p className="text-muted text-[clamp(1rem,1.2vw,1.15rem)]">We provide Tally licenses & customization, custom POS and inventory solutions, CRM/SRM, CCTV & hardware support, Windows Server deployments, and managed IT—crafted around your workflows.</p>
          <p className="mt-6 text-muted text-[clamp(1rem,1.2vw,1.15rem)]">🚀 Fast setup • 🔒 Secure • ⚙️ Customizable</p>
          <div className="flex gap-[0.7rem] mt-[1rem] flex-wrap">
            <a href="#contact" className="px-[1rem] py-[0.65rem] rounded-[0.7rem] bg-gradient-to-br from-accent1 to-accent2 text-white font-semibold shadow-[0_10px_30px_rgba(31,182,255,0.25)]">Book a Free Consultation</a>
            <a href="#services" className="px-[0.9rem] py-[0.55rem] rounded-full border border-dashed border-[rgba(255,255,255,0.25)] text-muted font-semibold">See Solutions ↓</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Parallax speed={-5}>
            <img className="w-[340px] max-w-[70vw] drop-shadow-[0_30px_45px_rgba(31,182,255,0.18)]" src="https://i.ibb.co.com/3YNpscpW/Screenshot-2025-11-08-150049.png" alt="BridgeByte mark" />
          </Parallax>
        </div>
      </div>
    </header>
  );
};

export default Hero;