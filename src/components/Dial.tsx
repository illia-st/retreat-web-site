import React, { useState } from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Price from './Price'; // Import the Price component

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeD-Fsxd0nlrXnXsfrAeiyv0plxSZfwBdiUhJOMQlMuaOw2Xg/viewform?usp=sf_link';

function CustomSpeedDial() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleBooking = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  const actions = [
    {
      icon: <BookmarkIcon />,
      name: 'Book',
      onClick: handleBooking,
    },
    {
      icon: <QuestionAnswerIcon />,
      name: 'Ask a question',
      onClick: handleDialogOpen,
    },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="Quick actions menu"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<ChatIcon />} />}
        FabProps={{
          sx: {
            background: 'linear-gradient(45deg, #f44336 30%, #ff5722 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #d32f2f 30%, #f44336 90%)',
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.onClick}
            FabProps={{
              'aria-label': action.name,
            }}
          />
        ))}
      </SpeedDial>

      {/* Reuse the Price component as a dialog */}
      <Price
        open={dialogOpen}
        onClose={handleDialogClose}
        title="Write to us!"
        description="Please enter your email address to proceed. We will reach you as soon as possible."
        showButton={false}
      />
    </>
  );
}

export default CustomSpeedDial;
