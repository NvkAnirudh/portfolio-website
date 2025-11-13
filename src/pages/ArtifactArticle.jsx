import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ArtifactArticle = () => {
  const { categoryId, artifactId } = useParams();
  const navigate = useNavigate();

  const articleData = {
    'understanding-llms': {
      'temperature-in-llm': {
        title: 'Decoding the Randomness: How Temperature, Top K, and Top P Control AI Creativity',
        date: 'Nov 13, 2025',
        content: (
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p className="mb-6">
              Have you ever asked an AI chatbot the same question twice only to receive two different answers? This variability, or randomness, in the response generation of Large Language Models (LLMs) is controlled by specialized sampling techniques used during inference. Understanding these techniques -- especially <strong className="text-accent">Temperature</strong>, <strong className="text-accent">Top K</strong>, and <strong className="text-accent">Top P</strong> -- is key to mastering AI output.
            </p>

            <p className="mb-6">
              When generating text, an LLM processes the input prompt and produces raw logits for the next token. The softmax function is applied to these logits to create a probability distribution for all possible next tokens, and the choice made from this distribution heavily influences the entire generation process.
            </p>

            <p className="mb-6">
              One simple, but often limiting, approach is <strong className="text-cyan-300">greedy sampling</strong>, which always selects the token with the highest probability, making the response highly deterministic. While the response is always the same given the same context, outputs tend to be "boring repetitive and not very creative," meaning greedy sampling is generally avoided for chat bots.
            </p>

            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Temperature Scaling: Adjusting the Certainty</h2>

            <p className="mb-6">
              A crucial factor influencing randomness is <strong className="text-accent">temperature scaling</strong>. Before applying the softmax function to the raw logits, we scale them by a positive temperature value.
            </p>

            <p className="mb-4">
              By default, the temperature value is one. Changing this value dramatically affects the final probability distribution:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-3 ml-4">
              <li>
                <strong className="text-accent">Low Temperature</strong> (less than one/close to zero): Makes responses more deterministic and less random. This causes the token with the highest logit to dominate the selection, leading to more confident and certain responses. Lower temperatures are better for factual writing.
              </li>
              <li>
                <strong className="text-accent">High Temperature</strong> (greater than one): Flattens the distribution. The probability of less likely tokens increases, while the probability of the most likely token decreases, making responses more random and creative. A slightly higher temperature is preferred for creative writing tasks, such as essays or stories.
              </li>
            </ul>

            <p className="mb-6">
              If the temperature is increased to an extreme value, the distribution becomes almost uniform, meaning random sampling could pick any token with equal chance. However, setting the temperature too high can degrade the quality, potentially causing the model to produce inaccurate or nonsensical outputs, leading most LLM providers to limit the usable range (often between zero and two).
            </p>

            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Filtering the Token Pool: Top K and Top P</h2>

            <p className="mb-6">
              Temperature scaling changes the probabilities, but <strong className="text-accent">Top K</strong> and <strong className="text-accent">Top P</strong> sampling limit which tokens are considered for selection.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">1. Top K Sampling</h3>
            <p className="mb-6">
              This method limits the candidate tokens by selecting only the top K tokens with the highest probability values. If a K value of five is chosen, the model only samples from the five most probable tokens.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4 mt-6">2. Top P (Nucleus) Sampling</h3>
            <p className="mb-6">
              This technique dynamically filters the tokens based on a cumulative probability threshold. Tokens are arranged in descending order of probability, and only those whose cumulative probability sums up to the specified Top P threshold (or slightly more) are included. For instance, setting Top P to 0.9 means collecting tokens until their combined probability reaches 90%. Setting Top P to zero is essentially the same as greedy sampling, considering only the highest probability token, while setting it to one includes the entire distribution.
            </p>

            <hr className="border-gray-700 my-8" />

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 mt-8">Bringing It All Together</h2>

            <p className="mb-6">
              These strategies are often used in combination, where logits are first scaled by the temperature value, and then Top K and Top P filtering are applied to further refine the set of available tokens before the next token is finally sampled. Together, <strong className="text-accent">Temperature</strong>, <strong className="text-accent">Top K</strong>, and <strong className="text-accent">Top P</strong> help strike a critical balance between making the generated text sound creative and natural or keeping it focused and safe.
            </p>

            <div className="mt-8 p-6 bg-gray-800/40 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">Key Takeaways</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent mr-2">▹</span>
                  <span><strong>Temperature</strong> controls the randomness of outputs by scaling probability distributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▹</span>
                  <span><strong>Low temperature</strong> = more deterministic, factual responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▹</span>
                  <span><strong>High temperature</strong> = more creative, diverse outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▹</span>
                  <span><strong>Top K</strong> limits selection to K most probable tokens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▹</span>
                  <span><strong>Top P</strong> dynamically selects tokens based on cumulative probability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▹</span>
                  <span>Combining these techniques allows fine-tuned control over AI creativity vs. consistency</span>
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    },
    'data-engineering': {},
  };

  const categoryTitles = {
    'understanding-llms': 'Understanding Large Language Models',
    'data-engineering': 'Data Engineering',
  };

  const article = articleData[categoryId]?.[artifactId];
  const categoryTitle = categoryTitles[categoryId];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">Article Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-accent transition-colors"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate(`/artifacts/${categoryId}`)}
          className="flex items-center gap-2 text-accent hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to {categoryTitle}</span>
        </button>

        {/* Article Header */}
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            {article.title}
          </h1>

          <p className="text-gray-400 mb-12">{article.date}</p>

          {/* Article Content */}
          {article.content}
        </article>
      </div>
    </div>
  );
};

export default ArtifactArticle;
