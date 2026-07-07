import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "../index.css";

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="case-page">
        <div className="case-container">
          <h1 className="case-title">Project not found</h1>
          <p className="case-subtitle">
            The project you are looking for does not exist.
          </p>

          <button className="btn secondary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="case-page">
      <div className="case-container">
        <button className="btn secondary back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1 className="case-title">{project.title}</h1>

        <p className="case-subtitle">{project.description}</p>

        <div className="case-block">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>

        <div className="case-block">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>

        <div className="case-block">
          <h3>Key Features</h3>
          <ul className="case-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="case-block">
          <h3>My Role</h3>
          <p>{project.role}</p>
        </div>

        {project.certificate && (
  <div className="case-block">
    <h3>Hackathon Certificate</h3>

    <p>{project.certificateText}</p>

    <img
      src={project.certificate}
      alt={`${project.title} Certificate`}
      className="certificate-image"
    />

    <div style={{ marginTop: "20px" }}>
      <a
        href={project.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="btn secondary"
      >
        View Certificate
      </a>
    </div>
  </div>
)}

        <div className="case-block">
          <h3>Tech Stack</h3>
          <div className="tech-list">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="case-block">
          <h3>Future Improvements</h3>
          <p>{project.future}</p>
        </div>

        <div className="case-buttons">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>


          <Link to="/projects" className="btn secondary">
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;