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
        Why We’re Doing This Together
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
            We met two years ago and instantly knew—it was karmic. Sharing not
            only a name and friendship but, most importantly, a deep love for
            yoga, the idea of creating our joint retreat was a natural evolution
            that quickly came to life. Constantly growing, learning from
            life&apos;s experiences, daily practices, and moments of insight, we
            incredibly excited to share our journey and wisdom with you. We
            can&apos;t wait for the moment when our paths cross, and we create
            something meaningful together!
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
              Our diplomas
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TogetherSection;
