interface SectionBackgroundProps {
  variant?: 'convergence-subtle' | 'convergence-web' | 'convergence-glow' | 'convergence-minimal';
  position?: 'left' | 'right' | 'center';
}

export function SectionBackground({
  variant = 'convergence-subtle',
  position = 'right'
}: SectionBackgroundProps) {

  // Determine horizontal position
  const cx = position === 'left' ? '400' : position === 'center' ? '960' : '1500';

  if (variant === 'convergence-subtle') {
    // Subtle version with organic wandering paths and atmospheric glow
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="section-glow-soft">
              <feGaussianBlur stdDeviation="40" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="section-blur-heavy">
              <feGaussianBlur stdDeviation="60" />
            </filter>
            <radialGradient id="section-focal">
              <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#C67B5C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#C67B5C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Layered atmospheric glow */}
          <ellipse cx={cx} cy="305" rx="320" ry="210" fill="url(#section-focal)" filter="url(#section-blur-heavy)" opacity="0.7" />

          {/* Organic wandering paths */}
          <g filter="url(#section-glow-soft)" opacity="0.42">
            <path
              d={`M ${parseInt(cx) + 310} 95 Q ${parseInt(cx) + 220} 140, ${parseInt(cx) + 145} 195 Q ${parseInt(cx) + 80} 245, ${parseInt(cx) - 5} 295`}
              stroke="#C67B5C"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={`M ${parseInt(cx) + 265} 510 Q ${parseInt(cx) + 185} 450, ${parseInt(cx) + 115} 385 Q ${parseInt(cx) + 55} 335, ${parseInt(cx) + 2} 305`}
              stroke="#F5F3EF"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Atmospheric depth elements */}
          <g opacity="0.12" filter="url(#section-blur-heavy)">
            <ellipse cx={parseInt(cx) + 120} cy="220" rx="140" ry="110" fill="#C67B5C" transform={`rotate(22 ${parseInt(cx) + 120} 220)`} />
            <ellipse cx={parseInt(cx) - 80} cy="380" rx="155" ry="120" fill="#F5F3EF" transform={`rotate(-18 ${parseInt(cx) - 80} 380)`} />
          </g>

          {/* Soft diffuse focal point - overlapping circles */}
          <g filter="url(#section-glow-soft)">
            <circle cx={cx} cy="300" r="42" fill="#C67B5C" opacity="0.15" />
            <circle cx={parseInt(cx) - 5} cy="305" r="28" fill="#F5F3EF" opacity="0.2" />
            <circle cx={parseInt(cx) + 3} cy="298" r="18" fill="#C67B5C" opacity="0.25" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'convergence-web') {
    // Web of organic meandering paths - collaboration of ideas
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-45">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="web-glow">
              <feGaussianBlur stdDeviation="38" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="web-blur">
              <feGaussianBlur stdDeviation="55" />
            </filter>
            <radialGradient id="web-focal">
              <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#C67B5C" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C67B5C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Atmospheric background */}
          <ellipse cx={parseInt(cx) + 15} cy="295" rx="340" ry="200" fill="url(#web-focal)" filter="url(#web-blur)" />

          {/* Organic wandering web paths */}
          <g filter="url(#web-glow)" opacity="0.48">
            <path d={`M ${parseInt(cx) + 335} 75 Q ${parseInt(cx) + 240} 125, ${parseInt(cx) + 165} 185 Q ${parseInt(cx) + 95} 240, ${parseInt(cx) + 8} 295`} stroke="#C67B5C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d={`M ${parseInt(cx) + 295} 15 Q ${parseInt(cx) + 215} 95, ${parseInt(cx) + 148} 165 Q ${parseInt(cx) + 85} 230, ${parseInt(cx) - 3} 300`} stroke="#F5F3EF" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <path d={`M ${parseInt(cx) + 355} 195 Q ${parseInt(cx) + 265} 220, ${parseInt(cx) + 185} 250 Q ${parseInt(cx) + 95} 275, ${parseInt(cx) + 5} 302`} stroke="#C67B5C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d={`M ${parseInt(cx) + 335} 525 Q ${parseInt(cx) + 245} 460, ${parseInt(cx) + 170} 405 Q ${parseInt(cx) + 92} 350, ${parseInt(cx) + 10} 305`} stroke="#F5F3EF" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path d={`M ${parseInt(cx) + 295} 585 Q ${parseInt(cx) + 210} 510, ${parseInt(cx) + 145} 445 Q ${parseInt(cx) + 75} 370, ${parseInt(cx) - 2} 308`} stroke="#C67B5C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </g>

          {/* Atmospheric depth */}
          <g opacity="0.1" filter="url(#web-blur)">
            <ellipse cx={parseInt(cx) + 180} cy="185" rx="130" ry="95" fill="#C67B5C" transform={`rotate(28 ${parseInt(cx) + 180} 185)`} />
            <ellipse cx={parseInt(cx) - 60} cy="415" rx="145" ry="105" fill="#F5F3EF" transform={`rotate(-24 ${parseInt(cx) - 60} 415)`} />
          </g>

          {/* Soft diffuse focal point */}
          <g filter="url(#web-glow)">
            <circle cx={parseInt(cx) + 8} cy="300" r="38" fill="#C67B5C" opacity="0.18" />
            <circle cx={parseInt(cx) + 3} cy="305" r="25" fill="#F5F3EF" opacity="0.22" />
            <circle cx={parseInt(cx) + 12} cy="297" r="15" fill="#C67B5C" opacity="0.28" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'convergence-glow') {
    // Emphasized atmospheric glow with barely visible paths
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-55">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="glow-heavy">
              <feGaussianBlur stdDeviation="65" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="glow-ultra">
              <feGaussianBlur stdDeviation="85" />
            </filter>
            <radialGradient id="glow-radial">
              <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.22" />
              <stop offset="45%" stopColor="#C67B5C" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#C67B5C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Layered atmospheric glow */}
          <ellipse cx={parseInt(cx) - 8} cy="298" rx="380" ry="240" fill="url(#glow-radial)" filter="url(#glow-ultra)" />
          <ellipse cx={parseInt(cx) + 12} cy="305" rx="290" ry="185" fill="#C67B5C" opacity="0.06" filter="url(#glow-heavy)" />

          {/* Atmospheric depth elements */}
          <g opacity="0.14" filter="url(#glow-ultra)">
            <ellipse cx={parseInt(cx) + 145} cy="195" rx="165" ry="125" fill="#C67B5C" transform={`rotate(32 ${parseInt(cx) + 145} 195)`} />
            <ellipse cx={parseInt(cx) - 95} cy="405" rx="180" ry="135" fill="#F5F3EF" transform={`rotate(-26 ${parseInt(cx) - 95} 405)`} />
          </g>

          {/* Barely visible wandering paths for context */}
          <g filter="url(#glow-heavy)" opacity="0.28">
            <path d={`M ${parseInt(cx) + 295} 115 Q ${parseInt(cx) + 210} 165, ${parseInt(cx) + 135} 220 Q ${parseInt(cx) + 65} 265, ${parseInt(cx) - 5} 302`} stroke="#C67B5C" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d={`M ${parseInt(cx) + 295} 485 Q ${parseInt(cx) + 210} 430, ${parseInt(cx) + 135} 375 Q ${parseInt(cx) + 65} 330, ${parseInt(cx) + 3} 298`} stroke="#F5F3EF" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </g>

          {/* Soft diffuse focal point - very organic */}
          <g filter="url(#glow-heavy)">
            <circle cx={parseInt(cx) - 2} cy="300" r="52" fill="#C67B5C" opacity="0.2" />
            <circle cx={parseInt(cx) + 5} cy="305" r="35" fill="#F5F3EF" opacity="0.25" />
            <circle cx={parseInt(cx) - 3} cy="297" r="22" fill="#C67B5C" opacity="0.3" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'convergence-minimal') {
    // Minimal version with just a whisper of convergence
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="minimal-glow">
              <feGaussianBlur stdDeviation="50" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="minimal-blur">
              <feGaussianBlur stdDeviation="70" />
            </filter>
          </defs>

          {/* Very soft atmospheric glow */}
          <ellipse cx={parseInt(cx) + 8} cy="302" rx="280" ry="175" fill="#C67B5C" fillOpacity="0.05" filter="url(#minimal-blur)" />

          {/* Atmospheric depth element */}
          <ellipse cx={parseInt(cx) - 40} cy="310" rx="180" ry="130" fill="#F5F3EF" fillOpacity="0.04" filter="url(#minimal-blur)" transform={`rotate(-15 ${parseInt(cx) - 40} 310)`} />

          {/* Single organic wandering path */}
          <g filter="url(#minimal-glow)" opacity="0.35">
            <path d={`M ${parseInt(cx) + 255} 195 Q ${parseInt(cx) + 175} 225, ${parseInt(cx) + 105} 260 Q ${parseInt(cx) + 45} 285, ${parseInt(cx) - 5} 305`} stroke="#C67B5C" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          </g>

          {/* Soft diffuse focal point */}
          <g filter="url(#minimal-glow)">
            <circle cx={parseInt(cx) - 3} cy="302" r="28" fill="#C67B5C" opacity="0.12" />
            <circle cx={parseInt(cx) + 2} cy="298" r="16" fill="#F5F3EF" opacity="0.18" />
          </g>
        </svg>
      </div>
    );
  }

  return null;
}
