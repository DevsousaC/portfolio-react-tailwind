import React, { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { heroData } from "./data/data";

const App = () => {
  const [glitchText, setGlitchText] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Lógica para animar seções ao entrar na tela pode ser adicionada aqui
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((el) => {
      observer.observe(el);
    });

    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 300);
    }, 12000);

    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % heroData.skills.length);
    }, 2000);

    return () => {
      observer.disconnect();
      clearInterval(glitchInterval);
      clearInterval(skillInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans overflow-x-hidden">
      {}

      <main>
        <Hero glitchText={glitchText} currentSkill={currentSkill} />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
