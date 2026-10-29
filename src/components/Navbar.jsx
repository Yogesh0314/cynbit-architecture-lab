import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenLab, onOpenSandbox }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('lab');

  // Track scroll position to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const labEl = document.getElementById('architecture-lab');
      const sandboxEl = document.getElementById('agent-sandbox');
      const ecosystemEl = document.getElementById('ecosystem');
      const metricsEl = document.getElementById('metrics');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (metricsEl && scrollPos >= metricsEl.offsetTop) {
        setActiveSection('metrics');
      } else if (ecosystemEl && scrollPos >= ecosystemEl.offsetTop) {
        setActiveSection('ecosystem');
      } else if (sandboxEl && scrollPos >= sandboxEl.offsetTop) {
        setActiveSection('sandbox');
      } else if (labEl && scrollPos >= labEl.offsetTop) {
        setActiveSection('lab');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (section, action) => {
    setActiveSection(section);
    if (action) action();
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header" role="banner">
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container nav-inner">
          {/* Brand Logo with High Contrast */}
          <a 
            href="#" 
            className="nav-brand" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); }}
            aria-label="Cynbit Technologies Home"
          >
            <img 
              src="/logo.svg" 
              alt="Cynbit Technologies" 
              width="145" 
              height="38" 
              style={{ display: 'block', height: '36px', width: 'auto' }} 
            />
          </a>

          {/* Enterprise Segmented Navigation Bar */}
          <div className="nav-segmented-control" role="menubar">
            <button
              type="button"
              role="menuitem"
              className={`nav-tab-btn ${activeSection === 'lab' ? 'active' : ''}`}
              onClick={() => handleNavClick('lab', onOpenLab)}
              aria-current={activeSection === 'lab' ? 'page' : undefined}
            >
              <span className="material-symbols-outlined nav-tab-icon">account_tree</span>
              <span>Architecture Lab</span>
            </button>

            <button
              type="button"
              role="menuitem"
              className={`nav-tab-btn ${activeSection === 'sandbox' ? 'active' : ''}`}
              onClick={() => handleNavClick('sandbox', onOpenSandbox)}
              aria-current={activeSection === 'sandbox' ? 'page' : undefined}
            >
              <span className="material-symbols-outlined nav-tab-icon">smart_toy</span>
              <span>Agent Sandbox</span>
            </button>

            <button
              type="button"
              role="menuitem"
              className={`nav-tab-btn ${activeSection === 'ecosystem' ? 'active' : ''}`}
              onClick={() => handleNavClick('ecosystem', () => scrollToElement('ecosystem'))}
              aria-current={activeSection === 'ecosystem' ? 'page' : undefined}
            >
              <span className="material-symbols-outlined nav-tab-icon">domain</span>
              <span>Ecosystem</span>
            </button>

            <button
              type="button"
              role="menuitem"
              className={`nav-tab-btn ${activeSection === 'metrics' ? 'active' : ''}`}
              onClick={() => handleNavClick('metrics', () => scrollToElement('metrics'))}
              aria-current={activeSection === 'metrics' ? 'page' : undefined}
            >
              <span className="material-symbols-outlined nav-tab-icon">insights</span>
              <span>Impact</span>
            </button>

            <button
              type="button"
              role="menuitem"
              className={`nav-tab-btn ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact', () => scrollToElement('contact'))}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              <span className="material-symbols-outlined nav-tab-icon">mail</span>
              <span>Contact</span>
            </button>
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="nav-actions">
            <button 
              id="nav-start-discovery-btn"
              type="button"
              className="btn btn-primary nav-cta-btn"
              onClick={() => handleNavClick('lab', onOpenLab)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>tune</span>
              <span>Scope Architecture</span>
            </button>

            <button 
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Enterprise Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="nav-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="nav-mobile-list">
              <button 
                type="button"
                className={`nav-mobile-item ${activeSection === 'lab' ? 'active' : ''}`}
                onClick={() => handleNavClick('lab', onOpenLab)}
              >
                <div className="nav-mobile-icon-box">
                  <span className="material-symbols-outlined">account_tree</span>
                </div>
                <div>
                  <div className="nav-mobile-title">Architecture Lab</div>
                  <div className="nav-mobile-desc">Dynamic project scoping & topology</div>
                </div>
              </button>

              <button 
                type="button"
                className={`nav-mobile-item ${activeSection === 'sandbox' ? 'active' : ''}`}
                onClick={() => handleNavClick('sandbox', onOpenSandbox)}
              >
                <div className="nav-mobile-icon-box">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div>
                  <div className="nav-mobile-title">AI Agent Sandbox</div>
                  <div className="nav-mobile-desc">Live simulated runtime execution</div>
                </div>
              </button>

              <button 
                type="button"
                className={`nav-mobile-item ${activeSection === 'ecosystem' ? 'active' : ''}`}
                onClick={() => handleNavClick('ecosystem', () => scrollToElement('ecosystem'))}
              >
                <div className="nav-mobile-icon-box">
                  <span className="material-symbols-outlined">domain</span>
                </div>
                <div>
                  <div className="nav-mobile-title">Ecosystem & SaaS</div>
                  <div className="nav-mobile-desc">Infrastructure, Revio, CS & TenantEase</div>
                </div>
              </button>

              <button 
                type="button"
                className={`nav-mobile-item ${activeSection === 'metrics' ? 'active' : ''}`}
                onClick={() => handleNavClick('metrics', () => scrollToElement('metrics'))}
              >
                <div className="nav-mobile-icon-box">
                  <span className="material-symbols-outlined">insights</span>
                </div>
                <div>
                  <div className="nav-mobile-title">Client Impact</div>
                  <div className="nav-mobile-desc">Enterprise metrics & case studies</div>
                </div>
              </button>

              <button 
                type="button"
                className={`nav-mobile-item ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact', () => scrollToElement('contact'))}
              >
                <div className="nav-mobile-icon-box">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="nav-mobile-title">Contact Cynbit HQ</div>
                  <div className="nav-mobile-desc">Jaipur engineering inquiry hub</div>
                </div>
              </button>

              <div style={{ paddingTop: '0.75rem' }}>
                <button 
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleNavClick('lab', onOpenLab)}
                  style={{ width: '100%', padding: '0.9rem', justifyContent: 'center' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>tune</span>
                  <span>Scope Architecture Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
