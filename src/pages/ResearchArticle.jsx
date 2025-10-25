import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ResearchArticle = () => {
  const { paperId } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const paperTitles = {
    'agentic-context-engineering': 'Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models',
    'dragon-hatchling': 'The Dragon Hatchling: The Missing Link Between The Transformer And Models Of The Brain',
  };

  const title = paperTitles[paperId] || 'Research Paper';

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-accent hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        {/* Article Header */}
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-8">
            {title}
          </h1>

          {/* Paper Reference */}
          {paperId === 'agentic-context-engineering' && (
            <p className="text-gray-400 italic mb-6">
              Based on the research paper:{' '}
              <a
                href="https://arxiv.org/pdf/2510.04618"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-cyan-300 underline transition-colors"
              >
                Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models
              </a>
              {' '}by researchers at Stanford University, SambaNova Systems, and UC Berkeley (October 2025)
            </p>
          )}
          {paperId === 'dragon-hatchling' && (
            <p className="text-gray-400 italic mb-6">
              Based on the research paper:{' '}
              <a
                href="https://arxiv.org/pdf/2509.26507"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-cyan-300 underline transition-colors"
              >
                The Dragon Hatchling: Bridging AI and the Human Brain
              </a>
            </p>
          )}

          {/* Tags */}
          {paperId === 'agentic-context-engineering' && (
            <div className="mb-12">
              <p className="text-gray-400 mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Large Language Models',
                  'Context Engineering',
                  'AI Agents',
                  'Self Improving AI',
                  'NLP',
                  'Deep Learning'
                ].map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-800/40 border border-gray-700 text-accent text-sm rounded-md hover:border-accent hover:bg-gray-800/60 transition-all duration-200 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {paperId === 'dragon-hatchling' && (
            <div className="mb-12">
              <p className="text-gray-400 mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Neuroscience',
                  'Transformers',
                  'Brain Models',
                  'Hebbian Learning',
                  'Linear Attention',
                  'Interpretability',
                  'Deep Learning'
                ].map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-800/40 border border-gray-700 text-accent text-sm rounded-md hover:border-accent hover:bg-gray-800/60 transition-all duration-200 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Article Content */}
          {paperId === 'agentic-context-engineering' && (
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Introduction</h2>
            <p className="mb-4">
              Imagine teaching someone a complex skill. You could rewire their brain each time they need to learn something new, or you could give them a living notebook that grows smarter with every experience. The second approach is exactly what researchers from Stanford University, SambaNova Systems, and UC Berkeley have achieved with their groundbreaking framework called Agentic Context Engineering (ACE).
            </p>
            <p className="mb-6">
              Released in October 2025, this research introduces a fundamentally different way to make AI systems smarter: instead of retraining the entire model (an expensive and time-consuming process), ACE teaches AI to build and maintain its own evolving "playbook" of strategies and lessons learned from experience.
            </p>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">The Problem: How AI Systems Currently Learn</h2>
            <p className="mb-4">
              Traditional AI improvement follows a familiar but costly pattern. When you want an AI model to get better at something, you typically fine-tune it by adjusting its internal parameters—essentially rewiring its neural connections. This is like renovating a house every time you want to change the furniture arrangement.
            </p>
            <p className="mb-4">This approach has two major drawbacks:</p>
            <p className="mb-3">
              <strong className="text-accent">It's expensive and slow.</strong> Fine-tuning requires significant computational resources and time. Every update means retraining the model, which can take days or weeks and cost thousands of dollars.
            </p>
            <p className="mb-6">
              <strong className="text-accent">It's inflexible.</strong> Once fine-tuned for one task, the model may lose proficiency in others. It's difficult to continuously adapt to new situations without starting the retraining process all over again.
            </p>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">The ACE Solution: Context as a Living Document</h2>
            <p className="mb-4">
              ACE takes a radically different approach. Instead of changing the AI's internal wiring, it focuses on evolving the context—the instructions, memories, and strategies that guide the AI's reasoning. Think of it as giving the AI a dynamic instruction manual that updates itself based on experience.
            </p>
            <p className="mb-6">
              The breakthrough insight is treating context as code—a manipulable, evolving data structure rather than static text. Just as programmers modify code to improve software without rebuilding the entire application, ACE modifies context to improve AI behavior without retraining the entire model. This enables self-improvement within the model's existing long context window, leveraging a capability that modern LLMs already possess.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Real-World Analogy</h3>
            <p className="mb-4">Consider a restaurant kitchen. Traditional fine-tuning is like retraining the chef's muscle memory every time you add a new dish to the menu. ACE is like maintaining a living recipe book where:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>New successful techniques get added as they're discovered</li>
              <li>Failed approaches are noted and avoided</li>
              <li>Similar recipes are grouped together for easy reference</li>
              <li>Outdated methods are removed to keep the book manageable</li>
            </ul>
            <p className="mb-6">
              The chef (the AI model) stays the same, but the recipe book (the context) becomes increasingly sophisticated. This playbook doesn't just store information—it actively restructures itself, creating a hierarchical organization where the most relevant strategies are easily accessible while historical lessons remain archived for reference.
            </p>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">How ACE Works: Three Roles, One Team</h2>
            <p className="mb-6">
              ACE operates through a clever three-part system, each with a specific job:
            </p>

            <div className="my-8 bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <img
                src="/research/framework.png"
                alt="ACE Framework Architecture"
                className="w-full rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center mt-3 italic">
                The ACE framework showing the iterative workflow between Generator, Reflector, and Curator
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">1. The Generator: The Doer</h3>
            <p className="mb-6">
              This component actually performs tasks and executes actions. As it works, it creates detailed logs of what it tried, what worked, and what didn't. It's like a student attempting homework problems and showing their work.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">2. The Reflector: The Analyzer</h3>
            <p className="mb-4">
              The Reflector reviews the Generator's execution logs and identifies patterns. Did certain approaches consistently work? Where did things go wrong? It extracts meaningful lessons from the experience. Think of it as a coach reviewing game footage to identify what strategies were effective.
            </p>
            <p className="mb-6">
              Crucially, the Reflector maintains structured reflection logs—chronologically ordered records of successes, failures, and learned strategies. These logs become the foundation for continuous optimization, allowing the system to identify patterns across multiple tasks without requiring external supervision or human feedback.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">3. The Curator: The Librarian</h3>
            <p className="mb-4">
              The Curator takes the lessons from the Reflector and decides how to update the playbook. Should this new insight be added? Does it replace something outdated? Should similar strategies be merged? The Curator keeps the playbook organized, relevant, and efficient.
            </p>
            <p className="mb-6">
              This is where ACE's unique approach truly shines. Rather than rewriting the entire context or creating summaries, the Curator makes surgical delta updates—modifying only the specific portions that need to change. It's like using track changes in a document rather than retyping everything from scratch. This modular structure transforms the LLM into a self-editing system with persistent knowledge retention.
            </p>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Key Innovations: Solving Previous Problems</h2>
            <p className="mb-6">
              Earlier attempts at dynamic context adaptation faced two critical issues that ACE specifically addresses:
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Brevity Bias</h3>
            <p className="mb-4">
              Previous systems would condense context too aggressively, creating summaries so short they lost crucial details. It's like trying to summarize a medical textbook into a pamphlet—you lose the nuance that makes the knowledge useful.
            </p>
            <p className="mb-6">
              <strong className="text-accent">ACE's Solution:</strong> Instead of summarizing, ACE uses incremental delta updates. Rather than rewriting the entire playbook, it makes small, targeted additions and edits. This preserves rich domain knowledge while keeping things manageable. The system only modifies relevant portions of the context—adding new insights, archiving redundant data, and maintaining semantic coherence throughout.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Context Collapse</h3>
            <p className="mb-4">
              When systems repeatedly rewrite their prompts, important information gradually degrades or disappears—like making a photocopy of a photocopy. Each iteration loses a bit of detail.
            </p>
            <p className="mb-4">
              <strong className="text-accent">ACE's Solution:</strong> The grow-and-refine mechanism carefully balances adding new experiences with pruning redundant or outdated ones. The framework alternates between two phases:
            </p>
            <p className="mb-3">
              <strong className="text-cyan-300">Growth Phase:</strong> Captures new reasoning patterns from live task execution, expanding the playbook with fresh insights.
            </p>
            <p className="mb-4">
              <strong className="text-cyan-300">Refinement Phase:</strong> Compresses or removes outdated information, preventing context bloat while preserving essential knowledge.
            </p>
            <p className="mb-6">
              This balanced approach ensures the playbook expands with valuable insights while staying operationally efficient. Information isn't lost—it's reorganized into a hierarchical structure where critical strategies remain active while historical lessons are preserved but deprioritized.
            </p>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Real-World Impact: The Numbers</h2>
            <p className="mb-6">
              The research team tested ACE across multiple challenging benchmarks, comparing it against several baseline approaches including Dynamic Cheatsheet, MIPROv2, and traditional prompting methods:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3 ml-4">
              <li><strong className="text-accent">Agentic Reasoning Tasks:</strong> ACE showed a 10.6% improvement over baseline systems. These are complex multi-step problems where AI needs to plan, reason, and adapt.</li>
              <li><strong className="text-accent">Finance Reasoning:</strong> An 8.6% boost in accuracy on financial analysis tasks, which require both domain knowledge and logical reasoning.</li>
              <li><strong className="text-accent">Application Tasks:</strong> ACE achieved a +9% improvement specifically over Dynamic Cheatsheet on application-based reasoning.</li>
              <li><strong className="text-accent">AppWorld Benchmark:</strong> Perhaps most impressively, ACE combined with the ReAct framework achieved 59.4% accuracy on the AppWorld leaderboard (September 2025), nearly matching IBM's commercial CUGA system at 60.3%—despite using a smaller, open-source model.</li>
            </ul>
            <p className="mb-6">
              <strong className="text-accent">Efficiency Gains:</strong> ACE reduced latency (response time) by up to 86.9% compared to traditional context adaptation methods. Making small delta updates is dramatically faster than rewriting entire prompts. By modifying only relevant portions rather than re-prompting with entire histories, ACE achieves both computational efficiency and information preservation. Compared specifically to Dynamic Cheatsheet, ACE reduces token costs by 83.6%, making it far more scalable for long-context applications.
            </p>

            <div className="my-8 bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <img
                src="/research/adaptation_trends.png"
                alt="ACE Adaptation Trends"
                className="w-full rounded-lg"
              />
              <p className="text-sm text-gray-400 text-center mt-3 italic">
                Token usage vs. accuracy comparison: ACE achieves high accuracy (57.1) with far fewer tokens (122) compared to baseline approaches
              </p>
            </div>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Why This Matters: A Paradigm Shift</h2>
            <p className="mb-6">
              ACE represents more than just a performance improvement—it's a fundamental rethinking of how AI systems can improve themselves.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">A New Paradigm: Context as a Scalable Alternative to Fine-Tuning</h3>
            <p className="mb-6">
              ACE provides a genuine alternative to traditional fine-tuning, demonstrating that sustained improvement doesn't require modifying model weights. By allowing models to improve within their long context windows, ACE enables continual enhancement based on usage patterns and feedback without expensive retraining cycles. This paradigm can replace or complement fine-tuning in scalable AI systems, offering a path forward that leverages existing model capabilities rather than constantly rebuilding them.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Evolution Beyond Dynamic Cheatsheet</h3>
            <p className="mb-6">
              To understand ACE's significance, it's helpful to compare it to Dynamic Cheatsheet (DC), an earlier approach to test-time learning that pioneered the idea of persistent, evolving memory during inference.
            </p>

            <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3 mt-4">What Dynamic Cheatsheet Introduced:</h4>
            <p className="mb-6">
              Dynamic Cheatsheet was groundbreaking in its core concept: provide AI with a persistent memory that stores reusable problem-solving snippets, strategies, and code during inference. This enabled test-time learning—the ability to accumulate knowledge without fine-tuning. DC showed substantial improvements, including doubling accuracy on some math tasks and achieving 8-9% gains on knowledge tasks.
            </p>

            <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3 mt-4">Where ACE Advances the Concept:</h4>
            <p className="mb-4">
              While building on DC's foundation, ACE addresses several key limitations through fundamentally different approaches to memory curation:
            </p>

            <div className="mb-6 space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-cyan-300 mb-2">1. Modular Specialization vs. Monolithic Updates</h5>
                <p className="mb-3">
                  DC uses a single memory curation step that handles everything—storing snippets, filtering information, and synthesizing knowledge. It's like having one person responsible for taking notes, organizing them, and deciding what to keep.
                </p>
                <p>
                  ACE separates these responsibilities into specialized roles. The Generator creates experiences, the Reflector analyzes them, and the Curator organizes the results. This division of labor allows each component to excel at its specific task, enabling more nuanced and sophisticated context adaptation.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-cyan-300 mb-2">2. Surgical Edits vs. Full Rewrites</h5>
                <p className="mb-3">
                  When DC updates its memory, it typically appends new items or replaces summaries—essentially rewriting sections of its memory. While it filters to avoid bloat, this approach risks either verbosity (keeping too much) or knowledge loss (discarding too much).
                </p>
                <p>
                  ACE performs incremental delta updates—localized, surgical edits to specific parts of the context. Instead of appending entire new sections, it adds discrete, itemized bullets with metadata. Think of it as using "track changes" in a document versus retyping entire paragraphs. This minimizes the computational cost of updates while protecting against context collapse.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-cyan-300 mb-2">3. Rich Metadata vs. Simple Snippets</h5>
                <p className="mb-3">
                  DC focuses on storing compact, reusable snippets designed for maximum transferability—short, practical pieces of knowledge.
                </p>
                <p className="mb-2">
                  ACE structures its memory as itemized bullets with rich metadata, including unique identifiers, usefulness counters, and relevance scores. This fine-grained organization enables:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Selective retrieval (finding exactly what's needed)</li>
                  <li>Targeted pruning (removing truly redundant items)</li>
                  <li>Intelligent merging (combining similar insights)</li>
                  <li>Usage tracking (knowing which strategies actually work)</li>
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-cyan-300 mb-2">4. Balanced Growth vs. Simple Filtering</h5>
                <p className="mb-3">
                  DC filters and synthesizes to prevent memory from growing too large—a reactive approach to managing context size.
                </p>
                <p className="mb-2">
                  ACE proactively balances two complementary phases:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mb-3">
                  <li><strong>Growth:</strong> Deliberately appending new lessons and expanding the knowledge base</li>
                  <li><strong>Refinement:</strong> Systematically pruning redundancy while preserving essential knowledge</li>
                </ul>
                <p>
                  This explicit grow-and-refine cycle enables scalable context management over long interaction histories and supports multi-epoch updates where the system can revisit and reorganize its entire playbook.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-cyan-300 mb-2">5. Dramatic Efficiency Improvements</h5>
                <p className="mb-2">The cumulative effect of these architectural differences is striking:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Adaptation latency reduced by up to 91.5% compared to DC</li>
                  <li>Token costs reduced by 83.6% through efficient memory merging</li>
                  <li>Scalability for long-context applications without bulky prompt regenerations</li>
                </ul>
              </div>
            </div>

            <p className="mb-4">
              <strong className="text-accent">Structural Sophistication:</strong> DC operates with a single memory module that primarily appends snippets. ACE employs a three-agent modular system (Generator, Reflector, Curator) that provides hierarchical organization and deeper introspection into what's being learned.
            </p>
            <p className="mb-4">
              <strong className="text-accent">Context Management:</strong> DC's memory can balloon over time, leading to verbosity and potential context loss. ACE's incremental delta updates—carefully adding, merging, and pruning context items—prevent both brevity bias and context collapse. This structured approach enables multi-epoch and batched updating that DC couldn't achieve.
            </p>
            <p className="mb-4">
              <strong className="text-accent">Efficiency at Scale:</strong> While DC is lightweight, ACE dramatically improves upon its efficiency. The delta update mechanism reduces token costs by 83.6% compared to DC, making ACE far more practical for long-context applications and extended learning sessions.
            </p>
            <p className="mb-4">
              <strong className="text-accent">Self-Supervised Adaptation:</strong> ACE's Reflector and Curator modules enable genuine self-supervised feedback loops. The system can introspect on its own performance and adjust strategies without requiring labeled data or human intervention—a more sophisticated form of autonomy than DC's experience accumulation.
            </p>
            <p className="mb-6">
              <strong className="text-accent">Performance and Cost:</strong> ACE not only outperforms DC by +9% on application tasks but does so while significantly reducing both adaptation latency and computational rollout costs.
            </p>
            <p className="mb-6 italic text-gray-400">
              Think of it this way: If Dynamic Cheatsheet gave AI a notebook to jot down useful tips, ACE gives it a self-organizing knowledge management system that actively curates, cross-references, and optimizes its own documentation.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">From Static to Dynamic</h3>
            <p className="mb-6">
              <strong>Traditional AI:</strong> Fixed instructions, static knowledge → requires retraining to improve.<br />
              <strong className="text-accent">ACE-powered AI:</strong> Living playbook that grows with experience → continuous self-improvement.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">From Expensive to Accessible</h3>
            <p className="mb-6">
              Fine-tuning costs thousands of dollars and requires specialized infrastructure. ACE works with existing models, making sophisticated AI improvement accessible to smaller organizations and individual developers.
            </p>
            <hr className="border-gray-700 my-8" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">From One-Time to Continuous</h3>
            <p className="mb-6">
              Fine-tuning is a discrete event—you train, deploy, and eventually retrain. ACE enables continuous learning, where the AI gets better every day through normal operation.
            </p>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Broader Implications: Self-Evolving AI</h2>
            <p className="mb-4">
              By treating context as a data structure that can grow and evolve, ACE opens the door to truly self-improving AI systems. These agents can:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
              <li>Adapt to new domains without manual intervention</li>
              <li>Learn from mistakes in real-time</li>
              <li>Accumulate institutional knowledge over time</li>
              <li>Customize their behavior to specific use cases automatically</li>
            </ul>
            <p className="mb-6">
              This has profound implications for enterprise AI deployments, where systems need to continuously adapt to changing business needs, new regulations, and evolving user requirements.
            </p>
            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Looking Forward</h2>
            <p className="mb-4">
              Agentic Context Engineering marks a pivotal moment in AI development. Instead of viewing intelligence as something locked inside model parameters, ACE demonstrates that much of an AI's capability can live in how it organizes and applies knowledge through context.
            </p>
            <p className="mb-4">
              As language models continue to support longer contexts (many now handle hundreds of thousands of tokens), the potential for context-based learning grows exponentially. ACE provides a blueprint for leveraging this capability—not just storing more information, but actively curating and evolving it.
            </p>
            <p className="mb-4">
              The future of AI may not be about building ever-larger models that need constant retraining. Instead, it may be about creating systems that, like humans, learn continuously from experience, building increasingly sophisticated mental models without changing their fundamental architecture.
            </p>
            <p className="mb-8 text-lg italic text-cyan-300">
              In this vision, the smartest AI won't be the one with the most parameters—it'll be the one with the wisest playbook.
            </p>

            <hr className="border-gray-700 my-12" />

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">Follow-ups</h2>

              <div className="space-y-4">
                {/* FAQ Item */}
                <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/30">
                  <button
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
                  >
                    <span className="text-lg font-semibold text-gray-200 pr-4">
                      Which components of ACE improve curation efficiency over DC?
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === 0 ? (
                        <Minus className="w-5 h-5 text-accent" />
                      ) : (
                        <Plus className="w-5 h-5 text-accent" />
                      )}
                    </div>
                  </button>

                  {openFaq === 0 && (
                    <div className="px-6 py-4 border-t border-gray-700 bg-gray-900/30 animate-fadeIn">
                      <p className="text-gray-300 mb-4">
                        The components of Agentic Context Engineering (ACE) that improve curation efficiency over Dynamic Cheatsheet (DC) are primarily:
                      </p>

                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">The Curator Module:</h4>
                          <p>
                            ACE distinctly separates curation as a specialized module (Curator), which incrementally updates the context by merging and pruning knowledge items. This separation from generation and reflection enables targeted, efficient memory management rather than monolithic updates as in DC.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">Incremental Delta Updates:</h4>
                          <p>
                            Instead of appending or rewriting large memory snippets wholesale, ACE uses fine-grained delta updates. These localized edits add or remove only the necessary knowledge units, significantly reducing token usage and prompt regeneration latency compared to DC's appending approach.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">Structured, Metadata-Rich Bullets:</h4>
                          <p>
                            ACE organizes context into itemized bullets with metadata such as usefulness counters and identifiers. This structured memory allows efficient selective recall and pruning strategies that prevent bloat and enable scalable long-term memory, unlike DC's less granular snippets.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">Grow-and-Refine Mechanism:</h4>
                          <p>
                            ACE dynamically balances memory growth with periodic refinement stages to prune or compress redundant or outdated knowledge, improving efficiency and context coherence over time. DC lacks such explicit balancing mechanisms.
                          </p>
                        </div>

                        <p className="mt-4 font-medium text-accent">
                          Together, these components reduce adaptation latency up to 91.5% and token costs by over 83% compared to DC, enabling ACE to sustain scalable, self-improving contexts in large language models with far greater efficiency.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* FAQ Item 2 */}
                <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/30">
                  <button
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
                  >
                    <span className="text-lg font-semibold text-gray-200 pr-4">
                      What are ACE's evaluation metrics and their significance?
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === 1 ? (
                        <Minus className="w-5 h-5 text-accent" />
                      ) : (
                        <Plus className="w-5 h-5 text-accent" />
                      )}
                    </div>
                  </button>

                  {openFaq === 1 && (
                    <div className="px-6 py-4 border-t border-gray-700 bg-gray-900/30 animate-fadeIn">
                      <p className="text-gray-300 mb-4">
                        The evaluation metrics used in Agentic Context Engineering (ACE) and their significance are:
                      </p>

                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">Reasoning Accuracy:</h4>
                          <p>
                            Percentage improvement on agentic reasoning benchmarks, measuring how well the model solves complex reasoning and decision-making tasks. ACE achieved a notable +10.6% gain, indicating improved problem-solving abilities.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">Domain-Specific Task Accuracy:</h4>
                          <p>
                            Improvement in specialized areas such as financial reasoning (+8.6% in ACE) to assess the model's ability to adapt knowledge to specific fields effectively.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">Context Adaptation Latency:</h4>
                          <p>
                            Measures the time taken to update the context during model execution. ACE reduces this latency by up to 91.5% compared to baselines, demonstrating more efficient real-time self-improvement.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">Token Cost of Adaptation:</h4>
                          <p>
                            Tracks the number of input tokens required for updating the evolving context. ACE reduces token costs by 83.6%, highlighting cost efficiency in handling long context windows.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-cyan-300 mb-2">AppWorld Benchmark Scores:</h4>
                          <p>
                            ACE combined with ReAct agents scored 59.4% accuracy, nearly matching state-of-the-art commercial systems, indicating competitive real-world performance.
                          </p>
                        </div>

                        <p className="mt-4 font-medium text-accent">
                          These metrics collectively capture ACE's strengths in accuracy, efficiency, scalability, and practical utility for self-improving language models without fine-tuning overhead.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Dragon Hatchling Content */}
          {paperId === 'dragon-hatchling' && (
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Where Memory Lives: The Fundamental Problem</h2>
              <p className="mb-4">
                For decades, scientists have wrestled with a puzzle: AI systems like ChatGPT are powerful, but they work completely differently than the brain. The critical difference isn't performance but something more fundamental: where and how memory is stored.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">In your brain:</h3>
              <p className="mb-4">
                Memory lives on specific connections (synapses) between specific neurons. When you learn "Jake loves pizza," the synapse connecting the "Jake" neuron and "pizza preference" neuron strengthens through Hebbian learning (Hebb, 1949): "neurons that fire together, wire together."
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">In Transformers (GPT-2):</h3>
              <p className="mb-4">
                Memory lives in a centralized "KV-cache" (Vaswani et al., 2017). When the model processes "Jake loves pizza," this information enters the cache, but you cannot point to where the Jake-pizza connection is stored. Memory is diffuse across dense tensors with no spatial meaning.
              </p>

              <p className="mb-6">
                This has profound implications: we can't explain how the brain does language at the neuron level, can't interpret what AI has learned, and can't ensure AI generalizes like humans.
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Enter the Dragon Hatchling</h2>
              <p className="mb-4">
                Researchers from Pathway created BDH (Brain Dragon Hatchling), achieving something unprecedented: memory stored on graph edges like brain synapses, while matching Transformer performance (Kosowski et al., 2025).
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Three fundamental innovations:</h3>

              <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3 mt-4">1. State Localization on Graph Edges</h4>
              <p className="mb-4">
                Memory lives at position [i,j] in the state matrix, representing the synapse between neurons i and j. The researchers found "monosemantic synapses" that consistently activate for specific concepts like currencies or countries (Kosowski et al., 2025, Section 6.3).
              </p>

              <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3 mt-4">2. Linear Attention in Extreme High Dimension</h4>
              <p className="mb-4">
                Instead of softmax (exponential function) in d=512 dimensions, BDH uses simple dot products in n=32,768 dimensions. Key insight: any similarity function can be approximated by linear operations in sufficiently high dimension (Kosowski et al., 2025, Section 6.1). More biologically plausible since neurons don't compute exponentials.
              </p>

              <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3 mt-4">3. Dual Interpretation</h4>
              <p className="mb-6">
                BDH-GPU implements as standard PyTorch tensors (GPU trainable). But the same model describes as local graph dynamics with Hebbian learning. These are mathematically equivalent (Kosowski et al., 2025). No other architecture achieves this duality.
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">How Does BDH Work? Understanding State Localization</h2>
              <p className="mb-4">
                Let's break this down with a concrete example of what makes BDH different.
              </p>
              <p className="mb-4">
                Imagine you're processing the sentence: "The dollar has appreciated with respect to the euro."
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">In a standard Transformer:</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>The model processes each token and computes attention</li>
                <li>Key-value pairs go into the KV-cache: a centralized data structure</li>
                <li>The information "dollar, euro, currency, appreciation" is now somewhere in this cache</li>
                <li>But WHERE? You can't point to it. The memory is diffuse across the entire tensor</li>
                <li>Later, if you ask about currency, the model queries this cache with softmax attention</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">In BDH:</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>The model processes "dollar" and neuron #4,283 activates (positive sparse activation)</li>
                <li>It processes "euro" and neuron #7,891 activates</li>
                <li>These neurons are connected through the state matrix ρ</li>
                <li>The synapse at position σ[4283, 7891] strengthens using a Hebbian learning rule: when neuron i and neuron j fire together, their connection strengthens</li>
                <li>A "currency concept" neuron (#1,592) also activates</li>
                <li>Synapses connecting these neurons form a subgraph encoding "currency relationships"</li>
                <li>You can visualize this exact subgraph and watch it form in real-time</li>
              </ul>

              <p className="mb-4">
                According to the paper, "We confirm empirically that specific, individual synapses strengthen connection whenever BDH hears or reasons about a specific concept while processing language inputs" (Kosowski et al., 2025, Abstract).
              </p>

              <p className="mb-6">
                The key architectural difference: In BDH, memory is not separate from the graph. The graph IS the memory. The state during inference is represented by edge weights on the neuron-to-neuron connection graph, exactly like biological synaptic plasticity.
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">The Architecture: Two Equivalent Forms</h2>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">BDH (Pure Graph Model):</h3>
              <p className="mb-4">
                Describes the system as n neurons with excitatory and inhibitory circuits, integrate-and-fire thresholding, and Hebbian learning: σ(t+1) = σ(t) + y(i)·x(j) when neurons fire together (Kosowski et al., 2025, Section 2.2).
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">BDH-GPU (Tensor Implementation):</h3>
              <p className="mb-6">
                Only 3 parameter matrices (E, Dx, Dy) totaling (3+ε)nd parameters. Uses linear attention with state update:<br/>
                ρ(t) = ρ(t-1) + LN(Ey(t-1))x(t)^T<br/>
                Trainable with standard backpropagation, then the underlying graph structure can be extracted for analysis (Kosowski et al., 2025, Equation 8).
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Key Biological Mechanisms</h2>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">1. Sparse, Positive Activations</h3>
              <p className="mb-4">
                Only ~5% of neurons active at any moment, matching brain behavior. "The activation pattern of xt rapidly becomes sparse (only ρ ≈ 5% of entries are non-zero)" without explicit regularization (Kosowski et al., 2025, Section 4.1).
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">2. Monosemantic Synapses</h3>
              <p className="mb-4">
                Specific synapses respond to specific concepts. The researchers identified synapses that activate for "currencies" or "countries" across both English and French contexts (Kosowski et al., 2025, Section 6.3).
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">3. Scale-Free Network Structure</h3>
              <p className="mb-4">
                Power-law degree distributions and high modularity emerged naturally during training. Random baseline networks showed modularity dropping to zero, proving this is learned structure (Kosowski et al., 2025, Section 5.5).
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">4. Oscillatory Dynamics</h3>
              <p className="mb-6">
                Neurons indexed by RoPE frequency create a temporal hierarchy. Slow-acting neurons maintain longer context while fast neurons respond to immediate patterns (Kosowski et al., 2025, Figure 14).
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Performance Results</h2>
              <p className="mb-4">
                BDH-GPU matches GPT-2 from 10M to 1B parameters on translation tasks. At 1B parameters, both achieve ~0.36 validation loss. The paper demonstrates BDH follows the same scaling laws and "learns faster per data token" (Kosowski et al., 2025, Section 4.2).
              </p>
              <p className="mb-6">
                This proves brain-like architectures aren't a performance compromise. Linear attention in high dimension (n=32,768) matches softmax in low dimension (d=512). Memory on graph edges performs as well as centralized KV-cache.
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Why This Matters</h2>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">For Neuroscience:</h3>
              <p className="mb-4">
                First computational model that performs language at scale using biological mechanisms (Hebbian learning, spiking neurons). Makes testable predictions about synaptic strengthening patterns, scale-free connectivity, and sparse activation that can be verified experimentally.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">For AI Engineering:</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Interpretability: State localized at neuron pairs enables micro-interpretation (Kosowski et al., 2025, Section 8.1)</li>
                <li>Uniform scaling: Grows in one dimension (n), simplifying hyperparameter search</li>
                <li>No context limit: State size fixed at n×d regardless of sequence length</li>
                <li>Neuromorphic ready: Natural fit for brain-inspired hardware</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">For Theory:</h3>
              <p className="mb-6">
                Proves formal equivalence between Transformer attention and local graph dynamics through complexity reductions. Suggests intelligence emerges from simple local rules, not mysterious special mechanisms.
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Limitations</h2>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li><strong className="text-accent">Scale:</strong> Tested only to 1B parameters. Unknown if benefits persist at 100B+ scale.</li>
                <li><strong className="text-accent">Long-term memory:</strong> Explains reasoning at minutes timescale (hundreds of tokens) but not memory consolidation to permanent storage.</li>
                <li><strong className="text-accent">Biological verification:</strong> Makes testable predictions but direct neural recording evidence not yet available.</li>
                <li><strong className="text-accent">Task diversity:</strong> Tested primarily on language modeling and translation, not multi-modal or long-context tasks.</li>
              </ul>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Future Directions</h2>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li>Scale to 10B+ parameters to test if emergent properties persist</li>
                <li>Neuroscience collaboration to test predictions about synaptic patterns and scale-free structure</li>
                <li>Multi-modal extensions to vision and audio using same principles</li>
                <li>Neuromorphic implementation on chips like Intel Loihi for energy-efficient inference</li>
                <li>Lifelong learning with memory consolidation mechanisms</li>
                <li>Theoretical work on sample complexity bounds and emergent structure characterization</li>
              </ul>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Conclusion</h2>
              <p className="mb-4">
                BDH achieves three things simultaneously: matches GPT-2 performance (10M to 1B parameters), uses biologically plausible mechanisms, and proves formal equivalence between the two (Kosowski et al., 2025).
              </p>
              <p className="mb-4">
                The key innovation: Memory localized on graph edges instead of centralized cache, with linear attention in high dimension matching softmax attention in low dimension.
              </p>
              <p className="mb-4">
                The theoretical contribution: Transformer attention and biological synaptic plasticity are mathematically equivalent, connected through formal complexity reductions. As the authors state, these mechanisms "formally converge as closed-form local graph dynamics at neurons and synapses: the equations of reasoning" (Kosowski et al., 2025, Abstract).
              </p>
              <p className="mb-4">
                The implications: Intelligence might emerge from simple local rules (Hebbian learning, sparse coding, scale-free structure) rather than mysterious special mechanisms. BDH doesn't prove the brain works this way, but provides the strongest evidence yet that AI and biological intelligence might be two implementations of the same algorithms.
              </p>
              <p className="mb-4">
                The name "Dragon Hatchling" fits: this model is young, tested only to 1B parameters, with long-term memory and multi-modal extensions still to come. But it changes the question from "Can we build AI like the brain?" to "Can we prove AI already works like the brain?"
              </p>
              <p className="mb-6">
                For that question, BDH offers a compelling answer: Yes, at least in principle.
              </p>
              <hr className="border-gray-700 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Key Takeaways</h2>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Architectural Innovation:</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Memory on graph edges (synapses) not separate KV-cache</li>
                <li>Linear attention in n=32,768 dimensions vs softmax in d=512</li>
                <li>Only 3 parameter matrices totaling (3+ε)nd parameters</li>
                <li>Dual interpretation: tensor ops AND biological graph dynamics</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Biological Mechanisms:</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Hebbian learning with 5% sparse positive activations</li>
                <li>Monosemantic synapses track specific concepts</li>
                <li>Scale-free networks emerge naturally with power-law degrees</li>
                <li>Oscillatory dynamics for multi-scale temporal processing</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Results:</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Matches GPT-2 from 10M to 1B parameters</li>
                <li>Same scaling laws, learns faster per token</li>
                <li>High modularity and emergent structure confirmed</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">Theory:</h3>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li>Proves Transformer attention ≡ local graph dynamics</li>
                <li>Establishes formal link between AI and neuroscience</li>
                <li>Suggests intelligence from simple rules at scale</li>
              </ul>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default ResearchArticle;
