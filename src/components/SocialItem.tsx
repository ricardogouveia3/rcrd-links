import SocialItemProps from "../types/SocialItemProps";

const SocialItem = ({ name, link, emoji }: SocialItemProps) => {
  return (
    <a
      className="flex drop-shadow-xl shadow-inner rounded-lg px-4 border-2 border-transparent items-center pl-5 pr-3 py-2 font-bold bg-white hover:scale-105 transition-all w-full"
      href={link}
      rel="me noopener noreferrer"
      target="_blank"
    >
      <div className="mr-4">{emoji}</div>{" "}
      <div className="flex-grow pr-10">{name}</div>
    </a>
  );
};

export default SocialItem;
