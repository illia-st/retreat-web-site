import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Register from './Register';

export default function GreetingPage() {
  return (
    <Box
      id="hero"
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
                // color: (theme) =>
                //   theme.palette.mode === 'light'
                //     ? 'primary.dark'
                //     : 'primary.light',
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
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            4-9 November
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
            Tenerife
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: '100%', fontSize: '1.6rem' }}
          >
            Йога ретрит на острові Тенеріфе. Пірни в глибокий океан Йоги разом з
            нами
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
          <Register />
        </Stack>
      </Container>
    </Box>
  );
}
