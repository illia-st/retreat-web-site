import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'uk', label: 'Українська' },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code); // Change the language dynamically
    handleMenuClose(); // Close the menu
  };

  return (
    <>
      <IconButton
        aria-label="language-switcher"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="primary"
      >
        <LanguageIcon />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            selected={i18n.language === lang.code}
          >
            <Typography>{lang.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSwitcher;
