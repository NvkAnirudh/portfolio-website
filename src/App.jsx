import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Snowflakes from './components/Snowflakes';
import HalloweenElements from './components/HalloweenElements';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 relative">
      <Snowflakes />
      <HalloweenElements />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
