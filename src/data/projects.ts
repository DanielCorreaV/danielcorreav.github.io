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
  group?: string; // id de un grupo en projectGroups; en Práctica se muestra como una sola tarjeta
}

export interface ProjectGroup {
  title: string;
  description: string;
  accent: string;
}

export const projectGroups: Record<string, ProjectGroup> = {
  "url-shortener": {
    title: "URL Shortener",
    description:
      "Acortador de URLs construido como un sistema de microservicios, con la infraestructura definida como código con Terraform para AWS. Cada pieza vive en su propio repositorio.",
    accent: "#ff9900",
  },
};

export const statusLabels: Record<ProjectStatus, string> = {
  completado: "Completado",
  "en-progreso": "En progreso",
  archivado: "Archivado",
};

const GITHUB_USER = "DanielCorreaV";
const gh = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`;

const urlShortenerBase: Pick<
  Project,
  "status" | "classifications" | "accent" | "group"
> = {
  status: "completado",
  classifications: ["practica"],
  accent: "#ff9900",
  group: "url-shortener",
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

  {
    slug: "a1-sync-ai",
    title: "A1 Sync AI",
    tagline: "",
    description:
      "Práctica de redes neuronales con Python. Se planteó como un optimizador de despliegue de flota para Transcaribe, usado como pretexto para darle un problema concreto a la IA.",
    techTags: ["Python", "Redes neuronales"],
    status: "completado",
    classifications: ["practica"],
    accent: "#22d3ee",
    githubUrl: gh("A1-Sync-AI"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener",
    title: "URL Shortener",
    tagline: "",
    description:
      "Repositorio principal del acortador de URLs: la infraestructura del sistema definida como código con Terraform para AWS.",
    techTags: ["Terraform", "AWS"],
    githubUrl: gh("URL-Shortener"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener-init",
    title: "URL Shortener · Init",
    tagline: "",
    description:
      "Módulo de inicialización del acortador de URLs: prepara la base sobre la que se despliegan los demás servicios, con Terraform en AWS.",
    techTags: ["Terraform", "AWS"],
    githubUrl: gh("URL-Shortener-init"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener-auth",
    title: "URL Shortener · Auth",
    tagline: "",
    description:
      "Microservicio de autenticación del acortador de URLs, desplegado con Terraform en AWS.",
    techTags: ["Terraform", "AWS"],
    githubUrl: gh("URL-Shortener-auth"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener-shortener",
    title: "URL Shortener · Shortener",
    tagline: "",
    description:
      "Microservicio que acorta las URLs: recibe una dirección larga y genera su versión corta.",
    techTags: ["JavaScript", "Terraform", "AWS"],
    githubUrl: gh("URL-Shortener-shortener"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener-redirector",
    title: "URL Shortener · Redirector",
    tagline: "",
    description:
      "Microservicio que redirige un enlace corto hacia su dirección original, definido con Terraform en AWS.",
    techTags: ["Terraform", "AWS", "JavaScript"],
    githubUrl: gh("URL-Shortener-redirector"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener-stats",
    title: "URL Shortener · Stats",
    tagline: "",
    description:
      "Microservicio de estadísticas del acortador: registra y consulta datos de uso de los enlaces.",
    techTags: ["JavaScript", "Terraform", "AWS"],
    githubUrl: gh("URL-Shortener-stats"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener-front-stats",
    title: "URL Shortener · Front Stats",
    tagline: "",
    description:
      "Interfaz web para consultar las estadísticas de los enlaces acortados.",
    techTags: ["HTML", "Terraform", "JavaScript"],
    githubUrl: gh("URL-Shortener-front-stats"),
  },
  {
    ...urlShortenerBase,
    slug: "url-shortener-front-shorter-redirector",
    title: "URL Shortener · Front Shortener",
    tagline: "",
    description:
      "Interfaz web del acortador: permite crear enlaces cortos y usarlos para llegar a su destino.",
    techTags: ["HTML", "Terraform", "JavaScript", "CSS"],
    githubUrl: gh("URL-Shortener-front-shorter-redirector"),
  },

  // PIG BANK: descripciones provisionales deducidas del nombre, cuéntame qué hace cada uno
  {
    slug: "pig-bank-app",
    title: "PIG BANK App",
    tagline: "",
    description:
      "Aplicación de práctica desarrollada en TypeScript + Terraform. Forma parte del proyecto PIG BANK, junto con su microservicio de usuarios.",
    techTags: ["TypeScript", "CSS", "HTML"],
    status: "completado",
    classifications: ["practica"],
    accent: "#f472b6",
    githubUrl: gh("PIG_BANK_APP"),
  },
  {
    slug: "pig-bank-user-microservice",
    title: "PIG BANK · Usuarios",
    tagline: "",
    description:
      "Microservicio de usuarios de PIG BANK, con la infraestructura definida en Terraform.",
    techTags: ["Terraform"],
    status: "completado",
    classifications: ["practica"],
    accent: "#f472b6",
    githubUrl: gh("PIG_BANK_USER_MICROSERVICE"),
  },

  {
    slug: "task-master",
    title: "Task Master",
    tagline: "",
    description:
      "Gestor de tareas al estilo Jira, creado como pretexto para practicar la conexión de una aplicación propia con Active Directory. Todo el entorno se montó en una máquina virtual con Windows Server, y funciona.",
    techTags: ["EJS", "Active Directory", "Windows Server"],
    status: "completado",
    classifications: ["practica"],
    accent: "#60a5fa",
    githubUrl: gh("Task-Master"),
  },
  {
    slug: "safespaceweb",
    title: "SafeSpace Web",
    tagline: "",
    description:
      "Página sencilla con la temática de una app que no existe, hecha para una tarea de inglés. Sirvió únicamente para practicar frontend.",
    techTags: ["HTML", "CSS", "javaScript"], // ajusta al stack real
    status: "completado",
    classifications: ["practica"],
    accent: "#a78bfa",
    githubUrl: gh("safespaceweb"),
    liveUrl: "https://danielcorreav.github.io/safespaceweb/",
  },
];
