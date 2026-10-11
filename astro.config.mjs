import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://danielcorreav.github.io",

  integrations: [icon()],

  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules/**", "**/.git/**", "C:/*"],
      },
    },
  },
});
