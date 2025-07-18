import "../css/Skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
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
    <section className="skills-section" id="skills">
      <div className="container">
        <h2>Skills</h2> 
        <p>Technologies & tools I use to build beautiful, responsive web experiences.</p>

        <Swiper 
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={5} 
          navigation
          pagination={{ clickable: true }}
          loop={true} 
          autoplay={{ delay: 2500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }} 
          style={{ padding: '1rem' }}
        >
          {skills.map((skill, idx) => (
            <SwiperSlide key={idx}>
              <div className="skill-card" style={{color: skill.color}}>
                <span className="skill-icon" style={{ color: skill.color, marginBottom: '1rem' }}>
                  <FontAwesomeIcon icon={skill.icon} size="3x" />
                </span>
                <span className="skill-label">
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
