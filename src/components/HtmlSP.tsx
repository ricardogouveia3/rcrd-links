import SocialItem from "./SocialItem";

import rcrdLogo from "./../assets/logo.svg";

const HtmlSP = () => {
  return (
    <section className="p-8 sm:p-12 bg-[#e97051] flex flex-col gap-6">
      <img src={rcrdLogo} className="mx-auto" alt="React logo" width="100" />
      <SocialItem
        name={"HTML SP"}
        link={"mailto:ricardogouveia3_@hotmail.com"}
        emoji={"👨🏽‍💻"}
      />
    </section>
  );
};

export default HtmlSP;
