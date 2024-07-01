import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import LandingPage from './LandingPage';
import NotFound from './NotFound';
import Diplomas from './components/Diplomas';
import AppAppBar from './components/AppAppBar';
import CustomSpeedDial from './components/Dial';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/diplomas" element={<Diplomas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  // Get initial mode from localStorage or system preference
  const getInitialMode = (): PaletteMode => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode === 'dark' || savedMode === 'light') {
      return savedMode;
    }
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDarkMode ? 'dark' : 'light';
  };

  const [mode, setMode] = React.useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    // Save mode to localStorage whenever it changes
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // Light mode theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        light: '#aaa866',
        main: '#949146',
        dark: '#706e3e',
        contrastText: '#000',
      },
      background: {
        paper: '#f0e6d5',
        default: '#f0e6d5',
      },
    },
  });

  // Dark mode theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#aaa866',
        main: '#949146',
        dark: '#706e3e',
        contrastText: '#fff',
      },
      background: {
        paper: '#333',
        default: '#121212',
      },
    },
  });
  const theme = mode === 'light' ? lightTheme : darkTheme;

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Box sx={{ bgcolor: 'background.default' }}>
          <App />
          <CustomSpeedDial />
        </Box>
      </ThemeProvider>
    </HashRouter>
  );
}

export default WrappedApp;
