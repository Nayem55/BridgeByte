import React from 'react';

const Tally = () => {
  return (
    <section id="tally" className="py-[clamp(2.5rem,6vw,4rem)] scroll-mt-[80px]">
      <div className="max-w-[1100px] w-[92vw] mx-auto">
        <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] mb-[1rem]">Tally Licenses & Customization</h2>
        <p className="text-muted mb-[2rem]">Licensing, custom reports, vouchers, and integrations to make Tally work the way you do.</p>
        <div className="grid grid-cols-12 gap-[1rem]">
          <div className="col-span-12 bg-gradient-to-b from-[rgba(138,63,252,0.12)] to-[rgba(31,182,255,0.10)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.1rem]">
            <div className="bg-gradient-to-r from-[rgba(138,63,252,0.25)] to-[rgba(31,182,255,0.25)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.2rem] flex flex-wrap items-center justify-between gap-[1rem]">
              <div>
                <strong>Migrating to TallyPrime or need new reports?</strong>
                <br />
                <span className="text-muted">We’ll audit your current data and provide a clear plan.</span>
              </div>
              <a href="#contact" className="px-[1rem] py-[0.65rem] rounded-[0.7rem] bg-gradient-to-br from-accent1 to-accent2 text-white font-bold shadow-[0_10px_30px_rgba(31,182,255,0.25)]">Talk to Tally Expert</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tally;