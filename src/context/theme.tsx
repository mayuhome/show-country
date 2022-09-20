import React from 'react';

/**
 * Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
    Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
    Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
    Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
    Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
    White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
 */
export const themes = {
    light: {
        elements: 'hsl(0, 0%, 100%)',
        textColor: 'hsl(200, 15%, 8%)',
        background: 'hsl(0, 0%, 98%)',
    },
    dark: {
        elements: 'hsl(209, 23%, 22%)',
        textColor: 'hsl(0, 0%, 100%)',
        background: 'hsl(207, 26%, 17%)',
    },
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });