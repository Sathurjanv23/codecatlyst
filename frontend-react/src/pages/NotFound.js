import React from "react";
import "./NotFound.css";

const NotFound = () => (
  <div className="page notfound-page" style={{ textAlign: "center" }}>
    <img
      src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
      alt="404 Not Found"
      className="notfound-img"
    />
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
);

export default NotFound;
