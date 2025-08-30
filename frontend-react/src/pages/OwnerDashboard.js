import React from "react";
import "./OwnerDashboard.css";
import logo from "../assets/logo-sj-combined.svg";

const OwnerDashboard = () => (
  <div className="page owner-dashboard-page">
    <div className="owner-logo-container" style={{textAlign: 'center', marginBottom: '1.5em'}}>
      <img src={logo} alt="Boarding Finder Logo" style={{height: '70px', borderRadius: '12px', boxShadow: '0 2px 8px #0002'}} />
    </div>
    <img
      src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
      alt="Owner Dashboard - Workspace"
      className="owner-img"
    />
    <h2>Owner Dashboard</h2>
    <section className="dashboard-intro">
      <p>
        Welcome to your Owner Dashboard! Here you can manage all your boarding listings, bookings, and profile settings in one place.
      </p>
    </section>
    <section className="dashboard-getting-started">
      <h3>Getting Started</h3>
      <ol>
        <li>Log in or register as a boarding owner.</li>
        <li>Add your first boarding listing with photos and details.</li>
        <li>Review booking requests and confirm reservations.</li>
        <li>Update your listings anytime from your dashboard.</li>
      </ol>
    </section>
    <section className="dashboard-tips">
      <h3>Tips for Owners</h3>
      <ul>
        <li>Use clear, high-quality photos to attract more students.</li>
        <li>Respond promptly to booking requests and messages.</li>
        <li>Keep your availability and details up to date.</li>
        <li>Encourage students to leave reviews for your property.</li>
      </ul>
    </section>
    <section className="dashboard-support">
      <h3>Need Help?</h3>
      <p>Contact our support team at <a href="mailto:support@boardingfinder.com">support@boardingfinder.com</a> for assistance.</p>
    </section>
  </div>
);

export default OwnerDashboard;
