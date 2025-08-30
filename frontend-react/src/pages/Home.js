
import React from "react";
import "./Home.css";
import logo from "../assets/logo-sj-combined.svg";

const Home = () => (
  <div className="page home-page">
    <div className="home-logo-container" style={{textAlign: 'center', marginBottom: '1.5em'}}>
      <img src={logo} alt="Boarding Finder Logo" style={{height: '70px', borderRadius: '12px', boxShadow: '0 2px 8px #0002'}} />
    </div>
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
        alt="Boarding Finder"
        className="hero-img"
      />
      <div className="hero-text">
        <h1>Find Your Perfect Boarding Near University</h1>
        <p>
          Search, compare, and book the best boarding places for students. Owners can list and manage their properties with ease.
        </p>
        <a href="/search" className="cta-btn">Start Searching</a>
      </div>
    </div>

    <section className="features-section">
      <h2>Why Use Boarding Finder?</h2>
      <div className="features-list">
        <div className="feature">
          <h3>Verified Listings</h3>
          <p>All boardings are verified for safety and authenticity, so you can book with confidence.</p>
        </div>
        <div className="feature">
          <h3>Easy Search</h3>
          <p>Filter by location, university, gender, and price to find the best match for your needs.</p>
        </div>
        <div className="feature">
          <h3>Direct Contact</h3>
          <p>Contact boarding owners directly through our secure platform.</p>
        </div>
        <div className="feature">
          <h3>Owner Tools</h3>
          <p>Owners can easily add, edit, and manage their listings and bookings.</p>
        </div>
      </div>
    </section>

    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <ol className="how-it-works-list">
        <li>Sign up as a student or boarding owner.</li>
        <li>Search for boardings or add your property.</li>
        <li>Contact, book, or manage listings easily.</li>
        <li>Enjoy a safe and convenient boarding experience!</li>
      </ol>
    </section>

    <section className="cta-section">
      <h2>Ready to get started?</h2>
      <a href="/register" className="cta-btn">Register Now</a>
    </section>
  </div>
);

export default Home;
