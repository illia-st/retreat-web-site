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

interface Swiss2025Iterface extends AppInterface {}

/*

This text is for preview

Yoga-Retreat: Frühlingserwachen
Feiere mit Viktoria M. & Viktoria V. die Frühlings-Tagundnachtgleiche! Erwecke deinen Körper und Geist mit taglich Hatha-Yoga, Meditation und Yoga Nidra.
Lade neue Energie auf und begrüße die Saison der Erneuerung! 🌸 
**Retreat-Sprache:** Englisch mit der Möglichkeit, ins Deutsche und Ukrainische zu übersetzen.  


Spring Awakening Yoga Retreat
Join Viktoria M. & Viktoria V. to celebrate the Spring Equinox! Rejuvenate your mind and body with daily Hatha yoga, meditation, and Yoga Nidra.
Embrace new energy and welcome the season of renewal! 🌸 
**Retreat language:** English with the possibility of translation into German and Ukrainian.

double language component (en and ger)
*/

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
  return (
    <>
      {/* <GreetingPage /> */}
      {/* <Divider /> */}
      {/* <BasicInfo /> */}
      {/* <Divider /> */}
      {/* <AboutUs /> */}
      {/* <Divider /> */}
      {/* <TogetherSection /> */}
      {/* <Divider /> */}
      {/* Something about retreat component */}
      {/* Need to think of something general which can be used for any reatreat */}
      {/* Just give there a config, like json object and here we go */}

      {/* This one is good is any case but need to make is general */}
      {/* I guess we can Living Section with PriceSection */}
      <LivingSection
        // eslint-disable-next-line no-restricted-globals
        description={location}
        photoes={photoes}
        accomodationUnits={accomodationUnits}
        accommodationDesc={descriptionForDesc}
      />
      {/* <ScheduleSection /> should be reworked */}
      {/* <ActivitiesSection /> no need */}
      <Divider />
      <TransportInfo data={arrivalData} />
      <Divider />
      <Included includedItems={[]} notIncludedItems={[]} />
      <Divider />
      <FAQ items={[]} />
      <Register />
      <Divider />
      <SocialSection />
    </>
  );
}
