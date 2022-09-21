import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Box, createTheme, IconButton, PaletteMode, ThemeProvider, useTheme } from '@mui/material';
import React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { getDesignTokens } from '../context/theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const HeaderComponent = () => {
    

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return <Box style={{width: '100%', display: 'flex',height:"6rem", justifyContent: 'space-between'}}
    sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        // borderRadius: 1,
        p: 3,
      }}
    >
    <span>
        Where in the World?
    </span>
    <span style={{fontSize: '1.4rem', 'fontWeight': '400', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
        {/* <DarkModeOutlinedIcon/> */}
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
        {theme.palette.mode} Mode
    </span>
    </Box> 
}

export default function ToggleColorMode() {
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
          <HeaderComponent />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
