/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import EmblaCarouselSimple from './caruosels/Simple';

const diplomas = [
  {
    image: '/ch_cert_1.png',
    maxHeight: 1200,
    maxWidth: 1000,
  },
  {
    image: '/ch_cert_2.PNG',
    maxHeight: 1200,
    maxWidth: 1000,
  },
  {
    image: '/mt_cert.png',
    maxHeight: 1200,
    maxWidth: 1000,
  },
];
const asanas = [
  {
    image: '/asana1.jpg',
    maxHeight: 1000,
    maxWidth: 600,
  },
  {
    image: '/asana2.jpg',
    maxHeight: 1000,
    maxWidth: 600,
  },
];

function TogetherSection() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography id="together" variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Чому ми робимо це разом
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ display: 'flex', justifyContent: 'right' }}
      >
        <Grid item xs={12} sm={4}>
          <Typography
            variant="body1"
            sx={{
              whiteSpace: 'pre-line',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            Ми зустрілися 2 роки тому і зрозуміли - це кармічно. Розділяючи одне
            ім’я, дружбу та найголовніше - любов до йоги, ідея про створення
            нашого сумісного ретриту не змусила довго чекати свого виходу в
            світ. Постійно розвиваючись та отримуючи кожного дня новий досвід
            від життя, інстайтів та щоденних практик, ми неймовірно сильно
            чекаємо на ту мить, коли ми розділимо свій шлях та досвід з Вами!
          </Typography>
        </Grid>
        {/* Need to add a cool carousel */}
        <Grid item xs={12} sm={4}>
          <EmblaCarouselSimple slides={asanas} options={{}} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
            Наші Дипломи
          </Typography>
          <EmblaCarouselSimple slides={diplomas} options={{}} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TogetherSection;
