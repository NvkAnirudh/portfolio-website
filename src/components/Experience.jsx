import { useEffect, useRef, useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(0);

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

  const experiences = [
    {
      company: 'Nidhi AI',
      role: 'Founding Engineer',
      duration: 'Oct 2025 - Present',
      achievements: [
        'Architected production-ready PostgreSQL database schema supporting multi-tenant financial data management with account aggregator integrations (Plaid, Setu)',
        'Built modular Text2SQL system with Agentic AI workflow using FastAPI and GPT-5, converting natural language to SQL queries with SQL injection protection, caching, and comprehensive error handling',
        'Engineered containerized full-stack platform with Next.js, TypeScript, Docker orchestration, and interactive schema visualization using ReactFlow',
        'Designed RESTful API architecture with multiple endpoints for production and debugging, featuring health monitoring, performance metrics, and parameterized query execution',
      ],
    },
    {
      company: 'DEtermined',
      role: 'Data Engineer & Founder',
      duration: 'Apr 2025 - Present',
      achievements: [
        'Architected and scaled a data engineering platform attracting 200+ Substack subscribers and 30K+ LinkedIn impressions monthly',
        'Engineered end-to-end distributed data pipelines using PySpark, SQL, and Delta Lake, achieving 5x performance improvement through advanced tuning',
        'Deployed ML-enhanced features using LangChain and OpenAI APIs, improving question classification and user engagement by 70% within 6 weeks',
      ],
    },
    {
      company: 'Stealth Startup',
      role: 'Software Engineer, Data & AI Consultant',
      duration: 'Jun 2025 - Aug 2025',
      achievements: [
        'Developed AI-powered events scheduling platform using GPT-4o achieving 95%+ accuracy while reducing manual data entry by 80%',
        'Built full-stack application with React/TypeScript frontend and FastAPI/Python backend, delivering real-time event processing for 50+ sports organizations',
        'Automated data pipeline supporting CSV/Excel/PDF ingestion with monitoring, plus widget generation system extracting brand assets from websites',
      ],
    },
    {
      company: 'Econtenti',
      role: 'Data Engineer',
      duration: 'Jan 2024 - Present',
      achievements: [
        'Designed scalable financial data pipeline using Python and Apache Airflow, reducing query time by 35% and driving $200K in productivity gains',
        'Engineered 20+ dbt data models integrated within AWS Glue automated ETL workflows, minimizing time-to-insight by 25%',
        'Optimized 15 critical data workflows with Dagster and Amazon EMR, saving 300+ hours annually',
        'Managed Amazon Redshift partitioning cutting average SQL query runtimes by 40% and reducing cloud costs by 15%, achieving $50K in annual savings',
      ],
    },
    {
      company: 'ATC',
      role: 'Data Engineer',
      duration: 'Feb 2023 - Jan 2024',
      achievements: [
        'Reengineered ETL pipelines from Excel to Amazon RDS using Python, trimming data preparation time by 40%',
        'Enhanced real-time data ingestion by deploying Apache Kafka on Amazon EMR, reducing latency by 20%',
        'Improved ETL workflows by integrating Apache Airflow with AWS Glue, cutting process runtimes by 40%',
      ],
    },
    {
      company: 'Intain Technologies',
      role: 'Data Scientist',
      duration: 'Feb 2019 - Aug 2020',
      achievements: [
        'Executed Mask R-CNN model for document field extraction, raising accuracy to 97% and cutting monthly costs by $10K',
        'Led automation of data entry workflows with Docker and Flask, scaling down manual effort by 80% and saving 200+ work hours monthly',
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="animate-on-scroll relative pl-8 border-l-2 border-gray-700 hover:border-accent transition-colors duration-300"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-gray-950"></div>

                <div
                  className="cursor-pointer"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-gray-100">
                          {exp.role}
                        </h3>
                        {isExpanded ? (
                          <ChevronUp size={20} className="text-accent flex-shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-accent flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-accent mt-1">
                        <Briefcase size={14} />
                        <span className="text-base">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {isExpanded && (
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm leading-relaxed flex items-start"
                      >
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
