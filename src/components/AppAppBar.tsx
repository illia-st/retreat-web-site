/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Link, PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import ToggleColorMode from './ToggleColorMode';
import LanguageSwitcher from './LanguageSwitcher';

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const { t } = useTranslation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link href="/" underline="none">
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ ml: 4, mr: 2, fontWeight: 'bold', fontSize: 20 }}
                >
                  deepyoga
                </Typography>
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('about-us')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: '1.2rem' }}
                  >
                    {t('appBar.aboutUs')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('together')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: '1.2rem' }}
                  >
                    {t('appBar.whyWeDoThisTogether')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('live')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: '1.2rem' }}
                  >
                    {t('appBar.whereDoWeLive')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('scedule')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: '1.2rem' }}
                  >
                    {t('appBar.schedule')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('activities')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: '1.2rem' }}
                  >
                    {t('appBar.activities')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('price')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: '1.2rem' }}
                  >
                    {t('appBar.price')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: '1.2rem' }}
                  >
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <LanguageSwitcher />
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'end',
                      justifyContent: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <LanguageSwitcher />
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('about-us')}>
                    {t('appBar.aboutUs')}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('together')}>
                    {t('appBar.whyWeDoThisTogether')}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('live')}>
                    {t('appBar.whereDoWeLive')}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('scedule')}>
                    {t('appBar.schedule')}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('activities')}>
                    {t('appBar.activities')}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('price')}>
                    {t('appBar.price')}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>
                    FAQ
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
