import React, { useState } from 'react';
import ChatBox from '../ChatBox';

function ReportWritingPanel() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Report Writing Phase.' }
  ]);

  const handleSend = (newMessage) => {
    const updated = [...messages, { role: 'user', content: newMessage }];
    setMessages(updated);
    // TODO: Implement calls to compile LaTeX, produce PDF, or finalize a textual report
  };

  return (
    <div>
      <h2>Report Writing Phase</h2>
      <p>Finalize the paper/report. The agent can produce LaTeX or a final summary.</p>
      <ChatBox messages={messages} onSend={handleSend} />
    </div>
  );
}

export default ReportWritingPanel;