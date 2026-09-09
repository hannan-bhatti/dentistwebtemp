import React from 'react';

export function LuminaLogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="luminaTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <linearGradient id="luminaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Elegant Stylized Tooth Contour */}
      <path 
        d="M32 24 C 20 28, 16 48, 22 68 C 26 80, 36 90, 42 85 C 48 80, 47 62, 50 62 C 53 62, 52 80, 58 85 C 64 90, 74 80, 78 68 C 84 48, 80 28, 68 24 C 58 20, 53 28, 50 28 C 47 28, 42 20, 32 24 Z" 
        stroke="url(#luminaTealGrad)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />

      {/* Interior Highlight Arc */}
      <path 
        d="M28 36 C 26 46, 28 58, 34 68" 
        stroke="#67e8f9" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        opacity="0.85"
      />

      {/* Lumina Radiance Spark (Star of Light) */}
      <path 
        d="M72 10 L 74.5 20.5 L 85 23 L 74.5 25.5 L 72 36 L 69.5 25.5 L 59 23 L 69.5 20.5 Z" 
        fill="url(#luminaGoldGrad)" 
      />
      <circle cx="72" cy="23" r="2.5" fill="#fef3c7" />
    </svg>
  );
}

export function LuminaLogo() {
  return (
    <div className="brand-logo">
      <div className="logo-icon-wrap">
        <LuminaLogoMark size={28} />
      </div>
      <div className="logo-text-wrap">
        <div className="logo-brand-name">
          LUMINA <span>STUDIO</span>
        </div>
        <div className="logo-brand-sub">Modern Dental Aesthetics</div>
      </div>
    </div>
  );
}
