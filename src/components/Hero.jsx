import React from 'react';

export default function Hero({ onOpenLab, onOpenSandbox }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Mission & Value Proposition */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <span className="badge-pulse-dot"></span>
              <span>The Optimistic Architect</span>
            </div>

            <h1 className="hero-title">
              Architecting the future with{' '}
              <span className="gradient-text">AI automation</span>.
            </h1>

            <p className="hero-description">
              Cynbit Technologies engineers enterprise-grade autonomous AI agents, scalable digital infrastructure, and custom cloud systems. Based in Jaipur, Rajasthan, we transform complex technical debt into high-performing growth engines.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button 
                id="hero-launch-lab-btn"
                type="button"
                className="btn btn-primary"
                onClick={onOpenLab}
                style={{ padding: '0.9rem 2rem', fontSize: '0.92rem' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>account_tree</span>
                <span>Launch Architecture Lab</span>
              </button>

              <button 
                id="hero-agent-sandbox-btn"
                type="button"
                className="btn btn-secondary"
                onClick={onOpenSandbox}
                style={{ padding: '0.9rem 1.8rem', fontSize: '0.92rem' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>smart_toy</span>
                <span>Live Agent Sandbox</span>
              </button>
            </div>

            {/* Quick Proof Points */}
            <div className="hero-stats-row">
              <div className="hero-stat-card">
                <h4>98%</h4>
                <p>Client Retention</p>
              </div>
              <div className="hero-stat-card">
                <h4>3.4x</h4>
                <p>Average ROI Uplift</p>
              </div>
              <div className="hero-stat-card">
                <h4>99.9%</h4>
                <p>Platform Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Architectural Preview Card */}
          <div>
            <div className="blueprint-card">
              <div className="blueprint-header">
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Cynbit Autonomous Core v2.4
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                    Distributed Agent Mesh
                  </div>
                </div>
                <div className="blueprint-status-indicator">
                  <span className="badge-pulse-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
                  <span style={{ color: '#34d399' }}>Engine Online</span>
                </div>
              </div>

              {/* Mini Interactive Preview Visualizer */}
              <div className="topology-container" style={{ margin: '1rem 0' }}>
                <svg viewBox="0 0 460 220" style={{ width: '100%', height: 'auto', display: 'block' }}>
                  <defs>
                    <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Connecting lines */}
                  <line x1="80" y1="60" x2="230" y2="110" stroke="url(#edgeGrad)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="80" y1="160" x2="230" y2="110" stroke="url(#edgeGrad)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="230" y1="110" x2="380" y2="60" stroke="url(#edgeGrad)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="230" y1="110" x2="380" y2="160" stroke="url(#edgeGrad)" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Ingestion Node 1 */}
                  <g className="node-group" transform="translate(30, 35)">
                    <rect width="100" height="48" rx="10" fill="#1e293b" stroke="rgba(255,255,255,0.1)" />
                    <text x="50" y="24" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle">DATA SOURCE</text>
                    <text x="50" y="38" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">API / Database</text>
                  </g>

                  {/* Ingestion Node 2 */}
                  <g className="node-group" transform="translate(30, 135)">
                    <rect width="100" height="48" rx="10" fill="#1e293b" stroke="rgba(255,255,255,0.1)" />
                    <text x="50" y="24" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle">KNOWLEDGE</text>
                    <text x="50" y="38" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">Vector Embeddings</text>
                  </g>

                  {/* Central Cynbit Orchestrator Node */}
                  <g className="node-group" transform="translate(175, 75)">
                    <rect width="110" height="70" rx="14" fill="rgba(37,99,235,0.25)" stroke="#38bdf8" strokeWidth="2" />
                    <circle cx="55" cy="26" r="12" fill="#2563eb" />
                    <text x="55" y="30" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">CB</text>
                    <text x="55" y="48" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">CYNBIT AGENT</text>
                    <text x="55" y="60" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle">Orchestration Layer</text>
                  </g>

                  {/* Output Node 1 */}
                  <g className="node-group" transform="translate(330, 35)">
                    <rect width="100" height="48" rx="10" fill="#1e293b" stroke="rgba(255,255,255,0.1)" />
                    <text x="50" y="24" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle">EXECUTION</text>
                    <text x="50" y="38" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">Autonomous Actions</text>
                  </g>

                  {/* Output Node 2 */}
                  <g className="node-group" transform="translate(330, 135)">
                    <rect width="100" height="48" rx="10" fill="#1e293b" stroke="rgba(255,255,255,0.1)" />
                    <text x="50" y="24" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle">INTERFACE</text>
                    <text x="50" y="38" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">Client Dashboard</text>
                  </g>
                </svg>
              </div>

              {/* Interactive Quick Metrics Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Telemetry</div>
                  <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 800 }}>Sub-40ms</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Workflows</div>
                  <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 800 }}>12 Active Agents</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Security</div>
                  <div style={{ fontSize: '0.9rem', color: '#34d399', fontWeight: 800 }}>Zero-Trust</div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenLab}
                  style={{ width: '100%', padding: '0.75rem', fontSize: '0.8rem' }}
                >
                  Configure Custom Architecture Blueprint &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
