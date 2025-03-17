import React, { useState } from 'react';
import { FaPlaneArrival, FaPlaneDeparture, FaCalendarAlt, FaSearch, FaRobot } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [showAssistant, setShowAssistant] = useState(false);
  const [message, setMessage] = useState('');

  const toggleAssistant = () => {
    setShowAssistant(!showAssistant);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Find Your Dream Trip for Less</h1>
        <p>Let our AI find the best flight deals tailored to your preferences</p>
      </div>

      <div className="search-container">
        <div className="search-form">
          <div className="form-group">
            <label>
              <FaPlaneDeparture />
              From
            </label>
            <input type="text" placeholder="Departure city or airport" />
          </div>
          
          <div className="form-group">
            <label>
              <FaPlaneArrival />
              To
            </label>
            <input type="text" placeholder="Destination city or airport" />
          </div>
          
          <div className="form-group">
            <label>
              <FaCalendarAlt />
              Departure
            </label>
            <input type="date" />
          </div>
          
          <div className="form-group">
            <label>
              <FaCalendarAlt />
              Return
            </label>
            <input type="date" />
          </div>
          
          <button className="search-button">
            <FaSearch /> Find Flights
          </button>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <h3>AI-Powered Search</h3>
          <p>Our advanced algorithm finds the cheapest flights by analyzing millions of options.</p>
        </div>
        <div className="feature">
          <h3>Price Alerts</h3>
          <p>Get notified when prices drop for your favorite destinations.</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>Tim, our virtual assistant, is always ready to help you plan your trip.</p>
        </div>
      </div>

      <button className="assistant-button" onClick={toggleAssistant}>
        <FaRobot /> Ask Tim
      </button>

      {showAssistant && (
        <div className="assistant-modal">
          <div className="assistant-header">
            <h3><FaRobot /> Tim - Your Travel Assistant</h3>
            <button onClick={toggleAssistant}>×</button>
          </div>
          <div className="assistant-content">
            <div className="assistant-messages">
              <div className="assistant-message">
                Hi there! I'm Tim, your virtual travel assistant. How can I help you today?
              </div>
            </div>
            <div className="assistant-input">
              <input 
                type="text" 
                placeholder="Ask me anything about flights..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;