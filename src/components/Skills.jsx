function Skills() {
  return (
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
  );
}

export default Skills;