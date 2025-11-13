import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Artifacts = () => {
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

  const artifactCategories = [
    {
      id: 'understanding-llms',
      title: 'Understanding Large Language Models',
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
    },
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/artifacts/${categoryId}`);
  };

  return (
    <section id="artifacts" ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-accent">
            Artifacts
          </h2>
        </div>

        <div className="space-y-4 animate-on-scroll">
          {artifactCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="w-full group flex items-start gap-4 p-6 bg-gray-800/40 border border-gray-700 rounded-lg hover:border-accent hover:bg-gray-800/60 transition-all duration-200 text-left"
            >
              <FileText className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artifacts;
