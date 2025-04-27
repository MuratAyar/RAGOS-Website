import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import DevicesSection from '../components/DevicesSection';
import SocialProofSection from '../components/SocialProofSection';
import StatsSection from '../components/StatsSection';
import SubscriptionSection from '../components/SubscriptionSection';
import AboutSection from '../components/AboutSection';
import StepsSection from '../components/StepsSection';
import CallToActionSection from '../components/CallToActionSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <StepsSection />
      <DevicesSection />
      <SubscriptionSection />
      <FeaturesSection />
      <SocialProofSection />
      
      {/* Diğer bölümler buraya eklenecek */}
    </div>
  );
};

export default Home;