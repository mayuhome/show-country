import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ColorModeContext, HeaderComponent } from './components/header';
import { getAllCountries } from './api-data';
import { Navigate, Route, Routes } from 'react-router';
import { CountryListScreen } from './screens/country-list';
import { DetailScreen } from './screens/detail';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { getDesignTokens } from './context/theme';

// export function ToggleColorMode(): JSX.Element {
//   const [mode, setMode] = React.useState<PaletteMode>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <HeaderComponent />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }


function App() {

  // const [counties, setCountries]=useState([]);
  getAllCountries();


  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
    <div className="App" style={{background: theme.palette.background.default, color: theme.palette.text.primary}}>
      <div className="header">
      <HeaderComponent/>
      {/* <ToggleColorMode/> */}
      </div>
      <div className="main">
          <Routes>
          <Route path={"countries"} element={<CountryListScreen />} />
          <Route path={"countries/:code"} element={<DetailScreen />} />
          <Route path='*' element={<Navigate to={`/countries`} replace />} />
          </Routes>
      </div>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
