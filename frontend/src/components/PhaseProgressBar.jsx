import React from 'react';

function PhaseProgressBar({ currentPhase, onPhaseSelect }) {
  const phases = [
    'Literature Review',
    'Plan Formulation',
    'Data Preparation',
    'Running Experiments',
    'Results Interpretation',
    'Report Writing'
  ];

  return (
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      {phases.map((phase, idx) => {
        const isActive = currentPhase === phase;
        return (
          <div
            key={phase}
            onClick={() => onPhaseSelect(phase)}
            style={{
              flex: 1,
              padding: '0.5rem',
              margin: '0 0.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              background: isActive ? '#4caf50' : '#eee',
              color: isActive ? '#fff' : '#000'
            }}
          >
            {idx + 1}. {phase}
          </div>
        );
      })}
    </div>
  );
}

export default PhaseProgressBar;