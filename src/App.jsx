import { Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./pages/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <About />

      <Skills />
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

          <div>
  <h3>ZEAMA</h3>
  <p>Developed & Presented at Hackathon</p>
</div>

        </div>
      </section>

      <Education />
      
      <section id="contact" className="section">
        <h2>Contact</h2>

        <p>
          Feel free to contact me regarding projects, collaboration or
          internship opportunities.
        </p>

        <ContactForm />
      </section>

<section id="contact" className="section">
  
</section>

<Footer />

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