import React, { useState } from 'react';
import PhaseProgressBar from './PhaseProgressBar';
import LiteratureReviewPanel from './Phases/LiteratureReviewPanel';
import PlanFormulationPanel from './Phases/PlanFormulationPanel';
import DataPreparationPanel from './Phases/DataPreparationPanel';
import RunningExperimentsPanel from './Phases/RunningExperimentsPanel';
import ResultsInterpretationPanel from './Phases/ResultsInterpretationPanel';
import ReportWritingPanel from './Phases/ReportWritingPanel';

function AgentLaboratoryDashboard() {
  const [currentPhase, setCurrentPhase] = useState('Literature Review');

  const renderPhasePanel = () => {
    switch (currentPhase) {
      case 'Literature Review':
        return <LiteratureReviewPanel />;
      case 'Plan Formulation':
        return <PlanFormulationPanel />;
      case 'Data Preparation':
        return <DataPreparationPanel />;
      case 'Running Experiments':
        return <RunningExperimentsPanel />;
      case 'Results Interpretation':
        return <ResultsInterpretationPanel />;
      case 'Report Writing':
        return <ReportWritingPanel />;
      default:
        return <div>Please select a phase.</div>;
    }
  };

  return (
    <div>
      <h1>AgentLaboratory Dashboard</h1>
      <PhaseProgressBar
        currentPhase={currentPhase}
        onPhaseSelect={(phase) => setCurrentPhase(phase)}
      />
      {renderPhasePanel()}
    </div>
  );
}

export default AgentLaboratoryDashboard;