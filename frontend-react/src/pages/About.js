import React from "react";
import "./About.css";
import logo from "../assets/logo-sj-combined.svg";

const About = () => (
  <div className="page about-page">
    <div className="about-logo-container" style={{textAlign: 'center', marginBottom: '1.5em'}}>
      <img src={logo} alt="Boarding Finder Logo" style={{height: '70px', borderRadius: '12px', boxShadow: '0 2px 8px #0002'}} />
    </div>
    <img
      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
      alt="About Boarding Finder - Team Collaboration"
      className="about-img"
    />
    <h2>About Boarding Finder</h2>
    <p>
      Boarding Finder is a comprehensive platform dedicated to making student accommodation easy, safe, and accessible. We connect students with trusted boarding places near universities and empower owners to manage their properties efficiently.
    </p>
    <section className="about-values">
      <h3>Our Values</h3>
      <ul>
        <li><b>Trust & Safety:</b> We verify listings and prioritize student safety.</li>
        <li><b>Transparency:</b> Clear information and honest reviews for every property.</li>
        <li><b>Support:</b> Friendly support for both students and owners.</li>
      </ul>
    </section>
    <section className="about-students">
      <h3>For Students</h3>
      <ul>
        <li>Search for available boardings by location, university, or gender.</li>
        <li>View details, contact information, and room availability.</li>
        <li>Reserve a room and communicate directly with owners.</li>
        <li>Leave reviews to help future students.</li>
      </ul>
    </section>
    <section className="about-owners">
      <h3>For Boarding Owners</h3>
      <ul>
        <li>Create an account and log in securely.</li>
        <li>Add, edit, or remove boarding listings with photos and details.</li>
        <li>View and confirm room bookings from students.</li>
        <li>Respond to messages and manage your reputation.</li>
      </ul>
    </section>
    <section className="about-team">
      <h3>Meet the Team</h3>
      <p>We are a group of university students and tech enthusiasts passionate about improving student life. Our mission is to make finding and offering accommodation as smooth as possible.</p>
    </section>
  </div>
);

export default About;
