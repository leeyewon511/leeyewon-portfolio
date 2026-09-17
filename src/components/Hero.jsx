import "../styles/hero.css";

function Hero() {
  return (
    <section id="hero">
      <p className="hero-role">
        University Student · Web Developer
      </p>

      <h1 className="hero-title">
        HI, I&apos;M YEWON
      </h1>

      <p className="hero-description">
        A university student learning to build thoughtful
        and useful web experiences.
      </p>

      <a href="#contact" className="hero-button">
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
