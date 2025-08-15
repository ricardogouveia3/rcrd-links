import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../config/firebase";
import SocialLinksData from "../data/social-links.json";
import FeaturedItemData from "../data/featured-items.json";
import { SocialLink } from "../types/SocialLink";
import {TFeaturedItem} from "../components/FeaturedItem.tsx";

const fetchFromFirestore = async <T extends DocumentData>(
  collectionName: string,
  fallbackData: T[]
): Promise<T[]> => {
  try {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as T));
  } catch (error) {
    console.error(`Error fetching ${collectionName}, using local data. Error:`, error);
    return fallbackData;
  }
};

export const fetchSocialLinks = (): Promise<SocialLink[]> =>
  fetchFromFirestore<SocialLink>("social-links", SocialLinksData);

export const fetchFeaturedItems = (): Promise<TFeaturedItem[]> =>
  fetchFromFirestore<TFeaturedItem>("featured-items", FeaturedItemData);
