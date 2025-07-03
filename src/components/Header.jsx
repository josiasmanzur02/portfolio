import React from 'react';
import ProfileCard from './ProfileCard'
import About from './About';

const Header = () => {
  return (
    <header>
      <canvas id="bgCanvas"></canvas>
      <div className="container">
        <div className="hero">
          <ProfileCard
            name="Josias Manzur"
            title="Web Developer"
            handle="josiasmanzur"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/profile-image.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
          <div className="intro">
            <About />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;