import React from 'react';
import TiltedCard from './TiltedCard';

const projects = [
  {
    imageSrc: 'https://picsum.photos/id/1011/300/300',
    altText: 'Project 1',
    captionText: 'Project 1',
    description: 'Short description for Project 1.',
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://example.com/project1',
  },
  {
    imageSrc: 'https://picsum.photos/id/1015/300/300',
    altText: 'Project 2',
    captionText: 'Project 2',
    description: 'Short description for Project 2.',
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://example.com/project2',
  },
  {
    imageSrc: 'https://picsum.photos/id/1025/300/300',
    altText: 'Project 3',
    captionText: 'Project 3',
    description: 'Short description for Project 3.',
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://example.com/project3',
  },
];

const buttonStyle = {
  display: 'inline-block',
  margin: '0.5rem 0.5rem 0 0',
  padding: '0.5rem 1.2rem',
  borderRadius: '0.5rem',
  background: 'var(--accent-color)',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  transition: 'background 0.2s',
};

const Portfolio = () => (
  <section>
    <div className="container">
      <h2 style={{ textAlign: 'center', color: 'var(--accent-color)' }}>Portfolio</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'space-between',
        margin: '2rem 0'
      }}>
        {projects.map((proj, idx) => (
          <TiltedCard
            key={idx}
            imageSrc={proj.imageSrc}
            altText={proj.altText}
            captionText={proj.captionText}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{proj.captionText}</h3>
                <p style={{ color: 'var(--text-color)' }}>{proj.description}</p>
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={buttonStyle}
                  >
                    GitHub
                  </a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={buttonStyle}
                  >
                    Live Site
                  </a>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;