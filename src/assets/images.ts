import rcrdLight from "./logos/rcrd-light.svg";
import rcrdDark from "./logos/rcrd-dark.svg";
import blog from "./logos/blog.svg";
import htmlSP from "./logos/html-sp.svg";
import aileHeaderImg from "./logos/aile-logo-title.svg";

import bluesky from "./logos/bluesky.svg";
import dribbble from "./logos/dribbble.svg";
import github from "./logos/github.svg";
import instagram from "./logos/instagram.svg";
import linkedin from "./logos/linkedin.svg";
import threads from "./logos/threads.svg";
import devto from "./logos/devto.svg";
import unsplash from "./logos/unsplash.svg";
import speakerdeck from "./logos/speakerdeck.svg";

import flagPE from "./flags/pe-br.svg";
import flagPA from "./flags/pa-br.svg";
import flagSP from "./flags/sp-br.svg";
import flagBR from "./flags/br.svg";

import emojiFlagBrazil from "./flags/emoji-flag-brazil.png";
import emojiFlagUk from "./flags/emoji-flag-uk.png";

import mail from "./icons/mail.svg";

export const images = {
  rcrdLight,
  rcrdDark,
  blog,
  htmlSP,
  aileHeaderImg,
  bluesky,
  dribbble,
  github,
  instagram,
  linkedin,
  threads,
  devto,
  unsplash,
  speakerdeck,
  mail,
  flagPE,
  flagPA,
  flagSP,
  flagBR,
  emojiFlagBrazil,
  emojiFlagUk,
} as const;

const aliases: Record<string, keyof typeof images> = {
  topLogo: "rcrdLight",
  footerLogo: "rcrdLight",
  linkPortfolio: "rcrdDark",
  linkBluesky: "bluesky",
  linkThreads: "threads",
  linkInstagram: "instagram",
  linkGitHub: "github",
  linkDevto: "devto",
  linkBlog: "blog",
  linkDribbble: "dribbble",
  linkLinkedIn: "linkedin",
  linkUnsplash: "unsplash",
  linkLens: "instagram",
  linkSpeakerDeck: "speakerdeck",
  linkMail: "mail",
  htmlSPlogo: "htmlSP",
  emojiFlagBR: "emojiFlagBrazil",
  emojiFlagUK: "emojiFlagUk",
};

export function getImage(key: keyof typeof images | keyof typeof aliases | string): string {
  if (key in images) return <string>images[key as keyof typeof images];
  if (key in aliases) return <string>images[aliases[key as keyof typeof aliases]];

  console.warn(`Invalid image key: ${key}`);
  return <string>images.rcrdLight;
}

export type ImageKey = keyof typeof images | keyof typeof aliases;
