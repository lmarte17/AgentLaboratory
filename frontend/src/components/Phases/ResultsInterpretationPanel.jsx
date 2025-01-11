import React, { useState } from 'react';
import ChatBox from '../ChatBox';

function ResultsInterpretationPanel() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Results Interpretation Phase.' }
  ]);

  const handleSend = (newMessage) => {
    const updated = [...messages, { role: 'user', content: newMessage }];
    setMessages(updated);
    // TODO: Implement agent logic to interpret results, show charts, etc.
  };

  return (
    <div>
      <h2>Results Interpretation Phase</h2>
      <p>Review results and receive agent insights on performance and next steps.</p>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
}

export default ResultsInterpretationPanel;