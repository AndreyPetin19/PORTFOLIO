import { Routes, Route, Link } from "react-router-dom";
import CheckBus from "./CheckBus.jsx";
import "./index.css";
import Zeama from "./Zeama.jsx";

function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="logo">Andrey Petin</div>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">Software & AI Projects</p>

          <h1>Building digital products with code, design and AI.</h1>

          <p className="hero-text">
            I am an aspiring IT student focused on web development,
            artificial intelligence and real-world startup projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a
              href="https://github.com/AndreyPetin19"
              target="_blank"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Portfolio Status</h3>
          <p>1 active project</p>
          <p>2 upcoming projects</p>
          <p>Hackathon finalist</p>
          <p>IT STEP Academy student</p>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          My name is Andrey Petin. I am an aspiring IT student focused on
          software development, artificial intelligence and building real-world
          digital products.
        </p>

        <p style={{ marginTop: "16px" }}>
          I am currently studying at IT STEP Academy on the Software
          Development course, where I continue to improve my programming,
          web development and technical problem-solving skills. After
          completing the course, I plan to attach my diploma or certificate
          to this portfolio.
        </p>

        <p style={{ marginTop: "16px" }}>
          I am particularly interested in creating systems that solve practical
          problems — from web platforms to AI-based solutions. My goal is not
          only to learn technologies, but to apply them in projects that have
          real value and scalability.
        </p>

        <p style={{ marginTop: "16px" }}>
          I have experience working with modern technologies such as React,
          FastAPI and basic AI tools. I continuously improve my skills by
          building projects, learning new frameworks and exploring software
          engineering.
        </p>

        <p style={{ marginTop: "16px" }}>
          Outside of IT, I have a strong background in sports — 6 years of
          basketball, multiple-time city and national champion — which
          developed my discipline, teamwork and competitive mindset.
        </p>
      </section>

      <section className="section">
  <h2>Skills</h2>

  <div className="skills-grid">
    <div className="skill-card">
      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript, React</p>
    </div>

    <div className="skill-card">
      <h3>Backend</h3>
      <p>FastAPI, basic Node.js</p>
    </div>

    <div className="skill-card">
      <h3>AI</h3>
      <p>YOLO, computer vision basics</p>
    </div>

    <div className="skill-card">
      <h3>Tools</h3>
      <p>Git, GitHub, Vercel, VS Code</p>
    </div>
  </div>
</section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card active">
  <span className="tag">AI SaaS Project</span>

  <h3>ZEAMA</h3>

  <p>
    AI-powered platform for analyzing customer reviews and generating
    structured business insights.
  </p>

  <div className="tech-list">
    <span>React</span>
    <span>AI</span>
    <span>SaaS</span>
    <span>Analytics</span>
  </div>

  <div className="project-buttons">
    <Link to="/projects/zeama" className="small-btn">
      View Case
    </Link>

    <a
      href="https://zeama.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="small-btn outline"
    >
      Live Demo
    </a>
  </div>
</div>

        <div className="projects-grid">
          <div className="project-card active">
            <span className="tag">Active Project</span>
            <h3>CheckBus</h3>

            <p>
              AI-based concept for detecting unpaid passengers in public
              transport using computer vision and system analytics.
            </p>

            <div className="tech-list">
              <span>React</span>
              <span>FastAPI</span>
              <span>AI</span>
              <span>YOLO</span>
            </div>

            <div className="project-buttons">
              <Link to="/projects/checkbus" className="small-btn">
                View Case
              </Link>

              <a
                href="https://github.com/AndreyPetin19"
                target="_blank"
                className="small-btn outline"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <span className="tag muted">Coming Soon</span>
            <h3>AI Study Assistant</h3>

            <p>
              A future AI platform that helps students summarize materials,
              generate quizzes and study with an intelligent assistant.
            </p>
          </div>

          <div className="project-card">
            <span className="tag muted">Coming Soon</span>
            <h3>Future Fullstack Project</h3>

            <p>
              Reserved space for a new project that will demonstrate backend,
              frontend and product development skills.
            </p>
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <h2>Achievements</h2>

        <div className="achievements">
          <div>
            <h3>6 years</h3>
            <p>Basketball experience</p>
          </div>

          <div>
            <h3>4x</h3>
            <p>City champion</p>
          </div>

          <div>
            <h3>3x</h3>
            <p>Kazakhstan champion</p>
          </div>

          <div>
            <h3>Finalist</h3>
            <p>CheckBus hackathon stage</p>
          </div>
        </div>
      </section>

      <section className="section">
  <h2>Education & Certificates</h2>

  <div className="education-card">
    <h3>IT STEP Academy</h3>

    <p>
      Currently studying Software Development course. Focused on web
      development, backend systems and practical project building.
    </p>

    <p style={{ marginTop: "10px", color: "#a8adbd" }}>
      Certificate: Coming Soon
    </p>
  </div>
</section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p>Open to IT programs, collaborations and project opportunities.</p>

        <a
          href="https://github.com/AndreyPetin19"
          target="_blank"
          className="btn primary"
        >
          Visit GitHub
        </a>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/projects/checkbus" element={<CheckBus />} />
    <Route path="/projects/zeama" element={<Zeama />} />
    </Routes>
  );
}

export default App;