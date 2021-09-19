import React from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#363537',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark //default value
  );