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
  // {
  //   slug: "",
  //   title: "Proyecto Uno",
  //   tagline: "Breve descripción del proyecto.",
  //   description: "Descripción más larga.",
  //   techTags: ["Astro", "TypeScript"],
  //   status: "completado",
  //   classifications: ["destacado", "personal"],
  //   accent: "#4f8cff",
  //   cover: "/images/projects/proyecto-uno.jpg",
  //   href: "/proyectos/proyecto-uno",
  //   githubUrl: "https://github.com/tu-usuario/proyecto-uno",
  //   liveUrl: "https://proyecto-uno.tudominio.com",
  // },
  {
    slug: "proyecto-dos",
    title: "Star⭐AM",
    tagline: "App de administracion de aula para docentes.",
    description: "Descripción más larga.",
    techTags: ["Astro", "Svelte"],
    status: "en-progreso",
    classifications: ["destacado"],
    accent: "#ff4f6d",
    cover: "/images/projects/staram/starposter.jpg",
    href: "/proyectos/staram",
    githubUrl: "https://github.com/tu-usuario/proyecto-dos",
  },
  //   {
  //     slug: "app-recetas",
  //     title: "App de Recetas",
  //     tagline: "Ionic + Angular, proyecto personal.",
  //     description: "Aplicación móvil para organizar recetas.",
  //     techTags: ["Angular", "Ionic"],
  //     status: "en-progreso",
  //     classifications: ["personal"],
  //     accent: "#ff8a3d",
  //     cover: "/images/projects/app-recetas.jpg",
  //     href: "/proyectos/app-recetas",
  //     githubUrl: "https://github.com/tu-usuario/app-recetas",
  //   },
  //   {
  //     slug: "app-recetas",
  //     title: "App de Recetas",
  //     tagline: "Ionic + Angular, proyecto personal.",
  //     description: "Aplicación móvil para organizar recetas.",
  //     techTags: ["Angular", "Ionic"],
  //     status: "en-progreso",
  //     classifications: ["personal"],
  //     accent: "#ff8a3d",
  //     cover: "/images/projects/app-recetas.jpg",
  //     href: "/proyectos/app-recetas",
  //     githubUrl: "https://github.com/tu-usuario/app-recetas",
  //   },
  //   {
  //     slug: "app-recetas",
  //     title: "App de Recetas",
  //     tagline: "Ionic + Angular, proyecto personal.",
  //     description: "Aplicación móvil para organizar recetas.",
  //     techTags: ["Angular", "Ionic"],
  //     status: "en-progreso",
  //     classifications: ["personal"],
  //     accent: "#ff8a3d",
  //     cover: "/images/projects/app-recetas.jpg",
  //     href: "/proyectos/app-recetas",
  //     githubUrl: "https://github.com/tu-usuario/app-recetas",
  //   },
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
