import { SocialLink } from "../types/SocialLink";
import ButtonLink from "./ButtonLink";

const SocialItem: React.FC<SocialLink> = (props) => {
  return (
    <ButtonLink
      text={props.text}
      link={props.link}
      emoji={props.emoji}
      image={props.image}
      isEnabled={props.isEnabled}
    />
  );
};

export default SocialItem;
