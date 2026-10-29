import React, { useState, useEffect, useRef } from 'react';

const SCENARIOS = [
  {
    id: 'doc-intelligence',
    title: 'Enterprise Document Intelligence',
    description: 'Extract line items from invoice stream, reconcile with ERP schema, and verify tax compliance.',
    inputPlaceholder: 'Extract financial invoices, reconcile line-items against ERP database, and flag discrepancies.',
    toolName: 'cynbit_vision_ocr + postgres_erp_reconciler',
    events: [
      { step: 1, type: 'init', label: 'Request Received', text: 'Inbound document ingestion event triggered from secure S3 pipeline.' },
      { step: 2, type: 'reasoning', label: 'Requirements Analyzed', text: 'Document type identified as vendor invoice. Schema requires extraction of 42 line items, currency conversion, and PO cross-reference.' },
      { step: 3, type: 'tool_select', label: 'Tool Selected', text: 'Selected toolchain: [cynbit_vision_ocr] for high-precision table extraction.' },
      { step: 4, type: 'tool_exec', label: 'Tool Executed', text: 'Executed: cynbit_vision_ocr(payload="inv_2026_9821.pdf", confidence_threshold=0.98).' },
      { step: 5, type: 'observation', label: 'Observation Returned', text: 'Extracted 42 line-items ($148,250.00). Cross-referenced PO #9821 in ERP database with 100% item matching.' },
      { step: 6, type: 'final', label: 'Final Response Generated', text: 'Reconciliation verified with 0.00% discrepancy. Automated general ledger posting draft created for finance sign-off.' }
    ],
    result: {
      status: 'VERIFIED & RECONCILED',
      summary: '42 Line Items Processed | 100% Accuracy',
      metrics: {
        latency: '24ms',
        confidence: '99.8%',
        costSaved: '$420.00 (manual review avoided)'
      }
    }
  },
  {
    id: 'lead-routing',
    title: 'Autonomous Multi-Agent Lead Routing',
    description: 'Classify enterprise technical inquiries, search knowledge base, and generate personalized solution blueprints.',
    inputPlaceholder: 'Ingest incoming inbound inquiries, evaluate technical intent, and trigger personalized discovery blueprint.',
    toolName: 'pinecone_vector_search + blueprint_generator',
    events: [
      { step: 1, type: 'init', label: 'Request Received', text: 'New enterprise inquiry received via Cynbit API webhook.' },
      { step: 2, type: 'reasoning', label: 'Requirements Analyzed', text: 'Intent classified as "High-Concurrency Cloud AI Architecture". Budget tier and technical complexity mapped to Growth tier.' },
      { step: 3, type: 'tool_select', label: 'Tool Selected', text: 'Selected toolchain: [pinecone_vector_search] with semantic embedding threshold 0.91.' },
      { step: 4, type: 'tool_exec', label: 'Tool Executed', text: 'Executed: query_knowledge_base(domain="LLM Multi-Agent Swarms", compliance="SOC2").' },
      { step: 5, type: 'observation', label: 'Observation Returned', text: 'Retrieved 3 matching reference architectures with 99.4% cosine similarity.' },
      { step: 6, type: 'final', label: 'Final Response Generated', text: 'Tailored 6-sprint architectural blueprint generated and queued for Cynbit Principal Architect review.' }
    ],
    result: {
      status: 'BLUEPRINT DISPATCHED',
      summary: 'Lead Qualified: High-Value Enterprise | SLA: < 24 Hours',
      metrics: {
        latency: '18ms',
        confidence: '99.4%',
        routingAccuracy: '100%'
      }
    }
  },
  {
    id: 'cloud-guard',
    title: 'Cloud Microservices Zero-Trust Guard',
    description: 'Continuously scan Kubernetes cluster telemetry, detect anomalous ingress spikes, and rotate ephemeral credentials.',
    inputPlaceholder: 'Conduct continuous behavioral audit across Kubernetes clusters and isolate latency anomalies.',
    toolName: 'k8s_telemetry_probe + zero_trust_policy_enforcer',
    events: [
      { step: 1, type: 'init', label: 'Request Received', text: 'Real-time telemetry stream sampled across 24 microservice pods.' },
      { step: 2, type: 'reasoning', label: 'Requirements Analyzed', text: 'Traffic spike detected on /api/v1/checkout. Evaluating whether spike is legitimate organic burst or distributed scraping.' },
      { step: 3, type: 'tool_select', label: 'Tool Selected', text: 'Selected toolchain: [k8s_telemetry_probe] and [ephemeral_jwt_rotator].' },
      { step: 4, type: 'tool_exec', label: 'Tool Executed', text: 'Executed: apply_dynamic_rate_limiting(pod="ingress-gateway-01", burst_limit=1500).' },
      { step: 5, type: 'observation', label: 'Observation Returned', text: 'Unverified requests quarantined. Pod CPU utilization normalized from 92% to 34%.' },
      { step: 6, type: 'final', label: 'Final Response Generated', text: 'Cluster stabilized at 19ms p99 latency. Zero service degradation experienced by active users.' }
    ],
    result: {
      status: 'THREAT MITIGATED',
      summary: 'Cluster Health: 100% | Latency: 19ms p99',
      metrics: {
        latency: '19ms',
        uptime: '99.99%',
        quarantined: '0 False Positives'
      }
    }
  }
];

