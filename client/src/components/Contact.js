import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../css/Contact.css';
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          {/* Add your form fields here */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Visit Us</h2>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <p>Your Business Address</p>
        </div>
        <div className="info-item">
          <FaPhone className="info-icon" />
          <p>+1 123-456-7890</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <p>info@example.com</p>
        </div>
        <h2>Connect With Us</h2>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
