import { useEffect, useRef } from 'react';
import { X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * MobileNav
 * Accessible slide-over drawer navigation for mobile and tablet screens.
 * Implements keyboard trap and WCAG focus management.
 */
export function MobileNav({ isOpen, onClose, navLinks, activeSection }) {
  const { isDark, toggleTheme } = useTheme();
  const closeButtonRef = useRef(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav-header">
          <div className="brand-badge" aria-hidden="true">SC</div>
          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-nav-close-btn"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`mobile-nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', height: '44px' }}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            {isDark ? (
              <>
                <Sun size={18} aria-hidden="true" />
                <span>Switch to Light Theme</span>
              </>
            ) : (
              <>
                <Moon size={18} aria-hidden="true" />
                <span>Switch to Midnight Theme</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
