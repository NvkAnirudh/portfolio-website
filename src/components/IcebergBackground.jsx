const IcebergBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Iceberg SVG positioned in the background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-40 blur-sm">
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Main iceberg body - above water */}
          <path
            d="M200 350 L250 280 L300 320 L350 250 L400 300 L450 260 L500 310 L550 280 L600 350 Z"
            fill="url(#icebergGradient1)"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="2"
          />

          {/* Iceberg underwater portion */}
          <path
            d="M200 350 L150 450 L200 520 L300 580 L400 590 L500 570 L600 510 L650 450 L600 350 Z"
            fill="url(#icebergGradient2)"
            opacity="0.6"
          />

          {/* Highlights on the iceberg */}
          <path
            d="M350 250 L380 290 L400 270 L420 300 L450 260 L430 240 Z"
            fill="rgba(6, 182, 212, 0.2)"
          />

          <path
            d="M260 300 L280 320 L300 310 L290 280 Z"
            fill="rgba(6, 182, 212, 0.15)"
          />

          {/* Water line */}
          <line
            x1="0"
            y1="350"
            x2="800"
            y2="350"
            stroke="rgba(6, 182, 212, 0.4)"
            strokeWidth="3"
            strokeDasharray="10,5"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="icebergGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(156, 223, 235, 0.4)', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: 'rgba(6, 182, 212, 0.3)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(8, 145, 178, 0.4)', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="icebergGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(6, 182, 212, 0.2)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(3, 105, 161, 0.3)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default IcebergBackground;
