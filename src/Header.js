import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaUserAstronaut, FaInfoCircle, FaHome } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaPlaneDeparture className="logo-icon" />
        <h1>CheapFlights.ai</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li className="assistant-indicator">
            <FaUserAstronaut />
            <span>Tim is ready to help!</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;