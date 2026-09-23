export interface ContactLink {
  label: string;
  icon: string; // nombre de ícono en formato Iconify: "set:nombre"
  href: string;
  accent: string;
}

const GMAIL_ADDRESS = "tu@gmail.com"; // cámbialo por tu correo real

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    href: "https://www.linkedin.com/in/tu-usuario",
    accent: "#0A66C2",
  },
  {
    label: "GitHub",
    icon: "simple-icons:github",
    href: "https://github.com/tu-usuario",
    accent: "#e8e8e8",
  },
  {
    label: "Computrabajo",
    icon: "arcticons:computrabajo",
    href: "https://www.computrabajo.com/curriculum/tu-usuario", // ajusta a la URL real de tu perfil
    accent: "#FF6600",
  },
  {
    label: "Correo",
    icon: "simple-icons:gmail",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ADDRESS}`,
    accent: "#EA4335",
  },
];
