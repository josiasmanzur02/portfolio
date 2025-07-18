import { useRef } from 'react';
import Navbar from './components/Navbar'; 
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import FadeContent from './components/FadeContent';
import './css/App.css';

function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = -80; // adjust this to your header height in pixels
    const element = ref.current;

    if (element) { 
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } 
  };

  return (
    <div id="wrapper">
      <div id="content">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <Navbar
            onHomeClick={() => scrollToSection(headerRef)}
            onProjectsClick={() => scrollToSection(projectsRef)}
            onSkillsClick={() => scrollToSection(skillsRef)}
            onContactClick={() => window.location.href = 'tel:6116846'}
          />

          <div ref={headerRef}><Header /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={skillsRef}><Skills /></div>
          <Footer />
        </FadeContent>
      </div>
    </div>
  );
}

export default App;
