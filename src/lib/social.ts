import { SITE, type Social } from "../config";

type SocialLink = { icon: string; label: string; url: string };

// Profile URLs follow minima's _includes/social.html.
const profiles: { [K in keyof Social]-?: (value: NonNullable<Social[K]>) => string } = {
  dribbble: (user) => `https://dribbble.com/${user}`,
  facebook: (user) => `https://www.facebook.com/${user}`,
  flickr: (user) => `https://www.flickr.com/photos/${user}`,
  github: (user) => `https://github.com/${user}`,
  instagram: (user) => `https://instagram.com/${user}`,
  linkedin: (user) => `https://www.linkedin.com/in/${user}`,
  mastodon: ({ username, instance }) => `https://${instance}/@${username}`,
  pinterest: (user) => `https://www.pinterest.com/${user}`,
  stackoverflow: (id) => `https://stackoverflow.com/users/${id}`,
  twitter: (user) => `https://x.com/${user}`,
  youtube: (user) => `https://www.youtube.com/${user}`,
};

/** The accounts set in SITE.social, in the order of `profiles`. */
export function getSocialLinks(): SocialLink[] {
  return (Object.keys(profiles) as (keyof Social)[]).flatMap((icon) => {
    const value = SITE.social[icon];
    if (!value) return [];
    const url = (profiles[icon] as (v: typeof value) => string)(value);
    const label =
      typeof value === "string" ? value.split("/").pop()! : `@${value.username}@${value.instance}`;
    return [{ icon, label, url }];
  });
}
