import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Snowflakes from './components/Snowflakes';
import HalloweenElements from './components/HalloweenElements';
import Chatbot from './components/Chatbot';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate if we're in portfolio section (scrolled past chatbot)
  const isInPortfolio = scrollPosition > window.innerHeight * 0.5;

  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Floating Anirudh Logo that transitions */}
      <div
        className={`fixed z-[100] transition-all duration-700 ease-in-out ${
          isInPortfolio
            ? 'top-[1.05rem] left-20 text-xl opacity-100'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="#hero"
          className="font-bold text-cyan-400 hover:text-cyan-300 drop-shadow-2xl transition-colors"
        >
          &lt;Anirudh /&gt;
        </a>
      </div>

      <Chatbot />
      <div id="portfolio-content" className="relative">
        <Snowflakes />
        <HalloweenElements />
        <div className="relative z-10">
          <Navbar isInPortfolio={isInPortfolio} />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
