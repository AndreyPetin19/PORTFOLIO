import { useEffect, useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { projects as projectsData } from "../data/projects.js";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setIsLoading(true);

      setTimeout(() => {
        setProjects(projectsData);
        setIsLoading(false);
      }, 500);
    } catch {
      setError("Failed to load projects.");
      setIsLoading(false);
    }
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchValue, activeCategory]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-controls">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search-input"
        />

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active-filter"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;