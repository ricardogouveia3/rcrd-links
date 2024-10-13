import ButtonLink from "./ButtonLink";
import getImage from "../utils/imageMapping";

const htmlSPlogo = getImage(`htmlSPlogo`);

const HtmlSP = () => {
  return (
    <section className="p-8 sm:p-12 bg-flame flex flex-col gap-6">
      <img
        src={htmlSPlogo}
        className="mx-auto hardShadow sm:w-[120px] w-28"
        alt="HTML SP logo"
      />
      <ButtonLink
        text="HTML SP Meetup Group"
        link="https://www.instagram.com/html_sp/"
      />
    </section>
  );
};

export default HtmlSP;
