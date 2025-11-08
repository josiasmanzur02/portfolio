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
    altText: "(Current Project) Football Tracking",
    captionText: "(Current Project) Football Tracking",
    description:
      "I am currently working on a football tracking app as part of a full stack course I am taking. I am using Node.js, Express, EJS and then connecting to a free online API to pull data for my favorite leagues and teams. In progress..",
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
      "This is a flag guessing game created for a school project, the goal was to use docker in our project. It uses Node.js, Express, EJS and a PostgreSQL database to store users, highscores, and user sessions.",
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
      "A job portal for the University of Belize, designed to connect students with job opportunities. The portal allows students to create profiles, upload resumes, and apply for jobs posted by employers. It also includes features for employers to post job listings and manage applications.",
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
    description: "A blog tool focusing on implementing middleware, post, and get requests using Node.js and Express for the backend and EJS to load data into the frontend. Allows the user to enter a blog and also view and delete existing blogs. Full implementation would be with a database to store the blogs.",
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
    description: "A personal portfolio website showcasing my projects and skills. It features a clean and modern design, with sections for my work, skills, and contact information. The website is built with React and styled using CSS.",
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
      "A simple web application for guests at my wedding for them to view the schedule and hymns during the ceremony. It includes a user-friendly interface to navigate through the schedule and hymns, ensuring that guests can easily follow along during the event.",
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
