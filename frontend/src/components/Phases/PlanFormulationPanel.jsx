import React, { useState } from 'react';
import ChatBox from '../ChatBox';

function PlanFormulationPanel() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Plan Formulation Phase.' }
  ]);

  const handleSend = (newMessage) => {
    const updated = [...messages, { role: 'user', content: newMessage }];
    setMessages(updated);
    // TODO: Implement agent query for plan discussion
  };

  return (
    <div>
      <h2>Plan Formulation Phase</h2>
      <p>Discuss and finalize a plan for your experiments.</p>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
}

export default PlanFormulationPanel;