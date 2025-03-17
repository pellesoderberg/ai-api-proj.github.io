import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaUser } from 'react-icons/fa';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm Tim, your virtual travel assistant. How can I help you with your travel plans today?", 
      sender: 'assistant' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };
    
    setMessages([...messages, newUserMessage]);
    setInputText('');

    // This is a placeholder response - in the future this would be connected to an LLM
    setTimeout(() => {
      const responseMessage = {
        id: messages.length + 2,
        text: "Thanks for your message! This is a placeholder response. In the future, I'll be connected to an LLM to provide helpful travel assistance.",
        sender: 'assistant'
      };
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-title">
          <FaRobot className="assistant-icon" />
          <h1>Chat with Tim</h1>
        </div>
        <p>Your AI-powered travel assistant</p>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.sender === 'assistant' ? 'assistant-message' : 'user-message'}`}
          >
            <div className="message-avatar">
              {message.sender === 'assistant' ? <FaRobot /> : <FaUser />}
            </div>
            <div className="message-content">
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask Tim about flights, destinations, travel tips..."
        />
        <button type="submit" disabled={inputText.trim() === ''}>
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}

export default Chat;