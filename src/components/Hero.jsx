import { Github, Linkedin, Mail, ArrowDown, Code } from 'lucide-react';
import { useEffect, useRef } from 'react';
import SubstackIcon from './icons/SubstackIcon';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NvkAnirudh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nvkanirudh', label: 'LinkedIn' },
    { icon: SubstackIcon, href: 'https://substack.com/@anirudhnuti', label: 'Substack' },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl w-full">
        <div className="animate-on-scroll">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-100 flex items-center gap-4">
            <Code className="text-accent" size={56} />
            Anirudh Nuti
          </h1>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl md:text-3xl text-accent mb-6">
            Data & AI Engineer
          </h2>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            Building intelligent systems that transform data into actionable insights and drive innovation through AI.
          </p>
        </div>

        <div className="animate-on-scroll flex gap-6" style={{ animationDelay: '0.3s' }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon size={28} />
            </a>
          ))}
        </div>

        <div className="animate-on-scroll mt-16" style={{ animationDelay: '0.4s' }}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
