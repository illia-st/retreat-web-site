import { Button, Typography, Stack, Container } from '@mui/material';

const actionUrl = 'https://forms.gle/NrGH7ikfNo9UTUmeA';

function Register() {
  return (
    <Container
      id="register"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 8, sm: 12 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Typography variant="h3" textAlign="center" sx={{ opacity: 0.8 }}>
        Register
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 8, sm: 12 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Button
          variant="contained"
          href={actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            height: '100px',
            width: '250px',
            fontSize: '2rem',
            textTransform: 'none',
            background: 'linear-gradient(45deg, #f44336 30%, #ff5722 90%)',
            boxShadow: '0 3px 8px 2px rgba(244, 67, 54, .3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(45deg, #d32f2f 30%, #f44336 90%)',
              boxShadow: '0 6px 12px 4px rgba(244, 67, 54, .4)',
              transform: 'translateY(-2px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
          aria-label="Fill the registration form"
        >
          Fill the form
        </Button>
      </Stack>
    </Container>
  );
}

export default Register;
