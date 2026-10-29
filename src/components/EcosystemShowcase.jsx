import React from 'react';

export default function EcosystemShowcase({ onOpenLab }) {
  return (
    <section id="ecosystem" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>domain</span>
            <span>Our Ecosystem</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Foundational <span className="gradient-text">Architectural Pillars</span>.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Integrated excellence across autonomous AI technology, full-stack software development, proprietary SaaS suites, and human-centric social impact.
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Pillar 1: Custom IT Infrastructure */}
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '1rem',
                background: 'rgba(37, 99, 235, 0.15)',
                color: '#60a5fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(37, 99, 235, 0.25)'
              }}>
                <span className="material-symbols-outlined fill-1" style={{ fontSize: '28px' }}>settings_suggest</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Custom IT Infrastructure
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Specialized software architecture and secure cloud foundations. We engineer scalable growth engines designed to accelerate technical maturity.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#60a5fa' }}>AI Automation</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>LLM & Agent Swarms</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38bdf8' }}>Software Dev</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Web & Mobile Apps</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#a78bfa' }}>Cloud Systems</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>AWS, Azure, K8s</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#34d399' }}>Technical SEO</div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Search Growth & ROI</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                type="button"
                className="btn btn-secondary" 
                onClick={onOpenLab}
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.8rem' }}
              >
                Scope Infrastructure Project &rarr;
              </button>
            </div>
          </div>

          {/* Pillar 2: Proprietary SaaS Suite */}
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
            <div>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>inventory_2</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Proprietary SaaS Suite
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Bespoke digital ecosystems engineered for specific market challenges and organizational operational excellence.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>
                    CS
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>Cynbit Studio</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Career intelligence & technical assessment engine</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#06b6d4', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>auto_awesome</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>Revio</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>AI Review Assistant & automated feedback generation</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem' }}>
                    TE
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>TenantEase</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Smart property ecosystem and automated tenant operations</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                type="button"
                className="btn btn-primary" 
                onClick={onOpenLab}
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.8rem' }}
              >
                Explore Product Architecture &rarr;
              </button>
            </div>
          </div>

          {/* Pillar 3: BitElevate & Social Impact */}
          <div className="glass-panel" id="bitelevate" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '1rem',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>school</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                BitElevate & Social Impact
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Bridging academic learning with industry mastery. Over 1,000+ architects trained in high-demand software engineering, plus rural IT empowerment with <strong>Manav Seva Trust</strong>.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#34d399' }}>BitElevate Certification</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>1000+ Alumni</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Industry-standard curriculum & direct mentor pairing with senior engineers.</p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fbbf24' }}>Manav Seva Trust</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Rural Rajasthan</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Free computer & IT education for government school students.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a 
                href="https://cynbit.in/bitelevate" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.8rem', textAlign: 'center' }}
              >
                Learn More About BitElevate &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
