import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ChevronDown, Check, Palette } from 'lucide-react';

/**
 * ThemePicker
 * Accessible, compact dropdown for selecting among 4 curated themes:
 * 1. Cyber Neon (Default - signature cyan visual identity)
 * 2. Midnight Aurora
 * 3. Daylight
 * 4. Forest Ember
 */
export function ThemePicker() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isOpen]);

  // Handle keyboard navigation (Escape to close)
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="theme-picker-container" ref={containerRef} onKeyDown={handleKeyDown}>
      <button
        type="button"
        className="theme-picker-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Change visual theme. Current theme: ${currentTheme.label}`}
        title={`Theme: ${currentTheme.label}`}
      >
        <span className="theme-picker-icon-badge" style={{ backgroundColor: currentTheme.color }} aria-hidden="true" />
        <Palette size={15} className="theme-picker-palette-icon" aria-hidden="true" />
        <span className="theme-picker-current-label">{currentTheme.label}</span>
        <ChevronDown size={13} className={`theme-picker-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <ul
          className="theme-picker-dropdown"
          role="listbox"
          aria-label="Select website theme"
        >
          {themes.map((t) => {
            const isSelected = t.id === theme;
            return (
              <li
                key={t.id}
                role="option"
                aria-selected={isSelected}
                className={`theme-picker-option ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
              >
                <span
                  className="theme-option-dot"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                />
                <span className="theme-option-label">{t.label}</span>
                {isSelected && <Check size={14} className="theme-option-check" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
