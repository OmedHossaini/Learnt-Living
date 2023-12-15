import React from 'react';
import '../css/About.css';
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="mission-values">
        <h2>Our Mission and Values</h2>
        <p>
          At Learnt Living, our mission is to empower individuals on their wellness journey by providing
          comprehensive and personalized health and wellness services. We are committed to promoting a
          holistic approach to well-being, focusing on physical, mental, and emotional health.
        </p>
        <p>
          Our values include integrity, empathy, and a dedication to helping our community achieve their
          health and wellness goals.
        </p>
      </div>
      <div className="team-members">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" className="team-member-image" />
          <h3>John Doe</h3>
          <p>Co-Founder & Wellness Coach</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" className="team-member-image" />
          <h3>Jane Smith</h3>
          <p>Nutrition Specialist</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
};

export default About;
