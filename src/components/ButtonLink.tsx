import Link from "../types/Link";
import {getImage} from "../assets/images.ts";

function ButtonLink({
  text,
  link,
  emoji,
  imageKey,
  isEnabled = true,
  featured = false,
  emojiFlag,
}: Readonly<Link>) {
  if (!isEnabled) return null;

  const linkImage = imageKey ? getImage(imageKey) : "";
  const linkEmojiFlag = emojiFlag ? getImage(emojiFlag) : "";

  const containerClassNames = `flex drop-shadow-xl shadow-inner rounded-lg items-center pr-3 font-bold bg-white hover:scale-105 transition-all w-full overflow-hidden ${
    emoji ? "py-1 pl-5" : featured ? "py-0 pl-0" : "py-2 pl-5"
  }`;

  const imageClassNames = featured ? "p-2" : "";
  const imageWidth = featured ? 80 : 24;

  return (
    <a
      className={containerClassNames}
      href={link}
      rel="me noopener noreferrer"
      target="_blank"
    >
      {emoji && <div className="mr-4 text-2xl">{emoji}</div>}
      {linkImage && (
        <img
          src={linkImage}
          alt={`${text} icon`}
          className={`${imageClassNames} mr-4`}
          width={imageWidth}
        />
      )}
      <p
        className={`${
          emoji || linkImage ? "" : "text-center"
        } flex-grow leading-tight`}
      >
        {text}
      </p>
      {linkEmojiFlag && (
        <img
          src={linkEmojiFlag}
          alt="Flag for language indicator icon"
          className="mr"
          width="24"
        />
      )}
    </a>
  );
}

export default ButtonLink;
