import getImage from "../utils/imageMapping";

const myPhoto = getImage(`aboutMe`);

const AboutMe = () => {
  return (
    <div className="p-12 bg-quartz-d40 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="flex-none mb-4 sm:mb-0 sm:mr-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full box-border">
          <img
            loading="lazy"
            className="mx-auto rounded-full shadow transition-all sm:hover:scale-110 border-4 border-white sm:p-2 sm:hover:p-0 sm:hover:-rotate-6"
            src={myPhoto}
            alt="Ricardo Gouveia Gravatar"
          />
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
            </a>
            . I'm based in São Paulo, Brazil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
