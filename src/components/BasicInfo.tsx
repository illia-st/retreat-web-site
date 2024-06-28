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
    content1: `• 5 днів на вулканічному острові вічної весни з унікальною природою\n
    • 2 практики в день якісної аутентичної йоги, яка розширить ліміти вашого тіла та розуму\n
    • Щоденні практики медитацій, пранаям (дихання)\n
    • Цвяхостояння\n
    • Глибока релаксація - Йога-нідра зі співочими чашами`,
    images1: [
      {
        image: '/asana1.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
    ],
    content2: `• Проживання у 100-річному традиційному ретритному центрі з видом на океан\n
    • Вегетаріанське детокс харчування двічі на день від холістичного шеф-кухаря\n
    • Знайомство з філософією Йоги\n
    • Коло сили та підтримки\n
    • Чайні церемонії та ароматерапії\n
    • Подорожі островом, пляжі з чорним вулканічним піском, фруктові плантації\n
    • Відпочинок, перезавантаження та новий погляд на звичні речі\n
    • Професійний контент та фотосесія`,
    images2: [
      {
        image: '/retreat-web-site/places/IMG_6683.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/retreat-web-site/places/IMG_6684.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/retreat-web-site/places/IMG_6715.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/retreat-web-site/places/IMG_6716.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/retreat-web-site/places/IMG_6802.jpg',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/retreat-web-site/places/IMG_7263.PNG',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/retreat-web-site/places/iStock-1264675861 RFC.avif',
        maxHeight: 500,
        maxWidth: 300,
      },
      {
        image: '/retreat-web-site/places/puerto-de-la-cruz-15.jpeg',
        maxHeight: 500,
        maxWidth: 300,
      },
    ],
  },
  {
    title: 'Що отримаєш від ретриту:',
    content: `• Класно прокачаєш своє тіло, станеш сильнішою та гнучкішою\n
      • Підвищиш свою дисципліну\n
      • Навчишся краще відчувати себе, свої думки\n
      • Набудеш більшого контакту з собою\n
      • Звільнишся від блоків і зажимів\n
      • Збільшиш свою любов до себе\n
      • Знайдеш, як відчувати щастя просто тому, що ти є
    `,
  },
  {
    title: 'Для кого підійде наш ретрит:',
    content: `• Для тих, хто прагне відкрити світ Йоги ще глибше та отримати новий досвід\n
      • Для тих, хто бажає покращити власну практику йоги та зробити її більш регулярною\n
      • Для тих, хто вже знає, що таке чатуранга, і хоче дізнатися більше, на що здатне тіло\n
      • Для тих, хто втомився від осінньої рутини та бажає отримати новий заряд натхнення та енергії\n
      • Для тих, хто хоче зустріти нове коло однодумців\n
      • Для тих, хто має з мету ввійти в ресурсний стан, у якому хочеться жити і творити\n
      • Та для тих, хто хоче відпочити, побачити нове і подивитися на життя під іншим кутом  
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
        <Accordion
          sx={{
            marginBottom: 0.1,
            width: '100%',
            backgroundColor: 'primary.main',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#000" />}>
            <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
              {sections[0].title}
            </Typography>
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
                    color: 'primary.contrastText',
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
                    color: 'primary.contrastText',
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
          <Accordion
            sx={{
              marginBottom: 0.1,
              width: '100%',
              backgroundColor: 'primary.main',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#000" />}>
              <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: 'pre-line',
                  fontSize: '1.1rem',
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
