type NavLink = { title: string; href: string; newTab?: boolean };

export const SITE: {
  title: string;
  description: string;
  lang: string;
  author: { name: string; email?: string };
  social: { github?: string };
  nav: NavLink[];
} = {
  title: "Jeonguk Choi’s Weblog",
  description: "Notes on software, engineering, and things I’ve learned.",
  lang: "en",
  author: {
    name: "Jeonguk Choi",
    // Shown in the footer once set.
    email: undefined,
  },
  social: {
    github: "cjeonguk",
  },
  nav: [
    { title: "About", href: "/about/" },
    { title: "Search", href: "/search/" },
    { title: "Tools", href: "https://tools.cjeong.uk" },
    { title: "GitHub", href: "https://github.com/cjeonguk", newTab: true },
  ],
};
