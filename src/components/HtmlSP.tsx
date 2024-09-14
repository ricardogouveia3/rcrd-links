import HTML_SP from "./../assets/html-sp.svg";
import SocialItemComponent from "./SocialItem";

const HtmlSP = () => {
  return (
    <section className={`p-8 sm:p-12 bg-flame-l20 flex flex-col gap-6`}>
      <img
        src={HTML_SP}
        className="mx-auto hardShadow sm:w-[120px] w-28"
        alt="React logo"
      />
      <SocialItemComponent
        text={"HTML SP Meetup Group"}
        link={"https://www.instagram.com/html_sp/"}
      />
    </section>
  );
};

export default HtmlSP;
