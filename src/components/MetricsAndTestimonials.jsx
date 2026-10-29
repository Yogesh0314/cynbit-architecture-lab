import React from 'react';

const TESTIMONIALS = [
  {
    client: 'Marketing Addict',
    category: 'Strategic Partner',
    metric: '+40% Growth',
    quote: 'Cynbit transformed our technical infrastructure, resulting in a 40% increase in organic leads. Their architectural approach is revolutionary.',
    icon: 'campaign'
  },
  {
    client: 'Evento',
    category: 'Enterprise SaaS',
    metric: '50k+ Users',
    quote: 'The AI automation handled 50k+ users without a single flicker of latency. True engineering rigor from discovery to deployment.',
    icon: 'event'
  },
  {
    client: 'Urban Wardrobe',
    category: 'Global Retail',
    metric: '99.9% Uptime',
    quote: "Cynbit's cloud architecture gave us the global stability we needed to expand our digital commerce footprint rapidly.",
    icon: 'shopping_bag'
  },
  {
    client: 'Cloudy Tales',
    category: 'Creative Studio',
    metric: '100% Success',
    quote: 'From the first blueprint to final deployment, the Cynbit team acted as true architects of our story.',
    icon: 'cloud'
  }
];

export default function MetricsAndTestimonials() {
  return (
    <section id="metrics" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
            <span>Validation & Real-World Impact</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Architecting Success for <span className="gradient-text">Visionaries</span>.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Proven results delivered across enterprise SaaS, AI automation, and cloud platforms.
          </p>
        </div>

        {/* Global Impact Numbers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          <div className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#38bdf8', letterSpacing: '-0.02em' }}>98%</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginTop: '0.25rem' }}>
              Client Retention
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#34d399', letterSpacing: '-0.02em' }}>24/7</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginTop: '0.25rem' }}>
              Architect Support
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#a78bfa', letterSpacing: '-0.02em' }}>3x</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginTop: '0.25rem' }}>
              ROI Uplift
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fbbf24', letterSpacing: '-0.02em' }}>6+</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginTop: '0.25rem' }}>
              Global Markets
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {TESTIMONIALS.map((item) => (
            <div key={item.client} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'rgba(56, 189, 248, 0.4)' }}>
                    format_quote
                  </span>
                  <span className="badge-pill" style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem', color: '#38bdf8' }}>
                    {item.metric}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(37, 99, 235, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>{item.client}</h4>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
