import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Here you would send data to your Ballerina backend
  };

  return (
    <div className="page contact-page">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Contact Boarding Finder"
        className="contact-img"
      />
      <h2>Contact Us</h2>
      <p>
        If you have any questions, suggestions, or need support, please fill out the form below or email us at{" "}
        <a href="mailto:support@boardingfinder.com">support@boardingfinder.com</a>.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      {sent && <div className="success">Thank you for contacting us! We'll get back to you soon.</div>}
    </div>
  );
};

export default Contact;
