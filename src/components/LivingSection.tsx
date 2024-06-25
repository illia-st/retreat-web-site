import React from 'react';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';

function LivingSection() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Де будемо жити
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ mb: 2 }}>
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
          <Typography variant="body1" sx={{ mb: 2 }}>
            А також неймовірний зелений сад, два чарівних патіо та тераса будуть
            ідеальним місцем для відпочинку та наших душевних розмов.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            На другому поверсі розташовані всі кімнати для проживання, велика
            кухня та їдальня. У будинку 4 спільні ванні кімнати.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
              Фото центру, кімнат і т.п.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="img"
                  src="/path/to/your/center1.jpg"
                  alt="Центр 1"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="img"
                  src="/path/to/your/center2.jpg"
                  alt="Центр 2"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="img"
                  src="/path/to/your/center3.jpg"
                  alt="Центр 3"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="img"
                  src="/path/to/your/room1.jpg"
                  alt="Кімната 1"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="img"
                  src="/path/to/your/room2.jpg"
                  alt="Кімната 2"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="img"
                  src="/path/to/your/room3.jpg"
                  alt="Кімната 3"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LivingSection;
