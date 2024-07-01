/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const asanas = [
  {
    image: '/together_asana.PNG',
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
              fontSize: '1.6rem',
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
        <Grid item xs={12} sm={8}>
          <Box
            component="img"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            src={asanas[0].image}
            alt="Togerher asanas"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: 3,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Button variant="contained" href="/#/diplomas">
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ textTransform: 'none' }}
            >
              Наші дипломи
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TogetherSection;
