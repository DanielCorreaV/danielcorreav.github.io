export type ProjectStatus = "completado" | "en-progreso" | "archivado";
export type ProjectClassification = "destacado" | "personal" | "practica";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techTags: string[];
  status: ProjectStatus;
  classifications: ProjectClassification[];
  accent: string;
  cover: string;
  href?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const statusLabels: Record<ProjectStatus, string> = {
  completado: "Completado",
  "en-progreso": "En progreso",
  archivado: "Archivado",
};

export const projects: Project[] = [
  //Destacados
  {
    slug: "Siplac",
    title: "SIPLAC",
    tagline:
      "Sistema de Informacion Para la Planeación y Aseguramiento de la Calidad",
    description:
      "Aplicación universitaria desarrollada como proyecto de grado para comprometer las labores oficiales de un proceso de autoevaluación universitario. ",
    techTags: ["NestJS", "React", "TypeScript"],
    status: "completado",
    classifications: ["destacado"],
    accent: "#4f8cff",
    cover: "/images/projects/siplac/siplacposter.jpg",
    href: "/proyectos/siplac",
    githubUrl: "",
    liveUrl: "https://proyecto-uno.tudominio.com",
  },
  {
    slug: "staram",
    title: "Star⭐AM",
    tagline: "App de administracion de aula para docentes.",
    description: "Descripción más larga.",
    techTags: ["Ionic", "Tauri"],
    status: "en-progreso",
    classifications: ["destacado", "personal"],
    accent: "#61ff4f",
    cover: "/images/projects/staram/starposter.jpg",
    href: "/proyectos/staram",
    githubUrl: "https://github.com/DanielCorreaV/staram-demo",
  },
  {
    slug: "chafeji",
    title: "Chafeji-extension",
    tagline: "Extension de shimeji para el navegador",
    description:
      "Imagina a un shimeji moviendose por el escritorio, que sea autonomo y te acompañe en tu viaje de navegar por internet.",
    techTags: ["JavaScript"],
    status: "en-progreso",
    classifications: ["personal", "destacado"],
    accent: "#1a41ed",
    cover: "/images/projects/chafeji/chafejiposter.jpg",
    href: "/proyectos/chafeji",
    githubUrl: "",
  },

  //personales
  {
    slug: "domain",
    title: "Domain Chafeishon",
    tagline: "Extensión Para modificar dominios",
    description:
      "Esta extension te permite modificar las paginas a tu antojo, puedes injectar codigo css y js a tu antojo.",
    techTags: ["JavaScript"],
    status: "completado",
    classifications: ["personal"],
    accent: "#ff8a3d",
    cover: "",
    href: "/proyectos/domain",
    githubUrl: "",
  },
  {
    slug: "sloth-sentinel-web",
    title: "Sloth-sentinel-web",
    tagline: "Portal web de Sloth Sentinel",
    description:
      "Es una paina orientada a la organización de tareas con un estilo RPG",
    techTags: ["Svelte"],
    status: "completado",
    classifications: ["personal"],
    accent: "#6f5d4f",
    cover: "",
    href: "",
    githubUrl: "",
  },
  {
    slug: "sloth-sentinel-extension",
    title: "Sloth-sentinel-extension",
    tagline: "Extensión complementaria",
    description:
      "Es una extension orientada a complementar y expandir las posibilidades del portal we, ofreciendo una mejor experiencia.",
    techTags: ["JavaScript"],
    status: "en-progreso",
    classifications: ["personal"],
    accent: "#6f5d4f",
    cover: "",
    href: "",
    githubUrl: "",
  },
  {
    slug: "chafopoli",
    title: "Chafopoli",
    tagline: "Chafopoli: la copia de la copia",
    description:
      "Es un juego que hice para probar y practicar con firebase console, no pretende ser tan elaborado o divertido, solo es un experimento.",
    techTags: ["Angular", "Ionic", "NestJs", "Firebase"],
    status: "archivado",
    classifications: ["personal", "practica"],
    accent: "#f7f0eb",
    cover: "",
    href: "",
    githubUrl: "",
  },

  //practica

  //   {
  //     slug: "clon-trello",
  //     title: "Clon de Trello",
  //     tagline: "",
  //     description:
  //       "Tablero kanban hecho para practicar drag & drop y estado global.",
  //     techTags: ["Svelte"],
  //     status: "completado",
  //     classifications: ["practica", "personal"], // ejemplo de doble clasificación
  //     accent: "#7c5cff",
  //     cover: "/images/projects/clon-trello.jpg",
  //     githubUrl: "https://github.com/tu-usuario/clon-trello",
  //   },
  //   {
  //     slug: "calculadora-rpn",
  //     title: "Calculadora RPN",
  //     tagline: "",
  //     description:
  //       "Calculadora de notación polaca inversa, ejercicio de estructuras de datos.",
  //     techTags: ["TypeScript"],
  //     status: "completado",
  //     classifications: ["practica"],
  //     accent: "#ffb020",
  //     cover: "/images/projects/calculadora-rpn.jpg",
  //     githubUrl: "https://github.com/tu-usuario/calculadora-rpn",
  //   },
];
