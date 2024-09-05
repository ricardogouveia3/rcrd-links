import SocialItem from "./SocialItem";

import HTML_SP from "./../assets/html-sp.svg";

const HtmlSP = () => {
  return (
    <section className="p-8 sm:p-12 bg-[#e97051] flex flex-col gap-6">
      <img
        src={HTML_SP}
        className="mx-auto hardShadow sm:w-[120px] w-28"
        alt="React logo"
      />
      <SocialItem
        text={"HTML SP Meetup Group"}
        link={"https://www.instagram.com/html_sp/"}
      />
    </section>
  );
};

export default HtmlSP;
