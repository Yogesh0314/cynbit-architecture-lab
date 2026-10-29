import React from 'react';

export default function Footer({ onOpenLab }) {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Contact Info */}
          <div style={{ maxWidth: '340px' }}>
            <img src="/logo.svg" alt="Cynbit Technologies" width="140" height="44" style={{ marginBottom: '1.25rem' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Architecting the digital future with autonomous AI agents, scalable digital infrastructure, and custom software systems.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#38bdf8' }}>mail</span>
                <a href="mailto:opportunities@cynbit.in" style={{ color: 'inherit', textDecoration: 'none' }}>
                  opportunities@cynbit.in
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#34d399' }}>call</span>
                <a href="tel:+918947962667" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +91 89479 62667
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#fbbf24', marginTop: '2px' }}>location_on</span>
                <span>32/115 Pratap Nagar, Jaipur, Rajasthan 302033</span>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions & Lab */}
          <div className="footer-col">
            <h5>Interactive Hub</h5>
            <ul className="footer-links">
              <li>
                <button 
                  type="button"
                  onClick={onOpenLab} 
                  style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left', fontWeight: 700 }}
                >
                  🚀 AI Architecture Lab
                </button>
              </li>
              <li><a href="#agent-sandbox" className="footer-link">Live Agent Sandbox</a></li>
              <li><a href="#ecosystem" className="footer-link">Custom IT Infrastructure</a></li>
              <li><a href="#ecosystem" className="footer-link">Proprietary SaaS Suite</a></li>
              <li><a href="#metrics" className="footer-link">Enterprise Case Studies</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="https://cynbit.in/story" target="_blank" rel="noreferrer" className="footer-link">Our Story</a></li>
              <li><a href="https://cynbit.in/team" target="_blank" rel="noreferrer" className="footer-link">Our Architects & Team</a></li>
              <li><a href="https://cynbit.in/careers" target="_blank" rel="noreferrer" className="footer-link">Careers at Cynbit</a></li>
              <li><a href="https://cynbit.in/bitelevate" target="_blank" rel="noreferrer" className="footer-link">BitElevate Academy</a></li>
              <li><a href="https://cynbit.in/impact" target="_blank" rel="noreferrer" className="footer-link">Manav Seva Social Impact</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Connect */}
          <div className="footer-col">
            <h5>Executive Briefing</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              Join 25,000+ architects and tech leaders receiving our weekly technical deep-dives on autonomous agents and system engineering.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter work email"
                className="form-input"
                style={{ padding: '0.6rem 0.85rem', fontSize: '0.85rem' }}
              />
              <button type="button" className="btn btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.75rem' }}>
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © 2026 Cynbit Technologies. Engineered for Optimism.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://cynbit.in/terms" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="https://cynbit.in/privacy" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="https://www.linkedin.com/company/cynbit-in/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://x.com/Cynbit_in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>X (Twitter)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
