import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tu-dominio.com", // cámbialo cuando tengas el dominio
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // /proyectos (es), /en/proyectos (en)
    },
  },
});
