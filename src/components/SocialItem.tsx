import { SocialLink } from "../types/SocialLink";
import ButtonLink from "./ButtonLink";

const SocialItem: React.FC<SocialLink> = (props) => {
  console.log(props);
  return (
    <ButtonLink
      text={props.text}
      link={props.link}
      emoji={props.emoji}
      imageKey={props.imageKey}
      isEnabled={props.isEnabled}
    />
  );
};

export default SocialItem;
