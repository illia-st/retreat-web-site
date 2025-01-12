/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const sections = [
  {
    title: 'Why Our Team?',
    content: [
      {
        header: '• Authentic Traditional Yoga:',
        description:
          '    We approach yoga as a complete system that works on all layers of your being, guiding you toward Chitta Vritti Nirodhi — the stillness of the mind.',
      },
      {
        header: '• Individual Approach:',
        description:
          '    We tailor the experience to your personal journey, ensuring our practices support your unique path to balance and growth.',
      },
      {
        header: '• Two Teachers.',
        description:
          '    You will be supported by two experienced yoga teachers, allowing us to observe and guide you more deeply throughout your retreat experience.',
      },
      {
        header: '• We Don’t Push, We Suggest.',
        description:
          '    We offer a variety of practices, but you are free to choose what resonates most with you — no pressure, just guidance.',
      },
      {
        header: '• Heartfelt Atmosphere.',
        description:
          '    We create a warm, supportive environment where you can feel truly at ease and present with your practice.',
      },
      {
        header: '• Diverse Techniques & Tools.',
        description:
          '    Experience a range of methods and tools to discover what best helps you on your journey — with a chance to explore different practices during the retreat.',
      },
    ],
  },
  {
    title: 'What will you get from the retreat?',
    content: [
      {
        header: '• Physical Fitness',
        description:
          '    Improve your physical strength, flexibility, and overall fitness.',
      },
      {
        header: '• Self-Discipline',
        description: '    Build greater self-discipline.',
      },
      {
        header: '• Awareness',
        description:
          '    Develop a deeper awareness of your thoughts and feelings.',
      },
      {
        header: '• Self-Connection',
        description: '    Connect more profoundly with yourself.',
      },
      {
        header: '• Emotional Release',
        description: '    Release tension and emotional blocks.',
      },
      {
        header: '• Self-Love',
        description: '    Cultivate greater self-love.',
      },
      {
        header: '• Joyful Living',
        description: '    Discover how to feel joy simply for being.',
      },
    ],
  },
  {
    title: 'Who are our retreats for?',
    content: [
      {
        header: '• Yoga Enthusiasts',
        description:
          '    For those who want to dive deeper into the world of yoga.',
      },
      {
        header: '• Improved Practice',
        description:
          '    For those seeking to make their yoga practice more consistent.',
      },
      {
        header: '• Chaturanga Explorers',
        description:
          '    For those familiar with Chaturanga and eager to explore their potential.',
      },
      {
        header: '• Routine Breakers',
        description:
          '    For those stuck in a routine and seeking inspiration.',
      },
      {
        header: '• Community Seekers',
        description:
          '    For those wanting to connect with like-minded people.',
      },
      {
        header: '• Relaxation Lovers',
        description:
          '    For those who simply want to relax and see life from a fresh perspective.',
      },
    ],
  },
];

function BasicInfo() {
  return (
    <Box
      id="basic-info"
      sx={{
        width: '100%',
        mt: 4,
        mb: 4,
      }}
    >
      {sections.map((section, index) => (
        <Container
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 1, sm: 1.5 },
            pb: { xs: 1, sm: 1.5 },
          }}
        >
          <Accordion
            sx={{
              marginBottom: 0.1,
              width: '100%',
              backgroundColor: 'primary.main',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                sx={{ color: 'primary.contrastText', fontSize: '2rem' }}
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {section.content.map((item, subIndex) => (
                  <ListItem
                    key={subIndex}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      marginBottom: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'primary.contrastText',
                      }}
                    >
                      {item.header}
                    </Typography>
                    <ListItemText
                      primary={item.description}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: '1.4rem',
                          lineHeight: 1.7,
                          color: 'primary.contrastText',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Container>
      ))}
    </Box>
  );
}

export default BasicInfo;
