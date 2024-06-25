/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
// import useEmblaCarousel from 'embla-carousel-react';

// const diplomas = ['/ch_cert_1.png', '/ch_cert_2.PNG'];

function TogetherSection() {
  // const [emblaRef] = useEmblaCarousel();
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
        Чому ми робимо це разом
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Ми зустрілися 2 роки тому і зрозуміли - це кармічно. Розділяючи одне
            ім’я, дружбу та найголовніше - любов до йоги, ідея про створення
            нашого сумісного ретриту не змусила довго чекати свого виходу в
            світ. Постійно розвиваючись та отримуючи кожного дня новий досвід
            від життя, інстайтів та щоденних практик, ми неймовірно сильно
            чекаємо на ту мить, коли ми розділимо свій шлях та досвід з Вами!
          </Typography>
        </Grid>
        {/* Need to add a cool carousel */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/asana.jpg"
            alt="Спільна фотка у асанах"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              mb: 2,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Наші Дипломи
            </Typography>
            {/* <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {diplomas.map((diplomaImage, imgIndex) => (
                  <Box
                    key={imgIndex}
                    className="embla__slide"
                    component="img"
                    src={diplomaImage}
                    // sx={{
                    //   width: '100%',
                    //   height: 'auto',
                    //   borderRadius: 2,
                    // }}
                  />
                ))}
              </div>
            </div> */}
            {/* <Carousel>
              {diplomas.map((diplomaImage, imgIndex) => (
                <Box
                  key={imgIndex}
                  component="img"
                  src={diplomaImage}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              ))}
            </Carousel> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TogetherSection;
