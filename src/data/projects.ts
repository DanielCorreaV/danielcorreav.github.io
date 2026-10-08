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
  cover?: string;
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
    slug: "siplac",
    title: "SIPLAC",
    tagline:
      "Sistema de Información para la Planeación y el Aseguramiento de la Calidad.",
    description:
      "Plataforma centralizada para que instituciones de educación superior gestionen sus procesos de autoevaluación institucional: indicadores, características, factores, modelos, encuestas y documentos.",
    techTags: ["Angular", "TypeScript"], // ajusta al stack real
    status: "en-progreso", // ajusta si ya está completado
    classifications: ["destacado"], // agrega 'personal' si aplica
    accent: "#1a1db5",
    cover: "/images/projects/siplac/siplacposter.jpg", // sube una captura representativa aquí
    href: "/proyectos/siplac",
    githubUrl: undefined, // agrega si el repo es público
    liveUrl: undefined, // agrega si hay demo desplegada
  },
  {
    slug: "star-am",
    title: "STAR⭐AM",
    tagline: "Una única herramienta para organizar toda tu labor docente.",
    description:
      "Programa diseñado para sintetizar el trabajo del docente: organizaciones, asignaturas y clases, todo centralizado en un solo lugar, adaptable desde primaria y bachillerato hasta cursos, tutorías y clases universitarias.",
    techTags: ["Angular", "TypeScript"], // ajusta al stack real
    status: "en-progreso",
    classifications: ["personal", "destacado"],
    accent: "#f5a623",
    cover: "/images/projects/staram/starposter.jpg",
    href: "/proyectos/star-am",
    githubUrl: "https://github.com/DanielCorreaV/staram-demo", // ajusta al repo real
    liveUrl: "https://danielcorreav.github.io/staram-demo/", // ajusta al link real de la demo
  },

  {
    slug: "chafeji-extension",
    title: "chafeji.extension",
    tagline: "Una shimeji que vive en tu navegador.",
    description:
      "Extensión estilo shimeji: un personaje capaz de moverse por todo el ecosistema del navegador, aprender y actuar según sus estadísticas, e interactuar con la ventana y con el usuario.",
    techTags: ["TypeScript"], // ajusta al stack real
    status: "en-progreso",
    classifications: ["personal", "destacado"], // agrega 'destacado' si quieres que salga también en el Home
    accent: "#ff7eb6",
    cover: "/images/projects/chafeji/chafejiposter.jpg",
    href: "/proyectos/chafeji-extension",
    githubUrl: undefined, // agrega si el repo es público
    liveUrl: "", // ajusta al link real de la demo
  },

  //personales
  {
    slug: "domain-chafeishon",
    title: "domain-chafeishon",
    tagline: "Modifica el CSS e inyecta JS en cualquier página que visites.",
    description:
      "Extensión que permite modificar el CSS de las páginas e inyectar código JavaScript, con un sistema de importación y exportación para compartir estilos. Pensada para quienes saben de programación y desarrollo web.",
    techTags: ["JavaScript", "CSS"], // ajusta al stack real
    status: "en-progreso", // ajusta si ya está completado
    classifications: ["personal"], // ajusta si corresponde otra clasificación
    accent: "#38bdf8",
    cover: "",
    href: "/proyectos/domain-chafeishon",
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    slug: "sloth-sentinel-web",
    title: "Sloth Sentinel Web",
    tagline:
      "Un gestor de hábitos con alma de RPG y un perezoso como guardián.",
    description:
      "Gestor de hábitos y tareas personales con mecánicas de RPG: misiones diarias, XP, oro, rachas con escudos, cofres y una tienda donde tú defines tus propias recompensas reales.",
    techTags: ["Angular", "TypeScript"], // ajusta al stack real
    status: "en-progreso", // ajusta si ya está completado
    classifications: ["personal"], // agrega 'destacado' si quieres que salga en el Home
    accent: "#7bc96f",
    cover: "",
    href: "/proyectos/sloth-sentinel-web",
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    slug: "sloth-sentinel-extension",
    title: "Sloth Sentinel Extension",
    tagline:
      "Cumple tus misiones desde cualquier pestaña, sin volver a la página.",
    description:
      "Extensión de navegador que funciona como puente entre Sloth Sentinel Web y el usuario, permitiéndole cumplir misiones en cualquier parte y momento.",
    techTags: ["TypeScript", "Vite"], // ajusta al stack real
    status: "en-progreso",
    classifications: ["personal"],
    accent: "#4fb89a",
    cover: "",
    href: "/proyectos/sloth-sentinel-extension",
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    slug: "chafopoly",
    title: "Chafopoly",
    tagline: "Un juego de mesa por turnos online que es más parodia que juego.",
    description:
      "Experimento hecho para practicar Angular, Firebase y sus políticas de seguridad: un juego de mesa por turnos con estética de Monopoly y Morbopoly, tablero en forma de carrera y casillas con efectos, penitencias y recompensas.",
    techTags: ["Angular", "Firebase"],
    status: "archivado",
    classifications: ["personal", "practica"],
    accent: "#e0483a",
    // sin cover: se genera un banner automático
    href: "/proyectos/chafopoly",
    githubUrl: undefined,
    liveUrl: "https://chafopoly.tudominio.com", // ajusta al link real de la versión desplegada
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
