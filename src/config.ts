type NavLink = { title: string; href: string; newTab?: boolean };

// Accounts shown in the footer, in this order. Leave one out to hide it.
export type Social = {
  dribbble?: string;
  facebook?: string;
  flickr?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  mastodon?: { username: string; instance: string };
  pinterest?: string;
  stackoverflow?: string; // the part after /users/, e.g. "123456/name"
  twitter?: string;
  youtube?: string;
};

export const SITE: {
  title: string;
  description: string;
  lang: string;
  author: { name: string; email?: string };
  social: Social;
  /** Default link preview image, a path under public/ (e.g. "/media/og.png"). */
  image?: string;
  /** Site logo for search engines, a path under public/. */
  logo?: string;
  nav: NavLink[];
} = {
  title: "Jeonguk Choi’s Weblog",
  description: "Notes on software, engineering, and things I’ve learned.",
  lang: "en",
  author: {
    name: "Jeonguk Choi",
    // Shown in the footer once set.
    email: "contact@cjeong.uk",
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
