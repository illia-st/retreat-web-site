import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface RetreatHeroInterface {
  mainPhoto: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
}

export default function RetreatHero({
  mainPhoto,
  title,
  subtitle,
  location,
  date,
}: RetreatHeroInterface) {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #b3e5fc, #f0e6d5)' // Adjust colors as needed
            : `linear-gradient(#02294F, ${alpha('#f0e6d5', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          {/* Main Title */}
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
              color: 'primary.dark', // Unified color or customized per word if needed
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h3"
            sx={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: { xs: '1.2rem', md: '1.5rem' }, // Adjusted for longer text
              maxWidth: '80%',
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </Typography>

          {/* Location & Date (Replaces the HTML injection) */}
          <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
              }}
            >
              {location}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'text.secondary',
              }}
            >
              {date}
            </Typography>
          </Box>

          {/* Main Image */}
          <Box
            component="img"
            src={mainPhoto}
            alt={title}
            sx={{
              width: '100%',
              maxHeight: '500px', // Increased slightly for landscape photos
              objectFit: 'cover',
              borderRadius: 2,
              alignSelf: 'center',
              boxShadow: 3,
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
