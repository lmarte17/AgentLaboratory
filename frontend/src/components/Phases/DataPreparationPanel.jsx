import React, { useState } from 'react';
import ChatBox from '../ChatBox';

function DataPreparationPanel() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Data Preparation Phase.' }
  ]);

  const handleSend = (newMessage) => {
    const updated = [...messages, { role: 'user', content: newMessage }];
    setMessages(updated);
    // TODO: Implement agent call to generate or execute code for data prep
  };

  return (
    <div>
      <h2>Data Preparation Phase</h2>
      <p>In this phase, the agent will help prepare and clean the dataset.</p>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
}

export default DataPreparationPanel;