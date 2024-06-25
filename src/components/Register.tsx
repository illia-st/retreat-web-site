import { TextField, Button, Typography, Stack, Container } from '@mui/material';

function Register() {
  return (
    <Container
      id="register"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Typography variant="h3" textAlign="center" sx={{ opacity: 0.8 }}>
        Зареєструватись
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
      >
        <TextField
          id="outlined-basic"
          hiddenLabel
          size="medium"
          variant="outlined"
          aria-label="Enter your email address"
          placeholder="Введіть email"
          inputProps={{
            autoComplete: 'off',
            'aria-label': 'Enter your email address',
          }}
        />
        <Button variant="contained" color="primary">
          Подати заявку
        </Button>
      </Stack>
      <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
        Натискаючи &quot;Подати заявку&quot; ви погоджуєтесь на подальшу обробку
        вашої заявки
      </Typography>
    </Container>
  );
}

export default Register;
