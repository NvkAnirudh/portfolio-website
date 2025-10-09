import { useEffect, useState } from 'react';

const HalloweenElements = () => {
  const [bats, setBats] = useState([]);
  const [ghosts, setGhosts] = useState([]);
  const [scaredGhosts, setScaredGhosts] = useState({});

  useEffect(() => {
    // Generate bats
    const batElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 60 + 10, // 10-70% from top
      animationDuration: Math.random() * 15 + 20, // 20-35 seconds
      delay: Math.random() * 10,
      size: Math.random() * 15 + 20, // 20-35px
    }));
    setBats(batElements);

    // Generate ghosts - 2 on left, 2 on right
    const ghostElements = [
      { id: 0, left: '5%', top: '20%', animationDuration: 4, delay: 0 },
      { id: 1, left: '10%', top: '60%', animationDuration: 5, delay: 1 },
      { id: 2, right: '5%', top: '30%', animationDuration: 4.5, delay: 2 },
      { id: 3, right: '10%', top: '70%', animationDuration: 5.5, delay: 0.5 },
    ];
    setGhosts(ghostElements);
  }, []);

  const handleGhostHover = (ghostId) => {
    setScaredGhosts(prev => ({ ...prev, [ghostId]: true }));

    setTimeout(() => {
      setScaredGhosts(prev => ({ ...prev, [ghostId]: false }));
    }, 5000);
  };

  return (
    <>
      {/* Floating Ghosts */}
      <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
        {ghosts.map((ghost) => (
          <div
            key={`ghost-${ghost.id}`}
            className="absolute cursor-pointer hover:scale-110"
            style={{
              left: ghost.left,
              right: ghost.right,
              top: ghost.top,
              animationName: !scaredGhosts[ghost.id] ? 'floatSlow' : 'none',
              animationDuration: `${ghost.animationDuration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${ghost.delay}s`,
              transition: scaredGhosts[ghost.id]
                ? 'opacity 0.5s ease-out, transform 1s ease-out'
                : 'transform 0.3s ease-out',
              opacity: scaredGhosts[ghost.id] ? 0 : 1,
              transform: scaredGhosts[ghost.id]
                ? `translateX(${ghost.left ? '-200%' : '200%'}) rotate(720deg) scale(0.5)`
                : 'translateY(0)',
              pointerEvents: 'auto',
            }}
            onMouseEnter={() => {
              console.log('Ghost hovered:', ghost.id);
              handleGhostHover(ghost.id);
            }}
            onClick={() => {
              console.log('Ghost clicked:', ghost.id);
              handleGhostHover(ghost.id);
            }}
          >
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" style={{ pointerEvents: 'none' }}>
              <path
                d="M30 10 Q10 10 10 35 L10 70 Q10 75 15 75 Q15 70 20 70 Q20 75 25 75 Q25 70 30 70 Q30 75 35 75 Q35 70 40 70 Q40 75 45 75 Q50 75 50 70 L50 35 Q50 10 30 10 Z"
                fill="rgba(6, 182, 212, 0.15)"
                stroke="rgba(6, 182, 212, 0.4)"
                strokeWidth="1"
              />
              {/* Eyes */}
              <circle cx="20" cy="30" r="4" fill="rgba(6, 182, 212, 0.6)" className="ghost-eye" />
              <circle cx="40" cy="30" r="4" fill="rgba(6, 182, 212, 0.6)" className="ghost-eye" />
              {/* Mouth */}
              <path d="M25 45 Q30 50 35 45" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" fill="none" />
            </svg>
          </div>
        ))}
      </div>

      {/* Spooky Spiderwebs in corners */}
      <div className="fixed top-0 left-0 pointer-events-none z-50 opacity-30">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M0 0 L100 100 M0 20 L90 100 M0 40 L80 100 M20 0 L100 90 M40 0 L100 80"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="100" cy="100" r="3" fill="rgba(6, 182, 212, 0.5)" />
        </svg>
      </div>

      <div className="fixed top-0 right-0 pointer-events-none z-50 opacity-30 transform scale-x-[-1]">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M0 0 L100 100 M0 20 L90 100 M0 40 L80 100 M20 0 L100 90 M40 0 L100 80"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="100" cy="100" r="3" fill="rgba(6, 182, 212, 0.5)" />
        </svg>
      </div>
    </>
  );
};

export default HalloweenElements;
