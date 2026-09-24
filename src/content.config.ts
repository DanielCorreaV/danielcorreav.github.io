import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const methodology = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/methodology" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string().default("General"), // agrupa entradas en el sidebar
    order: z.number().default(0), // controla el orden manualmente
    draft: z.boolean().default(false),
  }),
});

const announcements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/announcements" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string().default("Novedad"), // ej: "Nuevo lanzamiento", "v2.0"
    date: z.coerce.date(),
    ctaLabel: z.string().default("Ver más"),
    ctaHref: z.string(),
    accent: z.string().default("#7c5cff"), // color del glow, uno por anuncio
  }),
});

export const collections = { methodology, announcements };
