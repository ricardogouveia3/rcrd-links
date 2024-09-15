import React from "react";
import Link from "../types/Link";
import getImage from "../utils/imageMapping";

const ButtonLink: React.FC<Link> = ({
  text,
  link,
  emoji,
  imageKey,
  isEnabled = true,
}) => {
  if (!isEnabled) return null;

  const linkImage = imageKey ? getImage("linkPortfolio") : "";
  console.log(imageKey);

  const getClassNames = () => {
    if (emoji) return "py-1 pl-5";
    if (linkImage) return "py-0 pl-0";
    return "py-2 pl-5";
  };

  return (
    <a
      className={`${getClassNames()} flex drop-shadow-xl shadow-inner rounded-lg items-center pr-3 font-bold bg-white hover:scale-105 transition-all w-full overflow-hidden`}
      href={link}
      rel="me noopener noreferrer"
      target="_blank"
    >
      {emoji && <div className="mr-4 text-2xl">{emoji}</div>}
      {linkImage && (
        <img src={linkImage} alt={`${text} icon`} className="mr-4 p-2" />
      )}
      <p
        className={`${
          emoji || linkImage ? "" : "text-center"
        } flex-grow leading-tight`}
      >
        {text}
      </p>
    </a>
  );
};

export default ButtonLink;
