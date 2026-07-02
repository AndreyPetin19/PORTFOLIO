import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card active">
      <span className="tag">{project.category}</span>

      <h3>{project.title}</h3>

      <p>{project.shortDescription}</p>

      <div className="tech-list">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-buttons">
        <Link to={`/projects/${project.slug}`} className="small-btn">
          View Case
        </Link>

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="small-btn outline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;