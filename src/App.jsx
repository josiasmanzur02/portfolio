import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeContent from './components/FadeContent'
import './css/style.css'; 

function App() {
  return (
    <div>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <Header />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </FadeContent>
    </div> 
  );
}

export default App;