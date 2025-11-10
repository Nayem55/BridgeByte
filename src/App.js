import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Tally from "./Components/Tally";
import "./App.css";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos((prev) => ({
        x: prev.x + (e.clientX - prev.x),
        y: prev.y + (e.clientY - prev.y),
      }));
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ParallaxProvider>
      <div className="relative bg-[radial-gradient(800px_800px_at_20%_-10%,rgba(138,63,252,0.25),transparent)] bg-bg text-textColor font-inter min-h-screen overflow-hidden">
        {/* Light Glow Follower */}
        <div
          className="pointer-events-none fixed inset-0 z-[100] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x - 150}px, ${
              mousePos.y - 150
            }px)`,
          }}
        >
          <div className="w-[300px] h-[300px] rounded-full bg-purple-400/20 blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20">
          <Navbar />
          <Hero />
          <Services />
          <Tally />
          <WhyUs />
          <Contact />
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
