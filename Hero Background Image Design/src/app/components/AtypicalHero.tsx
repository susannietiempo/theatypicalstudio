interface HeroVariantProps {
  variant?: 'disrupted-grid' | 'asymmetric-flow' | 'convergent-paths';
}

export function AtypicalHero({ variant = 'disrupted-grid' }: HeroVariantProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1A2332]">
      {variant === 'disrupted-grid' && <DisruptedGridVariant />}
      {variant === 'asymmetric-flow' && <AsymmetricFlowVariant />}
      {variant === 'convergent-paths' && <ConvergentPathsVariant />}
      
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

// Variant 1: Disrupted Grid - represents "atypical" through broken patterns
function DisruptedGridVariant() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="glow-copper">
          <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="glow-sand">
          <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="blur-bg">
          <feGaussianBlur stdDeviation="45" />
        </filter>
        
        <linearGradient id="copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C67B5C" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Atmospheric base */}
      <ellipse cx="1500" cy="500" rx="550" ry="400" fill="#C67B5C" opacity="0.08" filter="url(#blur-bg)" />
      
      {/* Regular grid (subtle, faded) */}
      <g opacity="0.08" stroke="#F5F3EF" strokeWidth="1">
        <line x1="1200" y1="200" x2="1200" y2="800" />
        <line x1="1350" y1="200" x2="1350" y2="800" />
        <line x1="1500" y1="200" x2="1500" y2="800" />
        <line x1="1650" y1="200" x2="1650" y2="800" />
        <line x1="1100" y1="300" x2="1750" y2="300" />
        <line x1="1100" y1="450" x2="1750" y2="450" />
        <line x1="1100" y1="600" x2="1750" y2="600" />
        <line x1="1100" y1="750" x2="1750" y2="750" />
      </g>
      
      {/* Disrupted/broken grid lines - the "atypical" element */}
      <g filter="url(#glow-copper)">
        {/* Vertical break */}
        <line x1="1500" y1="200" x2="1500" y2="380" stroke="#C67B5C" strokeWidth="3" opacity="0.8" />
        <line x1="1520" y1="470" x2="1520" y2="800" stroke="#C67B5C" strokeWidth="3" opacity="0.8" />
        
        {/* Horizontal break */}
        <line x1="1100" y1="450" x2="1420" y2="450" stroke="#C67B5C" strokeWidth="2.5" opacity="0.7" />
        <line x1="1560" y1="470" x2="1750" y2="470" stroke="#C67B5C" strokeWidth="2.5" opacity="0.7" />
      </g>
      
      {/* The disruption point - glowing focal area */}
      <g filter="url(#glow-sand)">
        <circle cx="1490" cy="460" r="25" fill="#F5F3EF" opacity="0.6" />
        <circle cx="1490" cy="460" r="12" fill="#C67B5C" opacity="0.9" />
        <circle cx="1490" cy="460" r="5" fill="#F5F3EF" opacity="1" />
      </g>
      
      {/* Diagonal disruption - breaking the orthogonal grid */}
      <g filter="url(#glow-copper)" opacity="0.6">
        <line x1="1350" y1="350" x2="1620" y2="580" stroke="#C67B5C" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="1250" y1="550" x2="1480" y2="320" stroke="#F5F3EF" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
      </g>
      
      {/* Scattered nodes showing the break from pattern */}
      <g opacity="0.7">
        <circle cx="1350" cy="350" r="4" fill="#F5F3EF" />
        <circle cx="1620" cy="580" r="4" fill="#C67B5C" />
        <circle cx="1420" cy="450" r="3" fill="#F5F3EF" />
        <circle cx="1560" cy="470" r="3" fill="#C67B5C" />
      </g>
      
      {/* Asymmetric accent shapes - reinforcing "not typical" */}
      <g opacity="0.12" filter="url(#blur-bg)">
        <rect x="1300" y="280" width="180" height="140" fill="#C67B5C" rx="20" transform="rotate(23 1390 350)" />
        <rect x="1520" y="520" width="160" height="180" fill="#F5F3EF" rx="25" transform="rotate(-17 1600 610)" />
      </g>
      
      {/* Vignette */}
      <defs>
        <radialGradient id="vignette">
          <stop offset="40%" stopColor="#1A2332" stopOpacity="0" />
          <stop offset="100%" stopColor="#0D1119" stopOpacity="0.65" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1920" height="1080" fill="url(#vignette)" />
    </svg>
  );
}

