import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Andrey Petin. Built with React and Vite.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>

        <Link to="/projects">Projects</Link>

        <a
          href="https://github.com/AndreyPetin19"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=evgeniyevich077@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;