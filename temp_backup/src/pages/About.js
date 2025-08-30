import React from "react";
import "./About.css";

const About = () => (
  <div className="page about-page">
    <img
      src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
      alt="About Boarding Finder"
      className="about-img"
    />
    <h2>About Boarding Finder</h2>
    <p>
      Boarding Finder is a platform designed to help university students find suitable boarding places near their campus. It also enables boarding house owners to easily list and manage their properties, and handle room bookings efficiently.
    </p>
    <h3>For Students</h3>
    <ul>
      <li>Search for available boardings by location, university, or gender.</li>
      <li>View details, contact information, and room availability.</li>
      <li>Temporarily reserve a room and confirm with the owner before finalizing.</li>
    </ul>
    <h3>For Boarding Owners</h3>
    <ul>
      <li>Create an account and log in securely.</li>
      <li>Add, edit, or remove boarding listings.</li>
      <li>View and confirm room bookings from students.</li>
    </ul>
  </div>
);

export default About;
