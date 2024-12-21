import { useEffect } from 'react';
import { Divider, Typography } from '@mui/material';
import AppInterface from '../../interfaces/AppInterface';
import RetreatHero from '../../components/RetreatHero';

interface Tenerife2025Iterface extends AppInterface {}

export default function Tenerife2025Retreat({
  setAppBarItemsCallback,
}: Tenerife2025Iterface) {
  useEffect(() => {
    // Update AppBar items only once on component mount
    setAppBarItemsCallback([{ id: 'greeting', label: 'Greeting' }]);
  }, [setAppBarItemsCallback]); // Depend only on callback
  return (
    <>
      <RetreatHero
        mainPhoto="/places/puerto-de-la-cruz-15.jpeg"
        retreatName="Tenerife, Canary Islands, Spain"
      />
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
