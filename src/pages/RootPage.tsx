import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import GreetingPage from '../components/GreetingPage';
import BasicInfo from '../components/BasicInfo';
import AboutUs from '../components/AboutUs';
import TogetherSection from '../components/TogetherSection';
import SocialSection from '../components/SocialsSection';
import AvailableRetreats from './AvailableRetreats';
import AppInterface from '../interfaces/AppInterface';
import ReviewComponent from '../components/Reviews';
import Video from '../components/Video';
import Memories from '../components/Memories';

interface RootPageIterface extends AppInterface {}

export default function RootPage({ setAppBarItemsCallback }: RootPageIterface) {
  useEffect(() => {
    setAppBarItemsCallback([
      { id: 'greeting', label: 'Greeting' },
      { id: 'retreats', label: 'Available Retreats' },
      { id: 'basic-info', label: 'Basic Info' },
      { id: 'about-us', label: 'About Us' },
      { id: 'socials', label: 'Social Networks' },
    ]);
  }, [setAppBarItemsCallback]);
  return (
    <>
      <GreetingPage />
      <Divider />
      {/* <Video /> */}
      <Memories />
      <Divider />
      <AvailableRetreats />
      <Divider />
      <BasicInfo />
      <Divider />
      <AboutUs />
      <Divider />
      <TogetherSection />
      <Divider />
      <SocialSection />
    </>
  );
}
