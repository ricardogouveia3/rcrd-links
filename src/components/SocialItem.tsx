import SocialItemProps from "../types/SocialItemProps";

const SocialItem = ({ text, link, emoji }: SocialItemProps) => {
  return (
    <a
      className={`${
        emoji ? "py-1" : "py-2"
      } flex drop-shadow-xl shadow-inner rounded-lg items-center pl-5 pr-3 font-bold bg-white hover:scale-105 transition-all w-full`}
      href={link}
      rel="me noopener noreferrer"
      target="_blank"
    >
      {emoji ? <div className="mr-4 text-2xl">{emoji}</div> : ""}
      <p
        className={`${
          emoji ? "" : "text-center"
        } flex-grow pr-10 leading-tight`}
      >
        {text}
      </p>
    </a>
  );
};

export default SocialItem;
