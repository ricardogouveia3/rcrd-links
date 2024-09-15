import { Link } from "./Link";

export interface SocialLink extends Link {
  id: string;
  order: number;
  featured?: boolean;
  group: {
    isGrouped: boolean;
    groupOrder?: number;
  };
}
