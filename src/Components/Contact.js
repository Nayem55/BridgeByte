import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! In production, this would send your message.');
  };

  return (
    <section id="contact" className="py-[clamp(2.5rem,6vw,4rem)] scroll-mt-[80px]">
      <div className="max-w-[1100px] w-[92vw] mx-auto">
        <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] mb-[1rem]">Get a free quote</h2>
        <p className="text-muted mb-[2rem]">Tell us what you’re planning. We’ll suggest the right stack and pricing.</p>
        <div className="grid grid-cols-12 gap-[1rem]">
          <div className="col-span-12 lg:col-span-7 bg-gradient-to-b from-[rgba(138,63,252,0.12)] to-[rgba(31,182,255,0.10)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.1rem]">
            <form onSubmit={handleSubmit} className="grid gap-[0.8rem]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.8rem]">
                <input type="text" placeholder="Your name" required className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor" />
                <input type="tel" placeholder="Phone / WhatsApp" required className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor" />
              </div>
              <input type="email" placeholder="Email (optional)" className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor" />
              <textarea placeholder="What do you need? e.g., Tally customization + POS for 3 stores" required className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor min-h-[120px]" />
              <button type="submit" className="px-[1rem] py-[0.65rem] rounded-[0.7rem] bg-gradient-to-br from-accent1 to-accent2 text-white font-bold shadow-[0_10px_30px_rgba(31,182,255,0.25)] cursor-pointer border-none">Request Callback</button>
            </form>
          </div>
          <div className="col-span-12 lg:col-span-5 bg-gradient-to-b from-[rgba(138,63,252,0.12)] to-[rgba(31,182,255,0.10)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.1rem]">
            <h3>Contact</h3>
            <p>📞 +91-XXXXXXXXXX<br />✉️ hello@bridgebyte.com</p>
            <p className="text-muted">Location: Your City, India</p>
            <div className="mt-[0.5rem] bg-gradient-to-r from-[rgba(138,63,252,0.25)] to-[rgba(31,182,255,0.25)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.2rem] flex flex-wrap items-center justify-between gap-[1rem]">
              <div>
                <strong>Need urgent support?</strong>
                <br />
                <span className="text-muted">Remote help within hours for AMC clients.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;