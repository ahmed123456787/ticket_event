import React, { useState } from "react";
import "../styles/global.css";

const Header: React.FC = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const toggleEventsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEventsDropdown(!showEventsDropdown);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>EventTix</h1>
        </div>

        <div className="search-container">
          <div className="search-icon" onClick={toggleSearchBar}>
            🔍
          </div>
          {showSearchBar && (
            <div className="search-bar">
              <input
                type="text"
                id="searchInput"
                placeholder="Search events..."
                className="search-input"
              />
              <div className="search-results" style={{ display: "none" }}></div>
            </div>
          )}
        </div>

        <div className="events-link">
          <a href="#" onClick={toggleEventsDropdown}>
            Events
          </a>
          {showEventsDropdown && (
            <div className="events-dropdown">
              <a href="/concerts" className="dropdown-link">
                Concerts
              </a>
              <a href="/sports" className="dropdown-link">
                Sports
              </a>
              <a href="/theater" className="dropdown-link">
                Theater
              </a>
              <a href="/conferences" className="dropdown-link">
                Conferences
              </a>
            </div>
          )}
        </div>

        <div className="nav-links">
          <a href="/" className="nav-button">
            Home
          </a>
          <a href="/about" className="nav-button">
            About
          </a>
          <a href="/contact" className="nav-button">
            Contact
          </a>
        </div>

        <div className="auth-buttons">
          <button className="signin">
            <a href="/auth" className="auth-link">
              Log In
            </a>
          </button>
          <button className="signup">
            <a href="/auth" className="auth-link">
              Sign Up
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
