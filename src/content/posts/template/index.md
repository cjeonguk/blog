---
# Required
title: "Post Template"
date: 2026-11-09

# Optional
updated: 2026-11-10 # Shown as "Updated" next to the date
description: "Shown on the home page instead of the first paragraph, and used for meta tags and RSS."
image: ./cover.png # Link preview image, relative to this file (1200×630 fits most previews)
draft: true # Only shown in `pnpm dev`. Remove or set to false to publish.
---

This is a template post. Copy this folder to `src/content/posts/<slug>/` to start a new post. It is published at `/posts/<slug>/`.

Without a `description`, the home page shows this first paragraph instead.

## Headings

Use `##` and below. The post title is already the page's `h1`.

### Third level

#### Fourth level

## Text

Text can be **bold**, *italic*, ~~struck through~~, or `inline code`. Links look like [this](https://astro.build).

> A blockquote.

- A list item
- Another item
  - A nested item

1. First
2. Second

## Code

```ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

## Table

| Field         | Required | Example        |
| ------------- | -------- | -------------- |
| `title`       | yes      | `"Post title"` |
| `date`        | yes      | `2026-11-09`   |
| `updated`     | no       | `2026-11-10`   |
| `description` | no       | `"Summary"`    |
| `image`       | no       | `./cover.png`  |
| `draft`       | no       | `true`         |

## Images

Put images next to the post and link relatively. Astro optimizes them at build time.

![A placeholder image](./cover.png)

Other files, like video or PDF, go in `public/media/<slug>/` and are linked as `/media/<slug>/file.mp4`.
