import HtmlSP from "./components/HtmlSP";
import TopLogo from "./components/TopLogo";
import Footer from "./components/Footer";
import SocialItemsList from "./components/SocialItemsList";
import Header from "./components/Header";
import RoundContainer from "./components/RoundContainer";
import PageContainer from "./components/PageContainer";
import AboutMe from "./components/AboutMe";
import Npx from "./components/Npx";

import SocialLinksData from "./data/social-links.json";

function App() {
  return (
    <PageContainer>
      <TopLogo />
      <RoundContainer>
        <Header>
          <Npx />
          <AboutMe />
        </Header>
        <main>
          <SocialItemsList data={SocialLinksData} />
          <HtmlSP />
        </main>
      </RoundContainer>
      <Footer />
    </PageContainer>
  );
}

export default App;
