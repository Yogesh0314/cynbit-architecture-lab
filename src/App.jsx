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
      {/* Top Banner: Intern Assessment Project Highlight */}
      <div style={{
        background: 'linear-gradient(90deg, #1e3a8a 0%, #0369a1 50%, #1e3a8a 100%)',
        color: '#ffffff',
        padding: '0.45rem 1rem',
        fontSize: '0.75rem',
        fontWeight: 800,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        position: 'relative',
        zIndex: 1001,
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#38bdf8' }}>rocket_launch</span>
        <span>
          Cynbit Assessment Working Prototype • Built for Full Stack Developer Intern Task (Applicant: Yogesh Patil)
        </span>
        <button
          onClick={scrollToLab}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#fff',
            padding: '0.15rem 0.6rem',
            borderRadius: '9999px',
            fontSize: '0.65rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}
        >
          Test Feature &darr;
        </button>
      </div>

      <Navbar onOpenLab={scrollToLab} onOpenSandbox={scrollToSandbox} />

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
