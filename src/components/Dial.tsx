import React, { useState } from 'react';
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { orange } from '@mui/material/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const validationSchema = Yup.object({
  email: Yup.string().email('Wrong email format').required('required field'),
});
function CustomSpeedDial() {
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
            // eslint-disable-next-line no-console
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log('FAILED...', err);
          }
        );
    },
  });

  const actions = [
    {
      icon: <BookmarkIcon />,
      name: 'Book',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeD-Fsxd0nlrXnXsfrAeiyv0plxSZfwBdiUhJOMQlMuaOw2Xg/viewform?usp=sf_link',
    },
    {
      icon: <QuestionAnswerIcon />,
      name: 'Ask a question',
      onClick: () => {
        handleDialogOpen();
      },
    },
  ];
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<ChatIcon />} />}
        FabProps={{
          sx: {
            bgcolor: orange[300], // Custom background color
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={
              <a
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {action.icon}
              </a>
            }
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Write to us!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address to proceed. We will reach you as
            soon as possible
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
    </>
  );
}

export default CustomSpeedDial;
