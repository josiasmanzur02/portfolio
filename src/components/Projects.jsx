import React, { useEffect } from "react";
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
} from "@fortawesome/free-brands-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons"; 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother); 

const projects = [
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
      { name: "CSS3", icon: faCss3Alt },
    ],
  }
  ,
  {
    imageSrc: "/portfolio/images/website-portfolio.png",
    altText: "Website Portfolio",
    captionText: "Website Portfolio",
    description: "A personal portfolio website showcasing my projects and skills. It features a clean and modern design, with sections for my work, skills, and contact information. The website is built with React and styled using CSS.",
    githubUrl: "https://github.com/josiasmanzur02/portfolio",
    liveUrl: "https://josiasmanzur02.github.io/portfolio/",
    languages: [
      { name: "React", icon: faReact },
      { name: "CSS3", icon: faCss3Alt },
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
  },
  {
    imageSrc: "/portfolio/images/project-placeholder.png",
    altText: "Project Placeholder",
    captionText: "Project Placeholder",
    description: "Short description for Project 3.",
    githubUrl: "",
    liveUrl: "",
    languages: [{}],
  }
];

const Projects = () => {
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const smoother = ScrollSmoother.create({
      content: "#content",
      wrapper: "#wrapper",
      smooth: true,
      effects: false,
      normalizeScroll: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordions",
        pin: true,
        start: "top top", 
        end: "bottom top",
        scrub: 1,
        ease: "linear",
      },
    }); 

    tl.to(".accordion .project-card", {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });

    tl.to(
      ".accordion",
      {
        marginBottom: -15,
        stagger: 0.5,
      },
      "<"
    );

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
