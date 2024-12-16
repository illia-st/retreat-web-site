import { useEffect } from 'react';
import AppInterface from '../../interfaces/AppInterface';

interface Swiss2025Iterface extends AppInterface {}

export default function Swiss2025Retreat({
  setAppBarItemsCallback,
}: Swiss2025Iterface) {
  useEffect(() => {
    // Update AppBar items only once on component mount
    setAppBarItemsCallback([
      { id: 'greeting', label: 'Greeting' },
      { id: 'retreats', label: 'Available Retreats' },
    ]);
  }, [setAppBarItemsCallback]); // Depend only on callback
  return <h1>Swiss</h1>;
}
