import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./config/firebase";

import SocialLinksData from "./data/social-links.json";

import PageContainer from "./components/PageContainer";
import TopLogo from "./components/TopLogo";
import RoundContainer from "./components/RoundContainer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Npx from "./components/Npx";
import HtmlSP from "./components/HtmlSP";
import Footer from "./components/Footer";
import SocialItemData from "./types/SocialItemData";
import SocialItemsList from "./components/SocialItemsList";

const App = () => {
  const [socialLinksList, setSocialLinksList] =
    useState<SocialItemData[]>(SocialLinksData);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const socialLinksCollectionRef = collection(db, "social-links");
        const snapshot = await getDocs(socialLinksCollectionRef);

        const data: SocialItemData[] = snapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            id: doc.id,
            text: docData.text || "",
            link: docData.link || "",
            emoji: docData.emoji || "",
            image: docData.image || "",
            order: docData.order || 0,
            isEnabled: docData.isEnabled || false,
            group: {
              isGrouped: docData.group?.isGrouped || false,
              groupOrder: docData.group?.groupOrder || 0,
              orderInGroup: docData.group?.orderInGroup || 0,
            },
          };
        });

        setSocialLinksList(data);
      } catch (error) {
        console.error("Error fetching social data, using local. Error:", error);
        setSocialLinksList(SocialLinksData);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <PageContainer>
      <TopLogo />
      <RoundContainer>
        <Header>
          <Npx />
          <AboutMe />
        </Header>
        <main>
          <SocialItemsList data={socialLinksList} />
          <HtmlSP />
        </main>
      </RoundContainer>
      <Footer />
    </PageContainer>
  );
};

export default App;
