import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';

const DOMAIN_OPTIONS = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
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
    description: 'Turnkey SaaS architecture including multi-tenancy, authentication, subscription billing, and AI features.',
    icon: 'inventory_2',
    baseSprints: 6,
    baseEfficiency: 80,
    baseHoursSaved: 500,
    tags: ['Multi-Tenant', 'Stripe Billing', 'Revio/Studio Stack']
  }
];

const CAPABILITIES = [
  { id: 'rag', name: 'Vector RAG & Document Cognition', hours: 45, icon: 'menu_book' },
  { id: 'tool-use', name: 'Autonomous API & Tool Integrations', hours: 60, icon: 'integration_instructions' },
  { id: 'human-loop', name: 'Human-in-the-Loop Supervision', hours: 30, icon: 'person_check' },
  { id: 'security', name: 'Zero-Trust Audit & Guardrails', hours: 40, icon: 'shield' },
  { id: 'realtime-stream', name: 'Real-time WebSocket Streaming', hours: 35, icon: 'speed' }
];

const CLOUD_PROVIDERS = ['AWS Architecture', 'Azure Enterprise', 'Google Cloud', 'Hybrid Cloud'];
const VECTOR_DBS = ['Pinecone Serverless', 'Qdrant Vector Engine', 'PgVector Postgres', 'Milvus Cluster'];

