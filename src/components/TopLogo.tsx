import rcrdLogo from "./../assets/logo.svg";

const TopLogo = () => {
  return (
    <div className="p-8 sm:p-12">
      <img
        src={rcrdLogo}
        className="mx-auto hardShadow--top-logo sm:w-[150px] w-20 hover:scale-110 transition-all hover:-rotate-2"
        alt="RCRD logo"
      />
    </div>
  );
};

export default TopLogo;
