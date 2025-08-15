import {ImageKey} from "../utils/imageMapping.ts";

export interface Link {
  text: string;
  link: string;
  emoji?: string;
  imageKey?: ImageKey;
  isEnabled?: boolean;
  featured?: boolean;
  emojiFlag?: ImageKey;
}

export default Link;
