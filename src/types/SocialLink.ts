import { Link } from "./Link";

export interface SocialLink extends Link {
  id: string;
  order: number;
  group: {
    isGrouped: boolean;
    groupOrder?: number;
  };
}
