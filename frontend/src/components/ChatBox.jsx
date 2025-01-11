import React, { useState } from 'react';

function ChatBox({ messages, onSend }) {
  const [draft, setDraft] = useState('');

  const handleSend = () => {
    if (draft.trim() !== '') {
      onSend(draft.trim());
      setDraft('');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
      <h2>Conversation</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          style={{ width: '100%', height: '60px', marginBottom: '0.5rem' }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;