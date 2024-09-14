import SocialItemComponentProps from "../types/SocialLinkType";

const SocialItemComponent = ({
  text,
  link,
  emoji,
  image,
}: SocialItemComponentProps) => {
  const getClassNames = () => {
    if (emoji) return "py-1 pl-5";
    if (image) return "py-0 pl-0";
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
      {image && <img src={image} alt={`${text} icon`} className="mr-4 p-2" />}
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

export default SocialItemComponent;
