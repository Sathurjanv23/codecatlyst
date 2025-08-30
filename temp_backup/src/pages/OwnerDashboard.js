import React from "react";
import "./OwnerDashboard.css";

const OwnerDashboard = () => (
  <div className="page owner-dashboard-page">
    <img
      src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
      alt="Owner Dashboard"
      className="owner-img"
    />
    <h2>Owner Dashboard</h2>
    <p>
      To access your dashboard, please log in from the main page. Once logged in, you can:
    </p>
    <ul>
      <li>Add new boarding listings</li>
      <li>View and manage your current listings</li>
      <li>See and confirm bookings from students</li>
    </ul>
  </div>
);

export default OwnerDashboard;
