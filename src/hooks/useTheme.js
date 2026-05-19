import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('colorScheme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('color-scheme', theme);
    localStorage.setItem('colorScheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
