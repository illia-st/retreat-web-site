import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';

export default function YogaRetreatHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: '/together_asana.PNG', // Replace with a relevant image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.palette.mode === 'light' ? 'common.black' : 'common.white',
        textAlign: 'center',
        p: 4,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4}>
          {/* Title */}
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
          >
            Yoga-Retreat: Frühlingserwachen
          </Typography>

          {/* Ukrainian Section */}
          <Typography
            variant="body1"
            fontSize="1.2rem"
            sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            Feiere mit Viktoria M. & Viktoria V. die
            Frühlings-Tagundnachtgleiche! Erwecke deinen Körper und Geist mit
            täglich Hatha-Yoga, Meditation und Yoga Nidra. Lade neue Energie auf
            und begrüße die Saison der Erneuerung! 🌸
          </Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="1rem"
            sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            <strong>Retreat-Sprache:</strong> Englisch mit der Möglichkeit, ins
            Deutsche und Ukrainische zu übersetzen.
          </Typography>

          {/* English Section */}
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
          >
            Spring Awakening Yoga Retreat
          </Typography>
          <Typography
            variant="body1"
            fontSize="1.2rem"
            sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            Join Viktoria M. & Viktoria V. to celebrate the Spring Equinox!
            Rejuvenate your mind and body with daily Hatha yoga, meditation, and
            Yoga Nidra. Embrace new energy and welcome the season of renewal! 🌸
          </Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="1rem"
            sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            <strong>Retreat language:</strong> English with the possibility of
            translation into German and Ukrainian.
          </Typography>

          {/* Call to Action */}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              textTransform: 'none',
              fontSize: '1.2rem',
              alignSelf: 'center',
            }}
            href="#register" // Adjust the link to your page's registration section
          >
            Learn More
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
