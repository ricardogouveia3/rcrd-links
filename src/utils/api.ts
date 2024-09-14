import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import SocialLinksData from "../data/social-links.json";
import SocialLinkType from "../types/SocialLinkType";

const fetchSocialLinks = async (): Promise<SocialLinkType[]> => {
  try {
    const socialLinksCollectionRef = collection(db, "social-links");
    const snapshot = await getDocs(socialLinksCollectionRef);

    const data: SocialLinkType[] = snapshot.docs.map((doc) => {
      const {
        text = "",
        link = "",
        emoji = "",
        image = "",
        order = 0,
        isEnabled = false,
        group = {},
      } = doc.data();

      const { isGrouped = false, groupOrder = 0, orderInGroup = 0 } = group;

      return {
        id: doc.id,
        text,
        link,
        emoji,
        image,
        order,
        isEnabled,
        group: {
          isGrouped,
          groupOrder,
          orderInGroup,
        },
      } as SocialLinkType;
    });

    return data;
  } catch (error) {
    console.error("Error fetching social data, using local. Error:", error);
    return SocialLinksData as unknown as SocialLinkType[];
  }
};

export default fetchSocialLinks;
