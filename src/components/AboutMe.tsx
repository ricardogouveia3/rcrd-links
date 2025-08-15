import getImage from "../utils/imageMapping";

const myPhoto = getImage(`aboutMe`);

const AboutMe = () => {
  return (
    <div className="p-12 bg-quartz-300 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="hidden sm:inline-block flex-none mb-0 mr-8 w-24 h-24 box-border">
          <a
            href="https://rcrd.dev"
            target="_blank"
            rel="noopener noreferrer"
            className=""
            aria-label="Visit RCRD"
          >
            <img
              loading="lazy"
              className="rounded-full transition-all hover:scale-110 border-4 border-white p-2 hover:p-0 hover:-rotate-6"
              src={myPhoto}
              alt="Ricardo Gouveia Gravatar"
            />
          </a>
        </div>
        <div>
          <h1 className="uppercase text-sm font-black mb-2" id="aboutMe">
            About Me
          </h1>
          <p>
            Hello, I'm <strong>Ricardo Gouveia</strong>, a front-end developer
            and UI designer specializing in creating user-friendly and visually
            appealing interfaces. I'm currently working at{" "}
            <a
              href="https://www.thoughtworks.com/pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline decoration-pure-purple-500 underline-offset-2"
              aria-label="Visit Thoughtworks"
            >
              Thoughtworks
            </a>{ }
            . I'm based in São Paulo, Brazil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
