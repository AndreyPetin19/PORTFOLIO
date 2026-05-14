import { Link } from "react-router-dom";
import "./index.css";

function Zeama() {
  return (
    <div className="case-page">
      <div className="case-container">
        <Link to="/" className="btn secondary back-btn">
          ← Back to Portfolio
        </Link>

        <h1 className="case-title">ZEAMA</h1>

        <p className="case-subtitle">
          AI-powered platform for analyzing customer reviews and extracting
          business insights.
        </p>

        <div className="case-block">
          <h3>Problem</h3>

          <p>
            Businesses receive large amounts of customer feedback but often
            struggle to efficiently analyze reviews, detect recurring issues
            and understand customer sentiment.
          </p>
        </div>

        <div className="case-block">
          <h3>Solution</h3>

          <p>
            ZEAMA uses AI to process customer reviews, identify sentiment,
            summarize feedback and generate structured insights that help
            businesses better understand their audience.
          </p>

          <p style={{ marginTop: "10px" }}>
            The platform is designed as a scalable SaaS product focused on
            improving customer feedback analysis and decision-making.
          </p>
        </div>

        <div className="case-block">
          <h3>Key Features</h3>

          <ul className="case-list">
            <li>AI-powered review analysis</li>
            <li>Sentiment detection</li>
            <li>Review summarization</li>
            <li>Business insights dashboard</li>
            <li>Scalable SaaS-oriented architecture</li>
          </ul>
        </div>

        <div className="case-block">
          <h3>My Role</h3>

          <p>
            I participated in product structuring, frontend development,
            interface design and project presentation preparation as part of a
            hackathon project.
          </p>
        </div>

        <div className="case-block">
          <h3>Tech Stack</h3>

          <div className="tech-list">
            <span>React</span>
            <span>AI</span>
            <span>SaaS</span>
            <span>Analytics</span>
            <span>Vercel</span>
          </div>
        </div>
      <div className="case-block">
  <h3>Hackathon Certificate</h3>

  <p>
    ZEAMA was presented as part of a hackathon project.
  </p>

  <img
    src="/zeama-certificate.jpg"
    alt="ZEAMA Certificate"
    className="certificate-image"
  />

  <div style={{ marginTop: "20px" }}>
    <a
      href="/zeama-certificate.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="btn secondary"
    >
      View Certificate
    </a>
  </div>
</div>
        <div className="case-block">
          <h3>Hackathon Participation</h3>

          <p>
            ZEAMA was developed and presented as part of a hackathon project.
            Certificate and participation materials will be attached later.
          </p>
        </div>

        <div className="case-buttons">
          <a
            href="https://zeama.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Live Demo
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
    </div>
  );
}

export default Zeama;