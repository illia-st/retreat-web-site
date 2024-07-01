/* eslint-disable react/no-array-index-key */
import { Box, Container, Stack, Typography, alpha } from '@mui/material';

const diplomas = [
  {
    image: '/ch_cert_1.png',
    maxHeight: 1200,
    maxWidth: 1000,
  },
  {
    image: '/ch_cert_2.PNG',
    maxHeight: 1200,
    maxWidth: 1000,
  },
  {
    image: '/mt_cert.png',
    maxHeight: 1200,
    maxWidth: 1000,
  },
];

function Diplomas() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
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
        <Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
          Наші Дипломи
        </Typography>
        <Stack direction="column">
          {diplomas.map(({ image }, index) => (
            <Box
              key={index}
              component="img"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              src={image}
              alt={`Image ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Diplomas;
