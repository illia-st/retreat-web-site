import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import AppAppBar from './components/AppAppBar';
import GreetingPage from './components/GreetingPage';
import PriceSection from './components/PriceSection';
import FAQ from './components/FAQ';
import BasicInfo from './components/BasicInfo';
import AboutUs from './components/AboutUs';
import TogetherSection from './components/TogetherSection';
import LivingSection from './components/LivingSection';
import ScheduleSection from './components/ScheduleSection';
import ActivitiesSection from './components/ActivitiesSection';
import Included from './components/Included';
import Register from './components/Register';
import SocialSection from './components/SocialsSection';

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({
    palette: {
      mode,
      primary: {
        light: red[200],
        main: red[500],
        dark: red[800],
        contrastText: '#fff',
      },
    },
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <GreetingPage />
        <Divider />
        <BasicInfo />
        <Divider />
        <AboutUs />
        <Divider />
        <TogetherSection />
        <Divider />
        <LivingSection />
        <Divider />
        <ScheduleSection />
        <Divider />
        <ActivitiesSection />
        <Divider />
        <PriceSection />
        <Divider />
        <Included />
        <Divider />
        <Register />
        <Divider />
        <Divider />
        <FAQ />
        <Divider />
        <SocialSection />
      </Box>
    </ThemeProvider>
  );
}
