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
    "Construyo productos web con una experiencia de usuario cuidada y código que da gusto mantener. El backend es mi terreno favorito, pero me muevo con soltura en todo el stack. Me impulsa innovar, aprender y ampliar mis horizontes con nuevas tecnologías y enfoques.",
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
      "Desarrollé módulos clave y servicios de la API del sistema.",
      "Lideré al equipo de trabajo, fortaleciendo la comunicación y la resolución de problemas.",
      "Diseñé parte del modelo principal de la base de datos.",
      "Integré la API con el frontend, conectando el backend con la experiencia del usuario final.",
    ],
    techTags: ["NestJS", "TypeScript", "RxJS", "Jira", "Scrum"],
  },
  {
    company: "Alcaldía de Cartagena",
    role: "Asistente de archivos",
    startDate: "Ene 2025",
    endDate: "Jul 2025",
    bullets: [
      "Mantuve la base de datos al día y elaboré reportes a la medida de cada solicitud.",
      "Atendí a personas durante la numeración de documentos de carácter público y privado.",
      "Digitalicé archivos para garantizar su vigencia en los registros digitales.",
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
  'Prefiero iterar rápido y mostrar avances tempranos en lugar de desaparecer semanas persiguiendo algo "perfecto". Documento mis decisiones y dejo el código más claro de lo que lo encontré. No me gusta cometer errores, pero no les temo: los admito sin rodeos y aprendo de ellos para no repetirlos y mantenerme en constante mejora.';
