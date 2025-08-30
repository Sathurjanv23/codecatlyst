import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo-sjb.svg";

const Header = () => {
  const location = useLocation();
  return (
    <header className="main-header">
      <div className="header-content">
        <img src={logo} alt="Boarding Finder Logo" className="header-logo" />
        <h1 className="header-title">Boarding Finder</h1>
      </div>
      <nav className="navbar-horizontal">
        <ul className="nav-links-horizontal">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
          <li><Link to="/owner-dashboard" className={location.pathname === "/owner-dashboard" ? "active" : ""}>Owner Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
