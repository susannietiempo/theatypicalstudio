export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1A2332]">
      {/* Base gradient layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 80% 50%, rgba(198, 123, 92, 0.08) 0%, transparent 60%)'
        }}
      />
      
      {/* SVG Abstract Shapes */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#C67B5C" stopOpacity="0.02" />
          </linearGradient>
          
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#F5F3EF" stopOpacity="0.01" />
          </linearGradient>
          
          <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1A2332" stopOpacity="0" />
          </linearGradient>
          
          <radialGradient id="radial1" cx="70%" cy="50%">
            <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1A2332" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="radial2" cx="80%" cy="40%">
            <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#C67B5C" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#1A2332" stopOpacity="0" />
          </radialGradient>
          
          {/* Blur filters for depth */}
          <filter id="blur1">
            <feGaussianBlur stdDeviation="40" />
          </filter>
          
          <filter id="blur2">
            <feGaussianBlur stdDeviation="60" />
          </filter>
          
          <filter id="blur3">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>
        
        {/* Background layer - large soft forms */}
        <g opacity="0.6" filter="url(#blur2)">
          <ellipse cx="1500" cy="400" rx="600" ry="400" fill="url(#radial2)" />
          <ellipse cx="1600" cy="700" rx="500" ry="350" fill="url(#grad1)" />
        </g>
        
        {/* Mid layer - structural forms suggesting systems */}
        <g opacity="0.4" filter="url(#blur1)">
          {/* Organic rounded rectangles - suggesting modules/components */}
          <rect x="1200" y="200" width="400" height="300" rx="80" fill="url(#grad1)" transform="rotate(-15 1400 350)" />
          <rect x="1400" y="500" width="350" height="250" rx="60" fill="url(#grad2)" transform="rotate(8 1575 625)" />
          <rect x="1100" y="650" width="300" height="200" rx="50" fill="url(#grad3)" transform="rotate(-8 1250 750)" />
          
          {/* Circular elements - suggesting connection points */}
          <circle cx="1350" cy="350" r="120" fill="url(#radial1)" />
          <circle cx="1550" cy="580" r="90" fill="#F5F3EF" fillOpacity="0.05" />
        </g>
        
        {/* Foreground layer - subtle accent elements */}
        <g opacity="0.5" filter="url(#blur3)">
          <path 
            d="M 1300 300 Q 1450 350 1500 450 Q 1550 550 1600 600" 
            stroke="#C67B5C" 
            strokeWidth="3" 
            fill="none" 
            strokeOpacity="0.15"
            strokeLinecap="round"
          />
          
          <ellipse cx="1650" cy="350" rx="180" ry="120" fill="#F5F3EF" fillOpacity="0.04" transform="rotate(25 1650 350)" />
          <ellipse cx="1250" cy="550" rx="150" ry="100" fill="#C67B5C" fillOpacity="0.06" transform="rotate(-20 1250 550)" />
        </g>
        
        {/* Sharp accent layer - minimal geometric hints */}
        <g opacity="0.3">
          <rect x="1500" y="250" width="2" height="180" fill="#F5F3EF" fillOpacity="0.2" transform="rotate(25 1501 340)" />
          <rect x="1420" y="480" width="2" height="140" fill="#C67B5C" fillOpacity="0.25" transform="rotate(-15 1421 550)" />
          
          {/* Small dots suggesting nodes */}
          <circle cx="1380" cy="320" r="4" fill="#F5F3EF" fillOpacity="0.3" />
          <circle cx="1520" cy="490" r="4" fill="#F5F3EF" fillOpacity="0.25" />
          <circle cx="1600" cy="380" r="3" fill="#C67B5C" fillOpacity="0.4" />
          <circle cx="1450" cy="620" r="3" fill="#C67B5C" fillOpacity="0.3" />
        </g>
        
        {/* Vignette overlay for depth */}
        <defs>
          <radialGradient id="vignette">
            <stop offset="0%" stopColor="#1A2332" stopOpacity="0" />
            <stop offset="100%" stopColor="#1A2332" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="1920" height="1080" fill="url(#vignette)" />
      </svg>
      
      {/* Subtle noise texture overlay for editorial feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
}
