import { useState, useRef, useEffect } from 'react';
import { ArrowDown, Send } from 'lucide-react';

// Railway backend URL
const API_URL = 'https://web-production-1500.up.railway.app';

const Chatbot = () => {
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Animated typing placeholder effect
  const phrases = [
    "background...",
    "experience with Agentic AI...",
    "technical skills...",
    "projects...",
    "experience at Nidhi AI...",
    "educational background..."
  ];

  useEffect(() => {
    if (hasStartedChat) return; // Only run on landing page

    const baseText = "Ask me about my ";
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = 80; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const pauseTime = 3000; // Pause before starting to delete

    let timer;

    if (!isDeleting && placeholderText === baseText + currentPhrase) {
      // Pause at the end of the phrase
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && placeholderText === baseText) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else if (isDeleting) {
      // Delete character
      timer = setTimeout(() => {
        setPlaceholderText(placeholderText.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Type character
      const targetText = baseText + currentPhrase;
      if (placeholderText.length < targetText.length) {
        timer = setTimeout(() => {
          setPlaceholderText(targetText.slice(0, placeholderText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, phraseIndex, hasStartedChat]);

  // Initialize placeholder text
  useEffect(() => {
    if (!hasStartedChat && placeholderText === '') {
      setPlaceholderText('Ask me about my ');
    }
  }, [hasStartedChat, placeholderText]);

  const scrollToPortfolio = () => {
    // Close chat mode and scroll to portfolio
    setHasStartedChat(false);
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio-content');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Start chat mode on first message
    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    const userMessage = inputValue.trim();
    setInputValue('');

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: sessionId // Include session ID for conversation continuity
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Store session ID for conversation continuity
      if (data.session_id && !sessionId) {
        setSessionId(data.session_id);
      }

      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: data.message,
        intent: data.intent,
        cached: data.cached
      }]);
    } catch (error) {
      console.error('Error:', error);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          type: 'bot',
          text: 'Sorry, I encountered an error connecting to the server. Please try again later.'
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative min-h-screen z-50 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-cyan-950/20 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-purple-900/20 via-blue-900/20 to-gray-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {!hasStartedChat ? (
        // Landing Screen - Elegant Gradient Style
        <div className="relative h-screen flex flex-col items-center justify-center px-4">
          {/* Anirudh Logo */}
          <div className="mb-8 animate-fadeIn">
            <div className="text-5xl font-bold text-cyan-400 drop-shadow-2xl">
            &lt;Anirudh /&gt;
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center animate-fadeIn drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
            Talk to me!
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg md:text-xl mb-12 text-center max-w-2xl animate-fadeIn drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Or scroll down for yet another boring portfolio website
          </p>

          {/* Search Bar with Animated Placeholder */}
          <div className="w-full max-w-3xl mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholderText}
                  className="w-full bg-gray-900/90 backdrop-blur-sm text-white px-5 py-3 pr-12 rounded-xl border-2 border-gray-800/50 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all text-base placeholder-gray-400 shadow-2xl"
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-2 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Down Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fadeIn animate-bounce" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToPortfolio}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              {/* <p className="text-sm drop-shadow-lg">Or scroll down for yet another boring portfolio website</p> */}
              <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform drop-shadow-lg" />
            </button>
          </div>
        </div>
      ) : (
        // Chat Mode - Full Screen Conversation
        <div className="fixed inset-0 h-screen flex flex-col bg-gray-950 z-[60]">
          {/* Header */}
          <div className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 px-6 py-4 flex justify-between items-center">
            <button
              onClick={scrollToPortfolio}
              className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              &lt;Anirudh /&gt;
            </button>
            <button
              onClick={scrollToPortfolio}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
            >
              View Portfolio <ArrowDown size={16} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slideUp`}
                >
                  <div
                    className={`max-w-[80%] md:max-w-[70%] p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                        : 'bg-gray-900 text-gray-100 border border-gray-800'
                    }`}
                  >
                    <p className="text-base leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-slideUp">
                  <div className="bg-gray-900 text-gray-100 border border-gray-800 p-4 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Box - Sticky at Bottom */}
          <div className="bg-gray-900/50 backdrop-blur-lg border-t border-gray-800 p-3 md:p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a follow-up question..."
                  className="flex-1 bg-gray-900 text-white px-4 py-2.5 rounded-xl border-2 border-gray-800 focus:outline-none focus:border-cyan-500 transition-all placeholder-gray-500 text-sm"
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2.5 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
