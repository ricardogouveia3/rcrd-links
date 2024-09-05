import SocialItemProps from "../types/SocialItemProps";

const SocialItem = ({ text, link, emoji, image }: SocialItemProps) => {
  return (
    <a
      className={`${emoji ? "py-1" : "py-2"} ${
        image ? "py-0 pl-0" : "pl-5"
      } flex drop-shadow-xl shadow-inner rounded-lg items-center pr-3 font-bold bg-white hover:scale-105 transition-all w-full overflow-hidden`}
      href={link}
      rel="me noopener noreferrer"
      target="_blank"
    >
      {emoji ? <div className="mr-4 text-2xl">{emoji}</div> : ""}
      {image ? <img src={image} alt="item icon" className="mr-4 p-2" /> : ""}
      <p
        className={`${
          emoji || image ? "" : "text-center"
        } flex-grow pr-10 leading-tight`}
      >
        {text}
      </p>
    </a>
  );
};

export default SocialItem;
