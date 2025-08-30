import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-sjb.svg";


const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Boarding Finder" className="logo-img" />
          Boarding Finder
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
          <li><Link to="/owner-dashboard" className={location.pathname === "/owner-dashboard" ? "active" : ""}>Owner Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
