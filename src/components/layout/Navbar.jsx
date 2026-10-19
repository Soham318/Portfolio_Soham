import { useState } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { NAV_LINKS } from '../../data/navLinks';
import { MobileNav } from './MobileNav';

export function Navbar({ activeSection, isScrolled }) {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Link */}
        <a href="#home" className="brand-link" aria-label="Soham Umesh Chavan - Home">
          <span className="brand-badge" aria-hidden="true">SC</span>
          <div className="brand-text">
            <span className="brand-name">Soham Chavan</span>
            <span className="brand-tag">Computer Engineering</span>
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

        {/* Header Actions (Theme Toggle & Mobile Trigger) */}
        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

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
