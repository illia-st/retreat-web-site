import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import NotFound from './NotFound';
import Diplomas from './components/Diplomas';
import AppAppBar, { CustomMenuItemProps } from './components/AppAppBar';
import CustomSpeedDial from './components/Dial';

import RootPage from './pages/RootPage';
import Port2025Retreat from './pages/retreats/Port2025';
import Swiss2025Retreat from './pages/retreats/Swiss2025';
import AppInterface from './interfaces/AppInterface';
import Tenerife2025Retreat from './pages/retreats/Tenerife2025';

export function App({ setAppBarItemsCallback }: AppInterface) {
  return (
    <Routes>
      <Route
        path="/"
        element={<RootPage setAppBarItemsCallback={setAppBarItemsCallback} />}
      />
      <Route
        path="/swiss-2025"
        element={
          <Swiss2025Retreat setAppBarItemsCallback={setAppBarItemsCallback} />
        }
      />
      <Route
        path="/port-2025"
        element={
          <Port2025Retreat setAppBarItemsCallback={setAppBarItemsCallback} />
        }
      />
      <Route
        path="/tenerife-2025"
        element={
          <Tenerife2025Retreat
            setAppBarItemsCallback={setAppBarItemsCallback}
          />
        }
      />
      <Route
        path="/diplomas"
        element={<Diplomas setAppBarItemsCallback={setAppBarItemsCallback} />}
      />
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

  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  const [appBarItems, setAppBarItems] = useState<CustomMenuItemProps[]>([]);

  const setAppBarItemsCallback = useCallback((items: CustomMenuItemProps[]) => {
    setAppBarItems(items);
  }, []);

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
        <AppAppBar
          menuItems={appBarItems}
          mode={mode}
          toggleColorMode={toggleColorMode}
        />
        <Box sx={{ bgcolor: 'background.default' }}>
          <App setAppBarItemsCallback={setAppBarItemsCallback} />
          <CustomSpeedDial />
        </Box>
      </ThemeProvider>
    </HashRouter>
  );
}

export default WrappedApp;
