import rcrdLogo from "./assets/logo.svg";

import flagPE from "./assets/flags/pe-br.svg";
import flagPA from "./assets/flags/pa-br.svg";
import flagSP from "./assets/flags/sp-br.svg";
import flagBR from "./assets/flags/br.svg";

import amazonAd from "./assets/amazon-ad.jpg";

import SocialItem from "./components/SocialItem";

function App() {
  return (
    <div className="background-pattern">
      <div className="max-w-xl mx-auto">
        <div className="p-8 sm:p-12">
          <img src={rcrdLogo} className="mx-auto" alt="RCRD logo" width="150" />
        </div>

        <div className="overflow-hidden shadow-lg md:rounded-lg">
          <header>
            <div className="p-6 text-center bg-[#161616]">
              <div className="inline-block px-3 py-2 my-4 text-sm sm:text-xl rounded-lg shadow transition-all md:text-2xl text-white hover:scale-110">
                <code>npx ricardogouveia3</code>
              </div>
            </div>
            <div className="p-12 bg-[#2c2c2c] text-white">
              <h1 className="uppercase text-sm font-black mb-2" id="sobre">
                Sobre
              </h1>
              <div className="flex">
                <p>
                  Sou <strong>Ricardo Gouveia</strong>. Sou desenvolvedor
                  front-end e designer de interfaces. Moro em São Paulo, Brasil
                  e trabalho na{" "}
                  <a
                    href="https://joselito.link/turingcom"
                    target="_blank"
                    rel="noopener"
                    className="font-bold underline decoration-pure-purple-500 underline-offset-2"
                  >
                    Thoughtworks
                  </a>
                  .{" "}
                </p>
                <div className="flex-none ml-8 w-24 h-24 rounded-full hidden sm:block box-border">
                  <img
                    loading="lazy"
                    className="mx-auto rounded-full shadow transition-all hover:scale-110 border-4 border-white p-2 hover:p-0"
                    src="https://www.gravatar.com/avatar/2fd6e9e968e8b59bcc70ca9c3adb9c24?s=256"
                    alt="ricardogouveia3 Gravatar"
                  />
                </div>
              </div>
            </div>
          </header>
          <main>
            <div className="p-8 sm:p-12 bg-[#434343]">
              <nav className="max-w-xl mx-auto flex flex-col gap-4">
                <SocialItem
                  name={"Portfolio"}
                  link={"https://rcrd.dev"}
                  emoji={"👨🏽‍💻"}
                />
                <div className="flex w-full gap-4 flex-col sm:flex-row">
                  <SocialItem
                    name={"Bluesky"}
                    link={
                      "https://bsky.app/profile/ricardogouveia3.bsky.social"
                    }
                    emoji={"👨🏽‍💻"}
                  />
                  <SocialItem
                    name={"Threads"}
                    link={"https://www.threads.net/@ricardogouveia3"}
                    emoji={"👨🏽‍💻"}
                  />
                </div>
                <SocialItem
                  name={"Instagram"}
                  link={"https://instagram.com/ricardogouveia3"}
                  emoji={"👨🏽‍💻"}
                />
                <SocialItem
                  name={"GitHub"}
                  link={"https://github.com/ricardogouveia3"}
                  emoji={"👨🏽‍💻"}
                />
                <SocialItem
                  name={"Dribbble"}
                  link={"https://dribbble.com/ricardogouveia3"}
                  emoji={"👨🏽‍💻"}
                />
                <SocialItem
                  name={"LinkedIn"}
                  link={"https://linkedin.com/in/ricardogouveia3"}
                  emoji={"👨🏽‍💻"}
                />
                <div className="flex w-full gap-4 flex-col sm:flex-row">
                  <SocialItem
                    name={"Unsplash"}
                    link={"https://unsplash.com/pt-br/@rcrd_lens"}
                    emoji={"👨🏽‍💻"}
                  />
                  <SocialItem
                    name={"Photography Instagram"}
                    link={"https://instagram.com/rcrd.lens"}
                    emoji={"👨🏽‍💻"}
                  />
                </div>
                <SocialItem
                  name={"Speaker Deck"}
                  link={"https://speakerdeck.com/ricardogouveia3"}
                  emoji={"👨🏽‍💻"}
                />
                <SocialItem
                  name={"E-mail"}
                  link={"mailto:ricardogouveia3_@hotmail.com"}
                  emoji={"👨🏽‍💻"}
                />
              </nav>
            </div>

            <div className="p-8 sm:p-12 bg-[#e97051] flex flex-col gap-6">
              <img
                src={rcrdLogo}
                className="mx-auto"
                alt="React logo"
                width="100"
              />
              <SocialItem
                name={"HTML SP"}
                link={"mailto:ricardogouveia3_@hotmail.com"}
                emoji={"👨🏽‍💻"}
              />
            </div>
          </main>
          <div>
            <a
              href="https://joselito.link/prime"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={amazonAd}
                alt="Anúncio: Teste grátis por 30 dias o Amazon Prime"
              />
            </a>
          </div>
        </div>

        <footer className="p-8 sm:p-12 text-center text-xs text-white flex flex-col gap-2">
          <p>
            2024 - Ricardo Gouveia{" "}
            <a
              target="_blank"
              rel="noopener"
              className="underline decoration-pure-purple-500 underline-offset-2"
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"
            >
              (CC BY-SA 4.0)
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener"
              className="underline decoration-pure-purple-500 underline-offset-2"
              href="https://github.com/breakzplatform/joseli.to"
            >
              Código-fonte
            </a>{" "}
            - Design inspired by{" "}
            <a
              className="font-bold text-pelorous-300 underline decoration-1 underline-offset-4"
              rel="noopener"
              target="_blank"
              href="https://joselito.bio/pt/"
            >
              Joselito
            </a>
          </p>
          <p></p>
          <div className="flex justify-center gap-4">
            <img src={flagPE} alt="Pernambuco's flag" width="40" />
            <img src={flagPA} alt="Pará's flag" width="40" />
            <img src={flagSP} alt="São Paulo's Flag" width="40" />
            <img src={flagBR} alt="Brazil's flag" width="40" />{" "}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
