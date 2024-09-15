import React from "react";
import Link from "../types/Link";
import getImage from "../utils/imageMapping";

const ButtonLink: React.FC<Link> = ({
  text,
  link,
  emoji,
  imageKey,
  isEnabled = true,
  featured = false,
}) => {
  if (!isEnabled) return null;

  const linkImage = imageKey ? getImage(imageKey) : "";

  const getContainerClassNames = () => {
    if (emoji) return "py-1 pl-5";
    if (featured) return "py-0 pl-0";
    return "py-2 pl-5";
  };

  const getImageClassNames = () => {
    if (featured) return "p-2";
    return "";
  };

  const getImageWidth = () => {
    if (featured) return 80;
    return 24;
  };

  return (
    <a
      className={`${getContainerClassNames()} flex drop-shadow-xl shadow-inner rounded-lg items-center pr-3 font-bold bg-white hover:scale-105 transition-all w-full overflow-hidden`}
      href={link}
      rel="me noopener noreferrer"
      target="_blank"
    >
      {emoji && <div className="mr-4 text-2xl">{emoji}</div>}
      {linkImage && (
        <img
          src={linkImage}
          alt={`${text} icon`}
          className={`${getImageClassNames()} mr-4`}
          width={getImageWidth()}
        />
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
