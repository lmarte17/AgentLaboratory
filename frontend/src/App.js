import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AgentLaboratoryDashboard from './components/AgentLaboratoryDashboard';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ textDecoration: 'none', marginRight: '1rem' }}>Home</Link>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>Project Dashboard</Link>
      </header>

      <main style={{ margin: '1rem' }}>
        <Routes>
          <Route
            path="/"
            element={<div>
              <h1>AgentLaboratory Frontend</h1>
              <p>Welcome to the AgentLaboratory UI. Choose an option above to get started.</p>
            </div>}
          />
          <Route path="/dashboard" element={<AgentLaboratoryDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;