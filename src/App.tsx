import rcrdLogo from "./assets/logo.svg";
import flagPE from "./assets/pe-flag.svg";

function App() {
  return (
    <div className="background-pattern ">
      <header className="pt-16 pb-8 w-full text-center flex flex-col items-center text-white">
        <img
          className="mx-auto rounded-full shadow transition-all hover:scale-110 border-4 border-white p-2 hover:p-0 mb-2"
          width="135"
          height="135"
          src="https://www.gravatar.com/avatar/2fd6e9e968e8b59bcc70ca9c3adb9c24?s=256"
          alt="ricardogouveia3 Gravatar"
        />

        <div className="flex justify-center items-center gap-4 my-4 px-8">
          <img
            src={rcrdLogo}
            className="logo react"
            alt="React logo"
            width="50"
          />
          <h1 className="text-4xl font-bold">Ricardo Gouveia</h1>
        </div>

        <div className="inline-block px-3 py-2 my-4 text-xl rounded-lg shadow transition-all md:text-2xl bg-[#161616] text-sand hover:scale-110">
          <code>npx ricardogouveia3</code>
        </div>
        <p className="px-8 mt-2 text-xl font-medium text-center">
          Front-end developer && UI designer
        </p>
      </header>

      <main>
        <div className="pb-16 mx-8">
          <nav className="mx-auto max-w-screen-sm">
            <a
              className="flex items-center px-3 py-2 my-6 text-xl text-center shadow font-bold bg-white rounded-full hover:scale-105 transition-all"
              href="mailto:eu@joseli.to"
              rel="me noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 text-4xl">📬</div>
              <div className="flex-grow pr-10">E-mail</div>
            </a>
            <a
              className="flex items-center px-3 py-2 my-6 text-xl text-center shadow font-bold bg-white rounded-full hover:scale-105 transition-all"
              href="https://bsky.app/profile/joseli.to"
              rel="me noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 text-4xl">🦋</div>
              <div className="flex-grow pr-10">Bluesky</div>
            </a>
            <a
              className="flex items-center px-3 py-2 my-6 text-xl text-center shadow font-bold bg-white rounded-full hover:scale-105 transition-all"
              href="https://www.instagram.com/breakzplatform"
              rel="me noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 text-4xl">📸</div>
              <div className="flex-grow pr-10">Instagram</div>
            </a>
            <a
              className="flex items-center px-3 py-2 my-6 text-xl text-center shadow font-bold bg-white rounded-full hover:scale-105 transition-all"
              href="https://www.github.com/breakzplatform"
              rel="me noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 text-4xl">💾</div>
              <div className="flex-grow pr-10">GitHub</div>
            </a>
            <a
              className="flex items-center px-3 py-2 my-6 text-xl text-center shadow font-bold bg-white rounded-full hover:scale-105 transition-all"
              href="https://www.linkedin.com/in/breakzplatform"
              rel="me noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 text-4xl">💼</div>
              <div className="flex-grow pr-10">LinkedIn</div>
            </a>
            <a
              className="flex items-center px-3 py-2 my-6 text-xl text-center shadow font-bold bg-white rounded-full hover:scale-105 transition-all"
              href="http://unsplash.com/@breakzplatform"
              rel="me noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 text-4xl">🌄</div>
              <div className="flex-grow pr-10">Unsplash</div>
            </a>
            <a
              className="flex items-center px-3 py-2 my-6 text-xl text-center shadow font-bold bg-white rounded-full hover:scale-105 transition-all"
              href="http://speakerdeck.com/joselito"
              rel="me noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 text-4xl">🎤</div>
              <div className="flex-grow pr-10">Speaker Deck</div>
            </a>
          </nav>
        </div>
      </main>
      <footer
        id="footer"
        className="flex flex-col items-center bg-[#161616] py-10 text-white gap-4"
      >
        <div>
          <img src={flagPE} alt="React logo" width="50" height="50" />
        </div>

        <p className="m-0 text-center">
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"
            rel="noopener"
            target="_blank"
            className="font-bold text-pelorous-300 underline decoration-1 underline-offset-4"
          >
            CC BY-SA 4.0
          </a>{" "}
          , exceto quando especificado o contrário e/ou nos conteúdos replicados
          de outras fontes.
        </p>
        <p>
          Design inspired by{" "}
          <a
            className="font-bold text-pelorous-300 underline decoration-1 underline-offset-4"
            rel="noopener"
            target="_blank"
            href="https://joselito.bio/pt/"
          >
            Joselito
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
