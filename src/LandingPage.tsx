import Divider from '@mui/material/Divider';
import GreetingPage from './components/GreetingPage';
import PriceSection from './components/PriceSection';
import FAQ from './components/FAQ';
import BasicInfo from './components/BasicInfo';
import AboutUs from './components/AboutUs';
import TogetherSection from './components/TogetherSection';
import LivingSection from './components/LivingSection';
import ScheduleSection from './components/ScheduleSection';
import ActivitiesSection from './components/ActivitiesSection';
import Included from './components/Included';
import Register from './components/Register';
import SocialSection from './components/SocialsSection';

export default function LandingPage() {
  return (
    <>
      <GreetingPage />
      <Divider />
      <BasicInfo />
      <Divider />
      <AboutUs />
      <Divider />
      <TogetherSection />
      <Divider />
      <LivingSection />
      <Divider />
      <ScheduleSection />
      <Divider />
      <ActivitiesSection />
      <Divider />
      <PriceSection />
      <Divider />
      <Included />
      <Divider />
      <Register />
      <Divider />
      <Divider />
      <FAQ />
      <Divider />
      <SocialSection />
    </>
  );
}
