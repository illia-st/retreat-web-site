/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmblaCarouselSimple from './caruosels/Simple';

const sections = [
  {
    title: 'Що вас чекає:',
    content1: `5 днів на вулканічному острові вічної весни з унікальною природою
    2 практики в день якісної аутентичної йоги, яка розширить ліміти вашого тіла та розуму
    щоденні практики медитацій, пранаям (дихання)
    цвяхостояння
    глибока релаксація - Йога-нідра зі співочими чашами`,
    images1: [
      {
        image: '/asana1.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
    ],
    content2: `проживання у 100-річному традиційному ретритному центрі з видом на океан
    вегетаріанське детокс харчування двічі на день від холістичного шеф-кухаря
    знайомство з філософією Йоги
    коло сили та підтримки
    чайні церемонії та ароматерапії
    подорожі островом, пляжі з чорним вулканічним піском, фруктові плантації
    відпочинок, перезавантаження та новий погляд на звичні речі 
    професійний контент та фотосесія`,
    images2: [
      {
        image: '/places/IMG_6683.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/places/IMG_6684.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/places/IMG_6715.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/places/IMG_6716.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/places/IMG_6802.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/places/IMG_7263.PNG',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/places/iStock-1264675861 RFC.avif',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/places/puerto-de-la-cruz-15.jpeg',
        maxHeight: 500,
        maxWidth: 300,
      },
    ],
  },
  {
    title: 'Що отримаєш від ретриту:',
    content: `
      класно прокачаєш своє тіло, станеш сильнішою та гнучкішою
      підвищиш свою дисципліну
      навчишся краще відчувати себе, свої думки
      набудеш більшого контакту з собою
      звільнишся від блоків і зажимів
      збільшиш свою любов до себе
      знайдеш, як відчувати щастя просто тому, що ти є 
    `,
  },
  {
    title: 'Для кого підійде наш ретрит:',
    content: `
      для тих, хто прагне відкрити світ Йоги ще глибше та отримати новий досвід
      для тих, хто бажає покращити власну практику йоги та зробити її більш регулярною
      для тих, хто вже знає, що таке чатуранга, і хоче дізнатися більше, на що здатне тіло
      для тих, хто втомився від осінньої рутини та бажає отримати новий заряд натхнення та енергії 
      для тих, хто хоче зустріти нове коло однодумців 
      для тих, хто має з мету ввійти в ресурсний стан, у якому хочеться жити і творити
      та для тих, хто хоче відпочити, побачити нове і подивитися на життя під іншим кутом  
    `,
  },
];

function BasicInfo() {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        mt: 4,
        mb: 4,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 1, sm: 1.5 },
          pb: { xs: 1, sm: 1.5 },
        }}
      >
        <Accordion sx={{ marginBottom: 0.1, width: '100%' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{sections[0].title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: 'pre-line',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {sections[0].content1}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={6}>
                {sections[0].images2 && (
                  <EmblaCarouselSimple
                    slides={sections[0].images2}
                    options={{}}
                  />
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: 'pre-line',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {sections[0].content2}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
      {sections.slice(1).map((section, index) => (
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
          <Accordion sx={{ marginBottom: 0.1, width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: 'pre-line',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
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
