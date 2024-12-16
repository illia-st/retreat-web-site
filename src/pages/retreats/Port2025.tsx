import { useEffect } from 'react';
import AppInterface from '../../interfaces/AppInterface';

interface Port2025Iterface extends AppInterface {}
export default function Port2025Retreat({
  setAppBarItemsCallback,
}: Port2025Iterface) {
  useEffect(() => {
    // Update AppBar items only once on component mount
    setAppBarItemsCallback([
      { id: 'greeting', label: 'Greeting' },
      { id: 'retreats', label: 'Available Retreats' },
    ]);
  }, [setAppBarItemsCallback]); // Depend only on callback
  return <h1>Port</h1>;
}
