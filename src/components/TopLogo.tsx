import rcrdLogo from "./../assets/logo.svg";

const TopLogo = () => {
  return (
    <div className="p-8 sm:p-12">
      <img
        src={rcrdLogo}
        className="mx-auto hardShadow--top-logo"
        alt="RCRD logo"
        width="150"
      />
    </div>
  );
};

export default TopLogo;