// Variant 2: Asymmetric Flow - organic, non-standard paths showing custom solutions
function AsymmetricFlowVariant() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="glow-flow-copper">
          <feGaussianBlur stdDeviation="18" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="glow-flow-sand">
          <feGaussianBlur stdDeviation="22" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="blur-flow">
          <feGaussianBlur stdDeviation="50" />
        </filter>
        
        <linearGradient id="flow-copper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C67B5C" stopOpacity="0.1" />
        </linearGradient>
        
        <linearGradient id="flow-sand" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F5F3EF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      {/* Background glow */}
      <ellipse cx="1550" cy="450" rx="500" ry="380" fill="#C67B5C" opacity="0.1" filter="url(#blur-flow)" />
      
      {/* Organic, asymmetric curved paths - representing custom, non-standard solutions */}
      <g filter="url(#glow-flow-copper)">
        <path
          d="M 1200 250 Q 1350 300, 1450 420 T 1700 650"
          stroke="#C67B5C"
          strokeWidth="4"
          fill="none"
          opacity="0.85"
          strokeLinecap="round"
        />
        
        <path
          d="M 1250 700 Q 1400 600, 1520 500 Q 1640 400, 1750 350"
          stroke="#C67B5C"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
      </g>
      
      <g filter="url(#glow-flow-sand)">
        <path
          d="M 1180 500 Q 1320 450, 1450 480 Q 1600 520, 1720 580"
          stroke="#F5F3EF"
          strokeWidth="3.5"
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
        />
      </g>
      
      {/* Flow particles along paths */}
      <g opacity="0.8">
        <circle cx="1200" cy="250" r="5" fill="#C67B5C" filter="url(#glow-flow-copper)" />
        <circle cx="1350" cy="300" r="4" fill="#F5F3EF" />
        <circle cx="1450" cy="420" r="6" fill="#C67B5C" filter="url(#glow-flow-copper)" />
        <circle cx="1520" cy="500" r="5" fill="#F5F3EF" filter="url(#glow-flow-sand)" />
        <circle cx="1700" cy="650" r="4" fill="#C67B5C" />
        <circle cx="1720" cy="580" r="5" fill="#F5F3EF" />
      </g>
      
      {/* Irregular geometric accents - reinforcing asymmetry */}
      <g opacity="0.15" filter="url(#blur-flow)">
        <polygon points="1400,300 1520,350 1480,470 1340,420" fill="#C67B5C" />
        <polygon points="1550,550 1680,510 1720,630 1600,680" fill="#F5F3EF" />
      </g>
      
      {/* Sharp accent elements at odd angles */}
      <g opacity="0.35">
        <rect x="1380" y="360" width="100" height="2" fill="#F5F3EF" transform="rotate(33 1430 361)" />
        <rect x="1600" y="520" width="80" height="2" fill="#C67B5C" transform="rotate(-28 1640 521)" />
        <rect x="1300" y="600" width="60" height="1.5" fill="#F5F3EF" transform="rotate(52 1330 600)" />
      </g>
      
      {/* Vignette */}
      <defs>
        <radialGradient id="vignette-flow">
          <stop offset="40%" stopColor="#1A2332" stopOpacity="0" />
          <stop offset="100%" stopColor="#0D1119" stopOpacity="0.7" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1920" height="1080" fill="url(#vignette-flow)" />
    </svg>
  );
}

// Variant 3: Convergent Paths - multiple unique paths meeting at a point
function ConvergentPathsVariant() {
  return (
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
  );
}
