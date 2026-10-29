import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';

const DOMAIN_OPTIONS = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    hubName: 'Cynbit Agent Swarm',
    hubDesc: 'Multi-Agent Reasoning Core',
    description: 'Autonomous multi-agent swarms with tool-calling, self-correction, and cognitive task execution.',
    icon: 'psychology',
    baseSprints: 4,
    baseEfficiency: 75,
    baseHoursSaved: 380,
    tags: ['LLM Orchestration', 'Cognitive Ops', 'Tool Calling']
  },
  {
    id: 'fullstack-web',
    title: 'Enterprise Web & Mobile',
    hubName: 'Next.js & API Core',
    hubDesc: 'High-Throughput Gateway',
    description: 'High-performance digital platforms built with modern React, Next.js, resilient microservices, and mobile apps.',
    icon: 'terminal',
    baseSprints: 5,
    baseEfficiency: 50,
    baseHoursSaved: 260,
    tags: ['Next.js', 'React Native', 'High Concurrency']
  },
  {
    id: 'cloud-infra',
    title: 'Cloud Systems & Zero Trust',
    hubName: 'K8s Microservices',
    hubDesc: 'Distributed Container Fabric',
    description: 'Zero-trust AWS/Azure serverless or Kubernetes architecture engineered for 99.99% uptime and compliance.',
    icon: 'cloud_done',
    baseSprints: 4,
    baseEfficiency: 60,
    baseHoursSaved: 310,
    tags: ['AWS / Azure', 'Docker/K8s', 'SOC2 Readiness']
  },
  {
    id: 'saas-product',
    title: 'Proprietary SaaS Ecosystem',
    hubName: 'SaaS Platform Engine',
    hubDesc: 'Multi-Tenant Application Hub',
    description: 'Turnkey SaaS architecture including multi-tenancy, authentication, subscription billing, and AI features.',
    icon: 'inventory_2',
    baseSprints: 6,
    baseEfficiency: 80,
    baseHoursSaved: 500,
    tags: ['Multi-Tenant', 'Stripe Billing', 'Revio/Studio Stack']
  }
];

const CAPABILITIES = [
  { id: 'rag', name: 'Vector RAG & Document Cognition', hours: 45, icon: 'menu_book', nodeLabel: 'Vector RAG Memory' },
  { id: 'tool-use', name: 'Autonomous API & Tool Integrations', hours: 60, icon: 'integration_instructions', nodeLabel: 'Enterprise Tools' },
  { id: 'human-loop', name: 'Human-in-the-Loop Supervision', hours: 30, icon: 'person_check', nodeLabel: 'Human Review Gate' },
  { id: 'security', name: 'Zero-Trust Audit & Guardrails', hours: 40, icon: 'shield', nodeLabel: 'Zero-Trust Guard' },
  { id: 'realtime-stream', name: 'Real-time WebSocket Streaming', hours: 35, icon: 'speed', nodeLabel: 'Event Stream' }
];

const CLOUD_PROVIDERS = [
  { id: 'AWS Architecture', label: 'AWS Cloud VPC', short: 'AWS', color: '#ff9900' },
  { id: 'Azure Enterprise', label: 'Azure VNet', short: 'Azure', color: '#0284c7' },
  { id: 'Google Cloud', label: 'GCP Cloud VPC', short: 'GCP', color: '#ea4335' },
  { id: 'Hybrid Cloud', label: 'Hybrid Edge Mesh', short: 'Hybrid', color: '#8b5cf6' }
];

const VECTOR_DBS = [
  { id: 'Pinecone Serverless', label: 'Pinecone DB', short: 'Pinecone' },
  { id: 'Qdrant Vector Engine', label: 'Qdrant Engine', short: 'Qdrant' },
  { id: 'PgVector Postgres', label: 'PgVector PG', short: 'PgVector' },
  { id: 'Milvus Cluster', label: 'Milvus Cluster', short: 'Milvus' }
];

