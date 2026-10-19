import { useEffect, useState, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'soham_portfolio_theme';

const THEME_OPTIONS = [
  { id: 'midnight', label: 'Midnight Aurora', icon: '🌌', color: '#8B5CF6' },
  { id: 'light', label: 'Daylight', icon: '☀️', color: '#2563EB' },
  { id: 'cyber-neon', label: 'Cyber Neon', icon: '⚡', color: '#00F0FF' },
  { id: 'forest-ember', label: 'Forest Ember', icon: '🌲', color: '#10B981' }
];

const THEME_COLOR_META_MAP = {
  'midnight': '#0B1020',
  'light': '#F8FAFC',
  'cyber-neon': '#050811',
  'forest-ember': '#07130F'
};

export function ThemeProvider({ children }) {
  // Always default to 'midnight' (Midnight Aurora dark mode) on fresh visit.
  // Respect stored preference from localStorage if valid.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'midnight';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ['midnight', 'light', 'cyber-neon', 'forest-ember'].includes(stored)) {
      return stored;
    }
    return 'midnight';
  });

  // Sync DOM attribute and localStorage whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update browser theme-color meta tag for mobile browser chrome
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', THEME_COLOR_META_MAP[theme] || '#0B1020');
    }
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme,
    themes: THEME_OPTIONS,
    isDark: theme !== 'light'
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
