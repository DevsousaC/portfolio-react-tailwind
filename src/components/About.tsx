import React from 'react';
import { aboutData } from '../data/data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre <span className="text-magenta-400">Mim</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {aboutData.description1}
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutData.description2.replace(/ethical hacking/g, '<span class="text-cyan-400">ethical hacking</span>').replace(/security auditing/g, '<span class="text-cyan-400">security auditing</span>') }} />

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Experiência Profissional</h4>
                <p className="text-gray-300">{aboutData.experience}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Formação</h4>
                <p className="text-gray-300">{aboutData.education}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg border border-gray-700/50 p-6">
              <h4 className="font-semibold text-gray-100 mb-4">Linguagens & Frameworks</h4>
              <div className="space-y-3">
                {aboutData.languageSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-magenta-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;