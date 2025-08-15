import images from "../assets/images";

const imageMap = {
  aileHeaderImg: images.logos.aileHeaderImg,
  topLogo: images.logos.rcrdLight,
  footerLogo: images.logos.rcrdLight,
  aboutMe: images.gravatar,
  linkPortfolio: images.logos.rcrdDark,
  linkBluesky: images.logos.bluesky,
  linkThreads: images.logos.threads,
  linkInstagram: images.logos.instagram,
  linkGitHub: images.logos.github,
  linkDevto: images.logos.devto,
  linkBlog: images.logos.blog,
  linkDribbble: images.logos.dribbble,
  linkLinkedIn: images.logos.linkedin,
  linkUnsplash: images.logos.unsplash,
  linkLens: images.logos.instagram,
  linkSpeakerDeck: images.logos.speakerdeck,
  linkMail: images.icons.mail,
  htmlSPlogo: images.logos.htmlSP,
  flagPE: images.flags.pernambuco,
  flagPA: images.flags.para,
  flagSP: images.flags.saoPaulo,
  flagBR: images.flags.brazil,
  emojiFlagBR: images.emoji.brazil,
  emojiFlagUK: images.emoji.uk,
} as const;

export type ImageKey = keyof typeof imageMap;

function getImage(imageKey: string): string {
  return <string>imageMap[imageKey];
}

export default getImage;