const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-saturate-[180%] backdrop-blur-[10px] bg-gradient-to-b from-[rgba(15,11,43,0.92)] to-[rgba(15,11,43,0.6)] border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1100px] w-[92vw] mx-auto flex items-center justify-between py-[0.8rem] gap-[1rem]">
        <div className="flex items-center gap-[0.7rem]">
          <img src="https://i.ibb.co.com/3YNpscpW/Screenshot-2025-11-08-150049.png" alt="BridgeByte logo" className="w-11 rounded-lg" />
          <strong className="tracking-[0.2px] font-bold text-[1.05rem]">BridgeByte</strong>
        </div>
        <div className="hidden md:flex items-center">
          <a href="#services" className="ml-[1rem] font-semibold opacity-90">Solutions</a>
          <a href="#tally" className="ml-[1rem] font-semibold opacity-90">Tally</a>
          <a href="#why" className="ml-[1rem] font-semibold opacity-90">Why Us</a>
          <a href="#contact" className="ml-[1rem] px-[0.65rem] py-[0.65rem] rounded-[0.7rem] bg-gradient-to-br from-accent1 to-accent2 text-white font-semibold shadow-[0_10px_30px_rgba(31,182,255,0.25)]">Get Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;