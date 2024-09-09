import SocialItemComponentProps from "./SocialItemComponentProps";

interface SocialItemData extends SocialItemComponentProps {
  order: number;
  isEnabled: boolean;
  group: {
    isGrouped: boolean;
    groupOrder?: number;
    orderInGroup?: number;
  };
}

export default SocialItemData;
