import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profileData';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer
 * Semantic footer with navigation links and professional references.
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
                <span className="brand-tag">Computer Engineering • VJTI</span>
              </div>
            </div>
            <p>
              Undergraduate portfolio showcasing software projects,
              backend architectures, and reactive web applications.
            </p>
          </div>

          {/* Quick Sections */}
          <div>
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Me</a></li>
              <li><a href="#education" className="footer-link">Education</a></li>
              <li><a href="#skills" className="footer-link">Technical Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
            </ul>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/Soham318"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#resume" className="footer-link">Resume Overview</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact Inquiries</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {CURRENT_YEAR} {profileData.personal.name}. Built with React & Vite.</p>
          <div className="footer-badge">
            <span>Midnight Aurora Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
