import React from "react";
import "./Home.css";

const Home = () => (
  <div className="page home-page">
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
      </div>
    </div>
    {/* Add search and featured boardings here */}
  </div>
);

export default Home;
