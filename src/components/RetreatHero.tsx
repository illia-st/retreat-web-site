import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface RetreatHeroInterface {
  mainPhoto: string;
  retreatName: string;
}

export default function RetreatHero({
  mainPhoto,
  retreatName,
}: RetreatHeroInterface) {
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
          {/* <Typography
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            {retreatName}
          </Typography> */}
          <Typography
            // eslint-disable-next-line react/no-array-index-key
            variant="h3"
            gutterBottom
            sx={{ fontSize: '1.5rem' }}
            dangerouslySetInnerHTML={{ __html: retreatName }}
          />
          <Box
            component="img"
            src={mainPhoto}
            alt={retreatName}
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
