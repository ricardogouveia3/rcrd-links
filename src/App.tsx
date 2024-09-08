import HtmlSP from "./components/HtmlSP";
import TopLogo from "./components/TopLogo";
import Footer from "./components/Footer";
import SocialItemsList from "./components/SocialItemsList";
import Header from "./components/Header";
import RoundContainer from "./components/RoundContainer";
import PageContainer from "./components/PageContainer";
import AboutMe from "./components/AboutMe";
import Npx from "./components/Npx";

import { getDocs, collection } from "firebase/firestore";
import { db } from "./config/firebase";

import SocialLinksData from "./data/social-links.json";
import SocialItemData from "./types/SocialItemData";
import { useEffect, useState } from "react";

function App() {
  const [socialLinksList, setSocialLinksList] = useState<SocialItemData[]>([]);

  useEffect(() => {
    const socialLinksCollectionRef = collection(db, "social-links");

    const getSocialLinksList = async () => {
      try {
        const data = getDocs(socialLinksCollectionRef);
        const filteredData = (await data).docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          link: doc.data().link,
          emoji: doc.data().emoji,
          image: doc.data().image,
          order: doc.data().order,
          isEnabled: doc.data().isEnabled,
          group: {
            isGrouped: doc.data().group.isGrouped,
            groupOrder: doc.data().group.groupOrder,
            orderInGroup: doc.data().group.orderInGroup,
          },
        }));
        setSocialLinksList(filteredData);
      } catch (error) {
        console.error(
          "Error fetching social data, using local. Error: ",
          error
        );
        setSocialLinksList(SocialLinksData);
      }
    };

    getSocialLinksList();
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
}

export default App;
