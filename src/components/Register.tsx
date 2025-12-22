/* eslint-disable no-console */
import React from 'react';
import { Button, Typography, Stack, Container } from '@mui/material';
import { orange } from '@mui/material/colors';

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
          type="submit"
          variant="contained"
          href={actionUrl}
          sx={{
            height: '100px',
            width: '250px',
            fontSize: '1.6rem',
            backgroundColor: orange[300],
            textTransform: 'none',
          }}
        >
          Fill the form
        </Button>
      </Stack>
    </Container>
  );
}

export default Register;
