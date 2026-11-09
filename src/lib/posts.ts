import { getCollection } from "astro:content";

// Drafts are visible in `astro dev` only.
export async function getPosts() {
  const posts = await getCollection(
    "posts",
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Preview for the post list, like Jekyll's excerpt: the first paragraph
// with text in it. Images are dropped. Returns HTML.
export function getExcerpt(html: string | undefined) {
  for (const [, inner] of (html ?? "").matchAll(/<p>([\s\S]*?)<\/p>/g)) {
    const text = inner.replace(/<img[^>]*>/g, "").trim();
    if (text.replace(/<[^>]+>/g, "").trim()) return `<p>${text}</p>`;
  }
  return "";
}

// Same output as minima's "%b %-d, %Y", e.g. "Sep 21, 2026".
export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
