/* eslint-disable no-console */
import React from 'react';
import { Button, Typography, Stack, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Неправильний формат email')
    .required("Обов'язкове поле"),
});

const actionUrl =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSerfZCssscf0k4jA095ktFr4_O8cXj7OBiLtZOIVK7pkhpP7g/formResponse';

function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form values:', values);
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignSelf="center"
          spacing={1}
          useFlexGap
          sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            href={actionUrl}
            sx={{
              height: '100px',
              width: '250px',
              fontSize: '1.6rem',
            }}
          >
            Подати заявку
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

export default Register;
