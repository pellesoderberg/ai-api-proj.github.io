// Home.js
import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My React App</h1>
        <p className="subtitle">A modern React application with beautiful components</p>
        <div className="cta-buttons">
          <Link to="/about">
            <button className="btn btn-primary">Learn More</button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-secondary">Get in Touch</button>
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">🚀</div>
          <h2>Fast Performance</h2>
          <p>Built with React for optimal speed and responsiveness.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🎨</div>
          <h2>Beautiful Design</h2>
          <p>Modern UI with attention to detail and aesthetics.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📱</div>
          <h2>Responsive Layout</h2>
          <p>Looks great on any device, from desktop to mobile.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
