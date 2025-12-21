/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EmblaCarouselWithButtons from './caruosels/WithButtons/Carousel';

const teamMembers = [
  {
    name: 'Viktoria Mytsyk',
    title: 'Universal Yoga Teacher — RYT 500',
    description: `
      I discovered yoga more than 10 years ago during my school years, and since then, it has been influencing and continues to shape my life. I’ve been teaching yoga since 2020 and have participated in and led workshops at various yoga festivals and charity events. I am also a certified Astrocoach.<br>
      For me, yoga is not just a physical practice but a tool for exploring both the inner and outer world. My approach to yoga is disciplined and focused on developing static and dynamic strength, flexibility, and balance. One of my hobbies is tea and tea ceremonies, which I look forward to sharing with you during our retreat.
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
    title: `Traditional Himalayan Yoga Teacher — RYT 300
    <br>Certified Jyotish Astrology Coach`,
    description: `
      I discovered yoga nearly a decade ago, and since 2020 it has become my true path. In my teaching, I blend Traditional Hatha, Vinyasa, and Himalayan traditional yoga inspired by the depth and philosophy of Universal Yoga. My intention is to guide students toward calmness, inner strength, and a steady sense of joy.<br>
My passion for Eastern cultures and philosophies has led me to Nepal, Japan and Thailand, where visits to sacred temples and spiritual sites continue to shape both my practice and the way I support and help others.<br>
As a RYT 300 and certified Jyotish astrology coach, I also work with students and clients through natal chart readings, helping them understand their patterns, strengths, and life cycles through Vedic wisdom.
My Yoga Nidra sessions offer deep rest and subtle awareness, inviting the body and mind into true relaxation.

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
          <Grid item xs={12} sm={5}>
            {/* <EmblaCarouselSimple slides={member.images} options={{}} /> */}
            <EmblaCarouselWithButtons slides={member.images} options={{}} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography
              variant="h4"
              component="h3"
              sx={{ mb: 0.2, fontWeight: 'bold', fontSize: '2.5rem' }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="h6"
              component="h4"
              dangerouslySetInnerHTML={{ __html: member.title }}
              sx={{ mb: 1, fontStyle: 'italic', fontSize: '1.75rem' }}
            />
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: member.description }}
              sx={{
                whiteSpace: 'pre-line',
                fontSize: '1.6rem',
                lineHeight: 1.6,
              }}
            />
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

export default AboutUs;
