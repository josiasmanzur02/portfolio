import "../css/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FloatingIcons = () => {
  const icons = Array.from({ length: 20 });

  return (
    <div className="floating-icons">
      {icons.map((_, i) => (
        <span
          key={i}
          className="code-icon"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            fontSize: `${10 + Math.random() * 16}px`,
          }}
        >
          {"</>"}
        </span>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url('/portfolio/images/header-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-glow-bg">
        <div className="glow-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1459"
            height="1461"
            viewBox="0 0 1459 1461"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M0.5 730.5C0.5 1133.67 326.885 1460.5 729.5 1460.5C1132.11 1460.5 1458.5 1133.67 1458.5 730.5C1458.5 327.331 1132.11 0.5 729.5 0.5C326.885 0.5 0.5 327.331 0.5 730.5Z"
              stroke="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="729.5"
                y1="0"
                x2="729.5"
                y2="1461"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
 
      <FloatingIcons />

      <div className="hero-inner">
        <div className="hero-text">
          <h2 className="hero-title">Josias Manzur</h2>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Crafting seamless web experiences with expertise in both front-end
            and back-end development.
          </p>
        </div>
        <div className="hero-buttons"> 
          <div className="card-links">
            <a href="https://github.com/josiasmanzur02" target="_blank" rel="noopener noreferrer">
              <button className="btn">
                <span className="text">
                  <FontAwesomeIcon className="sparkle" icon={faGithub} /> GitHub
                </span>
              </button>
            </a>
            <a href="https://www.instagram.com/josiasmanzur" target="_blank" rel="noopener noreferrer">
              <button className="btn">
                <span className="text">
                  <FontAwesomeIcon className="sparkle" icon={faInstagram} /> Instagram
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header; 