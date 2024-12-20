/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { orange } from '@mui/material/colors';

const validationSchema = Yup.object({
  email: Yup.string().email('Wrong email format').required('required field'),
});

export default function Price() {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleDialogClose();

      const templateParams = {
        email: values.email,
      };

      emailjs
        .send('service_1dt95rs', 'template_tjztn5j', templateParams, {
          publicKey: 'JpiV9-iHDqpG4HYdl',
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          }
        );
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
      <Button
        variant="contained"
        onClick={handleDialogOpen}
        sx={{
          height: '100px',
          width: '250px',
          fontSize: '2rem',
          backgroundColor: orange[300],
          textTransform: 'none',
        }}
      >
        Find out the Price
      </Button>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Find out the Price</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address to proceed. After submitting,
            you&apos;ll get the email with the detail info.
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="standard"
            />
            <DialogActions>
              <Button onClick={handleDialogClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit">Ok</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
