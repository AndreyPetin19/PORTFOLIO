import { Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./pages/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NotFound from "./pages/NotFound.jsx";

function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="logo">Andrey Petin</div>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

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

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          My name is Andrey Petin. I am an aspiring software developer focused
          on web development, artificial intelligence and building practical
          digital products.
        </p>

        <p style={{ marginTop: "16px" }}>
          I am currently studying at IT STEP Academy on the Software
          Development course, where I improve my programming, frontend
          development and technical problem-solving skills.
        </p>

        <p style={{ marginTop: "16px" }}>
          My main interest is creating real-world projects that combine clean
          interfaces, useful functionality and modern technologies. I focus on
          building products that can be presented, tested and deployed.
        </p>

        <p style={{ marginTop: "16px" }}>
          I have practical experience with React, Vite, React Router, Git,
          Vercel and basic AI tools. I continue developing my skills through
          portfolio projects, hackathons and product-oriented development.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Vite</p>
          </div>

          <div className="skill-card">
            <h3>Routing & UI Logic</h3>
            <p>React Router, dynamic pages, forms, validation</p>
          </div>

          <div className="skill-card">
            <h3>AI & Product</h3>
            <p>AI tools, computer vision basics, SaaS product ideas</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Vercel, VS Code, npm</p>
          </div>
        </div>
      </section>

      <Projects />

      <section id="achievements" className="section">
        <h2>IT Achievements</h2>

        <div className="achievements">
          <div>
            <h3>2+</h3>
            <p>AI/Product projects</p>
          </div>

          <div>
            <h3>Finalist</h3>
            <p>CheckBus hackathon stage</p>
          </div>

        </div>
      </section>

      <section id="education" className="section">
        <h2>Education & Certificates</h2>

        <div className="education-card">
          <h3>IT STEP Academy</h3>

          <p>
            Currently studying Software Development course. Focused on web
            development, frontend logic, routing, forms, project structure and
            practical React development.
          </p>

          <p style={{ marginTop: "15px", color: "#a8adbd" }}>
            Certificate: Coming Soon
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>

        <p>
          Feel free to contact me regarding projects, collaboration or
          internship opportunities.
        </p>

        <ContactForm />
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;