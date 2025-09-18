import {
  Server,
  Database,
  Lock,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  AppWindow,
} from "lucide-react";

export const personalInfo = {
  name: "Diego Sousa",
  title: "Desenvolvedor Full stack",
  email: "devdiegosousa@gmail.com",
  phone: "+55 (11) 93717-0424",
  location: "São Paulo, Brasil",
  linkedin: "linkedin.com/in/devdiego",
  github: "github.com/DevsousaC",
};

export const heroData = {
  skills: [
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "Java",
    "Spring Framework",
    "React",
    "Javascript",
  ],
  description: `Desenvolvedor full stack com visão para a segurança da informação aplicado ao desenvolvimento de software.`,
};

export const skillsData = [
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Segurança",
    skills: [
      "Auditoria de segurança",
      "Ferramentas SIEM",
      "OWASP",
      "NIST CSF",
      "Modelagem de ameaças",
    ],
    color: "cyan",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Back-end",
    skills: ["Diagramação UML", "Java", "Spring Framework", "Node Js"],
    color: "magenta",
  },
  {
    icon: <AppWindow className="w-8 h-8" />,
    title: "Front-end",
    skills: ["Javascript", "React", "tailwind CSS", "handlebars"],
    color: "cyan",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Banco de dados",
    skills: [
      "Modelagem de dados",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "ORM & ODM",
    ],
    color: "magenta",
  },
];

export const projectsData = [
  {
    title: "Urbaniza",
    type: "Projeto Integrador",
    description:
      "Plataform de denúncia de problemas urbanos voltada para Smart Cities",
    tech: ["Java", "Spring Framework", "Javascript", "PostgreSQL"],
    features: ["CRUD", "Auth jwt", "Container Docker", "Migrations Flyway"],
    link: "#",
    status: "Desenvolvimento",
  },
  {
    title: "Auditoria de Segurança - Botium Toys",
    type: "Google Manage Security Risks",
    description:
      "Este projeto consiste em uma análise de auditoria de segurança para a empresa fictícia Botium Toys. Com base em um conjunto de documentos que descrevem o escopo, os ativos e a avaliação de risco da empresa.",
    tech: ["GDPR", "SOC", "NIST CSF", "PCI DSS"],
    features: ["Auditoria de segurança"],
    link: "https://github.com/DevsousaC/Controls-compliance-audit",
    status: "Concluído",
  },
  {
    title: "Landing Page advocacia",
    type: "Freelancer",
    description:
      "Projeto de landing page para escritório de advocacia pensando em imagem digital e funil de conversão.",
    tech: ["HTML5", "CSS3", "Javascript", "Formspree"],
    features: [
      "Google Analytics (GA4)",
      "Rastreamento de Conversões (Google Ads)",
      "Funil de Conversão Duplo",
    ],
    link: "https://github.com/DevsousaC/Meduneckas-website",
    status: "Desenvolvimento",
  },
];

export const aboutData = {
  description1:
    "Entusiasta de tecnologia e solucionador de problemas, atualmente trilhando minha carreira da área de suporte técnico para o desenvolvimento de software. Minha experiência em suporte me deu uma base sólida para entender as necessidades do usuário final e resolver desafios complexos.",
  description2:
    "Como desenvolvedor web freelancer, aplico minha criatividade para construir soluções digitais eficientes. Estou aprofundando meus conhecimentos em segurança com a certificação Profissional em Segurança da Informação do Google, buscando unir desenvolvimento e práticas seguras para criar aplicações robustas e confiáveis.",
  experience:
    "Estagiário de Suporte Técnico, com atuação paralela em projetos de desenvolvimento web como freelancer.",
  education: "Cursando Desenvolvimento de Software Multiplataforma.",
  languageSkills: [
    { name: "Java", level: 100 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 50 },
    { name: "Node.js", level: 25 },
  ],
};

export const contactData = {
  description:
    "Interessado em colaborar ou discutir oportunidades? Estou sempre aberto a novos desafios e projetos interessantes.",
  directContacts: [
    {
      icon: <Mail className="w-5 h-5 mr-3 text-cyan-400" />,
      text: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-5 h-5 mr-3 text-cyan-400" />,
      text: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
    },
    {
      icon: <MapPin className="w-5 h-5 mr-3 text-cyan-400" />,
      text: personalInfo.location,
    },
  ],
  socials: [
    {
      icon: <Linkedin className="w-5 h-5 mr-3" />,
      text: personalInfo.linkedin,
      href: `https://${personalInfo.linkedin}`,
    },
    {
      icon: <Github className="w-5 h-5 mr-3" />,
      text: personalInfo.github,
      href: `https://${personalInfo.github}`,
    },
  ],
};
