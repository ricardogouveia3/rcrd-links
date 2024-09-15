import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import SocialLinksData from "../data/social-links.json";
import { SocialLink } from "../types/SocialLink";

const fetchSocialLinks = async (): Promise<SocialLink[]> => {
  try {
    const socialLinksCollectionRef = collection(db, "social-links");
    const snapshot = await getDocs(socialLinksCollectionRef);

    const data: SocialLink[] = snapshot.docs.map((doc) => {
      const {
        text = "",
        link = "",
        emoji = "",
        imageKey = "",
        order = 0,
        isEnabled = true,
        featured = false,
        group = {},
      } = doc.data();

      const { isGrouped = false, groupOrder = 0, orderInGroup = 0 } = group;

      return {
        id: doc.id,
        text,
        link,
        emoji,
        imageKey,
        order,
        isEnabled,
        featured,
        group: {
          isGrouped,
          groupOrder,
          orderInGroup,
        },
      } as SocialLink;
    });

    return data;
  } catch (error) {
    console.error("Error fetching social data, using local. Error:", error);
    return SocialLinksData as unknown as SocialLink[];
  }
};

export default fetchSocialLinks;
