import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    details: "#FFF227", //yellow
    elements1: "#8FF8FF",
    elements2Text: "#000000",
    elements2: "#22CAD6"
  },
  dark: {
    foreground: '#ffffff',
    background: "#001433",//"#0C254D",//'#363537',
    details: "#FFF227", //yellow
    elements1: "#8FF8FF",
    elements2Text: "#000000",
    elements2: "#22CAD6"
  },
};

/*
localStorage management of objects
localStorage.setItem('contextTheme', JSON.stringify(theme));
JSON.parse(localStorage.getItem('contextTheme'));
*/

export const ThemeContext = React.createContext(
  themes.dark //default value
);