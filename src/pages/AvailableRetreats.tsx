import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Dummy data for retreats
const retreats = [
  {
    title: 'Waltensburg/Vuorz, Graubünden, Switzerland',
    date: '21-23 March 2025',
    image: '/swiss2025/promo.JPG', // Replace with actual image URL
    link: '/swiss-2025',
  },
  {
    title: 'Portugal Late Spring 2025',
    date: 'Spring 2025',
    image: '/portugal-4442631_1280.jpg', // Replace with actual image URL
    link: '/port-2025',
  },
  {
    title: 'Tenerife, Canary Islands, Spain',
    date: 'Late Autumn 2025',
    image: '/places/puerto-de-la-cruz-15.jpeg', // Replace with actual image URL
    link: '/tenerife-2025',
  },
];

export default function AvailableRetreats() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State to track loading status

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCardClick = (link: string) => {
    setLoading(true); // Show loading mask
    setTimeout(() => {
      navigate(link);
      setLoading(false); // Hide loading mask after navigation
    }, 500); // Optional delay to simulate loading
  };

  return (
    <Box id="retreats" sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Next Retreats in 2025
      </Typography>

      {/* Loading Mask */}
      <Backdrop open={loading} sx={{ color: '#fff', zIndex: 9999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container spacing={4} justifyContent="center">
        {retreats.map((retreat, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 700,
                mx: 'auto',
                boxShadow: 3,
                ml: index === 0 || isXs ? 5 : 'auto',
                mr: index === retreats.length - 1 || isXs ? 5 : 'auto',
                cursor: 'pointer',
              }}
              onClick={() => handleCardClick(retreat.link)} // Navigate with loading
            >
              <CardMedia
                component="img"
                height="400"
                width="700"
                image={retreat.image}
                alt={retreat.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" color="text.primary">
                  {retreat.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {retreat.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
