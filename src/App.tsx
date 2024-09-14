import { useEffect, useState } from "react";
import SocialLinksData from "./data/social-links.json"; // Ensure this data matches SocialLinkType

import PageContainer from "./components/PageContainer";
import TopLogo from "./components/TopLogo";
import RoundContainer from "./components/RoundContainer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Npx from "./components/Npx";
import HtmlSP from "./components/HtmlSP";
import Footer from "./components/Footer";
import SocialItemsList from "./components/SocialItemsList";
import fetchSocialLinks from "./utils/api";
import SocialLinkType from "./types/SocialLinkType";

const App = () => {
  const [socialLinksList, setSocialLinksList] = useState<SocialLinkType[]>(
    SocialLinksData as SocialLinkType[]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSocialLinks();
        setSocialLinksList(response);
      } catch (err) {
        console.error(`Failed to fetch social links. Error:  ${err}`);
      }
    };

    fetchData();
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
