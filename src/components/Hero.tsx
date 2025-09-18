import React from "react";
import { Code, Terminal } from "lucide-react";
import GlitchText from "./ui/GlitchText";
import { heroData, personalInfo } from "../data/data";

interface HeroProps {
  glitchText: boolean;
  currentSkill: number;
}

const Hero: React.FC<HeroProps> = ({ glitchText, currentSkill }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <GlitchText className="text-gray-100" glitch={glitchText}>
                  {personalInfo.name}
                </GlitchText>
              </h1>
              <div className="text-xl md:text-2xl text-cyan-400 font-mono mb-4">
                &gt; {personalInfo.title}
              </div>
              <div className="text-lg text-magenta-400 font-mono">
                &gt; Projetos utilizando{" "}
                <span className="text-cyan-400 transition-all duration-500">
                  {heroData.skills[currentSkill]}
                </span>
              </div>
            </div>

            <p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: heroData.description
                  .replace(
                    "segurança da informação",
                    '<span class="text-cyan-400">segurança da informação</span>'
                  )
                  .replace(
                    "DevSecOps",
                    '<span class="text-magenta-400">DevSecOps</span>'
                  ),
              }}
            />

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-cyan-500/20 border border-cyan-400/50 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500/30 transition-all duration-300 flex items-center"
              >
                <Code className="w-5 h-5 mr-2" />
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="border border-gray-600 px-6 py-3 rounded-lg font-medium hover:border-gray-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 rounded-lg border border-gray-700/50 p-6 font-mono text-sm">
              <div className="flex items-center mb-4">
                <Terminal className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-gray-400">system_info.sh</span>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-cyan-400">$</span> whoami
                </div>
                <div className="text-gray-300 ml-4">fullstack_developer</div>
                <div>
                  <span className="text-cyan-400">$</span> ls skills/
                </div>
                <div className="text-gray-300 ml-4">
                  Java python Javascript
                  <br />
                  Spring React Tailwind
                  <br />
                  Segurança da informação
                </div>
                <div>
                  <span className="text-cyan-400">$</span> echo $STATUS
                </div>
                <div className="text-green-400 ml-4 animate-pulse">
                  disponivel_para_oportunidades
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
