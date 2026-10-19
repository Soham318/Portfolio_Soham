import { useEffect, useState, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'soham_portfolio_theme';

const THEME_OPTIONS = [
  { id: 'cyber-neon', label: 'Cyber Neon', icon: '⚡', color: '#00F0FF' },
  { id: 'light', label: 'Daylight', icon: '☀️', color: '#2563EB' }
];

const THEME_COLOR_META_MAP = {
  'cyber-neon': '#050811',
  'light': '#F8FAFC'
};

export function ThemeProvider({ children }) {
  // Always default to 'cyber-neon' (the theme provided in the image) on fresh visit.
  // Respect stored preference from localStorage only if valid between cyber-neon and light.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'cyber-neon';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (stored === 'cyber-neon' || stored === 'light')) {
      return stored;
    }
    return 'cyber-neon';
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'cyber-neon' ? 'light' : 'cyber-neon'));
  };

  // Sync DOM attribute and localStorage whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update browser theme-color meta tag for mobile browser chrome
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', THEME_COLOR_META_MAP[theme] || '#050811');
    }
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme,
    themes: THEME_OPTIONS,
    isDark: theme === 'cyber-neon'
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
