import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">MyApp</div>

        {/* Links */}
        <div className="nav-links">
          <Link to="/use-action-state">Action State</Link>
          <Link to="/hook">Hooks</Link>
          <Link to="/coding-test">Coding Test</Link>
        </div>
      </div>
    </nav>
  );
}
