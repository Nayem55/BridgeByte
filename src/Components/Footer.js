import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-[2rem] pb-[3rem] text-muted">
      <div className="max-w-[1100px] w-[92vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] items-center">
        <div className="flex items-center gap-[0.6rem]">
          <img src="https://i.ibb.co.com/HLBxP2Wv/Screenshot-2025-11-08-150049-removebg-preview.png" alt="BridgeByte logo small" className="w-9 rounded-md" />
          <div>
            <strong>BridgeByte</strong>
            <br />
            <span className="text-muted">© 2025 BridgeByte. All rights reserved.</span>
          </div>
        </div>
        <div className="text-center sm:text-right text-muted">
          Made with ♥ • <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;