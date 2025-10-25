import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Research = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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

  const researchPapers = [
    {
      id: 'agentic-context-engineering',
      title: 'Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models',
    },
    {
      id: 'dragon-hatchling',
      title: 'The Dragon Hatchling: The Missing Link Between The Transformer And Models Of The Brain',
    },
  ];

  const handlePaperClick = (paperId) => {
    navigate(`/research/${paperId}`);
  };

  return (
    <section id="research" ref={sectionRef} className="min-h-screen py-20 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-accent">
            Research Paper Walkthroughs
          </h2>
        </div>

        <div className="space-y-4 animate-on-scroll">
          {researchPapers.map((paper) => (
            <button
              key={paper.id}
              onClick={() => handlePaperClick(paper.id)}
              className="w-full group flex items-start gap-4 p-6 bg-gray-800/40 border border-gray-700 rounded-lg hover:border-accent hover:bg-gray-800/60 transition-all duration-200 text-left"
            >
              <FileText className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-accent transition-colors">
                  {paper.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
