import { useEffect, useRef } from 'react';

const About = () => {
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

  const expertise = [
    'ETL Development',
    'Data Modeling',
    'Python & SQL',
    'Apache Airflow',
    'Apache Spark',
    'AWS',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'GenAI',
    'Agentic AI',
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">
            About Me
          </h2>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I turn messy data into intelligent systems. From building computer vision models that automated document processing to architecting end-to-end data platforms, I've discovered that the real magic lies in bringing it all together — the pipelines that feed the models, the infrastructure that scales them, and the AI that learns from them. Today, I work at the intersection where Apache Spark meets machine learning, real-time streams power GenAI applications, and cloud architecture makes it all effortless.
          </p>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Currently building Nidhi AI — an intelligent financial companion powered by conversational AI. When I'm not engineering, I'm writing on DEtermined, breaking down complex data engineering concepts and guiding thousands of engineers to master Spark, pipelines, and modern data architecture.
          </p>
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold mb-6 text-gray-100">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {expertise.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-accent hover:text-accent transition-colors duration-300"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
