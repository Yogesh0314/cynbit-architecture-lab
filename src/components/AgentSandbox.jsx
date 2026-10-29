import React, { useState, useEffect } from 'react';

const PRESET_SCENARIOS = [
  {
    title: 'Enterprise Document Intelligence',
    prompt: 'Extract financial invoices, reconcile line-items against ERP database, and flag discrepancies.',
    steps: [
      { tag: 'reasoning', text: 'Received unstructured document stream (PDF/OCR). Initializing Cynbit Vision Parser.' },
      { tag: 'tool', text: 'Invoking tool: parse_document_embeddings() on multi-tenant AWS S3 bucket.' },
      { tag: 'reasoning', text: 'Extracted 42 line items. Comparing against PostgreSQL ERP schema for cross-check.' },
      { tag: 'tool', text: 'Executing query: match_purchase_orders(vendor_id="V-9821").' },
      { tag: 'result', text: 'Reconciliation 100% matched. Discrepancy rate 0.00%. Automated ledger approval completed.' }
    ]
  },
  {
    title: 'Autonomous Multi-Agent Lead Routing',
    prompt: 'Ingest incoming inbound inquiries, evaluate technical intent, and trigger personalized discovery blueprint.',
    steps: [
      { tag: 'reasoning', text: 'Analyzing inbound message semantic intent with Cynbit Cognitive Classifier.' },
      { tag: 'tool', text: 'Running vector search on Pinecone DB: query="Enterprise AI Agent Architecture".' },
      { tag: 'reasoning', text: 'Identified prospective enterprise lead. High-intent match for Multi-Agent Swarm.' },
      { tag: 'tool', text: 'Spawning subagent: generate_custom_proposal_draft(client="Global Enterprise").' },
      { tag: 'result', text: 'Custom architectural summary dispatched to opportunities@cynbit.in. SLA: <24h.' }
    ]
  },
  {
    title: 'Cloud Microservices Zero-Trust Guard',
    prompt: 'Conduct continuous behavioral audit across Kubernetes clusters and isolate latency anomalies.',
    steps: [
      { tag: 'reasoning', text: 'Scanning telemetry across 14 microservice pods on Azure Kubernetes Service.' },
      { tag: 'tool', text: 'Calling: inspect_traffic_anomaly_detector(window="5m", threshold=0.95).' },
      { tag: 'reasoning', text: 'Detected unexpected burst on /api/v1/auth. Rate limiter auto-adjusted to prevent DDOS.' },
      { tag: 'tool', text: 'Applying Zero-Trust policy: rotate_ephemeral_jwt_keys().' },
      { tag: 'result', text: 'Cluster stabilized at 18ms latency. Zero security incidents reported.' }
    ]
  }
];

export default function AgentSandbox() {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [customPrompt, setCustomPrompt] = useState(PRESET_SCENARIOS[0].prompt);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState(PRESET_SCENARIOS[0].steps);
  const [activeStepIndex, setActiveStepIndex] = useState(5);

  const handleSelectScenario = (idx) => {
    setSelectedScenarioIdx(idx);
    setCustomPrompt(PRESET_SCENARIOS[idx].prompt);
    setLogs(PRESET_SCENARIOS[idx].steps);
    setActiveStepIndex(PRESET_SCENARIOS[idx].steps.length);
  };

  const handleExecute = () => {
    setIsRunning(true);
    setLogs([]);
    setActiveStepIndex(0);

    const stepsToRun = PRESET_SCENARIOS[selectedScenarioIdx]?.steps || [
      { tag: 'reasoning', text: `Analyzing task: "${customPrompt}"` },
      { tag: 'tool', text: 'Invoking Cynbit Orchestration Mesh & Vector Memory.' },
      { tag: 'reasoning', text: 'Executing multi-step reasoning with guardrails.' },
      { tag: 'result', text: 'Task completed successfully with verifiable outputs.' }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < stepsToRun.length) {
        setLogs(prev => [...prev, stepsToRun[current]]);
        current++;
        setActiveStepIndex(current);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 700);
  };

  return (
    <section id="agent-sandbox" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>smart_toy</span>
            <span>Interactive Simulator</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Live Cynbit <span className="gradient-text">Autonomous Agent</span> Sandbox
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Experience how Cynbit's autonomous agents think, select tools, and execute enterprise workflows in real time. Select a preset scenario or test the runtime engine below.
          </p>
        </div>

        {/* Sandbox Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Controls Column */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem' }}>Select Agent Objective</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {PRESET_SCENARIOS.map((scen, idx) => {
                  const isSelected = selectedScenarioIdx === idx;
                  return (
                    <div
                      key={scen.title}
                      onClick={() => handleSelectScenario(idx)}
                      style={{
                        padding: '1rem 1.25rem',
                        background: isSelected ? 'rgba(37, 99, 235, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                        border: `1px solid ${isSelected ? '#38bdf8' : 'var(--border-subtle)'}`,
                        borderRadius: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 800, color: isSelected ? '#ffffff' : '#cbd5e1' }}>
                          {scen.title}
                        </span>
                        {isSelected && (
                          <span className="badge-pulse-dot" style={{ backgroundColor: '#38bdf8', boxShadow: '0 0 6px #38bdf8' }}></span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4' }}>
                        {scen.prompt}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Custom Input */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Active Agent Instruction Prompt</label>
              <textarea
                className="form-textarea"
                rows={3}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter custom enterprise automation objective..."
              />
            </div>

            <button
              id="run-agent-simulation-btn"
              className="btn btn-primary btn-glow"
              onClick={handleExecute}
              disabled={isRunning}
              style={{ padding: '0.9rem', width: '100%', opacity: isRunning ? 0.7 : 1 }}
            >
              <span className="material-symbols-outlined">{isRunning ? 'hourglass_top' : 'play_arrow'}</span>
              <span>{isRunning ? 'Agent Swarm Executing...' : 'Execute Live Agent Run'}</span>
            </button>
          </div>

          {/* Console / Output Column */}
          <div className="agent-console" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="console-header">
                <div className="console-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>cynbit-agent-runtime@v2.4.0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="badge-pulse-dot" style={{ backgroundColor: isRunning ? '#f59e0b' : '#10b981' }}></span>
                  <span style={{ fontSize: '0.75rem', color: isRunning ? '#f59e0b' : '#34d399', fontWeight: 800 }}>
                    {isRunning ? 'EXECUTION RUNNING' : 'IDLE / READY'}
                  </span>
                </div>
              </div>

              {/* Console Logs */}
              <div style={{ minHeight: '260px', padding: '0.5rem 0' }}>
                {logs.length === 0 ? (
                  <div style={{ color: '#64748b', fontStyle: 'italic', padding: '1rem 0' }}>
                    Agent waiting for instruction payload... Click "Execute Live Agent Run" above.
                  </div>
                ) : (
                  logs.map((log, index) => {
                    let tagClass = 'tag-reasoning';
                    if (log.tag === 'tool') tagClass = 'tag-tool';
                    if (log.tag === 'result') tagClass = 'tag-result';

                    return (
                      <div key={index} className="log-entry">
                        <span className={`log-tag ${tagClass}`}>{log.tag}</span>
                        <span>{log.text}</span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Console Footer Stats */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '0.85rem',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: '#64748b'
            }}>
              <span>Confidence: 99.4%</span>
              <span>Latency: 28ms</span>
              <span>Guardrails: STRICT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