export default function AgentSandbox() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customPrompt, setCustomPrompt] = useState(SCENARIOS[0].inputPlaceholder);
  const [executionState, setExecutionState] = useState('IDLE'); // 'IDLE' | 'INITIALIZING' | 'RUNNING' | 'COMPLETED'
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const timerRef = useRef(null);

  const activeScenario = SCENARIOS[selectedIdx];

  // Clean up any running timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectScenario = (index) => {
    if (executionState === 'RUNNING' || executionState === 'INITIALIZING') return;
    setSelectedIdx(index);
    setCustomPrompt(SCENARIOS[index].inputPlaceholder);
    setExecutionState('IDLE');
    setDisplayedEvents([]);
    setShowFinalResult(false);
  };

  const handleExecute = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (executionState === 'RUNNING' || executionState === 'INITIALIZING') {
      return;
    }

    // Reset previous run logs
    setDisplayedEvents([]);
    setShowFinalResult(false);
    setExecutionState('INITIALIZING');

    if (timerRef.current) clearInterval(timerRef.current);

    const scenarioEvents = activeScenario.events;

    // Small delay for INITIALIZING state, then run sequential events
    setTimeout(() => {
      setExecutionState('RUNNING');
      let currentEventIdx = 0;

      timerRef.current = setInterval(() => {
        if (currentEventIdx < scenarioEvents.length) {
          const nextEvent = scenarioEvents[currentEventIdx];
          setDisplayedEvents(prev => [...prev, nextEvent]);
          currentEventIdx++;
        } else {
          clearInterval(timerRef.current);
          setExecutionState('COMPLETED');
          setShowFinalResult(true);
        }
      }, 750);
    }, 450);
  };

  const handleReset = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setExecutionState('IDLE');
    setDisplayedEvents([]);
    setShowFinalResult(false);
  };

  return (
    <section id="agent-sandbox" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>smart_toy</span>
            <span>Interactive Runtime Simulation</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Live Cynbit <span className="gradient-text">Autonomous Agent</span> Sandbox
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Observe how Cynbit's autonomous agents receive instructions, analyze intent, select domain-specific tools, and execute enterprise operations in real time.
          </p>
        </div>

        {/* Sandbox Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Controls Column */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Select Agent Scenario</h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {SCENARIOS.length} Presets Available
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SCENARIOS.map((scen, idx) => {
                  const isSelected = selectedIdx === idx;
                  return (
                    <button
                      key={scen.id}
                      type="button"
                      onClick={() => handleSelectScenario(idx)}
                      disabled={executionState === 'RUNNING' || executionState === 'INITIALIZING'}
                      style={{
                        padding: '1rem 1.25rem',
                        background: isSelected ? 'rgba(37, 99, 235, 0.16)' : 'rgba(255, 255, 255, 0.02)',
                        border: `1px solid ${isSelected ? '#38bdf8' : 'var(--border-subtle)'}`,
                        borderRadius: '0.85rem',
                        cursor: executionState === 'RUNNING' ? 'not-allowed' : 'pointer',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        transition: 'all 0.2s',
                        width: '100%'
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
                      <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4', margin: 0 }}>
                        {scen.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Instruction Prompt Input */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="agent-prompt-input">
                Agent Objective & Instruction
              </label>
              <textarea
                id="agent-prompt-input"
                className="form-textarea"
                rows={3}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                disabled={executionState === 'RUNNING' || executionState === 'INITIALIZING'}
                placeholder="Enter enterprise automation objective..."
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                id="run-agent-simulation-btn"
                type="button"
                className="btn btn-primary"
                onClick={handleExecute}
                disabled={executionState === 'RUNNING' || executionState === 'INITIALIZING'}
                style={{ 
                  flex: 1, 
                  padding: '0.9rem', 
                  opacity: (executionState === 'RUNNING' || executionState === 'INITIALIZING') ? 0.75 : 1,
                  cursor: (executionState === 'RUNNING' || executionState === 'INITIALIZING') ? 'not-allowed' : 'pointer'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {executionState === 'RUNNING' ? 'hourglass_top' : executionState === 'COMPLETED' ? 'replay' : 'play_arrow'}
                </span>
                <span>
                  {executionState === 'INITIALIZING' ? 'Initializing Mesh...' :
                   executionState === 'RUNNING' ? 'Agent Swarm Executing...' :
                   executionState === 'COMPLETED' ? 'Run Scenario Again' : 'Execute Live Agent'}
                </span>
              </button>

              {(executionState === 'COMPLETED' || displayedEvents.length > 0) && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                  style={{ padding: '0.9rem 1.25rem', fontSize: '0.8rem' }}
                  title="Reset Sandbox"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>restart_alt</span>
                </button>
              )}
            </div>

            {/* Honest Simulation Disclaimer */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.72rem',
              color: '#94a3b8',
              lineHeight: 1.4
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#38bdf8', marginTop: '1px' }}>
                info
              </span>
              <span>
                <strong>Simulated Demonstration:</strong> Runs locally in-browser to showcase Cynbit's autonomous step-by-step reasoning and tool invocation sequence without requiring live production API tokens.
              </span>
            </div>
          </div>

          {/* Console / Terminal Column */}
          <div className="agent-console" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Console Header */}
              <div className="console-header">
                <div className="console-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>cynbit-agent-runtime@v2.4.0</span>
                </div>
                
                {/* State Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span 
                    className="badge-pulse-dot" 
                    style={{ 
                      backgroundColor: executionState === 'RUNNING' ? '#f59e0b' : 
                                       executionState === 'INITIALIZING' ? '#38bdf8' :
                                       executionState === 'COMPLETED' ? '#10b981' : '#64748b'
                    }}
                  ></span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 800,
                    color: executionState === 'RUNNING' ? '#f59e0b' : 
                           executionState === 'INITIALIZING' ? '#38bdf8' :
                           executionState === 'COMPLETED' ? '#34d399' : '#94a3b8'
                  }}>
                    {executionState === 'INITIALIZING' ? 'INITIALIZING' :
                     executionState === 'RUNNING' ? 'RUNNING' :
                     executionState === 'COMPLETED' ? 'COMPLETED' : 'IDLE / READY'}
                  </span>
                </div>
              </div>

              {/* Console Body: Sequential Event Log */}
              <div style={{ minHeight: '300px', padding: '0.5rem 0' }}>
                {displayedEvents.length === 0 && executionState === 'IDLE' && (
                  <div style={{ color: '#64748b', fontStyle: 'italic', padding: '2rem 1rem', textAlign: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#334155', display: 'block', marginBottom: '0.75rem' }}>
                      terminal
                    </span>
                    Agent runtime idle. Select an objective and click <strong>"Execute Live Agent"</strong> above to observe the reasoning loop.
                  </div>
                )}

                {executionState === 'INITIALIZING' && (
                  <div style={{ color: '#38bdf8', padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>
                      sync
                    </span>
                    <span>Initializing Cynbit Autonomous Runtime & memory nodes...</span>
                  </div>
                )}

                {displayedEvents.map((evt) => {
                  let tagClass = 'tag-reasoning';
                  if (evt.type === 'init') tagClass = 'tag-tool';
                  if (evt.type === 'tool_select' || evt.type === 'tool_exec') tagClass = 'tag-tool';
                  if (evt.type === 'observation') tagClass = 'tag-reasoning';
                  if (evt.type === 'final') tagClass = 'tag-result';

                  return (
                    <div key={evt.step} className="log-entry" style={{ marginBottom: '0.85rem' }}>
                      <span className={`log-tag ${tagClass}`} style={{ minWidth: '90px', textAlign: 'center' }}>
                        {evt.label}
                      </span>
                      <span style={{ color: '#e2e8f0', fontSize: '0.84rem' }}>{evt.text}</span>
                    </div>
                  );
                })}

                {/* Final Result Card when completed */}
                {showFinalResult && (
                  <div style={{
                    marginTop: '1.25rem',
                    padding: '1rem 1.25rem',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '0.85rem',
                    animation: 'fadeIn 0.3s ease-out'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="material-symbols-outlined" style={{ color: '#34d399', fontSize: '18px' }}>
                          task_alt
                        </span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#34d399', textTransform: 'uppercase' }}>
                          {activeScenario.result.status}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Verified Simulation</span>
                    </div>

                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
                      {activeScenario.result.summary}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.5rem' }}>
                      {Object.entries(activeScenario.result.metrics).map(([k, v]) => (
                        <div key={k} style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
                          <span style={{ color: '#94a3b8', textTransform: 'capitalize' }}>{k}: </span>
                          <strong style={{ color: '#ffffff' }}>{v}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
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
              <span>Active Tool: {activeScenario.toolName.split(' ')[0]}</span>
              <span>Telemetry: 18ms - 24ms</span>
              <span>Guardrails: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
