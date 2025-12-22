import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export interface PromoInterface {
  text: string;
  photo: string;
}

const photoLeft = '/swiss2025/2026/promo/2.jpeg';
const textRight = `
  <strong>Welcome to our Spring Equinox Yoga Retreat 2.0 — a space for gentle renewal, deep rest, and heartfelt connection.</strong>

  We are hosting this retreat for the second year in the same beautiful place and at the same special time. Our hope is that it becomes a cherished tradition — a warm gathering of friends and a chance to pause, recharge, and return to yourself just as true spring begins to bloom.

  Imagine starting your mornings with yoga and pranayama in the fresh embrace of the forest, practicing mindfulness under open mountain skies, and sharing warm tea in the quiet beauty of nature.

  Here, we create a sanctuary where your body and soul can soften, restore, and find new energy.
  With great care, we’ve crafted a program that brings balance, joy, and tranquility — all at a thoughtful, accessible price.

  This retreat is more than just a weekend away; it’s an invitation to nurture yourself, reconnect with what matters, and welcome the magic of spring.
  We would be so happy to share these days with you.
  `;
const photoRight = '/swiss2025/2026/promo/3.jpg';
const textLeft = `
  With heartfelt intention, we’ve crafted an updated program that weaves together movement, breath, ritual, and reflection — all designed to support your renewal during this magical seasonal transition. And as always, we keep it accessible, warm, and welcoming.
  
  <strong>This retreat is more than an escape.</strong>

It’s a second chapter, a deepening, an invitation to honor yourself and step into the new cycle with clarity, balance, and joy.
The Spring Equinox marks a moment of perfect balance between light and darkness, reminding us of nature’s rhythm and our own inner harmony. This sacred turning point invites renewal, growth, and deeper connection with ourselves and the world around us.

Does this feel like your moment to return — or to join us for the first time?

  `;

function RightPhoto() {
  return (
    <Box
      component="img"
      loading="lazy"
      decoding="async"
      fetchPriority="high"
      src={photoRight}
      alt="Togerher asanas"
      sx={{
        width: 'calc(100%)',
        height: 'calc(100%)',
        maxHeight: '440px',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: 3,
      }}
    />
  );
}

function LeftText() {
  return (
    <Typography
      variant="body1"
      align="left"
      sx={{
        whiteSpace: 'pre-line',
        fontSize: '1.6rem',
        lineHeight: 1.6,
      }}
      dangerouslySetInnerHTML={{ __html: textLeft }}
    />
  );
}

function SwissPromo() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      id="greeting"
      sx={{
        mt: 4,
        mb: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ mb: 4, display: 'flex', alignItems: 'center' }}
      >
        <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
          <Box
            component="img"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            src={photoLeft}
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
        <Grid item xs={12} sm={8} sx={{ display: 'flex' }}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              whiteSpace: 'pre-line',
              fontSize: '1.6rem',
              lineHeight: 1.6,
            }}
            dangerouslySetInnerHTML={{ __html: textRight }}
          />
        </Grid>
        {isXs ? (
          <>
            <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
              <RightPhoto />
            </Grid>
            <Grid item xs={12} sm={8} sx={{ display: 'flex' }}>
              <LeftText />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={8} sx={{ display: 'flex' }}>
              <LeftText />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
              <RightPhoto />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default SwissPromo;
