import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  glitch: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ children, className = "", glitch }) => (
  <span className={`${className} ${glitch ? 'animate-pulse text-red-400' : ''}`}>
    {children}
  </span>
);

export default GlitchText;