export default function BlueprintLab({ onGenerateBlueprint }) {
  const [selectedDomain, setSelectedDomain] = useState('ai-agents');
  const [selectedCaps, setSelectedCaps] = useState(['rag', 'tool-use', 'security']);
  const [selectedCloud, setSelectedCloud] = useState('AWS Architecture');
  const [selectedVectorDB, setSelectedVectorDB] = useState('Pinecone Serverless');
  const [teamSize, setTeamSize] = useState('growth'); // 'startup', 'growth', 'enterprise'

  const activeDomainObj = DOMAIN_OPTIONS.find(d => d.id === selectedDomain) || DOMAIN_OPTIONS[0];
  const activeCloudObj = CLOUD_PROVIDERS.find(c => c.id === selectedCloud) || CLOUD_PROVIDERS[0];
  const activeVectorDBObj = VECTOR_DBS.find(v => v.id === selectedVectorDB) || VECTOR_DBS[0];

  // Dynamic Calculations
  const metrics = useMemo(() => {
    let extraSprints = Math.ceil(selectedCaps.length / 2);
    let totalSprints = activeDomainObj.baseSprints + (extraSprints > 2 ? 1 : 0);
    
    let extraHours = selectedCaps.reduce((acc, capId) => {
      const cap = CAPABILITIES.find(c => c.id === capId);
      return acc + (cap ? cap.hours : 0);
    }, 0);
    
    let totalHoursSaved = activeDomainObj.baseHoursSaved + extraHours;
    let efficiencyBonus = Math.min(94, activeDomainObj.baseEfficiency + (selectedCaps.length * 3));

    let squad = '2 Senior Architects + 1 AI Engineer';
    if (teamSize === 'enterprise') squad = '1 Principal Architect + 3 Full-Stack/AI Leads + 1 DevOps Lead';
    if (teamSize === 'startup') squad = '1 Lead Architect + 1 Full-Stack Engineer';

    return {
      totalSprints,
      weeks: totalSprints * 2,
      totalHoursSaved,
      efficiencyBonus,
      squad
    };
  }, [selectedDomain, selectedCaps, teamSize, activeDomainObj]);

  const toggleCapability = (id) => {
    if (selectedCaps.includes(id)) {
      // Allow deselecting down to 0 so user can test empty/default state
      setSelectedCaps(selectedCaps.filter(c => c !== id));
    } else {
      setSelectedCaps([...selectedCaps, id]);
    }
  };

  const handleGenerate = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // Fallback if confetti is blocked
    }

    const blueprintData = {
      domain: activeDomainObj.title,
      domainId: activeDomainObj.id,
      cloud: selectedCloud,
      vectorDB: selectedVectorDB,
      capabilities: selectedCaps.map(id => CAPABILITIES.find(c => c.id === id)?.name).filter(Boolean),
      metrics: metrics,
      generatedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    onGenerateBlueprint(blueprintData);
  };

  // Derive active status of each optional architectural node
  const hasRag = selectedCaps.includes('rag');
  const hasTools = selectedCaps.includes('tool-use');
  const hasHumanLoop = selectedCaps.includes('human-loop');
  const hasSecurity = selectedCaps.includes('security');
  const hasStreaming = selectedCaps.includes('realtime-stream');
  const isDefaultState = selectedCaps.length === 0;

  return (
    <section id="architecture-lab" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>precision_manufacturing</span>
            <span>Interactive Scoping Engine</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Cynbit AI Architecture & <span className="gradient-text">Project Lab</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Configure your project domain, cloud provider, vector engine, and cognitive workflows. The system topology diagram and delivery estimates update dynamically based on your parameters.
          </p>
        </div>

        {/* The Interactive Lab Workbench */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
          {/* STEP 1: Choose Domain */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="wizard-step-num" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>1</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Select Architectural Target</h3>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Domain Selection
              </span>
            </div>

            <div className="selection-grid">
              {DOMAIN_OPTIONS.map((domain) => {
                const isSelected = selectedDomain === domain.id;
                return (
                  <button
                    key={domain.id}
                    type="button"
                    className={`selection-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedDomain(domain.id)}
                    style={{ border: 'none', font: 'inherit', width: '100%' }}
                  >
                    <div className="selection-card-icon">
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                        {domain.icon}
                      </span>
                    </div>
                    <h4>{domain.title}</h4>
                    <p>{domain.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                      {domain.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: '0.65rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                          color: '#94a3b8'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2 & 3 Combined: Capabilities + Stack + Live Topology */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Left Config: Capabilities & Cloud */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="wizard-step-num" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>2</span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Configure Capabilities</h3>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    {selectedCaps.length} Active
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {CAPABILITIES.map((cap) => {
                    const isChecked = selectedCaps.includes(cap.id);
                    return (
                      <button
                        key={cap.id}
                        type="button"
                        onClick={() => toggleCapability(cap.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1.25rem',
                          background: isChecked ? 'rgba(37, 99, 235, 0.14)' : 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid ${isChecked ? 'rgba(56, 189, 248, 0.45)' : 'var(--border-subtle)'}`,
                          borderRadius: '0.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          width: '100%',
                          textAlign: 'left',
                          font: 'inherit'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '20px', color: isChecked ? '#38bdf8' : '#64748b' }}>
                            {cap.icon}
                          </span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: isChecked ? '#ffffff' : '#cbd5e1' }}>
                            {cap.name}
                          </span>
                        </div>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px', color: isChecked ? '#38bdf8' : '#475569' }}>
                          {isChecked ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Stack Preferences */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="wizard-step-num" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>3</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Cloud & Vector Infrastructure</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="cloud-select">Cloud Ecosystem</label>
                    <select
                      id="cloud-select"
                      className="form-input"
                      value={selectedCloud}
                      onChange={(e) => setSelectedCloud(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    >
                      {CLOUD_PROVIDERS.map(c => <option key={c.id} value={c.id}>{c.id}</option>)}
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="vector-select">Vector Database</label>
                    <select
                      id="vector-select"
                      className="form-input"
                      value={selectedVectorDB}
                      onChange={(e) => setSelectedVectorDB(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    >
                      {VECTOR_DBS.map(v => <option key={v.id} value={v.id}>{v.id}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Scale Tier */}
              <div>
                <label className="form-label">Target Organization Scale</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                  {['startup', 'growth', 'enterprise'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setTeamSize(tier)}
                      style={{
                        padding: '0.65rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        borderRadius: '0.5rem',
                        border: teamSize === tier ? '1px solid #38bdf8' : '1px solid var(--border-subtle)',
                        background: teamSize === tier ? 'rgba(37, 99, 235, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                        color: teamSize === tier ? '#ffffff' : '#94a3b8',
                        cursor: 'pointer'
                      }}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Display: TRULY DYNAMIC SVG ARCHITECTURE TOPOLOGY */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ color: '#38bdf8' }}>hub</span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Dynamic Architecture Topology</h3>
                  </div>
                  <span className="badge-pill" style={{ padding: '0.2rem 0.6rem', fontSize: '0.65rem' }}>
                    {selectedCaps.length + 2} Active Nodes
                  </span>
                </div>

                {/* Data-Driven Dynamic SVG Topology Diagram */}
                <div className="topology-container" style={{ minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <svg 
                    viewBox="0 0 580 280" 
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    aria-label="Dynamic Architecture Topology Diagram"
                  >
                    <defs>
                      <linearGradient id="edgeGradDefault" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
                      </linearGradient>
                      <linearGradient id="edgeGradRag" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
                      </linearGradient>
                      <linearGradient id="edgeGradSecurity" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
                      </linearGradient>
                      <linearGradient id="edgeGradHuman" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.85" />
                      </linearGradient>
                      <linearGradient id="edgeGradTools" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.85" />
                      </linearGradient>
                      <linearGradient id="edgeGradStream" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
                      </linearGradient>
                    </defs>

                    {/* DYNAMIC CONNECTOR PATHS */}
                    {/* Path 1: Cloud Ingestion -> Central Core Hub */}
                    <path 
                      d={hasRag ? "M 130,70 Q 180,70 230,135" : "M 130,140 L 230,140"} 
                      stroke="url(#edgeGradDefault)" 
                      strokeWidth="2.5" 
                      fill="none" 
                      strokeDasharray="4 4" 
                    />

                    {/* Path 2: Vector DB/RAG -> Central Core Hub (Only when RAG is active) */}
                    {hasRag && (
                      <path 
                        d="M 130,210 Q 180,210 230,145" 
                        stroke="url(#edgeGradRag)" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="4 4" 
                      />
                    )}

                    {/* Path 3: Zero-Trust Security Guardrail -> Central Hub (Only when security is active) */}
                    {hasSecurity && (
                      <path 
                        d="M 300,55 L 300,105" 
                        stroke="url(#edgeGradSecurity)" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="4 4" 
                      />
                    )}

                    {/* Path 4: Central Hub -> Human Supervisor Gate (Only when human-loop is active) */}
                    {hasHumanLoop && (
                      <path 
                        d="M 300,175 L 300,225" 
                        stroke="url(#edgeGradHuman)" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="4 4" 
                      />
                    )}

                    {/* Path 5: Central Hub -> Enterprise Tools (Only when tool-use is active) */}
                    {hasTools && (
                      <path 
                        d="M 370,130 Q 410,70 450,70" 
                        stroke="url(#edgeGradTools)" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="4 4" 
                      />
                    )}

                    {/* Path 6: Central Hub -> Real-time Stream (Only when streaming is active) */}
                    {hasStreaming && (
                      <path 
                        d="M 370,150 Q 410,210 450,210" 
                        stroke="url(#edgeGradStream)" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeDasharray="4 4" 
                      />
                    )}

                    {/* Path 7: Central Hub -> Delivery Client Interface (Always active) */}
                    <path 
                      d={hasTools || hasStreaming ? "M 370,140 L 450,140" : "M 370,140 L 450,140"} 
                      stroke="#10b981" 
                      strokeWidth="2.5" 
                      fill="none" 
                      strokeDasharray="4 4" 
                    />

                    {/* ================= DYNAMIC SVG NODES ================= */}

                    {/* 1. Cloud Provider Ingestion Node */}
                    <g transform={hasRag ? "translate(15, 45)" : "translate(15, 115)"} className="node-group">
                      <rect width="115" height="52" rx="8" fill="#1e293b" stroke={activeCloudObj.color} strokeWidth="1.8" />
                      <text x="57" y="22" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle">INFRASTRUCTURE</text>
                      <text x="57" y="38" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">{activeCloudObj.label}</text>
                    </g>

                    {/* 2. Vector DB / RAG Node (Conditionally Rendered) */}
                    {hasRag && (
                      <g transform="translate(15, 185)" className="node-group">
                        <rect width="115" height="52" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.8" />
                        <text x="57" y="22" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle">VECTOR MEMORY</text>
                        <text x="57" y="38" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">{activeVectorDBObj.label}</text>
                      </g>
                    )}

                    {/* 3. Central Cynbit Domain Hub Node */}
                    <g transform="translate(230, 105)" className="node-group">
                      <rect width="140" height="70" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.2" />
                      <circle cx="70" cy="24" r="11" fill="#2563eb" />
                      <text x="70" y="28" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle">CB</text>
                      <text x="70" y="48" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">{activeDomainObj.hubName}</text>
                      <text x="70" y="60" fill="#38bdf8" fontSize="7.5" fontWeight="700" textAnchor="middle">{activeDomainObj.hubDesc}</text>
                    </g>

                    {/* 4. Zero-Trust Security Guardrail Node (Conditionally Rendered) */}
                    {hasSecurity && (
                      <g transform="translate(242, 10)" className="node-group">
                        <rect width="116" height="45" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.8" />
                        <text x="58" y="19" fill="#34d399" fontSize="8" fontWeight="700" textAnchor="middle">SECURITY & IAM</text>
                        <text x="58" y="34" fill="#ffffff" fontSize="9.5" fontWeight="800" textAnchor="middle">Zero-Trust Guard</text>
                      </g>
                    )}

                    {/* 5. Human-in-the-Loop Supervision Node (Conditionally Rendered) */}
                    {hasHumanLoop && (
                      <g transform="translate(242, 225)" className="node-group">
                        <rect width="116" height="45" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.8" />
                        <text x="58" y="19" fill="#fbbf24" fontSize="8" fontWeight="700" textAnchor="middle">GOVERNANCE</text>
                        <text x="58" y="34" fill="#ffffff" fontSize="9.5" fontWeight="800" textAnchor="middle">Human Review Gate</text>
                      </g>
                    )}

                    {/* 6. Enterprise Tools Node (Conditionally Rendered) */}
                    {hasTools && (
                      <g transform="translate(450, 45)" className="node-group">
                        <rect width="115" height="52" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.8" />
                        <text x="57" y="22" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle">INTEGRATIONS</text>
                        <text x="57" y="38" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">Enterprise APIs</text>
                      </g>
                    )}

                    {/* 7. Real-Time Streaming Node (Conditionally Rendered) */}
                    {hasStreaming && (
                      <g transform="translate(450, 185)" className="node-group">
                        <rect width="115" height="52" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.8" />
                        <text x="57" y="22" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle">STREAMING</text>
                        <text x="57" y="38" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">Event Stream (WS)</text>
                      </g>
                    )}

                    {/* 8. Delivery / Client Output Node */}
                    <g transform={hasTools || hasStreaming ? "translate(450, 115)" : "translate(450, 115)"} className="node-group">
                      <rect width="115" height="52" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.8" />
                      <text x="57" y="22" fill="#34d399" fontSize="8" fontWeight="700" textAnchor="middle">DELIVERY</text>
                      <text x="57" y="38" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">Client Interface</text>
                    </g>
                  </svg>

                  {/* Informational State Banner */}
                  {isDefaultState ? (
                    <div style={{
                      marginTop: '0.85rem',
                      padding: '0.5rem 0.85rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      fontSize: '0.72rem',
                      color: '#93c5fd',
                      textAlign: 'center'
                    }}>
                      ⚡ <strong>Baseline Core Active:</strong> Select capabilities on the left to dynamically attach RAG memory, API toolchains, human approval gates, or security guardrails.
                    </div>
                  ) : (
                    <div style={{
                      marginTop: '0.85rem',
                      fontSize: '0.72rem',
                      color: '#64748b',
                      display: 'flex',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      justifyContent: 'center'
                    }}>
                      <span>● Topology: Reactive SVG</span>
                      <span>● Provider: {activeCloudObj.short}</span>
                      {hasRag && <span>● Vector: {activeVectorDBObj.short}</span>}
                      <span>● Hub: {activeDomainObj.title}</span>
                    </div>
                  )}
                </div>

                {/* Scoping Metrics Output Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Engineering Delivery
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#38bdf8', marginTop: '0.25rem' }}>
                      {metrics.weeks} Weeks <span style={{ fontSize: '0.8rem', color: '#64748b' }}>({metrics.totalSprints} Sprints)</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Projected Efficiency Gain
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#34d399', marginTop: '0.25rem' }}>
                      +{metrics.efficiencyBonus}%
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Operational Hours Saved
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginTop: '0.25rem' }}>
                      ~{metrics.totalHoursSaved}h <span style={{ fontSize: '0.75rem', color: '#64748b' }}>/ month</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Squad Allocation
                    </div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', marginTop: '0.35rem', lineHeight: 1.3 }}>
                      {metrics.squad}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '2rem' }}>
                <button
                  id="generate-blueprint-btn"
                  type="button"
                  className="btn btn-primary"
                  onClick={handleGenerate}
                  style={{ width: '100%', padding: '1rem', fontSize: '0.9rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download_for_offline</span>
                  <span>Generate Full Architecture Blueprint</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
