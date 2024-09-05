const AboutMe = () => {
  return (
    <div className="p-12 bg-[#2c2c2c] text-white">
      <h1 className="uppercase text-sm font-black mb-2" id="sobre">
        Sobre
      </h1>
      <div className="flex">
        <p>
          Sou <strong>Ricardo Gouveia</strong>. Sou desenvolvedor front-end e
          designer de interfaces. Moro em São Paulo, Brasil e trabalho na{" "}
          <a
            href="https://www.thoughtworks.com/pt-br"
            target="_blank"
            rel="noopener"
            className="font-bold underline decoration-pure-purple-500 underline-offset-2"
          >
            Thoughtworks
          </a>
          .{" "}
        </p>
        <div className="flex-none ml-8 w-24 h-24 rounded-full hidden sm:block box-border bg-black">
          <img
            loading="lazy"
            className="mx-auto rounded-full shadow transition-all hover:scale-110 border-4 border-white p-2 hover:p-0 hover:-rotate-6"
            src="https://www.gravatar.com/avatar/2fd6e9e968e8b59bcc70ca9c3adb9c24?s=256"
            alt="ricardogouveia3 Gravatar"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
