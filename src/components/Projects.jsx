import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, X, Youtube } from 'lucide-react';
import SubstackIcon from './icons/SubstackIcon';

const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      name: 'LinkedIn Post Generator',
      description:
        'A Model Context Protocol (MCP) server that automates generating professional LinkedIn post drafts from YouTube videos. Streamlines content repurposing by extracting transcripts, summarizing content, and generating engaging LinkedIn posts.',
      tech: ['MCP', 'Python', 'YouTube API', 'OpenAI', 'LLM'],
      github: 'https://github.com/NvkAnirudh/LinkedIn-Post-Generator',
      smithery: 'https://smithery.ai/server/@NvkAnirudh/linkedin-post-generator',
      demo: 'https://www.youtube.com/watch?v=pcg7Evskg_E',
      details: {
        features: [
          'YouTube Transcript Extraction: Automatically extract transcripts from any YouTube video',
          'Content Summarization: Generate concise summaries with customizable tone and target audience',
          'LinkedIn Post Generation: Create professional LinkedIn posts with customizable style and tone',
          'All-in-One Workflow: Go from YouTube URL to LinkedIn post in a single operation',
          'Customization Options: Adjust tone, audience, word count, and more to match your personal brand',
          'MCP Integration: Works seamlessly with AI assistants that support the Model Context Protocol'
        ],
        tools: [
          {
            name: 'Set API Keys',
            purpose: 'Configure your API keys',
            parameters: ['openaiApiKey: Your OpenAI API key (required)', 'youtubeApiKey: Your YouTube API key (optional)']
          },
          {
            name: 'Check API Keys',
            purpose: 'Verify your API key configuration status'
          },
          {
            name: 'Extract Transcript',
            purpose: 'Get the transcript from a YouTube video',
            parameters: ['youtubeUrl: URL of the YouTube video']
          },
          {
            name: 'Summarize Transcript',
            purpose: 'Create a concise summary of the video content',
            parameters: ['transcript: The video transcript text', 'tone: Educational, inspirational, professional, or conversational', 'audience: General, technical, business, or academic', 'wordCount: Approximate word count for the summary (100-300)']
          },
          {
            name: 'Generate LinkedIn Post',
            purpose: 'Create a LinkedIn post from a summary',
            parameters: ['summary: Summary of the video content', 'videoTitle: Title of the YouTube video', 'speakerName: Name of the speaker (optional)', 'hashtags: Relevant hashtags (optional)', 'tone: First-person, third-person, or thought-leader', 'includeCallToAction: Whether to include a call to action']
          },
          {
            name: 'All-in-One: YouTube to LinkedIn Post',
            purpose: 'Complete workflow from YouTube URL to LinkedIn post',
            parameters: ['youtubeUrl: YouTube video URL', 'tone: Desired tone for the post', 'Plus additional customization options']
          }
        ],
        workflow: [
          'Set your API keys using the set_api_keys tool',
          'Use the youtube_to_linkedin_post tool with a YouTube URL',
          'Receive a complete LinkedIn post draft ready to publish'
        ]
      }
    },
    {
      name: 'Real-Time E-Commerce Sales Analytics Pipeline',
      description:
        'An Apache Flink application designed for real-time sales analytics in an E-Commerce setting. Processes financial transaction data from Kafka, performs aggregations, and stores results in Postgres and Elasticsearch for further analysis.',
      tech: ['Apache Flink', 'Kafka', 'PostgreSQL', 'Elasticsearch', 'Docker', 'Python'],
      github: 'https://github.com/NvkAnirudh/Real-Time-ECommerce-Sales-Analytics-Pipeline',
      demo: 'https://deprojects.substack.com/p/real-time-e-commerce-analytics-with',
      details: {
        features: [
          'Real-time financial transaction processing using Apache Flink',
          'Data ingestion from Kafka',
          'Aggregations and transformations on transaction streams',
          'Data storage in Postgres for structured queries',
          'Data indexing in Elasticsearch for analytics and visualization',
          'Fully containerized setup using Docker Compose'
        ],
        architecture: {
          description: 'The system processes transaction data through the following pipeline:',
          components: [
            'Python Script (main.py) - Generates and publishes sales transactions to Kafka',
            'Kafka Consumers - Reads transaction data from Kafka',
            'Flink (DataStreamJob.java) - Processes, aggregates, and transforms streaming data',
            'Postgres - Stores structured transaction data and analytics tables',
            'Elasticsearch - Indexes transaction data for analytics and fast querying'
          ],
          image: 'https://raw.githubusercontent.com/NvkAnirudh/Real-Time-ECommerce-Sales-Analytics-Pipeline/refs/heads/main/System_Architecture.png'
        }
      }
    },
    {
      name: 'DEtermined Data Engineering Platform',
      description:
        'Engineered end-to-end distributed data pipelines using PySpark, SQL, and Delta Lake achieving 5x performance improvement. ML-enhanced content platform with 200+ subscribers and 30K+ monthly impressions.',
      tech: ['PySpark', 'Delta Lake', 'SQL', 'LangChain', 'OpenAI APIs'],
      github: null,
      demo: 'https://determinedeng.com/',
      details: {
        overview: 'DEtermined is a comprehensive data engineering education platform designed to help engineers master modern data infrastructure and practices. Through hands-on projects, in-depth articles, and practical guides, the platform covers everything from foundational concepts to advanced distributed systems architecture. With a focus on real-world applications, DEtermined bridges the gap between theory and practice, empowering data engineers to build production-grade systems with confidence.',
        features: [
          'End-to-end distributed data pipelines using PySpark, SQL, and Delta Lake',
          'ML-enhanced content recommendation system using LangChain and OpenAI APIs',
          '5x performance improvement through advanced tuning and optimization techniques',
          'Interactive learning modules with hands-on projects and code examples',
          'Production-grade system design patterns and best practices',
          'Community-driven platform with 200+ active subscribers and 30K+ monthly impressions'
        ],
        newsletters: [
          {
            name: 'DE Projects',
            description: 'Hands-on data engineering projects covering real-world use cases, from batch processing to real-time streaming',
            link: 'https://deprojects.substack.com/?utm_campaign=profile_chips'
          },
          {
            name: 'DE Prep',
            description: 'Interview preparation resources, system design guides, and technical deep-dives for aspiring data engineers',
            link: 'https://deprep.substack.com/?utm_campaign=profile_chips'
          }
        ]
      }
    },
  ];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-accent">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll group bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-pointer flex flex-col"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-3 flex-shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors"
                      aria-label="GitHub repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.smithery && (
                    <a
                      href={project.smithery}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      aria-label="Smithery"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="https://smithery.ai/logo.svg"
                        alt="Smithery"
                        className="w-5 h-5"
                      />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors"
                      aria-label="Demo video"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.demo.includes('youtube.com') || project.demo.includes('youtu.be') ? (
                        <Youtube size={20} />
                      ) : project.demo.includes('substack.com') ? (
                        <SubstackIcon size={20} />
                      ) : (
                        <ExternalLink size={20} />
                      )}
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-900/50 text-accent border border-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Modal */}
    {selectedProject && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm"
        onClick={() => setSelectedProject(null)}
      >
        <div
          className="bg-gray-900 border border-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm p-6 flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-100 mb-2">
                {selectedProject.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gray-800 text-accent border border-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="text-gray-400 hover:text-accent transition-colors ml-4"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Links */}
            <div className="flex gap-4 mb-8">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-accent border border-gray-700 rounded transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              )}
              {selectedProject.smithery && (
                <a
                  href={selectedProject.smithery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-accent border border-gray-700 rounded transition-colors"
                >
                  <img src="https://smithery.ai/logo.svg" alt="Smithery" className="w-4 h-4" />
                  <span>Smithery</span>
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-accent border border-gray-700 rounded transition-colors"
                >
                  {selectedProject.demo.includes('youtube.com') || selectedProject.demo.includes('youtu.be') ? (
                    <>
                      <Youtube size={18} />
                      <span>Demo Video</span>
                    </>
                  ) : selectedProject.demo.includes('substack.com') ? (
                    <>
                      <SubstackIcon size={18} />
                      <span>Substack Article</span>
                    </>
                  ) : selectedProject.demo.includes('determinedeng.com') ? (
                    <>
                      <ExternalLink size={18} />
                      <span>Website</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </>
                  )}
                </a>
              )}
            </div>

            {/* Overview */}
            {selectedProject.details?.overview && (
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-accent mb-4">Overview</h4>
                <p className="text-gray-300 leading-relaxed">{selectedProject.details.overview}</p>
              </div>
            )}

            {/* Features */}
            {selectedProject.details?.features && (
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-accent mb-4">Features</h4>
                <ul className="space-y-2">
                  {selectedProject.details.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-accent mr-2 mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Newsletters */}
            {selectedProject.details?.newsletters && (
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-accent mb-4">Newsletters</h4>
                <div className="space-y-4">
                  {selectedProject.details.newsletters.map((newsletter, idx) => (
                    <a
                      key={idx}
                      href={newsletter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-accent transition-colors group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <SubstackIcon size={20} className="text-accent" />
                        <h5 className="text-lg font-semibold text-gray-100 group-hover:text-accent transition-colors">
                          {newsletter.name}
                        </h5>
                      </div>
                      <p className="text-sm text-gray-400">{newsletter.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            {selectedProject.details?.tools && (
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-accent mb-4">Available Tools</h4>
                <div className="space-y-4">
                  {selectedProject.details.tools.map((tool, idx) => (
                    <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <h5 className="text-lg font-semibold text-gray-100 mb-1">{tool.name}</h5>
                      <p className="text-sm text-gray-400 mb-2">{tool.purpose}</p>
                      {tool.parameters && (
                        <ul className="space-y-1 mt-2">
                          {tool.parameters.map((param, pidx) => (
                            <li key={pidx} className="text-xs text-gray-300 ml-4">
                              • {param}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture */}
            {selectedProject.details?.architecture && (
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-accent mb-4">Architecture</h4>
                <p className="text-gray-300 mb-4">{selectedProject.details.architecture.description}</p>
                {selectedProject.details.architecture.image && (
                  <div className="mb-4 border border-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.details.architecture.image}
                      alt="System Architecture"
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <ul className="space-y-2">
                  {selectedProject.details.architecture.components.map((component, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-accent mr-2 mt-1">▹</span>
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Workflow */}
            {selectedProject.details?.workflow && (
              <div>
                <h4 className="text-2xl font-semibold text-accent mb-4">Workflow Example</h4>
                <ol className="space-y-2">
                  {selectedProject.details.workflow.map((step, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-accent mr-3 font-semibold">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Projects;
