import amazonAd from "./../assets/amazon-ad.jpg";

const AmazonPrimeBanner = () => {
  return (
    <section>
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
    </section>
  );
};

export default AmazonPrimeBanner;
