import React, { useState } from 'react';
import ChatBox from '../ChatBox';

function RunningExperimentsPanel() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Running Experiments Phase.' }
  ]);

  const handleSend = (newMessage) => {
    const updated = [...messages, { role: 'user', content: newMessage }];
    setMessages(updated);
    // TODO: Implement agent call to run experiments, capture logs, and show results
  };

  return (
    <div>
      <h2>Running Experiments Phase</h2>
      <p>The agent can produce or update code, run it, and present results/metrics.</p>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
}

export default RunningExperimentsPanel;