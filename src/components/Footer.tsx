import React from "react";
import CircuitLine from "./ui/CircuitLine";
import { personalInfo } from "../data/data";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-gray-700/30 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <CircuitLine className="mb-6" />

        <p className="text-gray-400 font-mono text-sm mb-2">
          © 2025 {personalInfo.name} • Desenvolvedor web
        </p>
        <p className="text-gray-500 text-xs">
          Construído com React • Estilizado com Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
