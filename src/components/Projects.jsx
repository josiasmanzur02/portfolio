import "../css/Projects.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faDocker
} from "@fortawesome/free-brands-svg-icons";
import { faDisplay, faDatabase } from "@fortawesome/free-solid-svg-icons"; 


gsap.registerPlugin(ScrollTrigger, ScrollSmoother); 

const projects = [
  { 
    imageSrc: "/portfolio/images/football-tracking.png",
    altText: "Football Tracking",
    captionText: "Football Tracking", 
    description:
      "A completed full-stack football tracking dashboard built with Node.js, Express, and EJS. It consumes a third-party football API to surface fixtures, standings, and club details for my favorite leagues, then renders the data in responsive views for quick lookups.",
    githubUrl: "https://github.com/josiasmanzur02/football-tracking",
    liveUrl: "https://football-tracking.onrender.com",
    languages: [
      { name: "HTML5", icon: faHtml5 }, 
      { name: "CSS3", icon: faCss3Alt },
      { name: "Node.js", icon: faNode }
    ], 
  },
  { 
    imageSrc: "/portfolio/images/flag-guess-game.png",
    altText: "Flag Guessing Game",
    captionText: "Flag Guessing Game",
    description:
      "A Dockerized Node.js, Express, and EJS guessing game that challenges users to identify country flags. The PostgreSQL backend tracks players, sessions, and high scores, making it easy to spin up locally or in the cloud via the included Docker workflow.",
    githubUrl: "https://github.com/josiasmanzur02/sysadmin-login-docker",
    liveUrl: "https://sysadmin-login-docker.onrender.com",
    languages: [
      { name: "HTML5", icon: faHtml5 }, 
      { name: "CSS3", icon: faCss3Alt },
      { name: "Node.js", icon: faNode },
      { name: "Docker", icon: faDocker},
      { name: "PostgreSQL", icon: faDatabase}
    ], 
  },
  { 
    imageSrc: "/portfolio/images/ub-job-portal.png",
    altText: "University of Belize Job Portal",
    captionText: "University of Belize Job Portal",
    description:
      "A React-powered job portal concept for the University of Belize that connects students with opportunities. Students can browse curated postings, while employers manage listings from an admin view, all wrapped in a clean UI built with reusable components.",
    githubUrl: "https://github.com/JosiasManzur/ub-job-portal",
    liveUrl: "https://ub-job-portal.netlify.app/",
    languages: [
      { name: "React", icon: faReact },
      { name: "CSS3", icon: faCss3Alt }
    ],
  },
  {
    imageSrc: "/portfolio/images/blog-tool.png",
    altText: "Blog Tool",
    captionText: "Blog Tool",
    description: "A lightweight blogging utility that demonstrates custom middleware plus RESTful POST/GET routes in Node.js and Express. EJS templates render entries so users can draft, view, and delete posts; a database layer can be plugged in for persistence.",
    githubUrl: "https://github.com/josiasmanzur02/blog-tool",
    liveUrl: "https://blog-tool-80x1.onrender.com", 
    languages: [
      { name: "HTML5", icon: faHtml5 }, 
      { name: "CSS3", icon: faCss3Alt },
      { name: "Node.js", icon: faNode }
    ],
  },
  {
    imageSrc: "/portfolio/images/website-portfolio.png",
    altText: "Website Portfolio",
    captionText: "Website Portfolio",
    description: "This site—my personal portfolio—highlights recent work, skills, and ways to connect. Built with React components and modular CSS, it focuses on accessibility, smooth scrolling, and quick navigation between featured projects.",
    githubUrl: "https://github.com/josiasmanzur02/portfolio",
    liveUrl: "https://josiasmanzur02.github.io/portfolio/",
    languages: [
      { name: "React", icon: faReact },
      { name: "CSS3", icon: faCss3Alt }
    ],
  },
  {
    imageSrc: "/portfolio/images/wedding-schedule-hymns.png",
    altText: "Wedding Schedule & Hymns",
    captionText: "Wedding Schedule & Hymns",
    description:
      "A static site created for our wedding so guests could follow the ceremony order and lyrics in real time. The responsive layout keeps the schedule and hymns only a tap away, making it practical on phones and tablets during the event.",
    githubUrl: "https://github.com/josiasmanzur02/wedding-schedule-and-songs",
    liveUrl: "https://josiasmanzur02.github.io/wedding-schedule-and-songs/",
    languages: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs },
    ],
  }
];

const Projects = () => {
  
  return (
    <section className="projects-section" id="projects">
      <div className="accordions container">
        <h2>Projects</h2>
        {projects.map((proj) => (
          <div className="accordion project-cards">
            <div className="project-card">
              <div className="card-image">
                <img src={proj.imageSrc} alt={proj.altText} />
              </div>
              <div className="card-description">
                <div>
                  <h3>{proj.captionText}</h3>
                  <p>{proj.description}</p>
                  <div className="languages">
                    <p>Languages</p>
                    <div>
                      {proj.languages.map((lang) => (
                        <span key={lang.name} style={{ marginRight: "8px" }}>
                          <FontAwesomeIcon icon={lang.icon} size="2x" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card-links">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">
                      <span className="text">
                        <FontAwesomeIcon className="sparkle" icon={faGithub} />{" "}
                        GitHub
                      </span>
                    </button>
                  </a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">
                      <span className="text">
                        <FontAwesomeIcon className="sparkle" icon={faDisplay} />{" "}
                        Live Site
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default Projects;
