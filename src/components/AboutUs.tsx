/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import EmblaCarouselSimple from './caruosels/Simple';
import EmblaCarouselWithButtons from './caruosels/WithButtons/Carousel';

const teamMembers = [
  {
    name: 'Viktoria Mytsyk',
    title: 'Universal Yoga Teacher RYT 300',
    description: `
      I discovered yoga more than 10 years ago during my school years, and since then, it has been influencing and continues to shape my life. I’ve been teaching yoga since 2020 and have participated in and led workshops at various yoga festivals and charity events. I am also a certified Astrocoach. For me, yoga is not just a physical practice but a tool for exploring both the inner and outer world. My approach to yoga is disciplined and focused on developing static and dynamic strength, flexibility, and balance. One of my hobbies is tea and tea ceremonies, which I look forward to sharing with you during our retreat.
    `,
    images: [
      {
        image: '/teachers/vika_m_first.jpg',
        maxWidth: 800,
        maxHeight: 1200,
      },
      {
        image: '/teachers/vika_m_second.jpg',
        maxWidth: 800,
        maxHeight: 1200,
      },
    ],
  },
  {
    name: 'Viktoria Chornozhuk',
    title: 'Traditional Hatha and Vinyasa teacher RYT 200',
    description: `
      I first discovered yoga nearly 10 years ago, but it wasn’t until 2020 that I fell deeply in love with the practice and began my yoga journey in earnest. In my teaching, I blend different yoga styles and meditation techniques, with a special focus on Universal Yoga.  I believe that my teaching brings more calmness, inner strength, peace, and joy into people's lives. Currently, I am deepening my knowledge and experience by studying Jyotish (Vedic astrology), adding another tool to my holistic approach in working with both the mental and physical layers of being.  My soothing Yoga Nidra sessions will help you experience deep physical relaxation while keeping your mind focused on your sensations, leading you to true relaxation of the body and mind.
    `,
    images: [
      {
        image: '/teachers/vika_ch_first.jpg',
        maxWidth: 800,
        maxHeight: 1200,
      },
      {
        image: '/teachers/vika_ch_second.jpg',
        maxWidth: 800,
        maxHeight: 1200,
      },
    ],
  },
];

function AboutUs() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        id="about-us"
        variant="h2"
        textAlign="center"
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        About us
      </Typography>
      {teamMembers.map((member, index) => (
        <Grid container spacing={4} key={index} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            {/* <EmblaCarouselSimple slides={member.images} options={{}} /> */}
            <EmblaCarouselWithButtons slides={member.images} options={{}} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h4"
              component="h3"
              sx={{ mb: 2, fontWeight: 'bold', fontSize: '2.5rem' }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="h6"
              component="h4"
              sx={{ mb: 2, fontStyle: 'italic', fontSize: '1.75rem' }}
            >
              {member.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: 'pre-line',
                fontSize: '1.6rem',
                lineHeight: 1.6,
              }}
            >
              {member.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

export default AboutUs;
