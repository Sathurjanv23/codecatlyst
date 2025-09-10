import React, { useState } from "react";
import "./Contact.css";
import logo from "../assets/logo-sj-combined.svg";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    
  };

  return (
    <div className="page contact-page">
      <div className="contact-logo-container" style={{textAlign: 'center', marginBottom: '1.5em'}}>
        <img src={logo} alt="Boarding Finder Logo" style={{height: '70px', borderRadius: '12px', boxShadow: '0 2px 8px #0002'}} />
      </div>
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
        alt="Contact Boarding Finder - Customer Support"
        className="contact-img"
      />
      <h2>Contact Us</h2>
      <p>
  If you have any questions, suggestions, or need support, please fill out the form below or email us &nbsp;at&nbsp;
  <a href="mailto:support@boardingfinder.com" style={{textDecoration: 'none', color: '#2196f3', fontWeight: 'bold'}}>support@boardingfinder.com</a>.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      {sent && <div className="success">Thank you for contacting us! We'll get back to you soon.</div>}

      <section className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <ul>
          <li>Phone: <a href="tel:+94771234567">+94 77 123 4567</a></li>
          <li>Address: University of Moratuwa, Katubedda, Moratuwa, Sri Lanka</li>
        </ul>
        <div className="social-links">
          <a href="https://facebook.com/boardingfinder" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" style={{height: '24px', verticalAlign: 'middle', marginRight: '10px'}} />
          </a>
          <a href="https://twitter.com/boardingfinder" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" style={{height: '24px', verticalAlign: 'middle', marginRight: '10px'}} />
          </a>
          <a href="https://instagram.com/boardingfinder" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" style={{height: '24px', verticalAlign: 'middle', marginRight: '10px'}} />
          </a>
        </div>
      </section>

      <section className="contact-faq">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li><b>How do I list my boarding?</b> Register as an owner and use the dashboard to add your property.</li>
          <li><b>How do I book a room?</b> Search for boardings, view details, and contact the owner to reserve.</li>
          <li><b>Is there a fee?</b> Boarding Finder is free for students. Owners may have premium options in the future.</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
