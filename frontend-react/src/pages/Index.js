import React from "react";
import "./Index.css";

const Index = () => (
  <div className="page index-page">
    <div className="index-hero">
      <h1>Welcome to Boarding Finder</h1>
      <p>Find, compare, and book the best boarding places near your university. Owners can list and manage their properties easily.</p>
    </div>
    <div className="index-actions">
      <a href="/search" className="index-btn">Search Boardings</a>
      <a href="/login" className="index-btn">Owner Login</a>
      <a href="/register" className="index-btn">Register as Owner</a>
    </div>
  </div>
);

export default Index;
