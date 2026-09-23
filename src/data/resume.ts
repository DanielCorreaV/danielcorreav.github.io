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
  fullName: "Tu Nombre",
  role: "Desarrollador de Software Full Stack",
  summary:
    "Construyo productos web con foco en experiencia de usuario y código mantenible. Me interesa especialmente el frontend, pero me muevo cómodo en todo el stack.",
  location: "Tu Ciudad, País",
  photo: "/images/profile.jpg",
  cvUrl: "/cv-tu-nombre.pdf",
};

export const stats = [
  { label: "Años de experiencia", value: "3+" },
  { label: "Proyectos completados", value: "12" },
  { label: "Tecnologías", value: "10+" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Empresa Ejemplo S.A.",
    role: "Desarrollador Frontend",
    startDate: "Ene 2024",
    endDate: "Presente",
    bullets: [
      "Lideré la migración de un módulo interno a un stack más liviano, reduciendo el tiempo de carga en 40%.",
      "Implementé un sistema de diseño compartido usado por 3 equipos de producto.",
    ],
    techTags: ["Angular", "TypeScript", "RxJS"],
  },
  {
    company: "Otra Empresa Ltda.",
    role: "Desarrollador Junior",
    startDate: "Jun 2022",
    endDate: "Dic 2023",
    bullets: [
      "Desarrollé y mantuve funcionalidades de una app móvil híbrida usada por miles de usuarios.",
      "Colaboré con diseño para pulir la UX de los flujos principales.",
    ],
    techTags: ["Ionic", "Angular"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Universidad Ejemplo",
    degree: "Ingeniería de Software",
    startDate: "2019",
    endDate: "2024",
    status: "completado",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["Angular", "Svelte", "Astro", "TypeScript"],
  },
  { category: "Backend", skills: ["Node.js", "Express"] },
  { category: "Herramientas", skills: ["Git", "Figma", "Docker"] },
];

export const languages: LanguageItem[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2 - Intermedio alto" },
];

export const certifications: CertificationItem[] = [
  { name: "Certificación de ejemplo", issuer: "Entidad emisora", year: "2023" },
];

export const workingStyle =
  'Prefiero iterar rápido y mostrar avances tempranos antes que desaparecer semanas con algo "perfecto". Me gusta documentar decisiones y dejar el código más claro de lo que lo encontré.';
