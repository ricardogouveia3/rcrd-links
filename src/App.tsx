import HtmlSP from "./components/HtmlSP";
import AmazonPrimeBanner from "./components/AmazonPrimeBanner";
import TopLogo from "./components/TopLogo";
import Footer from "./components/Footer";
import SocialItemsList from "./components/SocialItemsList";
import Header from "./components/Header";
import RoundContainer from "./components/RoundContainer";
import PageContainer from "./components/PageContainer";
import AboutMe from "./components/AboutMe";
import Npx from "./components/Npx";
import SocialItem from "./components/SocialItem";
import DoubleRowItem from "./components/DoubleRowItem";

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
          <SocialItemsList>
            <SocialItem
              text={"Portfolio"}
              link={"https://rcrd.dev"}
              emoji={"👨🏽‍💻"}
            />
            <DoubleRowItem>
              <SocialItem
                text={"Bluesky"}
                link={"https://bsky.app/profile/ricardogouveia3.bsky.social"}
                emoji={"🦋"}
              />
              <SocialItem
                text={"Threads"}
                link={"https://www.threads.net/@ricardogouveia3"}
                emoji={"📧"}
              />
            </DoubleRowItem>
            <SocialItem
              text={"Instagram"}
              link={"https://instagram.com/ricardogouveia3"}
              emoji={"📸"}
            />
            <DoubleRowItem>
              {" "}
              <SocialItem
                text={"GitHub"}
                link={"https://github.com/ricardogouveia3"}
                emoji={"💻"}
              />
              <SocialItem
                text={"Dev.to"}
                link={"https://dev.to/rcrd"}
                emoji={"📜"}
              />
            </DoubleRowItem>

            <SocialItem
              text={"Dribbble"}
              link={"https://dribbble.com/ricardogouveia3"}
              emoji={"🎨"}
            />
            <SocialItem
              text={"LinkedIn"}
              link={"https://linkedin.com/in/ricardogouveia3"}
              emoji={"💼"}
            />
            <DoubleRowItem>
              <SocialItem
                text={"Unsplash"}
                link={"https://unsplash.com/pt-br/@rcrd_lens"}
                emoji={"🖼️"}
              />
              <SocialItem
                text={"Photography Instagram"}
                link={"https://instagram.com/rcrd.lens"}
                emoji={"📷"}
              />
            </DoubleRowItem>
            <SocialItem
              text={"Speaker Deck"}
              link={"https://speakerdeck.com/ricardogouveia3"}
              emoji={"📽️"}
            />
            <SocialItem
              text={"E-mail"}
              link={"mailto:ricardogouveia3_@hotmail.com"}
              emoji={"✉️"}
            />
          </SocialItemsList>
          <HtmlSP />
          <AmazonPrimeBanner />
        </main>
      </RoundContainer>
      <Footer />
    </PageContainer>
  );
}

export default App;
