import Navbar from './components/Navbar'; 
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import FadeContent from './components/FadeContent'
import './css/App.css';  

function App() {
  return (
    <div>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <Navbar />
        <Header /> 
        <Projects />
        <Skills />
        <Footer /> 
      </FadeContent>
    </div>  
  );
}

export default App; 