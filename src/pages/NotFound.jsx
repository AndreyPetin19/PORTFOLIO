import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="case-page">
      <div className="case-container">
        <h1 className="case-title">404</h1>

        <p className="case-subtitle">
          The page you are looking for doesn't exist.
        </p>

        <Link to="/" className="btn primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;