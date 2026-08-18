import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    const stored = localStorage.getItem('colorScheme');
    const resolvedMode = stored || 'light';
    
    let activeTheme = resolvedMode;
    if (resolvedMode === 'system') {
        activeTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Ustaw color-scheme natychmiast przy inicjalizacji
    let colorScheme = activeTheme;
    if (['frutiger', 'autumn', 'christmas'].includes(activeTheme)) colorScheme = 'light';
    if (activeTheme === 'halloween') colorScheme = 'dark';
    document.documentElement.style.setProperty('color-scheme', colorScheme);
    document.documentElement.dataset.theme = resolvedMode;
    return resolvedMode;
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (themeMode === 'system') {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return themeMode;
  });

  useEffect(() => {
    const updateTheme = () => {
      let activeTheme = themeMode;
      if (themeMode === 'system') {
        activeTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      setResolvedTheme(activeTheme);
      
      const root = document.documentElement;
      let colorScheme = activeTheme;
      if (['frutiger', 'autumn', 'christmas'].includes(activeTheme)) colorScheme = 'light';
      if (activeTheme === 'halloween') colorScheme = 'dark';
      root.style.setProperty('color-scheme', colorScheme);
      root.dataset.theme = themeMode; // use raw themeMode for data-theme ('frutiger', 'system', 'light', 'dark')
    };

    updateTheme();
    localStorage.setItem('colorScheme', themeMode);

    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => updateTheme();
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.addListener(listener);
        return () => mediaQuery.removeListener(listener);
      }
    }
  }, [themeMode]);

  const toggleTheme = (idOrState, newState) => {
    if (typeof newState === 'boolean') {
      setThemeMode(newState ? 'dark' : 'light');
      return;
    }
    if (typeof idOrState === 'boolean') {
      setThemeMode(idOrState ? 'dark' : 'light');
      return;
    }
    setThemeMode((prev) => (resolvedTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, themeMode, setThemeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
