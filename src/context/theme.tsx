import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import React from 'react';

/**
 * Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
    Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
    Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
    Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
    Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
    White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
 */
// export const themes = {
//     light: {
//         elements: 'hsl(0, 0%, 100%)',
//         textColor: 'hsl(200, 15%, 8%)',
//         background: 'hsl(0, 0%, 98%)',
//     },
//     dark: {
//         elements: 'hsl(209, 23%, 22%)',
//         textColor: 'hsl(0, 0%, 100%)',
//         background: 'hsl(207, 26%, 17%)',
//     },
//   };
  
//   export const ThemeContext = React.createContext({
//     theme: themes.dark,
//     toggleTheme: () => {},
//   });



export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main: 'hsl(0, 0%, 100%)'
            },
            background: {
              default:  'hsl(0, 0%, 98%)',
            },
            divider: amber[200],
            text: {
              primary:  'hsl(200, 15%, 8%)',
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: {
                main: 'hsl(209, 23%, 22%)'
            },
            // divider: deepOrange[700],
            background: {
              default:'hsl(207, 26%, 17%)',
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  
  