import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// A post is either `posts/<slug>.md` or `posts/<slug>/index.md`.
// The folder form lets images live next to the post.
const posts = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/*.md",
    generateId: ({ entry }) => entry.replace(/(\/index)?\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      description: z.string().optional(),
      // Link preview image, relative to the post (e.g. ./cover.png).
      image: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
