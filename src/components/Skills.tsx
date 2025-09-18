import React from 'react';
import { skillsData } from '../data/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-cyan-400">Expertise</span> & <span className="text-magenta-400">Stack Tecnológico</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Especializado em desenvolvimento backend seguro e implementação de práticas DevSecOps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center;">
          {skillsData.map((category, index) => (
            <div key={index} className="group relative">
              <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <div className={`text-${category.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-100">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-gray-300 font-mono bg-slate-900/50 px-3 py-1 rounded border border-gray-700/30">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;