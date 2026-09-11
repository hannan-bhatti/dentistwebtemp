import React from 'react';
import Image from 'next/image';

export function LuminaLogo({ 
  variant = 'default',
  size = 46 
}: { 
  variant?: 'default' | 'light';
  size?: number;
}) {
  const isLight = variant === 'light';
  return (
    <div className={`brand-logo ${isLight ? 'brand-logo-light' : ''}`}>
      <div className="logo-icon-wrap" style={{ width: size, height: size }}>
        <Image 
          src="/images/lumina-logo.jpg"
          alt="Lumina Dental Studio Official Logo"
          width={size}
          height={size}
          className="brand-logo-official-img"
          priority
        />
      </div>
      <div className="logo-text-wrap">
        <div className={`logo-brand-name ${isLight ? 'logo-name-light' : ''}`}>
          LUMINA <span>STUDIO</span>
        </div>
        <div className={`logo-brand-sub ${isLight ? 'logo-sub-light' : ''}`}>
          Modern Dental Aesthetics
        </div>
      </div>
    </div>
  );
}
