import { useEffect } from 'react';
import { Divider } from '@mui/material';
import AppInterface from '../../interfaces/AppInterface';

import FAQ from '../../components/FAQ';
import Included from '../../components/Included';
import LivingSection from '../../components/LivingSection';
import Register from '../../components/Register';
import SocialSection from '../../components/SocialsSection';
import TransportInfo from '../../components/Arrival';
import arrivalData from '../../data/swiss2025/arrivalData';
import {
  photoes,
  location,
  accomodationUnits,
  descriptionForDesc,
} from '../../data/swiss2025/livingSection';
import Price from '../../components/Price';
import included from '../../data/swiss2025/includedItems';
import notIncluded from '../../data/swiss2025/notIncludedItems';
import faqItems from '../../data/swiss2025/faq';
import RetreatHero from '../../components/RetreatHero';
import '../../css/retreatHeader.css';
import SwissPromo from '../../components/Promo';
import ScheduleSection from '../../components/ScheduleSection';

interface SwissInterface extends AppInterface {}

export default function SwissRetreat({
  setAppBarItemsCallback,
}: SwissInterface) {
  useEffect(() => {
    // Update AppBar items only once on component mount
    setAppBarItemsCallback([
      { id: 'greeting', label: 'Greeting' },
      { id: 'price', label: 'Price' },
      { id: 'live', label: 'Where will we live?' },
      { id: 'get_there', label: 'How to get there?' },
      { id: 'included', label: 'Included in the price' },
      { id: 'faq_section', label: 'What to take?' },
      { id: 'register', label: 'Register' },
      { id: 'socials', label: 'Social Networks' },
    ]);
  }, [setAppBarItemsCallback]); // Depend only on callback
  return (
    <>
      <RetreatHero
        mainPhoto="/swiss2025/main-hotel.jpg"
        title="Spring Awakening Yoga Retreat 2.0"
        subtitle="Embracing the Spring Equinox, a transformative point of renewal, balance, and intention."
        location="Waltensburg/Vuorz, Graubünden, Switzerland"
        date="20-22 March 2026"
      />
      <Divider />
      <Price />
      <Divider />
      <SwissPromo />
      <Divider />
      <ScheduleSection />
      <Divider />
      <LivingSection
        description={location}
        photoes={photoes}
        accomodationUnits={accomodationUnits}
        accommodationDesc={descriptionForDesc}
      />
      <Divider />
      <TransportInfo data={arrivalData} />
      <Divider />
      <Included includedItems={included} notIncludedItems={notIncluded} />
      <Divider />
      <FAQ title={faqItems.title} items={faqItems.items} />
      <Divider />
      <Register />
      <Divider />
      <SocialSection />
    </>
  );
}
