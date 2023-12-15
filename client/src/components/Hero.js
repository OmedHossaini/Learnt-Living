import React from 'react';
import '../css/Hero.css';
const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="slider">
        {/* Placeholder for Image/Video Slider */}
        <img
          src="https://via.placeholder.com/1200x500" // Replace with actual slider content
          alt="Slider Placeholder"
          className="slider-image"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Empower Your Wellness Journey with <span>Learnt Living</span>
        </h1>
        <p className="hero-subtitle">Your path to a healthier life starts here.</p>
        <a href="#services" className="cta-button">
          Discover Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
