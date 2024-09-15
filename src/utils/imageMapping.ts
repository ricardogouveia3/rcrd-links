import images from "../assets/images";

function getImage(imageKey: string): string | undefined {
  const imageMap: Record<string, string> = {
    topLogo: images.logos.rcrdLight,
    aboutMe: images.gravatar,

    linkPortfolio: images.logos.rcrdDark,
    linkDribbble: images.icons.dribbble,
    linkGitHub: images.icons.github,
    linkInstagram: images.icons.instagram,
    linkLinkedIn: images.icons.linkedin,
    linkThreads: images.icons.threads,
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
