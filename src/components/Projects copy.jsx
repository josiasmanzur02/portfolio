import "../css/Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    imageSrc: '/portfolio/images/ub-job-portal.png',
    altText: 'University of Belize Job Portal', 
    captionText: 'University of Belize Job Portal',
    description: 'A job portal for the University of Belize, designed to connect students with job opportunities. The portal allows students to create profiles, upload resumes, and apply for jobs posted by employers. It also includes features for employers to post job listings and manage applications.', 
    githubUrl: 'https://github.com/JosiasManzur/ub-job-portal',
    liveUrl: 'https://ub-job-portal.netlify.app/',
    languages: [
      { name: 'React', icon: faReact },
      { name: 'CSS3', icon: faCss3Alt },
    ]
  },
  {
    imageSrc: '/portfolio/images/wedding-schedule-hymns.png',
    altText: 'Wedding Schedule & Hymns',  
    captionText: 'Wedding Schedule & Hymns',
    description: 'A simple web application for guests at my wedding for them to view the schedule and hymns during the ceremony. It includes a user-friendly interface to navigate through the schedule and hymns, ensuring that guests can easily follow along during the event.',
    githubUrl: 'https://github.com/josiasmanzur02/wedding-schedule-and-songs',
    liveUrl: 'https://josiasmanzur02.github.io/wedding-schedule-and-songs/',
    languages: [
      { name: 'HTML5', icon: faHtml5 },
      { name: 'CSS3', icon: faCss3Alt },
      { name: 'JavaScript', icon: faJs },
    ]
  },
  {
    imageSrc: '/portfolio/images/project-placeholder.png',
    altText: 'Project Placeholder',
    captionText: 'Project Placeholder',
    description: 'Short description for Project 3.',
    githubUrl: '',
    liveUrl: '',
    languages: [
      { },
    ]
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((proj) => (
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
                    {proj.languages.map(lang => (
                      <span key={lang.name} style={{  marginRight: '8px' }}>
                        <FontAwesomeIcon icon={lang.icon} size="2x"/>  
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='card-links'>
                <a
                  href={proj.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="btn"> 
                    <span className="text"><FontAwesomeIcon className="sparkle" icon={faGithub} /> GitHub</span>
                  </button>
                </a>
                <a
                  href={proj.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="btn"> 
                    <span className="text"><FontAwesomeIcon className="sparkle" icon={faDisplay} /> Live Site</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);  

export default Projects;