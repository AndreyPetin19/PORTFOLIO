function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="subtitle">Software & AI Projects</p>

        <h1>Building digital products with code, design and AI.</h1>

        <p className="hero-text">
          I am an aspiring software developer focused on web development,
          artificial intelligence and real-world digital products.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a
            href="https://github.com/AndreyPetin19"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-card">
        <h3>Portfolio Status</h3>
        <p>React portfolio project</p>
        <p>AI/Product case studies</p>
        <p>Hackathon participation</p>
        <p>IT STEP Academy student</p>
      </div>
    </section>
  );
}

export default Hero;