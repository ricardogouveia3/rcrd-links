import SocialItemProps from "./SocialItemProps";

interface SocialItemData extends SocialItemProps {
  order: number;
  isEnabled: boolean;
  group: {
    isGrouped: boolean;
    groupOrder?: number;
    orderInGroup?: number;
  };
}

export default SocialItemData;
