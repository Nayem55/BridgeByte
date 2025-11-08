import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyUs from './Components/WhyUs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Tally from './Components/Tally';


function App() {
  return (
    <ParallaxProvider>
      <div className="bg-[radial-gradient(1200px_800px_at_20%_-10%,rgba(138,63,252,0.25),transparent)] bg-bg text-textColor font-inter min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Tally />
        <WhyUs />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;