import { useEffect, useRef } from 'react';
import { Brain, Database, Wrench } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Languages & Databases',
      icon: Brain,
      skills: [
        'Python',
        'R',
        'SQL',
        'MySQL',
        'PostgreSQL',
        'SSMS',
      ],
    },
    {
      title: 'Data Engineering',
      icon: Database,
      skills: [
        'ETL Development',
        'Data Modeling',
        'Data Warehousing',
        'BigQuery',
        'Redshift',
        'Snowflake',
        'Dataflow',
        'Apache Airflow',
        'Airbyte',
        'Apache Spark',
        'Apache Kafka',
        'dbt',
        'Dagster',
        'Delta Lake',
        'AWS Glue',
      ],
    },
    {
      title: 'Cloud & BI Tools',
      icon: Wrench,
      skills: [
        'AWS (EMR, S3, Athena, Glue)',
        'Google Cloud Platform',
        'Tableau',
        'Power BI',
        'Looker',
        'Docker',
        'Flask',
        'FastAPI',
        'Redis',
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-accent">
            Skills
          </h2>
        </div>

        <div className="space-y-12 animate-on-scroll">
          {skillCategories.map((category, index) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800/40 border border-gray-700 text-gray-300 text-sm rounded-md hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-b border-gray-800"></div>
            </div>
          ))}

          {/* ML/AI Skills Section */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Machine Learning & AI
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Deep Learning', 'Computer Vision', 'NLP', 'GenAI', 'LLMs', 'RAG', 'Fine-Tuning', 'Mask R-CNN', 'LangChain', 'OpenAI APIs'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gray-800/40 border border-gray-700 text-gray-300 text-sm rounded-md hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
