import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profileData';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer
 * Semantic footer with navigation links and verified professional channels.
 */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Purpose Column */}
          <div className="footer-brand">
            <div className="brand-link" style={{ pointerEvents: 'none' }}>
              <span className="brand-badge" aria-hidden="true">SC</span>
              <div className="brand-text">
                <span className="brand-name">{profileData.personal.name}</span>
                <span className="brand-tag">Computer Engineering (Minor: Cybersecurity) • VJTI</span>
              </div>
            </div>
            <p>
              Undergraduate engineering portfolio showcasing verified software systems,
              operations research algorithms, and structured architecture concepts.
            </p>
          </div>

          {/* Quick Sections */}
          <div>
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Profile</a></li>
              <li><a href="#timeline" className="footer-link">Education & Timeline</a></li>
              <li><a href="#skills" className="footer-link">Skills & Stack</a></li>
              <li><a href="#projects" className="footer-link">Projects Showcase</a></li>
              <li><a href="#contact" className="footer-link">Send a Message</a></li>
            </ul>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="footer-heading">Professional Profiles</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/soham-chavan-1a8339348/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Soham318"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>GitHub Codebases</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:csoham8042@gmail.com"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>csoham8042@gmail.com</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact Inquiry Form</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {CURRENT_YEAR} {profileData.personal.name}. Built with React & Vite.</p>
          <div className="footer-badge">
            <span>Midnight Aurora • Multi-Theme Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
