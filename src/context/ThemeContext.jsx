import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('colorScheme');
    const resolved = stored || 'light';
    // Ustaw color-scheme natychmiast przy inicjalizacji
    document.documentElement.style.setProperty('color-scheme', resolved);
    document.documentElement.dataset.theme = resolved;
    return resolved;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('color-scheme', theme);
    root.dataset.theme = theme;
    localStorage.setItem('colorScheme', theme);
  }, [theme]);

  const toggleTheme = (idOrState, newState) => {
    if (typeof newState === 'boolean') {
      setTheme(newState ? 'dark' : 'light');
      return;
    }

    if (typeof idOrState === 'boolean') {
      setTheme(idOrState ? 'dark' : 'light');
      return;
    }

    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
