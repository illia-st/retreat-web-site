/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Stack,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const sections = [
  {
    title: 'Що вас чекає:',
    content: `
      5 днів на вулканічному острові вічної весни з унікальною природою
      2 практики в день якісної аутентичної йоги, яка розширить ліміти вашого тіла та розуму
      щоденні практики медитацій, пранаям (дихання)
      цвяхостояння
      глибока релаксація - Йога-нідра зі співочими чашами
      Фото з нами в одній із асан
      проживання у 100-річному традиційному ретритному центрі з видом на океан
      вегетаріанське детокс харчування двічі на день від холістичного шеф-кухаря
      знайомство з філософією Йоги
      коло сили та підтримки
      чайні церемонії та ароматерапії
      подорожі островом, пляжі з чорним вулканічним піском, фруктові плантації
      відпочинок, перезавантаження та новий погляд на звичні речі 
      професійний контент та фотосесія
    `,
    images: ['/path/to/your/image1.jpg', '/path/to/your/image2.jpg'],
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
          <Accordion sx={{ marginBottom: 0.1, width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {section.content}
              </Typography>
              {section.images && (
                <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
                  {section.images.map((image, imgIndex) => (
                    <Box
                      key={imgIndex}
                      component="img"
                      src={image}
                      alt={`section image ${imgIndex + 1}`}
                      sx={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'cover',
                        borderRadius: 2,
                      }}
                    />
                  ))}
                </Stack>
              )}
            </AccordionDetails>
          </Accordion>
        </Container>
      ))}
    </Box>
  );
}

export default BasicInfo;
