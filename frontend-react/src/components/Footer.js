//footer section
import React from "react";
import logo from "../assets/logo-sjb.svg";
import "./Footer.css";

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <img src={logo} alt="Boarding Finder Logo" className="footer-logo" />
      <span>© {new Date().getFullYear()} Boarding Finder. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer ;
