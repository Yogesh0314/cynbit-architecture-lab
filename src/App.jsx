import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BlueprintLab from './components/BlueprintLab.jsx';
import AgentSandbox from './components/AgentSandbox.jsx';
import EcosystemShowcase from './components/EcosystemShowcase.jsx';
import MetricsAndTestimonials from './components/MetricsAndTestimonials.jsx';
import Footer from './components/Footer.jsx';
import BlueprintModal from './components/BlueprintModal.jsx';

export default function App() {
  const [activeBlueprint, setActiveBlueprint] = useState(null);

  const scrollToLab = () => {
    const el = document.getElementById('architecture-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSandbox = () => {
    const el = document.getElementById('agent-sandbox');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDefaultBlueprint = () => {
    setActiveBlueprint({
      domain: 'Autonomous AI Agents',
      domainId: 'ai-agents',
      cloud: 'AWS Architecture',
      vectorDB: 'Pinecone Serverless',
      capabilities: [
        'Vector RAG & Document Cognition',
        'Autonomous API & Tool Integrations',
        'Zero-Trust Audit & Guardrails'
      ],
      metrics: {
        totalSprints: 5,
        weeks: 10,
        totalHoursSaved: 525,
        efficiencyBonus: 84,
        squad: '2 Senior Architects + 1 AI Engineer'
      },
      generatedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
  };

  return (
    <div className="app-root">
      <Navbar 
        onOpenLab={scrollToLab} 
        onOpenSandbox={scrollToSandbox} 
      />

      <main>
        <Hero onOpenLab={scrollToLab} onOpenSandbox={scrollToSandbox} />
        <BlueprintLab onGenerateBlueprint={(data) => setActiveBlueprint(data)} />
        <AgentSandbox />
        <EcosystemShowcase onOpenLab={scrollToLab} />
        <MetricsAndTestimonials />
      </main>

      <Footer onOpenLab={scrollToLab} />

      {/* Blueprint Specification Modal */}
      {activeBlueprint && (
        <BlueprintModal
          blueprint={activeBlueprint}
          onClose={() => setActiveBlueprint(null)}
        />
      )}
    </div>
  );
}
