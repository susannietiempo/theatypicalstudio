export function PageConnections() {
  // Straighter path with subtle curves
  const leylinePath = "M 8 0 Q 7.2 25, 8 50 Q 8.8 75, 8 100";

  const nodes = [
    {
      top: "15%",
      size: 18,
      core: 8,
      center: 4,
      halo: 36,
      opacity: 0.3,
      radii: ["48% 52% 46% 54%", "54% 46% 52% 48%", "52% 48% 45% 55%"],
    },
    {
      top: "32%",
      size: 22,
      core: 10,
      center: 5,
      halo: 44,
      opacity: 0.5,
      radii: ["52% 48% 55% 45%", "46% 54% 48% 52%", "49% 51% 47% 53%"],
    },
    {
      top: "52%",
      size: 26,
      core: 12,
      center: 6,
      halo: 52,
      opacity: 0.7,
      radii: ["47% 53% 45% 55%", "55% 45% 53% 47%", "51% 49% 46% 54%"],
    },
    {
      top: "68%",
      size: 30,
      core: 14,
      center: 7,
      halo: 60,
      opacity: 0.85,
      radii: ["53% 47% 52% 48%", "48% 52% 45% 55%", "50% 50% 46% 54%"],
    },
    {
      top: "80%",
      size: 34,
      core: 16,
      center: 8,
      halo: 68,
      opacity: 0.95,
      radii: ["47% 53% 43% 57%", "56% 44% 54% 46%", "51% 49% 45% 55%"],
    },
    {
      top: "92%",
      size: 40,
      core: 18,
      center: 9,
      halo: 80,
      opacity: 0.6,
      radii: ["45% 55% 42% 58%", "55% 45% 57% 43%", "53% 47% 45% 55%"],
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-20 md:opacity-100 md:z-[60]" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main gradient - subtle at top, peaks in middle, fades at bottom */}
          <linearGradient id="leyline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.15" />
            <stop offset="30%" stopColor="#F5F3EF" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#C67B5C" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#F5F3EF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C67B5C" stopOpacity="0.15" />
          </linearGradient>

          {/* Footer boost gradient - softer at bottom */}
          <linearGradient id="footer-boost" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C67B5C" stopOpacity="0" />
            <stop offset="60%" stopColor="#C67B5C" stopOpacity="0.2" />
            <stop offset="85%" stopColor="#F5F3EF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F5F3EF" stopOpacity="0.1" />
          </linearGradient>

          {/* Soft glow filter */}
          <filter id="leyline-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Extra glow for footer area */}
          <filter id="footer-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main leyline path - subtle */}
        <path
          d={leylinePath}
          stroke="url(#leyline-gradient)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          fill="none"
          strokeLinecap="round"
          filter="url(#leyline-glow)"
        />

        {/* Footer enhancement layer - extra glow at bottom */}
        <path
          d={leylinePath}
          stroke="url(#footer-boost)"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
          fill="none"
          strokeLinecap="round"
          filter="url(#footer-glow)"
        />
      </svg>

      {nodes.map((node) => (
        <div
          key={node.top}
          className="absolute left-[8%] -translate-x-1/2 -translate-y-1/2"
          style={{ top: node.top, opacity: node.opacity }}
        >
          {/* Large outer halo */}
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: node.halo,
              height: node.halo,
              backgroundImage:
                "radial-gradient(circle, rgba(198, 123, 92, 0.35) 0%, rgba(245, 243, 239, 0.28) 35%, rgba(245, 243, 239, 0) 70%)",
              borderRadius: node.radii[0],
              filter: "blur(6px)",
            }}
          />

          {/* Main glow body */}
          <span
            className="block"
            style={{
              width: node.size,
              height: node.size,
              backgroundImage:
                "radial-gradient(circle, rgba(245, 243, 239, 0.95) 0%, rgba(245, 243, 239, 0.7) 30%, rgba(198, 123, 92, 0.6) 55%, rgba(198, 123, 92, 0.2) 80%, rgba(198, 123, 92, 0) 100%)",
              borderRadius: node.radii[0],
              filter: "blur(2px)",
              boxShadow:
                "0 0 18px rgba(198, 123, 92, 0.5), 0 0 32px rgba(245, 243, 239, 0.6), 0 0 48px rgba(245, 243, 239, 0.3)",
            }}
          />

          {/* Core */}
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: node.core,
              height: node.core,
              backgroundColor: "rgba(198, 123, 92, 0.9)",
              borderRadius: node.radii[1],
              filter: "blur(1px)",
              boxShadow: "0 0 8px rgba(198, 123, 92, 0.7)",
            }}
          />

          {/* Bright center */}
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: node.center,
              height: node.center,
              backgroundColor: "rgba(245, 243, 239, 1)",
              borderRadius: node.radii[2],
              boxShadow: "0 0 6px rgba(245, 243, 239, 0.9)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
