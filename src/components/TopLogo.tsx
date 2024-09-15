import getImage from "../utils/imageMapping";

const rcrdLogoDark = getImage(`topLogo`);

const TopLogo = () => {
  return (
    <div className="p-8 sm:p-12">
      <img
        src={rcrdLogoDark}
        className="mx-auto hardShadow--top-logo sm:w-[150px] w-20 hover:scale-110 transition-all hover:-rotate-2"
        alt="RCRD logo"
      />
    </div>
  );
};

export default TopLogo;
