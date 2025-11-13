import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ArtifactPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
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

  const categoryTitles = {
    'understanding-llms': 'Understanding Large Language Models',
    'data-engineering': 'Data Engineering',
  };

  const categoryArtifacts = {
    'understanding-llms': [
      {
        id: 'temperature-in-llm',
        title: 'What is temperature in LLM?',
        date: 'Nov 13, 2025',
      },
    ],
    'data-engineering': [],
  };

  const title = categoryTitles[categoryId] || 'Artifacts';
  const artifacts = categoryArtifacts[categoryId] || [];

  const handleArtifactClick = (artifactId) => {
    navigate(`/artifacts/${categoryId}/${artifactId}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-accent hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        {/* Page Header */}
        <div className="animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-12">
            {title}
          </h1>
        </div>

        {/* Artifact Cards Grid */}
        {artifacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artifacts.map((artifact, index) => (
              <div
                key={artifact.id}
                onClick={() => handleArtifactClick(artifact.id)}
                className="animate-on-scroll group bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-accent transition-colors mb-3 leading-tight">
                    {artifact.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-auto">{artifact.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No artifacts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtifactPage;
