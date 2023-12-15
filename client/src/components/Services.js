import React from 'react';
import { FaHeart, FaRunning, FaApple, FaUsers } from 'react-icons/fa';
import '../css/Services.css';
const Services = () => {
  const servicesData = [
    {
      icon: <FaHeart />,
      title: 'Holistic Wellness',
      description: 'Comprehensive care for your physical, mental, and emotional well-being.',
    },
    {
      icon: <FaRunning />,
      title: 'Fitness Coaching',
      description: 'Personalized fitness plans tailored to your goals and preferences.',
    },
    {
      icon: <FaApple />,
      title: 'Nutritional Guidance',
      description: 'Expert advice to help you make healthier food choices and achieve balance.',
    },
    {
      icon: <FaUsers />,
      title: 'Community Support',
      description: 'Join a supportive community to share experiences and stay motivated.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-overview">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        <a href="#services" className="cta-button">
          Explore All Services
        </a>
      </div>
    </section>
  );
};

export default Services;
