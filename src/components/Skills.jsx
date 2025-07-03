import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faWordpress 
} from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

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
    <section style={{ padding: '2rem 0', backgroundColor: '#121212' }}>
      <div 
        className="container" 
        style={{ maxWidth: '100%', margin: '0 auto', width: '100%'}}
      >
        <h2 style={{ 
          textAlign: 'center',  
          color: '#b79a75',  // fallback accent color 
          marginBottom: '0.5rem',
          fontWeight: '700',
          fontSize: '2.5rem',
        }}>
          Skills
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#ccc',  // fallback text color
            marginBottom: '2rem',
            fontSize: '1.15rem',
          }}
        >
          Technologies & tools I use to build beautiful, responsive web experiences.
        </p>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={5} 
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }} 
          style={{ paddingBottom: '3rem' }}
        >
          {skills.map((skill, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="skill-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
                  backgroundColor: '#1e1e1e',
                  color: skill.color,
                  height: '180px',
                  userSelect: 'none',
                  transition: 'transform 0.3s ease',
                  cursor: 'default',
                }}
              >
                <span className="skill-icon" style={{ color: skill.color, marginBottom: '1rem' }}>
                  <FontAwesomeIcon icon={skill.icon} size="4x" />
                </span>
                <span
                  className="skill-label"
                  style={{ color: '#eee', fontWeight: '600', fontSize: '1.25rem' }}
                >
                  {skill.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
