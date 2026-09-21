export type ProjectStatus = "completado" | "en-progreso" | "archivado";
export type ProjectClassification = "destacado" | "personal" | "practica";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techTags: string[];
  status: ProjectStatus;
  classification: ProjectClassification;
  accent: string;
  cover: string;
  href?: string; // solo destacado/personal (páginas propias)
  githubUrl?: string;
  liveUrl?: string;
}

export const statusLabels: Record<ProjectStatus, string> = {
  completado: "Completado",
  "en-progreso": "En progreso",
  archivado: "Archivado",
};

export const projects: Project[] = [
  {
    slug: "proyecto-uno",
    title: "Proyecto Uno",
    tagline: "Breve descripción del proyecto.",
    description: "Descripción más larga.",
    techTags: ["Astro", "TypeScript"],
    status: "completado",
    classification: "destacado",
    accent: "#4f8cff",
    cover: "/images/projects/proyecto-uno.jpg",
    href: "/proyectos/proyecto-uno",
    githubUrl: "https://github.com/tu-usuario/proyecto-uno",
    liveUrl: "https://proyecto-uno.tudominio.com",
  },
  {
    slug: "app-recetas",
    title: "App de Recetas",
    tagline: "Ionic + Angular, proyecto personal.",
    description: "Aplicación móvil para organizar recetas.",
    techTags: ["Angular", "Ionic"],
    status: "en-progreso",
    classification: "personal",
    accent: "#ff8a3d",
    cover: "/images/projects/app-recetas.jpg",
    href: "/proyectos/app-recetas",
    githubUrl: "https://github.com/tu-usuario/app-recetas",
  },
  {
    slug: "clon-trello",
    title: "Clon de Trello",
    tagline: "",
    description:
      "Tablero kanban hecho para practicar drag & drop y estado global.",
    techTags: ["Svelte"],
    status: "completado",
    classification: "practica",
    accent: "#7c5cff",
    cover: "/images/projects/clon-trello.jpg",
    githubUrl: "https://github.com/tu-usuario/clon-trello",
  },
  // agrega el resto de tus proyectos aquí
];
