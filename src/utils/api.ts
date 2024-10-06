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
        emojiFlag = "",
      } = doc.data();

      return {
        id: doc.id,
        text,
        link,
        emoji,
        imageKey,
        order,
        isEnabled,
        featured,
        emojiFlag
      } as SocialLink;
    });

    return data;
  } catch (error) {
    console.error("Error fetching social data, using local. Error:", error);
    return SocialLinksData as SocialLink[];
  }
};

export default fetchSocialLinks;
