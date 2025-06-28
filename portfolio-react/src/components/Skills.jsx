import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const skills = [
    { icon: faHtml5, label: 'HTML', color: '#e44d26' },
    { icon: faCss3Alt, label: 'CSS', color: '#264de4' },
    { icon: faJs, label: 'JavaScript/JQuery', color: '#f0db4f' },
    { icon: faBootstrap, label: 'Bootstrap', color: '#7952b3' },
    { icon: faReact, label: 'React', color: '#61dafb' },
    { icon: faWordpress, label: 'WordPress', color: '#21759b' },
    { icon: faMobileScreenButton, label: 'Responsive Design', color: '#4caf50' },
];

const Skills = () => {
    return (
        <section>
            <div className="container">
                <h2 style={{ textAlign: 'center', color: 'var(--accent-color)' }}>Skills</h2>
                <p style={{
                    textAlign: 'center',
                    color: 'var(--text-color)',
                    marginBottom: '2rem',
                    fontSize: '1.15rem'
                }}>
                    Technologies & tools I use to build beautiful, responsive web experiences.
                </p>
                <div className="skills-grid">
                    {skills.map((skill, idx) => (
                        <div className="skill-card" key={idx}>
                            <span className="skill-icon" style={{ color: skill.color }}>
                                <FontAwesomeIcon icon={skill.icon} size="3x" />
                            </span>
                            <span className="skill-label">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;