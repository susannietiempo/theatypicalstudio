export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1A2332]">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow-conv-gentle">
            <feGaussianBlur stdDeviation="35" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="glow-conv-soft">
            <feGaussianBlur stdDeviation="40" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="blur-conv">
            <feGaussianBlur stdDeviation="65" />
          </filter>

          <filter id="blur-conv-heavy">
            <feGaussianBlur stdDeviation="80" />
          </filter>

          <radialGradient id="focal-glow">
            <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#C67B5C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C67B5C" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="atmosphere">
            <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#C67B5C" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#1A2332" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Layered atmospheric glow - more diffuse */}
        <ellipse cx="1450" cy="500" rx="550" ry="420" fill="url(#atmosphere)" filter="url(#blur-conv-heavy)" />
        <ellipse cx="1480" cy="520" rx="400" ry="320" fill="#C67B5C" opacity="0.08" filter="url(#blur-conv)" />

        {/* Multiple paths converging - more organic, varied strokes */}

        {/* Path 1: From top right - gentle, wandering curve */}
        <g filter="url(#glow-conv-soft)" opacity="0.55">
          <path
            d="M 1820 130 Q 1740 220, 1650 320 Q 1580 390, 1520 440 Q 1485 470, 1460 495"
            stroke="#C67B5C"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Path 2: From right - softer, less angular */}
        <g filter="url(#glow-conv-soft)" opacity="0.48">
          <path
            d="M 1920 420 Q 1820 430, 1720 450 Q 1590 475, 1480 495"
            stroke="#F5F3EF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Path 3: From bottom right - flowing, natural */}
        <g filter="url(#glow-conv-soft)" opacity="0.5">
          <path
            d="M 1880 880 Q 1800 800, 1720 720 Q 1640 640, 1580 580 Q 1520 530, 1470 505"
            stroke="#C67B5C"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>

        {/* Path 4: From top - meandering */}
        <g filter="url(#glow-conv-soft)" opacity="0.42">
          <path
            d="M 1580 80 Q 1560 200, 1540 320 Q 1520 420, 1475 490"
            stroke="#F5F3EF"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Path 5: From middle right - gentle approach */}
        <g filter="url(#glow-conv-soft)" opacity="0.45">
          <path
            d="M 1920 560 Q 1780 555, 1640 535 Q 1550 520, 1485 505"
            stroke="#C67B5C"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Path 6: Additional organic path from lower angle */}
        <g filter="url(#glow-conv-soft)" opacity="0.38">
          <path
            d="M 1750 920 Q 1680 820, 1620 720 Q 1560 620, 1490 530"
            stroke="#F5F3EF"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Central convergence area - softer, less precise */}
        <g filter="url(#glow-conv-gentle)">
          <circle cx="1470" cy="500" r="85" fill="url(#focal-glow)" />
          <circle cx="1465" cy="505" r="45" fill="#C67B5C" opacity="0.25" />
          <circle cx="1470" cy="500" r="28" fill="#F5F3EF" opacity="0.3" />
          <circle cx="1468" cy="502" r="12" fill="#C67B5C" opacity="0.5" />
        </g>

        {/* Organic particles - less uniform positioning */}
        <g opacity="0.35" filter="url(#glow-conv-soft)">
          <circle cx="1650" cy="320" r="3" fill="#C67B5C" opacity="0.7" />
          <circle cx="1720" cy="450" r="2.5" fill="#F5F3EF" opacity="0.6" />
          <circle cx="1580" cy="580" r="3.5" fill="#C67B5C" opacity="0.5" />
          <circle cx="1540" cy="320" r="2" fill="#F5F3EF" opacity="0.6" />
          <circle cx="1620" cy="720" r="2.5" fill="#C67B5C" opacity="0.5" />
        </g>

        {/* Very subtle suggestion of rings - barely visible, organic */}
        <g opacity="0.08" fill="none" filter="url(#blur-conv)">
          <ellipse cx="1465" cy="505" rx="140" ry="125" stroke="#C67B5C" strokeWidth="1.5" transform="rotate(8 1465 505)" />
          <ellipse cx="1470" cy="500" rx="230" ry="200" stroke="#F5F3EF" strokeWidth="1" transform="rotate(-5 1470 500)" />
          <ellipse cx="1475" cy="495" rx="320" ry="280" stroke="#C67B5C" strokeWidth="0.8" transform="rotate(12 1475 495)" />
        </g>

        {/* Atmospheric depth elements - more prominent, softer */}
        <g opacity="0.15" filter="url(#blur-conv-heavy)">
          <ellipse cx="1600" cy="330" rx="220" ry="170" fill="#C67B5C" transform="rotate(35 1600 330)" />
          <ellipse cx="1340" cy="700" rx="240" ry="180" fill="#F5F3EF" transform="rotate(-28 1340 700)" />
          <ellipse cx="1550" cy="600" rx="200" ry="160" fill="#C67B5C" transform="rotate(15 1550 600)" />
        </g>

        {/* Additional soft atmospheric layers */}
        <g opacity="0.12" filter="url(#blur-conv)">
          <ellipse cx="1520" cy="420" rx="180" ry="140" fill="#F5F3EF" transform="rotate(-20 1520 420)" />
          <ellipse cx="1400" cy="580" rx="160" ry="130" fill="#C67B5C" transform="rotate(25 1400 580)" />
        </g>

        {/* Vignette - softer edges */}
        <defs>
          <radialGradient id="vignette-conv">
            <stop offset="30%" stopColor="#1A2332" stopOpacity="0" />
            <stop offset="100%" stopColor="#0D1119" stopOpacity="0.65" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="1920" height="1080" fill="url(#vignette-conv)" />
      </svg>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}


