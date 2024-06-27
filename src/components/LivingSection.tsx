import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import EmblaCarouselSimple from './caruosels/Simple';

const images = [
  {
    image: '/rooms/1.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/2.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/3.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/4.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/5.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/6.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/7.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/8.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/9.webp',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/10.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/11.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/12.jpeg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/13.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/14.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/15.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/16.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/17.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/18.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/19.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/20.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
  {
    image: '/rooms/21.jpg',
    maxHeight: 500,
    maxWidth: 500,
  },
];

function LivingSection() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography id="live" variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Де будемо жити
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            align="center"
            sx={{
              whiteSpace: 'pre-line',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            Наш ретрит проходитиме в 100-річній двоповерховій віллі в
            колоніальному стилі посеред бананової плантації розташованої в
            містечку Пуерто-де-ла-Крус на березі Атлантичного океану.
            Неймовірний м’який та теплий клімат Тенерифе, який часто називають
            “островом вічної весни” надасть нам можливість насолоджуватися
            практиками у йога шалі на відкритому повітрі або ж на даху з
            приголомшливим видом на океан та місто. У разі опадів (що буває
            рідко), у нас буде можливість займатися в дзеркальному залі на
            першому поверсі вілли.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              whiteSpace: 'pre-line',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            А також неймовірний зелений сад, два чарівних патіо та тераса будуть
            ідеальним місцем для відпочинку та наших душевних розмов.
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              whiteSpace: 'pre-line',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            На другому поверсі розташовані всі кімнати для проживання, велика
            кухня та їдальня. У будинку 4 спільні ванні кімнати.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <EmblaCarouselSimple slides={images} options={{}} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default LivingSection;
