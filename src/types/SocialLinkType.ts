type SocialLinkType = {
  id: string;
  text: string;
  link: string;
  emoji?: string;
  image?: string;
  order: number;
  isEnabled: boolean;
  group: {
    isGrouped: boolean;
    groupOrder?: number;
  };
};

export default SocialLinkType;
