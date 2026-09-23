import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
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

export const collections = { notes, announcements };
