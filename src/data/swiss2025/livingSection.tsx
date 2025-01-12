import LooksOneIcon from '@mui/icons-material/LooksOne';
import Looks3Icon from '@mui/icons-material/Looks3';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Slide } from '../../components/caruosels/Simple';
import { AccomodationUnit } from '../../components/Accommodation';

export const location = `Hotel Ucliva is the first eco-hotel in Switzerland and located in the beautiful mountain village of Waltensburg in Surselva, Graubünden, with stunning views of the surrounding mountains.

The cozy double rooms, which can also be booked for single use, and triple rooms offer views of the mountains or the valley.  The Ucliva restaurant serves delicious regional dishes made with fresh, mostly organic ingredients.

Between yoga sessions, you’ll have plenty of time to enjoy the peaceful atmosphere and breathtaking mountain scenery.

Relax by the fireplace in the lounge with a good book or unwind in the Thermium sauna. Hotel Ucliva is the perfect place to recharge and find peace away from the busy world.`;

export const photoes: Slide[] = [
  {
    image: '/swiss2025/aussen-1-scaled.jpg',
    maxHeight: 500,
    maxWidth: 800,
  },
  {
    image: '/swiss2025/caption.jpg',
    maxHeight: 500,
    maxWidth: 800,
  },
  {
    image: '/swiss2025/entspannungsraum-genutzt.jpg',
    maxHeight: 500,
    maxWidth: 800,
  },
  {
    image: '/swiss2025/hotel-summer-garden.jpg',
    maxHeight: 500,
    maxWidth: 800,
  },
  {
    image: '/swiss2025/aussen-2.jpg',
    maxHeight: 500,
    maxWidth: 1000,
  },
  {
    image: '/swiss2025/bread.jpg',
    maxHeight: 500,
    maxWidth: 800,
  },
  {
    image: '/swiss2025/cheese.jpg',
    maxHeight: 500,
    maxWidth: 800,
  },
  {
    image: '/swiss2025/flowers.jpg',
    maxHeight: 500,
    maxWidth: 800,
  },
];

export const accomodationUnits: AccomodationUnit[] = [
  {
    icon: <LooksOneIcon />,
    title: 'Single occupation in the double room',
    titleWithPrice: null,
    price: null,
    image: '/swiss2025/hotel-ucliva-9034-1717951233-original.jpg',
  },
  {
    icon: <LooksTwoIcon />,
    title: 'Double room',
    titleWithPrice: null,
    price: null,
    image: '/swiss2025/big-room-right-bed.jpg',
  },
  {
    icon: <Looks3Icon />,
    title: 'Triple room',
    titleWithPrice: null,
    price: null,
    image: '/swiss2025/4-place-room.jpg',
  },
];

export const descriptionForDesc: string = `
All the rooms are equipped with a double bed (2 single mattresses) as well as a shower/toilet, hairdryer and safe in the room. There is space to relax, a small desk for writing, a wide and very comfortable armchair for reading in peace and the balcony with a view of the mountains.
<br>
The triple rooms have a double sofa bed, shower/WC, hairdryer, safe and all have a large armchair that turns into a large and comfortable bed at night. During the day the bed turns into a wonderful armchair, almost wide enough for two. 
<br>
Please note that the check in is from 14:00. Check out - 10:00 with a possibility to leave the baggage in the storage room.
`;
export default { location, photoes, accomodationUnits, descriptionForDesc };