export default function BlueprintLab({ onGenerateBlueprint }) {
  const [selectedDomain, setSelectedDomain] = useState('ai-agents');
  const [selectedCaps, setSelectedCaps] = useState(['rag', 'tool-use', 'security']);
  const [selectedCloud, setSelectedCloud] = useState('AWS Architecture');
  const [selectedVectorDB, setSelectedVectorDB] = useState('Pinecone Serverless');
  const [teamSize, setTeamSize] = useState('growth'); // 'startup', 'growth', 'enterprise'

  const activeDomainObj = DOMAIN_OPTIONS.find(d => d.id === selectedDomain);

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
      if (selectedCaps.length > 1) {
        setSelectedCaps(selectedCaps.filter(c => c !== id));
      }
    } else {
      setSelectedCaps([...selectedCaps, id]);
    }
  };

  const handleGenerate = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // Confetti fallback
    }

    const blueprintData = {
      domain: activeDomainObj.title,
      domainId: activeDomainObj.id,
      cloud: selectedCloud,
      vectorDB: selectedVectorDB,
      capabilities: selectedCaps.map(id => CAPABILITIES.find(c => c.id === id)?.name),
      metrics: metrics,
      generatedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    onGenerateBlueprint(blueprintData);
  };

  return (
    <section id="architecture-lab" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>precision_manufacturing</span>
            <span>Interactive Scoping Engine</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Cynbit AI Architecture & <span className="gradient-text">Project Lab</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Stop guessing your AI development roadmap. Select your target domain, assemble cognitive workflows, and immediately preview the dynamic architecture topology, estimated sprints, and projected ROI.
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
                  <div
                    key={domain.id}
                    className={`selection-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedDomain(domain.id)}
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 2 & 3 Combined: Capabilities + Stack + Live Topology */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Left Config: Capabilities & Cloud */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="wizard-step-num" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>2</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Configure Agent & System Capabilities</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {CAPABILITIES.map((cap) => {
                    const isChecked = selectedCaps.includes(cap.id);
                    return (
                      <div
                        key={cap.id}
                        onClick={() => toggleCapability(cap.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1.25rem',
                          background: isChecked ? 'rgba(37, 99, 235, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid ${isChecked ? 'rgba(56, 189, 248, 0.4)' : 'var(--border-subtle)'}`,
                          borderRadius: '0.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
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
                      </div>
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
                    <label className="form-label">Cloud Ecosystem</label>
                    <select
                      className="form-input"
                      value={selectedCloud}
                      onChange={(e) => setSelectedCloud(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    >
                      {CLOUD_PROVIDERS.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Vector Database</label>
                    <select
                      className="form-input"
                      value={selectedVectorDB}
                      onChange={(e) => setSelectedVectorDB(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    >
                      {VECTOR_DBS.map(v => <option key={v} value={v}>{v}</option>)}
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

            {/* Right Display: Live Dynamic Architecture Topology + Live Calculations */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ color: '#38bdf8' }}>hub</span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Generated Architecture Topology</h3>
                  </div>
                  <span className="badge-pill" style={{ padding: '0.2rem 0.6rem', fontSize: '0.65rem' }}>
                    Dynamic SVG
                  </span>
                </div>

                {/* SVG Visualizer */}
                <div className="topology-container" style={{ minHeight: '230px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 500 240" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    {/* Flows */}
                    <path d="M 80,70 Q 150,70 210,120" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeDasharray="5,5" />
                    <path d="M 80,170 Q 150,170 210,120" stroke="#06b6d4" strokeWidth="2.5" fill="none" strokeDasharray="5,5" />
                    <path d="M 290,120 Q 360,70 420,70" stroke="#8b5cf6" strokeWidth="2.5" fill="none" strokeDasharray="5,5" />
                    <path d="M 290,120 Q 360,170 420,170" stroke="#10b981" strokeWidth="2.5" fill="none" strokeDasharray="5,5" />

                    {/* Source Node */}
                    <g transform="translate(15, 45)">
                      <rect width="110" height="50" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                      <text x="55" y="24" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle">INGESTION</text>
                      <text x="55" y="38" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">{selectedCloud.split(' ')[0]}</text>
                    </g>

                    {/* Vector Node */}
                    <g transform="translate(15, 145)">
                      <rect width="110" height="50" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
                      <text x="55" y="24" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle">MEMORY / RAG</text>
                      <text x="55" y="38" fill="#ffffff" fontSize="9.5" fontWeight="800" textAnchor="middle">{selectedVectorDB.split(' ')[0]}</text>
                    </g>

                    {/* Central Cynbit Agent Core */}
                    <g transform="translate(180, 85)">
                      <rect width="140" height="75" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                      <circle cx="70" cy="28" r="14" fill="#2563eb" />
                      <text x="70" y="33" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle">CYNBIT</text>
                      <text x="70" y="54" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle">{activeDomainObj.title.split(' ')[0]} Hub</text>
                      <text x="70" y="66" fill="#38bdf8" fontSize="8" fontWeight="700" textAnchor="middle">Autonomous Core</text>
                    </g>

                    {/* Integration Node */}
                    <g transform="translate(375, 45)">
                      <rect width="110" height="50" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
                      <text x="55" y="24" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle">ORCHESTRATION</text>
                      <text x="55" y="38" fill="#ffffff" fontSize="9.5" fontWeight="800" textAnchor="middle">{selectedCaps.length} Active Modules</text>
                    </g>

                    {/* Output Client Interface */}
                    <g transform="translate(375, 145)">
                      <rect width="110" height="50" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                      <text x="55" y="24" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle">DELIVERY</text>
                      <text x="55" y="38" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">Production Ready</text>
                    </g>
                  </svg>
                </div>

                {/* Scoping Metrics Output Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Engineering Delivery
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#38bdf8', marginTop: '0.25rem' }}>
                      {metrics.weeks} Weeks <span style={{ fontSize: '0.85rem', color: '#64748b' }}>({metrics.totalSprints} Sprints)</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Projected Efficiency Gain
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#34d399', marginTop: '0.25rem' }}>
                      +{metrics.efficiencyBonus}%
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Operational Hours Saved
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', marginTop: '0.25rem' }}>
                      ~{metrics.totalHoursSaved}h <span style={{ fontSize: '0.75rem', color: '#64748b' }}>/ month</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Squad Allocation
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#e2e8f0', marginTop: '0.35rem', lineHeight: 1.3 }}>
                      {metrics.squad}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  id="generate-blueprint-btn"
                  className="btn btn-primary btn-glow"
                  onClick={handleGenerate}
                  style={{ flex: 1, padding: '1rem', fontSize: '0.9rem' }}
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
