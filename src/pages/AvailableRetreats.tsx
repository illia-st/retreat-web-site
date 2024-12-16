import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
  Grid,
  useMediaQuery,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

// Dummy data for retreats
const retreats = [
  {
    title: 'Waltensburg/Vuorz, Graubünden, Switzerland',
    date: '21-23 March 2025',
    image: '/swiss2025/aussen-2.jpg', // Replace with actual image URL
    link: '/#/diplomas',
  },
  {
    title: 'Portugal Late Spring 2025',
    date: 'Spring 2025',
    image: '/swiss2025/winter-hotel-with-sky.jpg', // Replace with actual image URL
    link: '/#/diplomas',
  },
  {
    title: 'Tenerife, Canary Islands, Spain',
    date: 'Late Autumn 2025',
    image: 'public/swiss2025/hotel-summer-garden.jpg', // Replace with actual image URL
    link: '/#/diplomas',
  },
];

export default function AvailableRetreats() {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Next Retreats in 2025
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {retreats.map((retreat, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} md={4} key={index}>
            <Link
              href={retreat.link}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <Card
                sx={{
                  maxWidth: 700,
                  mx: 'auto',
                  boxShadow: 3,
                  ml: index === 0 || isXs ? 5 : 'auto',
                  mr: index === retreats.length - 1 || isXs ? 5 : 'auto',
                }}
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
