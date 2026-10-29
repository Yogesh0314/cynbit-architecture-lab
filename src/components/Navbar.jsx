import React, { useState } from 'react';

export default function Navbar({ onOpenLab, onOpenSandbox }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="container nav-inner">
        <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/logo.svg" alt="Cynbit Technologies Logo" width="130" height="42" style={{ display: 'block' }} />
        </a>

        <ul className="nav-links">
          <li>
            <button className="nav-link active" onClick={onOpenLab} style={{ background: 'none', border: 'none' }}>
              <span>Architecture Lab</span>
              <span className="nav-badge-pill">NEW PROTOTYPE</span>
            </button>
          </li>
          <li>
            <button className="nav-link" onClick={onOpenSandbox} style={{ background: 'none', border: 'none' }}>
              <span>Agent Sandbox</span>
            </button>
          </li>
          <li>
            <a href="#ecosystem" className="nav-link">
              <span>Ecosystem</span>
            </a>
          </li>
          <li>
            <a href="#bitelevate" className="nav-link">
              <span>BitElevate</span>
            </a>
          </li>
          <li>
            <a href="#metrics" className="nav-link">
              <span>Impact</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              <span>Contact</span>
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            id="nav-start-discovery-btn"
            className="btn btn-primary btn-glow"
            onClick={onOpenLab}
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.78rem' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>science</span>
            <span>Launch Lab</span>
          </button>
          <button 
            className="btn btn-secondary md-hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ padding: '0.6rem', borderRadius: '50%', width: '40px', height: '40px', display: 'flex' }}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(10, 14, 26, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 999
        }}>
          <button className="nav-link" onClick={() => { onOpenLab(); setMobileMenuOpen(false); }} style={{ fontSize: '1.2rem', textAlign: 'left', background: 'none', border: 'none' }}>
            🚀 Architecture Lab (Interactive Scoping)
          </button>
          <button className="nav-link" onClick={() => { onOpenSandbox(); setMobileMenuOpen(false); }} style={{ fontSize: '1.2rem', textAlign: 'left', background: 'none', border: 'none' }}>
            🤖 AI Agent Sandbox
          </button>
          <a href="#ecosystem" className="nav-link" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.2rem' }}>
            ⚡ Ecosystem & Services
          </a>
          <a href="#bitelevate" className="nav-link" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.2rem' }}>
            🎓 BitElevate Academy
          </a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.2rem' }}>
            ✉️ Contact Cynbit HQ
          </a>
          <button 
            className="btn btn-primary btn-glow"
            onClick={() => { onOpenLab(); setMobileMenuOpen(false); }}
            style={{ marginTop: '1rem', width: '100%', padding: '1rem' }}
          >
            Start Discovery Blueprint
          </button>
        </div>
      )}
    </nav>
  );
}
