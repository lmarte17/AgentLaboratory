import React, { useState } from 'react';
import ChatBox from '../ChatBox';

function LiteratureReviewPanel() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Literature Review Phase.' }
  ]);

  const handleSend = (newMessage) => {
    const updated = [...messages, { role: 'user', content: newMessage }];
    setMessages(updated);
    // TODO: Implement actual backend call to query agent, then set new system messages
  };

  return (
    <div>
      <h2>Literature Review Phase</h2>
      <p>Search for relevant papers, add them to the review, and gather summaries.</p>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
}

export default LiteratureReviewPanel;