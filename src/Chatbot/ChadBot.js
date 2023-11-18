import React, { useState } from 'react';
import './ChadBot.css';

const ChadBot = ({ icon }) => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className="chad-bot-container">
      <div className="circle-button" onClick={toggleChatbox}>
        <img src={icon} alt="Icon" className="circle-icon" />
      </div>
      {isChatboxOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <h1>ChadBot</h1>
            <button className="close-button" onClick={toggleChatbox}><b>X</b></button>
          </div>
          <div className="chatbox-content">
            <p></p>
          </div>
          <div className="chatbox-input">
            <textarea placeholder="Type your message..." rows="3"></textarea>
            <button className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChadBot;
