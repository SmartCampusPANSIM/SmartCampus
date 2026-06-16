import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('colorScheme');
    return stored || 'light';
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

  return { theme, toggleTheme };
};
