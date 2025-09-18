import React from 'react';
import { contactData } from '../data/data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Vamos <span className="text-cyan-400">Conectar</span>
        </h2>
        
        <p className="text-lg text-gray-300 mb-12">
          {contactData.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-gray-700/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Contato Direto</h3>
            <div className="space-y-4 text-gray-300">
              {contactData.directContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  {contact.icon}
                  {contact.href ? (
                    <a href={contact.href} className="hover:text-cyan-400 transition-colors">
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-gray-700/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Redes & Código</h3>
            <div className="space-y-4">
              {contactData.socials.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-cyan-400 transition-colors">
                  {social.icon}
                  {social.text}
                </a>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 mb-4">Status atual:</p>
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-400 font-mono">Disponível para projetos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;