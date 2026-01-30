import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'christmas' | 'professional';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  isChristmas: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('christmas');

  const toggleMode = () => {
    setMode(prev => prev === 'christmas' ? 'professional' : 'christmas');
  };

  useEffect(() => {
    if (mode === 'professional') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isChristmas: mode === 'christmas' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
