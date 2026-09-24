export interface ContactLink {
  label: string;
  icon: string; // nombre de ícono en formato Iconify: "set:nombre"
  href: string;
  accent: string;
}

const GMAIL_ADDRESS = "correavegadaniel@gmail.com"; // cámbialo por tu correo real

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    href: "https://www.linkedin.com/in/daniel-correa-vega-503785335/",
    accent: "#0A66C2",
  },
  {
    label: "GitHub",
    icon: "simple-icons:github",
    href: "https://github.com/DanielCorreaV",
    accent: "#e8e8e8",
  },
  {
    label: "Correo",
    icon: "simple-icons:gmail",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ADDRESS}`,
    accent: "#EA4335",
  },
];
