import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import Register from './Register';

const dearSoul = `
Hello, dear soul!
Welcome to our space, where you’ll discover yoga retreats designed to nurture your body and soul. We’re genuinely excited to meet you and support you on this transformative journey. Are you ready to take your first step toward renewed peace of body and mind, inner joy, and self-development?
We’re here to guide you with care, honoring yoga traditions while listening to the whispers of modern reality.
`;

export default function GreetingPage() {
  return (
    <Box
      id="greeting"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #b3e5fc, #f0e6d5)'
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
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Deep Dive&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: 'primary.dark',
              }}
            >
              Yoga Retreat
            </Typography>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Release. Refresh. Develop
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: 'flex',
              fontSize: 'clamp(1.5rem, 5vw, 1rem)',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'left',
              textAlign: 'left',
            }}
          >
            {dearSoul}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'bold',
              }}
            >
              “Yoga is the journey of the self, through the self, to the self.”
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'cursive',
              }}
            >
              - Bhagavad Gita 6.47
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Let’s begin this beautiful path together!
          </Typography>
          <Box
            component="img"
            src="/asana_wide.jpg"
            alt="Yoga Retreat"
            sx={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: 2,
              alignSelf: 'center',
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
