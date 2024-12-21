/* eslint-disable no-console */
import React from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import EmblaCarouselSimple, { Slide } from './caruosels/Simple';
import Accomodation, { AccomodationUnit } from './Accommodation';

// const images = [
//   {
//     image: '/rooms/the_first.PNG',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/1.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/2.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/3.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/4.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/5.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/6.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/7.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/8.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/9.webp',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/10.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/11.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/12.jpeg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/13.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/14.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/15.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/16.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/17.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/18.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/19.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/20.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
//   {
//     image: '/rooms/21.jpg',
//     maxHeight: 500,
//     maxWidth: 500,
//   },
// ];

interface LivingSectionInterface {
  description: string;
  photoes: Slide[];
  accomodationUnits: AccomodationUnit[];
  accommodationDesc: string;
}

function LivingSection({
  description,
  photoes,
  accomodationUnits,
  accommodationDesc,
}: LivingSectionInterface) {
  return (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography id="live" variant="h2" textAlign="center" sx={{ mb: 4 }}>
          Where will we live?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              align="left"
              sx={{
                whiteSpace: 'pre-line',
                fontSize: '1.6rem',
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <EmblaCarouselSimple slides={photoes} options={{}} />
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Accomodation
          units={accomodationUnits}
          description={accommodationDesc}
        />
      </Container>
    </>
  );
}

export default LivingSection;
