import { HashRouter, Route, Routes } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';
import {
  Box,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React from 'react';
import LandingPage from './LandingPage';
import NotFound from './NotFound';
import Diplomas from './components/Diplomas';
import AppAppBar from './components/AppAppBar';

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
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({
    palette: {
      mode,
      primary: {
        light: lightBlue[50],
        main: lightBlue[100],
        dark: lightBlue[200],
        contrastText: '#000',
      },
    },
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Box sx={{ bgcolor: 'background.default' }}>
          <App />
        </Box>
      </ThemeProvider>
    </HashRouter>
  );
}
