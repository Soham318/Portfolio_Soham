import { useEffect, useState, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'soham_portfolio_theme';

const THEME_OPTIONS = [
  { id: 'cyber-neon', label: 'Cyber Neon', icon: '⚡', color: '#00F0FF' },
  { id: 'midnight', label: 'Midnight Aurora', icon: '🌌', color: '#8B5CF6' },
  { id: 'light', label: 'Daylight', icon: '☀️', color: '#2563EB' },
  { id: 'forest-ember', label: 'Forest Ember', icon: '🌲', color: '#10B981' }
];

const THEME_COLOR_META_MAP = {
  'cyber-neon': '#050811',
  'midnight': '#0B1020',
  'light': '#F8FAFC',
  'forest-ember': '#07130F'
};

export function ThemeProvider({ children }) {
  // Default to 'cyber-neon' (signature Cyber Neon visual identity) on fresh visit.
  // Respect stored preference from localStorage if valid among the 4 themes.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'cyber-neon';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ['cyber-neon', 'midnight', 'light', 'forest-ember'].includes(stored)) {
      return stored;
    }
    return 'cyber-neon';
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const idx = THEME_OPTIONS.findIndex((t) => t.id === prev);
      const nextIdx = (idx + 1) % THEME_OPTIONS.length;
      return THEME_OPTIONS[nextIdx].id;
    });
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
    isDark: theme !== 'light'
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
