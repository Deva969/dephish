import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/dephishlogoemp.png" alt="Dephish" style={{height: '35px'}} />
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="nav-actions">
        <Link to="/dashboard" className="nav-btn-login">Login</Link>
        <Link to="/dashboard" className="nav-btn-start">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;