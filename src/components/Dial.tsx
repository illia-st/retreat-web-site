import React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { orange } from '@mui/material/colors';

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
  }
};

const actions = [
  {
    icon: <BookmarkIcon />,
    name: 'Book',
    link: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSerfZCssscf0k4jA095ktFr4_O8cXj7OBiLtZOIVK7pkhpP7g/formResponse',
  },
  {
    icon: <QuestionAnswerIcon />,
    name: 'Ask a question',
    onClick: () => {
      scrollToSection('social-section');
    },
  },
];
function CustomSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<ChatIcon />} />}
      FabProps={{
        sx: {
          bgcolor: orange[300], // Custom background color
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={
            <a
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {action.icon}
            </a>
          }
          tooltipTitle={action.name}
          tooltipOpen
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
}

export default CustomSpeedDial;
