import React from "react";

interface CircuitLineProps {
  className?: string;
}

const CircuitLine: React.FC<CircuitLineProps> = ({ className = "" }) => (
  <div className={`${className} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse"></div>
    <div className="w-full h-px bg-gradient-to-r from-gray-800 via-cyan-400/50 to-gray-800"></div>
  </div>
);

export default CircuitLine;
