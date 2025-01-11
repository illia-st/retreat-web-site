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

const photoLeft = '/swiss2025/vikasForSwissAsana.PNG';
const textRight = `
  Welcome to our Sprinр Awakening Yoga Retreat, a space for true renewal and gentle transformation.

  Imagine mornings filled with yoga and pranayama in the fresh embrace of the forest, moments of mindful  under the open sky in the mountains, and sharing warm tea surrounded by nature's beauty.

  Here, we create a sanctuary for your body and soul to rest, recharge, and reconnect. With heartfelt care, we've designed a program to bring you balance, joy, and tranquility, all at an affordable price.

  This retreat is more than just a getaway - it's an invitation to nurture yourself and embrace the magic of spring. Wouldn't this be perfect for you?
  `;
const photoRight = '/swiss2025/abstractPromo.JPG';
const textLeft = `
  The Spring Equinox marks a moment of perfect balance between light and darkness, reminding us of nature’s rhythm and our own inner harmony. This sacred turning point invites renewal, growth, and deeper connection with ourselves and the world around us.

  Through thoughtfully crafted yoga practices, meditation, and moments of stillness, our retreat will help you align with this powerful energy, planting seeds of transformation and awakening your true potential.
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
    >
      {textLeft}
    </Typography>
  );
}

function SwissPromo() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
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
          >
            {textRight}
          </Typography>
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
