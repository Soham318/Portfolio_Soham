import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'soham_portfolio_theme';

export function ThemeProvider({ children }) {
  // Always default to 'midnight' (Midnight Aurora dark mode) on a fresh visit.
  // If the user has explicitly chosen and stored a preference in localStorage, respect it.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'midnight';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'midnight') {
      return stored;
    }
    // Fresh visit default: Midnight Aurora dark mode
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
      metaThemeColor.setAttribute('content', theme === 'midnight' ? '#0B1020' : '#F8FAFC');
    }
  }, [theme]);

  // Toggle helper function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'midnight' ? 'light' : 'midnight'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'midnight' }}>
      {children}
    </ThemeContext.Provider>
  );
}
