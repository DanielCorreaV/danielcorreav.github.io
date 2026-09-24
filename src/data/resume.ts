export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string; // usa "Presente" si sigue activo
  bullets: string[];
  techTags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  status: "completado" | "en-curso";
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export const profile = {
  fullName: "Daniel Correa Vega",
  role: "Desarrollador de Software Full Stack",
  summary:
    "Construyo productos web y mobile con foco en experiencia de usuario y código mantenible. Me interesa especialmente el backend, pero me muevo cómodo en todo el stack. Siempre busco formas de inovar y aprender, me gusta expandir siempre mis horizontes a nuevas tecnologias y enfoques.",

  location: "Cartagena de Indias, Colombia",
  photo: "/images/profile2.jpg",
  logo: "/images/dcv-icon.png",
  cvUrl: "/cv-Daniel-Correa-Vega.pdf",
};

export const stats = [
  { label: "Años de experiencia", value: "2+" },
  { label: "Proyectos completados", value: "5" },
  { label: "Tecnologías", value: "10+" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Fundación Universitaria Colombo Internacional UNICOLOMBO",
    role: "Desarrollador Backend",
    startDate: "Ago 2024",
    endDate: "Presente",
    bullets: [
      "Desarrollé módulos y servicios de la API con NestJS y TypeScript.",
      "Lideré al equipo día a día: mantuve la comunicación fluida y ayudé a destrabar problemas.",
      "Diseñé parte de la estructura de la base de datos.",
      "Integré la API con el frontend para que todo funcionara de punta a punta.",
    ],
    techTags: ["NestJS", "TypeScript", "RxJS", "Jira", "Scrum"],
  },
  {
    company: "Alcaldía de Cartagena",
    role: "Asistente de archivos",
    startDate: "Ene 2025",
    endDate: "Jul 2025",
    bullets: [
      "Mantuve la base de datos al día y armé los reportes que me solicitaban.",
      "Atendí a las personas durante la numeración de documentos públicos y privados.",
      "Digitalicé archivos para mantenerlos vigentes en los registros digitales.",
    ],
    techTags: ["Microsoft Office"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Fundación Universitaria Colombo Internacional UNICOLOMBO",
    degree: "Ingeniería en Sistemas",
    startDate: "2025",
    endDate: "Presente",
    status: "en-curso",
  },
  {
    institution: "Fundación Universitaria Colombo Internacional UNICOLOMBO",
    degree: "Tecnología en Desarrollo de Sistemas de Información y de Software",
    startDate: "2022",
    endDate: "2025",
    status: "completado",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["Angular", "Svelte", "Astro", "TypeScript"],
  },
  { category: "Backend", skills: ["Node.js", "Express", "NestJS", "Firebase"] },
  { category: "Herramientas", skills: ["Git", "Figma", "Docker", "Jira"] },
];

export const languages: LanguageItem[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2 · Intermedio alto" },
];

export const certifications: CertificationItem[] = [
  { name: "Primer respondiente a emergencias", issuer: "SURA", year: "2025" },
  {
    name: "Curso Especial en Formación Pedagógica Básica",
    issuer: "SENA",
    year: "2026",
  },
  {
    name: "Certificado Aptis · Nivel B2",
    issuer: "British Council",
    year: "2025",
  },
];

export const workingStyle =
  'Prefiero mostrar avances pronto y ajustar con feedback, en vez de desaparecer semanas buscando algo "perfecto". Documento mis decisiones y trato de dejar el código más claro de como lo encontré. No me gusta equivocarme, pero cuando pasa lo asumo, lo arreglo y aprendo para no repetirlo. Para mí, un buen equipo es donde se pregunta sin miedo y se avanza juntos.';
