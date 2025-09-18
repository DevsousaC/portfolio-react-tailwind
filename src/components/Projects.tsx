import React from "react";
import { ChevronRight } from "lucide-react";
import { projectsData } from "../data/data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projetos em <span className="text-cyan-400">Destaque</span>
          </h2>
          <p className="text-lg text-gray-300">
            Alguns dos projetos que demonstram minha expertise em
            desenvolvimento seguro
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-gray-700/30 rounded-lg overflow-hidden hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded ${
                      ["Hospedado", "Concluído"].includes(project.status)
                        ? "text-green-400 bg-green-400/10"
                        : "text-blue-400 bg-blue-400/10"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-mono text-gray-400 mb-2">
                    Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-mono text-gray-400 mb-2">
                    Features:
                  </div>
                  <div className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-gray-300 flex items-center"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
                >
                  Ver detalhes <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
