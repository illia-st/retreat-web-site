import { useEffect } from 'react';
import { Divider, Typography } from '@mui/material';
import AppInterface from '../../interfaces/AppInterface';
// import RetreatHero from '../../components/RetreatHero';

interface Port2025Iterface extends AppInterface {}

export default function Port2025Retreat({
  setAppBarItemsCallback,
}: Port2025Iterface) {
  useEffect(() => {
    // Update AppBar items only once on component mount
    setAppBarItemsCallback([{ id: 'greeting', label: 'Greeting' }]);
  }, [setAppBarItemsCallback]); // Depend only on callback
  return (
    <>
      {/* <RetreatHero
        mainPhoto="/portugal-4442631_1280.jpg"
        retreatName="Portugal Late Spring 2025"
      /> */}
      <Divider />
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'primary.main',
          textTransform: 'uppercase',
          mt: 4,
          mb: 20,
        }}
      >
        Work in Progress
      </Typography>
    </>
  );
}
