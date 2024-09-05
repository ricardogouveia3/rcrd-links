import SocialItemProps from "../types/SocialItemProps";

const SocialItem = ({ text, link, emoji, image }: SocialItemProps) => {
  const classConditional = (
    emoji: string | undefined,
    image: string | undefined
  ) => {
    const emojiSpacing = emoji ? "py-1 pl-5" : "";
    const imageSpacing = image ? "py-0 pl-0" : "";
    const noneSpacing = "py-2 pl-5";

    if (emoji || image) return `${emojiSpacing} ${imageSpacing}`;
    return `${noneSpacing}`;
  };

  return (
    <a
      className={`${classConditional(
        emoji,
        image
      )} flex drop-shadow-xl shadow-inner rounded-lg items-center pr-3 font-bold bg-white hover:scale-105 transition-all w-full overflow-hidden`}
      href={link}
      rel="me noopener noreferrer"
      target="_blank"
    >
      {emoji ? <div className="mr-4 text-2xl">{emoji}</div> : ""}
      {image ? <img src={image} alt="item icon" className="mr-4 p-2" /> : ""}
      <p
        className={`${
          emoji || image ? "" : "text-center"
        } flex-grow leading-tight`}
      >
        {text}
      </p>
    </a>
  );
};

export default SocialItem;
