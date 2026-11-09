# cjeong.uk

Personal weblog built with [Astro](https://astro.build). The look is ported from Jekyll's minima theme.

## Commands

| Command        | What it does                                         |
| -------------- | ---------------------------------------------------- |
| `pnpm dev`     | Dev server at `localhost:4321`. Shows drafts.        |
| `pnpm build`   | Builds `dist/` and the search index.                 |
| `pnpm preview` | Serves `dist/`. Use this to try search.              |

Pushing to `main` deploys to GitHub Pages.

## Writing a post

Create `src/content/posts/<slug>/index.md`. It is published at `/posts/<slug>/`.

```md
---
title: "Post title"
date: 2026-11-09
description: "Optional. Used for meta tags and RSS."
draft: true # Optional. Drafts appear only in `pnpm dev`.
---
```

### Media

- Images: put them next to the post and link relatively, e.g. `![](./diagram.png)`. Astro optimizes them at build time.
- Other files (video, PDF): put them in `public/media/<slug>/` and link to `/media/<slug>/file.mp4`.

## Layout

- `src/config.ts`: site title, author, nav links
- `src/content/posts/`: posts
- `src/pages/`: pages (`about.md`, `search.astro`, RSS)
- `src/styles/`: minima styles; colors and dark mode are in `_theme.scss`
