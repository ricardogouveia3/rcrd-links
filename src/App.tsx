import { useEffect, useState } from "react";

import PageContainer from "./components/PageContainer";
import TopLogo from "./components/TopLogo";
import RoundContainer from "./components/RoundContainer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Npx from "./components/Npx";
import Footer from "./components/Footer";
import SocialItemsList from "./components/SocialItemsList";
import {fetchSocialLinks, fetchFeaturedItems} from "./utils/api";
import { SocialLink } from "./types/SocialLink";
import {FeaturedItemList} from "./components/FeaturedItemList.tsx";
import {TFeaturedItem} from "./components/FeaturedItem.tsx";

const App = () => {
  const [socialLinksList, setSocialLinksList] = useState<SocialLink[]>([]);
  const [featuredItemList, setFeaturedItemList] = useState<TFeaturedItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const socialLinksResponse = await fetchSocialLinks();
        setSocialLinksList(socialLinksResponse);

        const featuredItemsResponse = await fetchFeaturedItems();
        setFeaturedItemList(featuredItemsResponse);
      } catch (err) {
        console.error(`Failed to fetch firebase data. Error:  ${err}`);
      }
    };

    fetchData().then();
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
          <FeaturedItemList data={featuredItemList} />
        </main>
      </RoundContainer>
      <Footer />
    </PageContainer>
  );
};

export default App;
