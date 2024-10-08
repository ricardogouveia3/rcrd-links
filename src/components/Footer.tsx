import getImage from "../utils/imageMapping";

const flagPE = getImage(`flagPE`);
const flagPA = getImage(`flagPA`);
const flagSP = getImage(`flagSP`);
const flagBR = getImage(`flagBR`);

const Footer = () => {
  return (
    <footer className="p-8 sm:p-12 text-center text-xs text-white flex flex-col gap-2">
      <p>
        2024 - Ricardo Gouveia -{" "}
        <a
          target="_blank"
          rel="noopener"
          className="underline decoration-pure-purple-500 underline-offset-2"
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"
        >
          CC BY-SA 4.0
        </a>{" "}
        (unless otherwise specified and/or in content replicated from other
        sources | Logos and trademarks belong to their respective owners)
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener"
          className="underline decoration-pure-purple-500 underline-offset-2"
          href="https://github.com/ricardogouveia3/rcrd-links"
        >
          Source code
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
  );
};

export default Footer;
