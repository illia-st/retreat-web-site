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
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
});

export default function Price() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const templateParams = {
        email: values.email,
      };

      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await emailjs.send(
          'service_1dt95rs',
          'template_tjztn5j',
          templateParams,
          {
            publicKey: 'JpiV9-iHDqpG4HYdl',
          }
        );

        setSnackbar({
          open: true,
          message: 'Success! Check your email for pricing details.',
          severity: 'success',
        });
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleDialogClose();
      } catch (err) {
        setSnackbar({
          open: true,
          message: 'Something went wrong. Please try again.',
          severity: 'error',
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleDialogClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <Container
      id="price"
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
        onClick={handleDialogOpen}
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
        aria-label="Find out pricing information"
      >
        Find out the Price
      </Button>

      <Dialog open={open} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Find out the Price</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Please enter your email address to proceed. After submitting,
            you&apos;ll receive detailed pricing information directly to your
            inbox.
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
              disabled={isSubmitting}
            />
            <DialogActions sx={{ mt: 2, px: 0 }}>
              <Button
                onClick={handleDialogClose}
                color="secondary"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
