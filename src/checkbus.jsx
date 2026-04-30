import { Link } from "react-router-dom";
import "./index.css";

function CheckBus() {
  return (
    <div className="case-page">
      <div className="case-container">
        <Link to="/" className="btn secondary back-btn">
          ← Back to Portfolio
        </Link>

        <h1 className="case-title">CheckBus</h1>

        <p className="case-subtitle">
          AI-powered system for detecting unpaid passengers and improving
          transparency in public transport.
        </p>

        <div className="case-block">
          <h3>Problem</h3>

          <p>
            Public transport systems often face significant losses due to fare
            evasion. Traditional control methods are inefficient, require
            human resources and do not provide real-time monitoring of
            passenger flow.
          </p>
        </div>

        <div className="case-block">
          <h3>Solution</h3>

          <p>
            CheckBus is an AI-based concept that introduces automated
            monitoring using computer vision. The system detects passengers
            inside the vehicle, analyzes their presence and compares it with
            payment data, identifying potential violations.
          </p>

          <p style={{ marginTop: "10px" }}>
            The solution is designed to improve operational efficiency, reduce
            financial losses and provide transport operators with real-time
            analytics and control tools.
          </p>
        </div>

        <div className="case-block">
          <h3>How It Works</h3>

          <ul className="case-list">
            <li>Camera captures video stream inside the vehicle</li>
            <li>AI model detects passengers in real time</li>
            <li>System compares detected passengers with payment data</li>
            <li>Potential violations are flagged and logged</li>
            <li>Data is sent to a dashboard for monitoring and analytics</li>
          </ul>
        </div>

        <div className="case-block">
          <h3>System Architecture</h3>

          <div className="architecture">
            <div>Frontend — React</div>
            <div>Backend API — FastAPI</div>
            <div>AI Module — YOLO</div>
            <div>Database — PostgreSQL</div>
          </div>
        </div>

        <div className="case-block">
          <h3>Key Features</h3>

          <ul className="case-list">
            <li>Real-time passenger detection</li>
            <li>Automated violation alerts</li>
            <li>Data collection and analytics</li>
            <li>Scalable system architecture</li>
            <li>Integration-ready backend</li>
          </ul>
        </div>

        <div className="case-block">
          <h3>My Role</h3>

          <p>
            I worked on the concept, system logic and frontend implementation
            of the project. I also participated in structuring the product
            idea and preparing it for presentation as part of a hackathon.
          </p>
        </div>

        <div className="case-block">
          <h3>Tech Stack</h3>

          <div className="tech-list">
            <span>React</span>
            <span>FastAPI</span>
            <span>YOLO</span>
            <span>PostgreSQL</span>
            <span>Vercel</span>
          </div>
        </div>

        <div className="case-block">
          <h3>Future Improvements</h3>

          <ul className="case-list">
            <li>Integration with real payment systems</li>
            <li>Advanced AI accuracy optimization</li>
            <li>Mobile dashboard for inspectors</li>
            <li>Cloud-based deployment</li>
            <li>Predictive analytics for transport load</li>
          </ul>
        </div>

        <div className="case-buttons">
          <a
            href="https://undefined-checkbus.vercel.app"
            target="_blank"
            className="btn primary"
          >
            Live Demo
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
    </div>
  );
}

export default CheckBus;