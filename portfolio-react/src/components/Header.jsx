import React from 'react';

const Header = () => {
  return (
    <header>
      <canvas id="bgCanvas"></canvas>
      <div className="container">
        <div className="hero">
          <img src="/images/portrait.jpg" alt="Portrait" className="portrait" />
          <div className="intro">
            <h1>Josias Manzur</h1>
            <p>Web Developer & Technical Support Specialist</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;