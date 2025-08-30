import React from "react";
import { Link } from "react-router-dom";
import "./ViewBoarding.css";

const ViewBoarding = () => (
  <div className="page view-boarding-page">
    <h2>Boarding Details</h2>
    <div className="boarding-card">
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
        alt="Boarding"
        className="boarding-img"
      />
      <div className="boarding-info">
        <h3>Sample Boarding House</h3>
        <p><b>Location:</b> Near University of Example</p>
        <p><b>Contact:</b> 077-1234567</p>
        <p><b>Rooms Available:</b> 3</p>
        <p><b>Gender:</b> Boys</p>
        <p><b>Rent:</b> Rs. 10,000/month</p>
        <p><b>Details:</b> WiFi, meals included, walking distance to campus.</p>
      </div>
    </div>
    <div style={{ marginTop: '2em' }}>
      <Link to="/">Back</Link>
    </div>
  </div>
);

export default ViewBoarding;
