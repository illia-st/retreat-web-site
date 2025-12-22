import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Single retreat data
const retreat = {
  title: 'Waltensburg/Vuorz, Graubünden, Switzerland',
  subtitle:
    'Embracing the Spring Equinox, a transformative point of renewal, balance, and intention.',
  date: '20-22 March 2026',
  image: '/swiss2025/promo.JPG',
  link: '/swiss',
};

export default function AvailableRetreats() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCardClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(retreat.link);
      scrollToTop();
      setLoading(false);
    }, 500);
  };

  return (
    <Box id="retreats" sx={{ my: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Spring Awakening Yoga Retreat. 2.0
      </Typography>

      {/* Loading Mask */}
      <Backdrop open={loading} sx={{ color: '#fff', zIndex: 9999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Card
          sx={{
            maxWidth: 800,
            width: '100%',
            mx: 3,
            boxShadow: 4,
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: 6,
            },
          }}
          onClick={handleCardClick}
        >
          <CardMedia
            component="img"
            height="500"
            image={retreat.image}
            alt={retreat.title}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              component="div"
              color="text.primary"
              gutterBottom
            >
              {retreat.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontStyle: 'italic', mb: 2 }}
            >
              {retreat.subtitle}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {retreat.date}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
