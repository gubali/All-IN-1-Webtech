import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../reusable/theme-context/ThemeContext"
import "./Navbar.css";

export default function Navbar() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <nav className={`navbar ${isDark ? 'theme__navbar-container' : ""}`}>
      <div className="navbar-container">
        <div className="logo" style={{ color: isDark ? "#fff" : "" }}>MyApp</div>
        <div className={`nav-links ${isDark ? 'theme__nav-links ' : ""}`}>
          <Link to="/use-action-state">Action State</Link>
          <Link to="/hook">Hooks</Link>
          <Link to="/coding-test">Coding Test</Link>
          <Link to="/fetchpost">Data Fetching</Link>
        </div>
      </div>
    </nav>
  );
}
