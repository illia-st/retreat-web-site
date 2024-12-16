/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  // Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import EmblaCarouselSimple from './caruosels/Simple';

const sections = [
  // {
  //   title: 'Що вас чекає:',
  //   content1: `• 5 днів на вулканічному острові вічної весни з унікальною природою\n
  //   • 2 практики в день якісної аутентичної йоги, яка розширить ліміти вашого тіла та розуму\n
  //   • Щоденні практики медитацій, пранаям (дихання)\n
  //   • Цвяхостояння\n
  //   • Глибока релаксація - Йога-нідра зі співочими чашами`,
  //   images1: [
  //     {
  //       image: '/asana1.jpg',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //   ],
  //   content2: `• Проживання у 100-річному традиційному ретритному центрі з видом на океан\n
  //   • Вегетаріанське детокс харчування двічі на день від холістичного шеф-кухаря\n
  //   • Знайомство з філософією Йоги\n
  //   • Коло сили та підтримки\n
  //   • Чайні церемонії та ароматерапії\n
  //   • Подорожі островом, пляжі з чорним вулканічним піском, фруктові плантації\n
  //   • Відпочинок, перезавантаження та новий погляд на звичні речі\n
  //   • Професійний контент та фотосесія`,
  //   images2: [
  //     {
  //       image: '/places/IMG_6683.jpg',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //     {
  //       image: '/places/IMG_6684.jpg',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //     {
  //       image: '/places/IMG_6715.jpg',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //     {
  //       image: '/places/IMG_6716.jpg',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //     {
  //       image: '/places/IMG_6802.jpg',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //     {
  //       image: '/places/IMG_7263.PNG',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //     {
  //       image: '/places/iStock-1264675861 RFC.avif',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //     {
  //       image: '/places/puerto-de-la-cruz-15.jpeg',
  //       maxHeight: 500,
  //       maxWidth: 300,
  //     },
  //   ],
  // },
  {
    title: 'What will you get from the retreat?',
    content: `• Improve your physical strength, flexibility, and overall fitness.\n
      • Build greater self-discipline.\n
      • Develop a deeper awareness of your thoughts and feelings.\n
      • Connect more profoundly with yourself.\n
      • Release tension and emotional blocks.\n
      • Cultivate greater self-love.\n
      • Discover how to feel joy simply for being.  
    `,
  },
  {
    title: 'Who are our retreats for? ',
    content: `• For those who want to dive deeper into the world of yoga and gain new experience.\n
      • For those seeking to improve their yoga practice and make it more consistent.\n
      • For those familiar with Chaturanga and eager to explore the full potential of their body.\n
      • For those feeling stuck in the everyday routine and looking for a fresh dose of inspiration and energy.\n
      • For those who want to connect with a new circle of like-minded people.\n
      • For those aiming to enter a resourceful state where life feels fulfilling and creative. \n
      • And for those who simply want to relax, discover something new, and see life from a different perspective.
    `,
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
                variant="h6"
                sx={{ color: 'primary.contrastText', fontSize: '1.75rem' }}
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: 'pre-line',
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  color: 'primary.contrastText',
                }}
              >
                {section.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      ))}
    </Box>
  );
}

export default BasicInfo;
