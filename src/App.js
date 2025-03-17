import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Chat from './Chat';
import './App.css';

function MainContent() {
  const location = useLocation();
  const isChatPage = location.pathname === '/chat';
  
  return (
    <main className={`main-content ${isChatPage ? 'chat-page' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <MainContent />
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} CheapFlights.ai - Find your next adventure for less</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;