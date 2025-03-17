// About.js
import React from "react";
import { Link } from "react-router-dom";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Project</h1>
        <div className="divider"></div>
        <p className="lead">Learn more about what we do and why we do it.</p>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          {/* You can replace this with an actual image */}
          <div className="placeholder-image"></div>
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. 
            Morbi vitae mauris in leo volutpat maximus. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
          <div className="about-cta">
            <Link to="/">
              <button className="btn btn-secondary">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>John Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Alice Johnson</h3>
            <p>UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;