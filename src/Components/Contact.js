// src/Components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    // Gmail pre-fill URL
    const subject = encodeURIComponent("Request for Free Quote");
    const body = encodeURIComponent(
      `
Hi BridgeByte Team,

I'd like to request a free consultation.

Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email || "Not provided"}

Message:
${message}

Looking forward to your response!
    `.trim()
    );

    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hello@bridgebyte.com&su=${subject}&body=${body}`;

    // Open Gmail in new tab
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="py-[clamp(2.5rem,6vw,4rem)] scroll-mt-[80px]"
    >
      <div className="max-w-[1100px] w-[92vw] mx-auto">
        <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] mb-[1rem] font-bold text-white">
          Get a free quote
        </h2>
        <p className="text-muted mb-[2rem] max-w-2xl">
          Tell us what you’re planning. We’ll suggest the right stack and
          pricing.
        </p>

        <div className="grid grid-cols-12 gap-[1rem]">
          {/* LEFT: Form */}
          <div className="col-span-12 lg:col-span-7 bg-gradient-to-b from-[rgba(138,63,252,0.12)] to-[rgba(31,182,255,0.10)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.1rem] backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="grid gap-[0.8rem]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.8rem]">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor placeholder-muted/60 focus:outline-none focus:border-accent1/50 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone / WhatsApp"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor placeholder-muted/60 focus:outline-none focus:border-accent1/50 transition-colors"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor placeholder-muted/60 focus:outline-none focus:border-accent1/50 transition-colors"
              />

              <textarea
                name="message"
                placeholder="What do you need? e.g., Tally customization + POS for 3 stores"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-[0.9rem_1rem] rounded-[0.8rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-textColor placeholder-muted/60 min-h-[120px] resize-none focus:outline-none focus:border-accent1/50 transition-colors"
              />

              <button
                type="submit"
                className="px-[1rem] py-[0.65rem] rounded-[0.7rem] bg-gradient-to-br from-accent1 to-accent2 text-white font-bold shadow-[0_10px_30px_rgba(31,182,255,0.25)] cursor-pointer border-none hover:shadow-[0_15px_35px_rgba(31,182,255,0.35)] transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT: Info */}
          <div className="col-span-12 lg:col-span-5 bg-gradient-to-b from-[rgba(138,63,252,0.12)] to-[rgba(31,182,255,0.10)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.1rem] backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
            <p className="text-white/90 leading-relaxed">
              Phone: +8801980284861
              <br />
              Email: bridgebyte.bd@gmail.com
            </p>
            <p className="text-muted mt-1">Location: Mohammadpur, Dhaka, Bangladesh</p>

            <div className="mt-[1rem] bg-gradient-to-r from-[rgba(138,63,252,0.25)] to-[rgba(31,182,255,0.25)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] p-[1.2rem] flex flex-wrap items-center justify-between gap-[1rem]">
              <div>
                <strong className="text-white">Need urgent support?</strong>
                <br />
                <span className="text-muted text-sm">
                  Remote help within hours for AMC clients.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
