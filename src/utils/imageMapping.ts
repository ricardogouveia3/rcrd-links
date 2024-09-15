import images from "../assets/images";

function getImage(imageKey: string): string | undefined {
  const imageMap: Record<string, string> = {
    topLogo: images.logos.rcrdLight,
    aboutMe: images.gravatar,
    linkPortfolio: images.logos.rcrdDark,
    linkBluesky: images.logos.bluesky,
    linkThreads: images.logos.threads,
    linkInstagram: images.logos.instagram,
    linkGitHub: images.logos.github,
    linkDevto: images.logos.devto,
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
  };

  return imageMap[imageKey];
}

export default getImage;
