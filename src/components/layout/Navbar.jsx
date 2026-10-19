import { useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/navLinks';
import { MobileNav } from './MobileNav';
import { ThemePicker } from '../common/ThemePicker';

export function Navbar({ activeSection, isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Link */}
        <a href="#home" className="brand-link" aria-label="Soham Umesh Chavan - Home">
          <span className="brand-badge" aria-hidden="true">SC</span>
          <div className="brand-text">
            <span className="brand-name">Soham Chavan</span>
            <span className="brand-tag">Computer Engineering • VJTI</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions (Theme Picker, Let's Talk Pill & Mobile Trigger) */}
        <div className="navbar-actions">
          <ThemePicker />

          <a href="#contact" className="navbar-cta-pill" aria-label="Navigate to contact section">
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        activeSection={activeSection}
      />
    </header>
  );
}
