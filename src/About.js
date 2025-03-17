import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPlane, FaClock, FaGlobe, FaRobot } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About CheapFlights.ai</h1>
        <p>Revolutionizing how you find and book affordable travel</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At CheapFlights.ai, we're on a mission to make travel accessible to everyone by leveraging 
            cutting-edge artificial intelligence to find the best flight deals available.
          </p>
          <p>
            Our platform analyzes millions of flight options in real-time to predict price trends and 
            recommend the optimal time to book your next adventure.
          </p>
        </div>
        
        <div className="about-cards">
          <div className="about-card">
            <FaPlane className="card-icon" />
            <h3>Smart Search</h3>
            <p>Our AI-powered search goes beyond traditional flight comparison to find hidden deals and optimal routes.</p>
          </div>
          
          <div className="about-card">
            <FaClock className="card-icon" />
            <h3>Price Prediction</h3>
            <p>Using historical data and market trends, we predict when prices will drop so you can book at the right time.</p>
          </div>
          
          <div className="about-card">
            <FaGlobe className="card-icon" />
            <h3>Global Coverage</h3>
            <p>Search through flights from hundreds of airlines worldwide to find your perfect itinerary.</p>
          </div>
          
          <div className="about-card">
            <FaRobot className="card-icon" />
            <h3>Meet Tim</h3>
            <p>Our virtual travel assistant Tim helps you plan your trip with personalized recommendations and support.</p>
          </div>
        </div>
        
        <div className="about-section">
          <h2>Our Technology</h2>
          <p>
            CheapFlights.ai uses advanced machine learning algorithms trained on billions of flight prices 
            to accurately predict future pricing trends. Our technology continuously improves by learning 
            from new data patterns and user preferences.
          </p>
        </div>
        
        <div className="about-cta">
          <h3>Ready to find your next adventure?</h3>
          <Link to="/">
            <button>
              <FaArrowLeft /> Back to Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;